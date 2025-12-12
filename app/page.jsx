export default function Home() {
  return (
    <main className="hero-bg min-h-screen flex flex-col items-center text-center px-6 py-20">

      {/* LOGO */}
      <h1 className="text-6xl font-serif font-bold text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
        AstroraVeda
      </h1>

      {/* TAGLINE */}
      <p className="mt-6 text-xl text-gold/90 max-w-3xl">
        Your destiny, revealed through ancient Vedic wisdom.
      </p>

      {/* SUB TAGLINE */}
      <p className="mt-2 text-lg text-gold/70 max-w-xl">
        Unlock your future. Guided by the stars. Powered by Vedic science.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">

        <a href="/kundli"
          className="px-8 py-3 rounded-lg bg-gold text-black font-bold hover:brightness-110 transition shadow-lg"
        >
          Generate Your Kundli
        </a>

        <a href="/partner"
          className="px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold/20 transition"
        >
          Partner Prediction
        </a>

        <a href="/matching"
          className="px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold/20 transition"
        >
          Kundli Matching
        </a>

        <a href="/numerology"
          className="px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold/20 transition"
        >
          Destiny Number
        </a>
      </div>
    </main>
  );
}
