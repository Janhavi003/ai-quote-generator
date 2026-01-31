import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateAiQuote(): Promise<string> {
  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input:
      "Write a short, thoughtful daily reflection about intelligence, technology, and meaning. One sentence.",
  })

  return (
    response.output_text ??
    "Intelligence grows when speed is balanced with reflection."
  )
}
