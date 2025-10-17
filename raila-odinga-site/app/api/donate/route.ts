import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/api/donate";

export async function POST() {
  const session = await createCheckoutSession();
  return NextResponse.json(session);
}
