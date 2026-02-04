type Props = {
  quote: string
  label?: string
}

export default function QuoteCard({
  quote,
  label = "DAILY REFLECTION",
}: Props) {
  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-gray-200 bg-white shadow-sm p-10">
      <p className="text-[1.9rem] md:text-[2.2rem] font-serif leading-snug text-gray-900 text-center">
        “{quote}”
      </p>

      <footer className="mt-8 text-xs tracking-widest text-gray-400 text-center">
        {label}
      </footer>
    </div>
  )
}
