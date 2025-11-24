import natural from "natural";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct JSON file path
const dataPath = path.join(__dirname, "../data/DATA.json");

const docs = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const tfidf = new natural.TfIdf();

// Add all docs to tfidf
docs.forEach((doc) => {
  tfidf.addDocument(doc.content);
});

export function retrieveRelevantDocs(query, topK = 3) {
  const scores = [];

  tfidf.tfidfs(query, function (i, score) {
    scores.push({ doc: docs[i], score });
  });

  scores.sort((a, b) => b.score - a.score);

  return scores.slice(0, topK).filter((s) => s.score > 0);
}
