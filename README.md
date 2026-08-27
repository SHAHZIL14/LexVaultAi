# LexVault 📘

An offline, Retrieval-Augmented Generation (RAG) assistant for Indian law, built to answer legal questions using a local LLM and a custom legal corpus — no API costs, no cloud dependency.

## Overview

LexVault lets you ask natural-language questions about Indian law (IPC, CrPC, Evidence Act, etc.) and get answers grounded in retrieved legal text, generated entirely on your local machine via Ollama.

**Example queries:**
- "What is Section 302 IPC?"
- "Explain bail under CrPC 437."
- "What are the rights under Article 21?"

## How It Works

1. User submits a legal question through the React frontend
2. The Express backend retrieves the most relevant sections from the legal corpus using **TF-IDF vector search**
3. Retrieved context + the question are assembled into a RAG prompt
4. The prompt is sent to a **local LLM via Ollama** (Llama 3.1 by default)
5. The generated answer, along with the retrieved source sections, is returned to the frontend

```
Frontend (React) → POST /ask → Backend (Express)
                                    ↓
                          TF-IDF Retrieval (natural)
                                    ↓
                    RAG Prompt (context + question)
                                    ↓
                        Local LLM (Ollama / Llama 3.1)
                                    ↓
                    { answer, retrievedDocs } → Frontend
```

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express
- **Retrieval:** TF-IDF search via the `natural` NPM library
- **LLM:** Ollama (local inference — Llama 3.1, Mistral, Llama 2, or Phi-3)
- **Core modules:** `retriever.js` (TF-IDF search), `llm.js` (Ollama integration), `rag.js` (retrieval + generation orchestration)

## Requirements

- [Ollama](https://ollama.com/download) installed and running locally
- 8GB RAM, 4-core CPU, ~3GB free storage recommended
- An LLM pulled via Ollama:
  ```bash
  ollama pull llama3.1
  ```

## Getting Started

```bash
git clone https://github.com/SHAHZIL14/LexVaultAi.git
cd LexVaultAi
```

**Backend:**
```bash
cd Backend
npm install
npm start
```
Runs on `http://localhost:3000`

**Frontend:**
```bash
cd Frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`

**Verify Ollama is running:**
```bash
ollama run llama3.1
```

## Notes

- Ollama must be running locally for the backend to serve responses
- All inference runs on-device — no external API calls, no token costs
- For remote/public access, the backend would need to be exposed via a tunnel (e.g., Cloudflare Tunnel) since it's built for local use by default

## Roadmap

- [ ] Move corpus storage to MongoDB for structured querying and easier corpus updates
- [ ] Add authentication for multi-user deployments
- [ ] Expand legal corpus coverage beyond IPC/CrPC/Evidence Act
- [ ] Add source citation highlighting in the UI

## Author

**Mohd Shazil Raza**
[GitHub](https://github.com/SHAHZIL14) · [LinkedIn](https://linkedin.com/in/shazilr)
