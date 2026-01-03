// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");

//     if (!file) return NextResponse.json({ error: "CSV not found" });

//     const text = await file.text();
//     const lines = text.trim().split("\n");

//     const entries = [];

//     for (let i = 1; i < lines.length; i++) {
//       const [question, answer] = lines[i].split(",");
//       if (question && answer) {
//         entries.push({ question: question.trim(), answer: answer.trim() });
//       }
//     }

//     await prisma.training.createMany({
//       data: entries,
//       skipDuplicates: true,
//     });

//     return NextResponse.json({ status: "success", inserted: entries.length });
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }


// app/api/training/bulk/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Very small CSV parser that supports quoted fields and commas inside quotes.
 * Returns array of rows (each row is array of columns).
 */
function parseCsv(text) {
  const rows = [];
  let cur = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"' ) {
      if (inQuotes && next === '"') {
        // escaped quote, consume one and append a single quote
        cur += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === "," && !inQuotes) {
      row.push(cur);
      cur = "";
      continue;
    }

    if ((ch === "\n" || ch === "\r") && !inQuotes) {
      // handle CRLF or LF
      if (cur !== "" || row.length) {
        row.push(cur);
        rows.push(row);
      }
      // skip possible \r\n double char
      cur = "";
      row = [];
      // skip following \n if we are on \r
      if (ch === "\r" && text[i + 1] === "\n") i++;
      continue;
    }

    cur += ch;
  }

  // push last cell if any
  if (inQuotes === false && (cur !== "" || row.length)) {
    row.push(cur);
    rows.push(row);
  }

  return rows;
}

function cleanField(value) {
  if (value === undefined || value === null) return "";
  // Trim whitespace
  let v = String(value).trim();
  // Remove accidental leading/trailing quotes
  if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1).trim();
  // Remove stray leading backslash-quote sequences like \"Yes
  v = v.replace(/\\"/g, '"').trim();
  // Remove repeated question marks (optional)
  v = v.replace(/\?{2,}/g, "?");
  return v;
}

export const POST = async (req) => {
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const text = await file.text();
    if (!text || !text.trim()) {
      return NextResponse.json({ error: "Empty file" }, { status: 400 });
    }

    const rows = parseCsv(text);

    // Expect header row like: question,answer  (case-insensitive)
    if (!rows.length) return NextResponse.json({ error: "No rows found" }, { status: 400 });

    const header = rows[0].map(h => cleanField(h).toLowerCase());
    const qIdx = header.findIndex(h => h.includes("question"));
    const aIdx = header.findIndex(h => h.includes("answer"));

    if (qIdx === -1 || aIdx === -1) {
      return NextResponse.json({
        error: "CSV header must include 'question' and 'answer' columns",
      }, { status: 400 });
    }

    const entries = [];
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i];
      // skip blank rows
      if (!cols || cols.length === 0) continue;

      const rawQ = cols[qIdx] ?? "";
      const rawA = cols[aIdx] ?? "";

      const question = cleanField(rawQ);
      const answer = cleanField(rawA);

      if (!question || !answer) continue; // skip incomplete

      entries.push({ question, answer });
    }

    if (entries.length === 0) {
      return NextResponse.json({ error: "No valid entries found in CSV" }, { status: 400 });
    }

    // Insert in batches to avoid huge single transaction
    let inserted = 0;

    for (const item of entries) {
      await prisma.training.upsert({
        where: { question: item.question },   // uses unique question
        update: { answer: item.answer },      // update if exists
        create: { question: item.question, answer: item.answer },
      });
    
      inserted++;
    }
    
    return NextResponse.json({
      success: true,
      inserted,
      total: entries.length,
    });
  } catch (err) {
    // If a unique constraint exists and createMany throws, return the message
    return NextResponse.json({ error: String(err.message || err) }, { status: 500 });
  }
};
