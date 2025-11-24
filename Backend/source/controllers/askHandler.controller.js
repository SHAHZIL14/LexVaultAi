import { generateAnswer } from "../rag/rag.js";

export async function askLlama(request, response) {
  try {

    const { question } = request.body;
    const replyFromLlama = await generateAnswer(question);
    return response.status(200).json({
      res: replyFromLlama,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      error,
    });
  }
}
