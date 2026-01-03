import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    // simple keyword search
    const results = await prisma.training.findMany({
      where: {
        question: {
          contains: question,
          mode: "insensitive"
        }
      }
    });

    if (results.length === 0) {
      return NextResponse.json({
        answer: "No exact answer found in database."
      });
    }

    // Return first (best) matched answer
    return NextResponse.json({
      answer: results[0].answer
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
