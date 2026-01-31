import { QUOTES } from "./quotes"

export function getDailyQuote(): string {
  const today = new Date()
  const utcDay = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  )

  const dayIndex = Math.floor(utcDay / 86400000)
  return QUOTES[dayIndex % QUOTES.length]
}
