import { NextResponse } from "next/server";
import { newsItems } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ items: newsItems });
}
