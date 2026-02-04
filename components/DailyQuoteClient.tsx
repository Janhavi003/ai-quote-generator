"use client"

import { useRef, useState } from "react"
import * as htmlToImage from "html-to-image"
import QuoteCard from "./QuoteCard"
import { QUOTES } from "@/lib/quotes"

type Props = {
  today: string
  dailyQuote: string
}

export default function DailyQuoteClient({
  today,
  dailyQuote,
}: Props) {
  const [quote, setQuote] = useState(dailyQuote)
  const [isExploring, setIsExploring] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  function shuffleQuote() {
    const random =
      QUOTES[Math.floor(Math.random() * QUOTES.length)]
    setQuote(random)
    setIsExploring(true)
  }

  function backToToday() {
    setQuote(dailyQuote)
    setIsExploring(false)
  }

  async function downloadQuote() {
    if (!cardRef.current) return

    const dataUrl = await htmlToImage.toPng(cardRef.current, {
      pixelRatio: 2,
      backgroundColor: "#ffffff",
    })

    const link = document.createElement("a")
    link.download = "daily-ai-quote.png"
    link.href = dataUrl
    link.click()
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <section className="max-w-2xl w-full flex flex-col items-center">
        <header className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Daily AI Quote
          </h1>
          <p className="mt-3 text-xs tracking-widest text-gray-400">
            {today}
          </p>
        </header>

        <div ref={cardRef}>
          <QuoteCard
            quote={quote}
            label={isExploring ? "EXPLORING" : "DAILY REFLECTION"}
          />
        </div>

        <div className="mt-10 flex gap-3 flex-wrap justify-center">
          <button
            onClick={shuffleQuote}
            className="px-5 py-2.5 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition"
          >
            Shuffle
          </button>

          {isExploring && (
            <button
              onClick={backToToday}
              className="px-5 py-2.5 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition"
            >
              Back to Today
            </button>
          )}

          <button
            onClick={downloadQuote}
            className="px-5 py-2.5 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition"
          >
            Download
          </button>
        </div>
      </section>
    </main>
  )
}
