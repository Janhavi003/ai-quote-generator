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
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
      <section className="max-w-2xl w-full flex flex-col items-center">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Daily AI Quote
          </h1>
          <p className="mt-2 text-sm text-gray-500 uppercase">
            {today}
          </p>
        </header>

        {/* Quote card */}
        <div ref={cardRef} className="p-6 rounded-[28px]">
          <QuoteCard
            quote={quote}
            label={isExploring ? "EXPLORING" : "DAILY REFLECTION"}
          />
        </div>

        {/* Controls */}
        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={shuffleQuote}
            className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
          >
            Shuffle
          </button>

          {isExploring && (
            <button
              onClick={backToToday}
              className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
            >
              Back to Today
            </button>
          )}

          <button
            onClick={downloadQuote}
            className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
          >
            Download
          </button>
        </div>
      </section>
    </main>
  )
}
