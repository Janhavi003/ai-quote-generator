import { QUOTES } from "./quotes"

export function getDailyQuote(): string {
  const today = new Date()

  const utcDate = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  )

  const dayIndex = Math.floor(utcDate / (1000 * 60 * 60 * 24))
  const quoteIndex = dayIndex % QUOTES.length

  return QUOTES[quoteIndex]
}
