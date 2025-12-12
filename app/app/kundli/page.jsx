"use client";
import { useState } from "react";

export default function KundliInput() {
  const [dob, setDob] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [place, setPlace] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // FREE PLACE AUTOCOMPLETE - NOMINATIM
  const searchPlace = async (text) => {
    setPlace(text);
    if (text.length < 3) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${text}`
    );
    const data = await res.json();
    setSuggestions(data);
  };

  // Redirect with data
  const handleSubmit = () => {
    if (!dob || !hour || !minute || !place) {
      alert("Please fill all details.");
      return;
    }

    const params = new URLSearchParams({
      dob,
      hour,
      minute,
      place
    });

    window.location.href = `/kundli/result?${params.toString()}`;
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-black text-gold px-6 py-20">
      <div className="bg-black/60 p-8 rounded-xl border border-gold shadow-lg max-w-lg w-full">

        <h1 className="text-4xl font-serif font-bold text-center text-gold mb-6">
          Generate Your Vedic Kundli
        </h1>

        {/* DOB */}
        <label className="block mb-2">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-3 rounded bg-black border border-gold/40 focus:border-gold outline-none mb-4"
        />

        {/* Time */}
        <label className="block mb-2">Time of Birth</label>
        <div className="flex gap-3 mb-4">
          {/* Hour */}
          <select
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="flex-1 p-3 rounded bg-black border border-gold/40"
          >
            <option value="">HH</option>
            {[...Array(24).keys()].map((h) => (
              <option key={h}>{h.toString().padStart(2, "0")}</option>
            ))}
          </select>

          {/* Minute */}
          <select
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            className="flex-1 p-3 rounded bg-black border border-gold/40"
          >
            <option value="">MM</option>
            {[...Array(60).keys()].map((m) => (
              <option key={m}>{m.toString().padStart(2, "0")}</option>
            ))}
          </select>
        </div>

        {/* Place search */}
        <label className="block mb-2">Place of Birth</label>
        <input
          type="text"
          value={place}
          onChange={(e) => searchPlace(e.target.value)}
          placeholder="Start typing city…"
          className="w-full p-3 rounded bg-black border border-gold/40"
        />

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="bg-black border border-gold/40 rounded mt-2 max-h-40 overflow-y-auto">
            {suggestions.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setPlace(item.display_name);
                  setSuggestions([]);
                }}
                className="p-2 hover:bg-gold/20 cursor-pointer"
              >
                {item.display_name}
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 py-3 bg-gold text-black font-bold rounded-lg hover:brightness-110"
        >
          Generate Kundli
        </button>
      </div>
    </main>
  );
}
