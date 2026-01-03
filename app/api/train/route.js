import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const { question, answer } = await req.json();

  const data = await prisma.training.create({
    data: { question, answer },
  });

  return NextResponse.json({
    success: true,
    message: "Training data added",
    data,
  });
}
