import Link from "next/link"
import { getDailyAiQuote } from "@/lib/getDailyAiQuote"
import DailyQuoteClient from "@/components/DailyQuoteClient"

export default async function TodayPage() {
  const today = new Date().toISOString().slice(0, 10)
  const dailyQuote = await getDailyAiQuote()

  return (
    <>
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-900 transition"
        >
          ← Back
        </Link>
      </div>

      <DailyQuoteClient
        today={today}
        dailyQuote={dailyQuote}
      />
    </>
  )
}
