import { NextResponse } from "next/server";
import { openRouterConfig, hasOpenRouterConfig } from "@/lib/openrouter";
import {
  buildResumeChatSystemPrompt,
  hasResumeContext,
} from "@/lib/resume-chat-prompt";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type OpenRouterMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

function getOpenRouterErrorMessage(value: unknown) {
  if (
    typeof value === "object" &&
    value !== null &&
    "error" in value &&
    typeof value.error === "object" &&
    value.error !== null &&
    "message" in value.error &&
    typeof value.error.message === "string"
  ) {
    return value.error.message;
  }

  return null;
}

function getOpenRouterReply(value: unknown) {
  if (
    typeof value === "object" &&
    value !== null &&
    "choices" in value &&
    Array.isArray(value.choices)
  ) {
    const firstChoice = value.choices[0];

    if (
      typeof firstChoice === "object" &&
      firstChoice !== null &&
      "message" in firstChoice &&
      typeof firstChoice.message === "object" &&
      firstChoice.message !== null &&
      "content" in firstChoice.message &&
      typeof firstChoice.message.content === "string"
    ) {
      return firstChoice.message.content;
    }
  }

  return null;
}

function normalizeAssistantReply(value: string) {
  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function sanitizeMessages(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is ChatMessage => {
      return (
        typeof item === "object" &&
        item !== null &&
        "role" in item &&
        "content" in item &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string"
      );
    })
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 4000),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-8);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const messages = sanitizeMessages(body?.messages);

  if (messages.length === 0) {
    return NextResponse.json(
      { error: "Please send at least one message." },
      { status: 400 }
    );
  }

  if (!hasResumeContext()) {
    return NextResponse.json({
      reply:
        "Resume context is not configured yet. Replace the placeholder in lib/resume-chat-prompt.ts with your resume text first.",
    });
  }

  if (!hasOpenRouterConfig()) {
    return NextResponse.json(
      {
        error:
          "OpenRouter is not configured. Set OPENROUTER_API_KEY and OPENROUTER_MODEL.",
      },
      { status: 500 }
    );
  }

  const openRouterMessages: OpenRouterMessage[] = [
    {
      role: "system",
      content: buildResumeChatSystemPrompt(),
    },
    ...messages,
  ];

  let response: Response;
  let data: unknown = null;

  try {
    response = await fetch(openRouterConfig.apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openRouterConfig.apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": openRouterConfig.siteUrl,
        "X-Title": openRouterConfig.siteTitle,
      },
      body: JSON.stringify({
        model: openRouterConfig.model,
        messages: openRouterMessages,
        temperature: 0.4,
      }),
      cache: "no-store",
    });

    data = await response.json().catch(() => null);
  } catch {
    return NextResponse.json(
      {
        error:
          "The resume assistant is temporarily unavailable. Please try again in a moment.",
      },
      { status: 502 }
    );
  }

  if (!response.ok) {
    const message =
      getOpenRouterErrorMessage(data) ??
      "Failed to get a response from OpenRouter.";

    return NextResponse.json({ error: message }, { status: response.status });
  }

  const reply = getOpenRouterReply(data);

  if (typeof reply !== "string" || reply.trim().length === 0) {
    return NextResponse.json(
      { error: "OpenRouter returned an empty response." },
      { status: 502 }
    );
  }

  return NextResponse.json({ reply: normalizeAssistantReply(reply) });
}
