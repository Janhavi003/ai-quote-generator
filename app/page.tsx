export default function Home() {
  const today = new Date().toDateString()

  return (
    <main className="min-h-screen bg-[#FAFAF9] flex items-center justify-center px-4">
      <section className="max-w-2xl w-full">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Daily AI Quote
          </h1>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
            {today}
          </p>
        </header>
      </section>
    </main>
  )
}
