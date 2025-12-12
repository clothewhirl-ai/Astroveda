"use client";
import { useSearchParams } from "next/navigation";

export default function KundliResult() {
  const params = useSearchParams();

  const dob = params.get("dob");
  const hour = params.get("hour");
  const minute = params.get("minute");
  const place = params.get("place");

  return (
    <main className="min-h-screen bg-black text-gold px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-serif font-bold text-center mb-8">
        Your Vedic Kundli
      </h1>

      {/* User Birth Info Card */}
      <div className="max-w-2xl mx-auto bg-black/50 border border-gold/40 rounded-xl p-6 shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Birth Details</h2>
        <p><b>Date:</b> {dob}</p>
        <p><b>Time:</b> {hour}:{minute}</p>
        <p><b>Place:</b> {place}</p>
      </div>

      {/* Kundli Coming Soon Section */}
      <div className="max-w-3xl mx-auto bg-black/50 border border-gold/40 rounded-xl p-6 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Kundli Calculations</h2>
        <p className="text-gold/70">
          Your detailed Kundli (Planets, Houses, Nakshatra, Predictions)
          will appear here once we activate the astrology engine.
        </p>

        <p className="mt-4 text-gold/50 text-sm">
          (Backend API setup next step)
        </p>
      </div>

    </main>
  );
}
