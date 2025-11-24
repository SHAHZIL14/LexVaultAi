const ollama = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3.1",
    prompt: "Hello from Node.js",
    stream: false,
  }),
});

const res = await ollama.json();
console.log(res);
