import QuoteCard from "@/components/QuoteCard"
import { getDailyQuote } from "@/lib/getDailyQuote"

export default function Home() {
  const today = new Date().toDateString().toUpperCase()
  const quote = getDailyQuote()

  return (
    <main className="min-h-screen bg-[#F5F5F4] flex items-center justify-center px-4">
      <section className="max-w-2xl w-full flex flex-col items-center">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Daily AI Quote
          </h1>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
            {today}
          </p>
        </header>

        <QuoteCard quote={quote} />

        <div className="mt-6 flex gap-3 justify-center">
          <button className="px-4 py-2 rounded-full border text-sm">
            Shuffle
          </button>
          <button className="px-4 py-2 rounded-full border text-sm">
            Share
          </button>
        </div>
      </section>
    </main>
  )
}
