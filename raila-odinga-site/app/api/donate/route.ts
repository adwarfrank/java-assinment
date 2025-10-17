import { NextResponse } from "next/server";

export async function POST() {
  // Stub for initializing payment intent with Stripe/Flutterwave
  return NextResponse.json({ ok: true, message: "Donation initialized" });
}
