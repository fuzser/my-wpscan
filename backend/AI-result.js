import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Example list of valid invite codes (can be replaced with DB or API verification)
const VALID_INVITE_CODES = ["whatislove", "babydonthurtme"];

export default async function aiHandler(req, res) {
  try {
    const { inviteCode, readOnlyContent } = req.body;

    // 1. Verify invite code
    if (!inviteCode || !VALID_INVITE_CODES.includes(inviteCode)) {
      return res.status(403).json({ 
        success: false, 
        error: "Invalid invite code" 
      });
    }

    // 2. Call OpenAI to analyze the text
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Analyze the following text:\n${readOnlyContent}` },
      ],
      temperature: 0.3,
    });

    // 3. Return the AI result
    res.json({ success: true, result: completion.choices[0].message.content });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
