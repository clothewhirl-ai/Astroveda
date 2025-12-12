export async function POST(request) {
  try {
    const body = await request.json();

    const { dob, hour, minute, place, lat, lon } = body;

    // Placeholder planetary data (real math will be added later)
    const samplePlanets = [
      { planet: "Sun", sign: "Aries", degree: 12.5 },
      { planet: "Moon", sign: "Taurus", degree: 28.1 },
      { planet: "Mars", sign: "Cancer", degree: 3.4 },
    ];

    const sampleHouses = [
      { house: 1, sign: "Aries" },
      { house: 2, sign: "Taurus" },
      { house: 3, sign: "Gemini" },
      { house: 4, sign: "Cancer" },
      { house: 5, sign: "Leo" },
      { house: 6, sign: "Virgo" },
    ];

    const nakshatra = {
      name: "Rohini",
      pada: 2,
      lord: "Moon",
    };

    return Response.json(
      {
        success: true,
        message: "Kundli calculated (sample data)",
        input: { dob, hour, minute, place, lat, lon },
        planets: samplePlanets,
        houses: sampleHouses,
        nakshatra: nakshatra,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
