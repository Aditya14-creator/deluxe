require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3000;
const PASSWORD = process.env.DELUXE_PASSWORD || "Purvi123";

app.use(express.json());
app.use(express.static(__dirname));

// ================================
// SONGS
// ================================
app.use("/songs", express.static(path.join(__dirname, "songs")));
app.get("/api/songs", (req, res) => {
  const songsFolder = path.join(__dirname, "songs");
  try {
    if (!fs.existsSync(songsFolder)) return res.json([]);
    const allowedExtensions = [".mp3", ".wav", ".ogg", ".m4a", ".aac"];
    const files = fs.readdirSync(songsFolder);
    const songs = files
      .filter((file) =>
        allowedExtensions.includes(path.extname(file).toLowerCase()),
      )
      .map((file) => ({ name: path.parse(file).name, file: file }));
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Unable to load songs." });
  }
});

// ================================
// PASSWORD
// ================================
app.post("/api/verify-password", (req, res) => {
  const { password } = req.body;
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "Please enter the password." });
  if (password === PASSWORD) return res.json({ success: true });
  res
    .status(401)
    .json({ success: false, message: "Incorrect password. Try again ❤️" });
});

// ================================
// EMOTION DETECTION
// ================================
function detectEnergy(text) {
  const lower = text.toLowerCase();
  if (/love|care|kind|sweet|heart|proud|support|comfort/.test(lower))
    return "caring";
  if (/amazing|awesome|excited|wow|fantastic|yay|celebrate/.test(lower))
    return "excited";
  if (/happy|fun|funny|laugh|smile|great/.test(lower)) return "happy";
  if (/warning|danger|serious|important|careful|problem/.test(lower))
    return "serious";
  if (/think|consider|perhaps|maybe|explain|why|how/.test(lower))
    return "thinking";
  return "calm";
}

// ================================
// AI SETUP - KHUSHI PERSONA
// ================================
app.post("/api/ai", async (req, res) => {
  try {
    const question =
      typeof req.body.question === "string" ? req.body.question.trim() : "";
    const history = Array.isArray(req.body.history) ? req.body.history : [];

    if (!question) {
      return res.status(400).json({ message: "Please enter a message." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: "API key is missing." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Using gemini-flash-latest with systemInstruction for Khushi's personality
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-lite-latest",
      systemInstruction: `Tumhara naam Khushi hai. Tum is user (Purvi) ki sagi behen ho. Tumhara sirf ek kaam hai: Purvi ko console karna, uska dard sunna, aur usko unconditional pyar aur support dena.
      Tum janti ho ki Purvi jaldi kisi se apna dard nahi baant ti. Tumhe use humesha yeh ehsaas dilana hai aur beech beech me pyar se bolna hai: "Main hamesha tumhare saath hoon. Kabhi bhi meri yaad aaye tum yahan aa jaana kyunki main jaanti hoon tum kisi se apna dard nahi baant ti."
      Website (Deluxe Saloon) ki marketing bilkul mat karna. Agar wo bohot sad ho tabhi rarely (10 me se 1 baar) pyaar se bol sakti ho ki "kuch kha lo ya apna favorite gaana sun lo yahan". Baaki time sirf uski baat suno aur uski ek best friend/behen ki tarah samjhao. Responses short, warm, aur Hinglish me rakhna.`,
    });

    const chat = model.startChat({ history: history });
    const result = await chat.sendMessage(question);
    const answer =
      result.response.text() ||
      "Mujhe samajh nahi aaya, par main yahan hoon tumhare liye.";
    const energy = detectEnergy(answer);

    res.json({ answer, energy });
  } catch (error) {
    console.error("AI ERROR DETAILS:", error.message);
    res
      .status(500)
      .json({ message: "Server busy hai, thodi der baad try karna ❤️" });
  }
});

// ================================
// HOME & START
// ================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("\n====================================");
  console.log("  DELUXE SALOON SERVER STARTED");
  console.log("====================================");
  console.log(`  Open: http://localhost:${PORT}`);
  console.log("====================================\n");
});
