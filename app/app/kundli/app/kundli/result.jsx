"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function KundliResult() {
  const params = useSearchParams();

  const dob = params.get("dob");
  const hour = params.get("hour");
  const minute = params.get("minute");
  const place = params.get("place");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch API on page load
  useEffect(() => {
    async function fetchKundli() {
      try {
        const res = await fetch("/api/kundli", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dob,
            hour,
            minute,
            place,
            lat: 0,   // baad me place → lat/lon add karenge
            lon: 0
          }),
        });

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    fetchKundli();
  }, []);

  if (loading)
    return (
      <h1 className="text-center text-gold text-3xl mt-20">Loading Kundli…</h1>
    );

  if (!data || !data.success)
    return (
      <h1 className="text-center text-red-500 text-3xl mt-20">
        Error generating kundli
      </h1>
    );

  return (
    <main className="min-h-screen bg-black text-gold px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-serif font-bold text-center mb-8">
        Your Vedic Kundli
      </h1>

      {/* Birth Details */}
      <div className="max-w-2xl mx-auto bg-black/50 border border-gold/40 rounded-xl p-6 shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Birth Details</h2>
        <p><b>Date:</b> {dob}</p>
        <p>
          <b>Time:</b> {hour}:{minute}
        </p>
        <p><b>Place:</b> {place}</p>
      </div>

      {/* PLANETS */}
      <div className="max-w-3xl mx-auto bg-black/50 border border-gold/40 rounded-xl p-6 shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Planetary Positions</h2>

        {data.planets.map((p, i) => (
          <div key={i} className="border-b border-gold/20 py-2">
            <b>{p.planet}</b> → {p.sign} ({p.degree}°)
          </div>
        ))}
      </div>

      {/* HOUSES */}
      <div className="max-w-3xl mx-auto bg-black/50 border border-gold/40 rounded-xl p-6 shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Vedic Houses</h2>

        {data.houses.map((h, i) => (
          <div key={i} className="border-b border-gold/20 py-2">
            <b>House {h.house}:</b> {h.sign}
          </div>
        ))}
      </div>

      {/* NAKSHATRA */}
      <div className="max-w-3xl mx-auto bg-black/50 border border-gold/40 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Nakshatra</h2>

        <p><b>Name:</b> {data.nakshatra.name}</p>
        <p><b>Pada:</b> {data.nakshatra.pada}</p>
        <p><b>Lord:</b> {data.nakshatra.lord}</p>
      </div>
    </main>
  );
            }

