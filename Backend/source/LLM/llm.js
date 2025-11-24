import fetch from "node-fetch"; 

export async function askLocalLLM(prompt, model = "llama3.1") {
  try {
    const res = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt,
        stream: false
      })
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Ollama API error ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data.response ?? (data?.[0]?.response) ?? JSON.stringify(data);
  } catch (err) {
    console.error("askLocalLLM error:", err);
    throw err;
  }
}
