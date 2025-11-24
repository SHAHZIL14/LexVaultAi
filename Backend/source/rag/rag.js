import { retrieveRelevantDocs } from "./retriever.js";
import {askLocalLLM} from "../LLM/llm.js";

export async function generateAnswer(question) {
  const relevant = retrieveRelevantDocs(question);

  const context = relevant
    .map((r, i) => `Document ${i + 1}:\n${r.doc.content}\n`)
    .join("\n\n");

  const prompt = `You are a legal assistant. Use ONLY the context below to answer the user's question.

CONTEXT:
${context}

QUESTION:
${question}

Please provide a concise, structured answer and cite the relevant context.`.trim();

  try {
    const llmResponse = await askLocalLLM(prompt, "llama3.1");
    return {
      answer: llmResponse,
      retrievedDocs: relevant
    };
  } catch (err) {
    const mockAnswer = `Based on the documents retrieved:\n\n${context}\n\n⚠️ Note: Local LLM failed to generate an answer.`;
    return {
      answer: mockAnswer,
      retrievedDocs: relevant
    };
  }
}
