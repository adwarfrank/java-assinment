import { NextResponse } from "next/server";
import { handleContact } from "@/api/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await handleContact({
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    message: String(body.message ?? ""),
    newsletter: Boolean(body.newsletter ?? false),
  });
  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
