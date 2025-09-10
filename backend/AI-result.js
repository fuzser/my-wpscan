import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(express.json()); // Parse JSON request body

// Initialize OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Example API route
app.post("/api/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Analyze the following text:\n${text}` },
      ],
      temperature: 0.3,
      //max_tokens: 500,
    });

    res.json({ 
      success: true,
      result: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});