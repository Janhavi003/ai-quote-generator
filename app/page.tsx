import Link from "next/link"

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <section className="max-w-xl w-full text-center">
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          Daily AI Quote
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          A quiet daily space for reflection —  
          thoughtful quotes generated fresh each day by AI.
        </p>

        <Link
          href="/today"
          prefetch
          className="inline-block px-8 py-3 rounded-full border border-gray-300 text-sm tracking-wide hover:bg-gray-100 transition"
        >
          View Today’s Quote →
        </Link>
      </section>
    </main>
  )
}
