import { NextResponse } from "next/server";
import { getNews } from "@/api/news";

export function GET() {
  const news = getNews();
  return NextResponse.json({ news });
}
