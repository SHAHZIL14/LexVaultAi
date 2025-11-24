import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { askLlama } from "./source/controllers/askHandler.controller.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Routes
app.get("/", (req, res) => {
  res.send("Lex Vault is active");
});

app.post("/ask", askLlama);

// Activation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LexVault is listening on port: ${PORT}`);
});
