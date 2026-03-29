"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function ChatLauncherIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="resume-chat-toggle-icon"
    >
      <path
        d="M12 3C7.03 3 3 6.58 3 11c0 2.2 1 4.19 2.64 5.63V21l4.04-2.21c.74.14 1.51.21 2.32.21 4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M12 4.25c-4.23 0-7.75 2.97-7.75 6.75 0 1.93.94 3.73 2.58 4.99l.42.32v2.56l2.52-1.38.39.08c.66.14 1.34.2 2.09.2 4.23 0 7.75-2.97 7.75-6.75S16.23 4.25 12 4.25Zm0-1.25c4.88 0 9 3.58 9 8s-4.12 8-9 8c-.81 0-1.58-.07-2.32-.21L5.64 21v-4.37C4 15.19 3 13.2 3 11c0-4.42 4.03-8 9-8Z"
        fill="currentColor"
      />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
      <path
        d="m17.9 5.1.27.86.86.27-.86.27-.27.86-.27-.86-.86-.27.86-.27.27-.86Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="resume-chat-close-icon">
      <path
        d="M7.05 7.05 16.95 16.95M16.95 7.05 7.05 16.95"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const INITIAL_MESSAGE =
  "Ask about experience, projects, education, or skills.";

export default function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const conversation = useMemo(
    () => messages.filter((message) => message.content !== INITIAL_MESSAGE),
    [messages]
  );

  useEffect(() => {
    const element = logRef.current;
    if (!element || !isOpen) {
      return;
    }

    element.scrollTop = element.scrollHeight;
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    function onWindowKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onWindowKeyDown);
    return () => window.removeEventListener("keydown", onWindowKeyDown);
  }, []);

  async function handleSubmit(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const trimmed = input.trim();

    if (!trimmed || isLoading) {
      return;
    }

    const nextMessages = [...conversation, { role: "user" as const, content: trimmed }];
    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/resume-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong while getting a response."
        );
      }

      const reply =
        typeof data?.reply === "string"
          ? data.reply
          : "I could not find a grounded answer in the resume context.";

      setMessages((current) => [
        ...current,
        { role: "assistant", content: reply },
      ]);
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while getting a response.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  }

  return (
    <div className="resume-chat-shell">
      {isOpen && (
        <section
          id="resume-chat-panel"
          className="resume-chat"
          aria-label="Resume chat assistant"
        >
          <div className="resume-chat-header">
            <div>
              <p className="resume-chat-kicker">CuriBot</p>
              <h3 className="resume-chat-title">Ask about my experience</h3>
            </div>
            <button
              type="button"
              className="resume-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              title="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          <div ref={logRef} className="resume-chat-log">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`resume-chat-bubble resume-chat-bubble-${message.role}`}
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="resume-chat-bubble resume-chat-bubble-assistant">
                Thinking...
              </div>
            )}
          </div>

          <form
            ref={formRef}
            className="resume-chat-form"
            onSubmit={handleSubmit}
          >
            <label className="resume-chat-label" htmlFor="resume-chat-input">
              Ask a question
            </label>
            <textarea
              id="resume-chat-input"
              className="resume-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about projects, internships, skills, or education"
              rows={3}
            />

            <div className="resume-chat-actions">
              {error ? <p className="resume-chat-error">{error}</p> : <span />}
              <button
                type="submit"
                className="resume-chat-send"
                disabled={isLoading || input.trim().length === 0}
              >
                Send
              </button>
            </div>
          </form>
        </section>
      )}

      {!isOpen && (
        <button
          type="button"
          className="resume-chat-toggle"
          onClick={() => setIsOpen(true)}
          aria-expanded={false}
          aria-controls="resume-chat-panel"
          aria-label="Open resume chat"
          title="Open resume chat"
        >
          <ChatLauncherIcon />
        </button>
      )}
    </div>
  );
}
