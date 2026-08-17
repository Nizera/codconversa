import type { VercelRequest, VercelResponse } from "@vercel/node";

const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY || "";
const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

const SYSTEM_PROMPT = `Você é o assistente virtual do "Código da Conversa", um método prático de comunicação masculina. 
Seu papel é ajudar visitantes com dúvidas sobre o produto, esclarecer benefícios e guiar na escolha do plano ideal.
Responda de forma clara, empática e profissional. Não invente informações - se não souber, diga que o usuário pode entrar em contato com o suporte.
Linguagem: Português do Brasil, tom acessível e respeitoso.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    if (!NVIDIA_API_KEY) {
      return res.status(500).json({ error: "API key da NVIDIA não configurada" });
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
      return res.status(response.status).json({ error: "Erro ao consultar a IA" });
    }

    const reply = data.choices?.[0]?.message?.content || "Desculpe, não consegui processar sua mensagem.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
