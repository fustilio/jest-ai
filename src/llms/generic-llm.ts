import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatOpenAI } from "@langchain/openai";

import { DEFAULT_LLM_CONFIG } from "./config";

export type ChatLLMType = ChatGoogleGenerativeAI | ChatOpenAI;

export function getLLMConstructorAndConfig(config: {
  llm: "openai" | "gemini";
}) {
  if (config.llm === "openai") {
    return { ChatLLM: ChatOpenAI, defaultConfig: DEFAULT_LLM_CONFIG.openai };
  } else {
    return {
      ChatLLM: ChatGoogleGenerativeAI,
      defaultConfig: DEFAULT_LLM_CONFIG.gemini,
    };
  }
}
