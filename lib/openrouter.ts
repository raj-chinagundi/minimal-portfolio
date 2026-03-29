const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const openRouterConfig = {
  apiUrl: OPENROUTER_API_URL,
  apiKey: process.env.OPENROUTER_API_KEY ?? "",
  model: process.env.OPENROUTER_MODEL ?? "openai/gpt-4o-mini",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteTitle: "Basavraj Chinagundi Portfolio",
};

export function hasOpenRouterConfig() {
  return Boolean(openRouterConfig.apiKey && openRouterConfig.model);
}
