import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return NextResponse.json({ error: "Both question and answer required" }, { status: 400 });
    }

    const saved = await prisma.training.create({
      data: {
        question,
        answer
      }
    });

    return NextResponse.json({ message: "Training data saved", data: saved });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
