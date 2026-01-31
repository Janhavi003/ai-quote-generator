import { generateAiQuote } from "./generateAiQuote"
import { getDailyQuote } from "./getDailyQuote"

let cachedDate: string | null = null
let cachedQuote: string | null = null

export async function getDailyAiQuote(): Promise<string> {
  const today = new Date().toDateString()

  if (cachedDate === today && cachedQuote) {
    return cachedQuote
  }

  try {
    const aiQuote = await generateAiQuote()
    cachedDate = today
    cachedQuote = aiQuote
    return aiQuote
  } catch {
    return getDailyQuote()
  }
}
