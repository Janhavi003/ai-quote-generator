"use client"

import { useRef, useState } from "react"
import * as htmlToImage from "html-to-image"
import QuoteCard from "@/components/QuoteCard"
import { QUOTES } from "@/lib/quotes"
import { getDailyQuote } from "@/lib/getDailyQuote"

export default function Home() {
  const today = new Date().toDateString().toUpperCase()
  const dailyQuote = getDailyQuote()

  const [quote, setQuote] = useState(dailyQuote)
  const [label, setLabel] = useState("DAILY REFLECTION")

  // IMPORTANT: ref is on the WRAPPER, not the card
  const cardRef = useRef<HTMLDivElement>(null)

  function shuffleQuote() {
    const random =
      QUOTES[Math.floor(Math.random() * QUOTES.length)]
    setQuote(random)
    setLabel("EXPLORING")
  }

  function resetToDaily() {
    setQuote(dailyQuote)
    setLabel("DAILY REFLECTION")
  }

  async function shareQuote() {
    if (!cardRef.current) return

    const dataUrl = await htmlToImage.toPng(cardRef.current, {
      pixelRatio: 2,
      backgroundColor: "#F5F5F4",
      style: {
        borderRadius: "28px",
      },
    })

    const link = document.createElement("a")
    link.download = "daily-ai-quote.png"
    link.href = dataUrl
    link.click()
  }

  return (
    <main className="min-h-screen bg-[#F5F5F4] flex items-center justify-center px-4">
      <section className="max-w-2xl w-full flex flex-col items-center">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Daily AI Quote
          </h1>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
            {today}
          </p>
        </header>

        {/* EXPORT WRAPPER (critical for image borders) */}
        <div
          ref={cardRef}
          className="bg-[#F5F5F4] p-6 rounded-[28px]"
        >
          <QuoteCard quote={quote} label={label} />
        </div>

        {/* Controls */}
        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={shuffleQuote}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition"
          >
            Shuffle
          </button>

          {label === "EXPLORING" && (
            <button
              onClick={resetToDaily}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition"
            >
              Back to Today
            </button>
          )}

          <button
            onClick={shareQuote}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition"
          >
            Share
          </button>
        </div>
      </section>
    </main>
  )
}
