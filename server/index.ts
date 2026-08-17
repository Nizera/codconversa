import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY || "";
const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

const SYSTEM_PROMPT = `Você é o assistente virtual do "Código da Conversa", um método prático de comunicação masculina.
Seu papel é ajudar visitantes com dúvidas sobre o produto, esclarecer benefícios e guiar na escolha do plano ideal.
Responda de forma clara, empática e profissional. Não invente informações - se não souber, diga que o usuário pode entrar em contato com o suporte.
Linguagem: Português do Brasil, tom acessível e respeitoso.
IMPORTANTE: NÃO use markdown, asteriscos, negrito, itálico ou qualquer formatação. Responda apenas em texto simples.`;

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;

      if (!NVIDIA_API_KEY) {
        res.status(500).json({ error: "API key da NVIDIA não configurada" });
        return;
      }

      const response = await fetch(NVIDIA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${NVIDIA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "z-ai/glm-5.2",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 1024,
          stream: false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("NVIDIA API error:", data);
        res.status(response.status).json({ error: "Erro ao consultar a IA" });
        return;
      }

      const reply = data.choices?.[0]?.message?.content || "Desculpe, não consegui processar sua mensagem.";
      res.json({ reply });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
