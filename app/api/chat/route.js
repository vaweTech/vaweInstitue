import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { synonyms } from "@/lib/synonyms";
import { similarity } from "@/lib/fuzzy";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const userMsg = message.toLowerCase();

    // Fetch all training data
    const data = await prisma.training.findMany();
    if (!data.length)
      return NextResponse.json({ reply: "No training data found." });

    let bestMatch = null;
    let bestScore = 0;

    for (let item of data) {
      const q = item.question.toLowerCase();
      let score = 0;

      // 1️⃣ Exact match
      if (q === userMsg) score += 10;

      // 2️⃣ Word match
      const words = userMsg.split(" ");
      for (let w of words) {
        if (q.includes(w)) score += 3;

        // 3️⃣ Synonym match
        if (synonyms[w]) {
          for (let syn of synonyms[w]) {
            if (q.includes(syn)) score += 4;
          }
        }
      }

      // 4️⃣ Fuzzy similarity (spell correction)
      const sim = similarity(q, userMsg);
      if (sim > 0.5) score += sim * 10;

      // 5️⃣ Partial match
      if (q.includes(userMsg.slice(0, 4))) score += 2;

      // 6️⃣ Length similarity
      const diff = Math.abs(q.length - userMsg.length);
      if (diff < 10) score += 1;

      // select high score
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    // If match good enough
    if (bestScore >= 4) {
      return NextResponse.json({ reply: bestMatch.answer });
    }

    // Friendly fallback with suggestions
    const suggestion = data[0]?.question || "course details";

    return NextResponse.json({
      reply: `I'm not fully sure about that. Try asking like: "${suggestion}".`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
