import { getDailyAiQuote } from "@/lib/getDailyAiQuote"
import DailyQuoteClient from "@/components/DailyQuoteClient"

export default async function Home() {
  const today = new Date().toISOString().slice(0, 10)
  const dailyQuote = await getDailyAiQuote()

  return (
    <DailyQuoteClient
      today={today}
      dailyQuote={dailyQuote}
    />
  )
}
