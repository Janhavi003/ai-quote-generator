export default function QuoteCard({ quote }: { quote: string }) {
  return (
    <article className="
      bg-white
      w-full
      max-w-xl
      mx-auto
      rounded-2xl
      border border-gray-200
      shadow-lg
      p-8 md:p-10
    ">
      <p className="text-3xl md:text-4xl font-serif leading-relaxed text-gray-900 text-center">
        “{quote}”
      </p>

      <footer className="mt-6 text-sm text-gray-500 text-center tracking-wide">
        AI REFLECTION
      </footer>
    </article>
  )
}
