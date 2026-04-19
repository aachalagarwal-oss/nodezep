// src/inngest/functions.ts
import { inngest } from "./client";
import prisma from "@/lib/db";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI();
export const execute = inngest.createFunction(
  {
    id: "execute-ai",
    triggers: { event: "app/execute/ai" },
  },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s");

    const { steps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini 2.5 flash"),
      system: "You are a helpful assistant",
      prompt: "What is",
    });
    return steps;
  },
);
