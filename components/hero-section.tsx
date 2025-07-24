export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-4xl">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-blue-900 text-6xl font-bold">IST</div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">IST Lab</h1>
        <h2 className="text-2xl md:text-3xl mb-6 opacity-90">Information Science & Technology Laboratory</h2>
      </div>
    </section>
  )
}
