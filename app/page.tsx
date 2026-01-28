import QuoteCard from "@/components/QuoteCard"

export default function Home() {
  const today = new Date().toDateString()

  return (
    <main className="min-h-screen bg-[#FAFAF9] flex items-center justify-center px-4">
      <section className="max-w-2xl w-full">
        {/* Editorial Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Daily AI Quote
          </h1>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
            {today}
          </p>
        </header>

        {/* Quote Card */}
        <QuoteCard quote="Intelligence is not the ability to compute, but the ability to choose what matters." />

        {/* Social Controls */}
        <div className="mt-6 flex gap-3 justify-center">
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition">
            Shuffle
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition">
            Share
          </button>
        </div>
      </section>
    </main>
  )
}
