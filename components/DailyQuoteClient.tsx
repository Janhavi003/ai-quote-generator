"use client"

import { useEffect, useRef, useState } from "react"
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

  // Theme state (simple + reliable)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light"
    return localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  })

  const cardRef = useRef<HTMLDivElement>(null)

  // Apply theme to BODY (single source of truth)
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

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
      backgroundColor: theme === "dark" ? "#020617" : "#ffffff",
      style: { borderRadius: "28px" },
    })

    const link = document.createElement("a")
    link.download = "daily-ai-quote.png"
    link.href = dataUrl
    link.click()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] text-gray-900 dark:text-gray-100 flex items-center justify-center px-4">
      <section className="max-w-2xl w-full flex flex-col items-center">
        {/* Theme toggle */}
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-sm border rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Daily AI Quote
          </h1>
          <p className="mt-2 text-sm text-gray-500 uppercase">
            {today}
          </p>
        </header>

        {/* Card (NO background wrapper) */}
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
            className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Shuffle
          </button>

          {isExploring && (
            <button
              onClick={backToToday}
              className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Back to Today
            </button>
          )}

          <button
            onClick={downloadQuote}
            className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download
          </button>
        </div>
      </section>
    </main>
  )
}
