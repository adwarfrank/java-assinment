import Stripe from "stripe";

export async function createCheckoutSession() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    // Fallback demo URL
    return { url: "https://donate.stripe.com/test_123456" } as const;
  }
  const stripe = new Stripe(key, { apiVersion: "2025-09-30.clover" });
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "kes",
          product_data: { name: "Donation" },
          unit_amount: 1000 * 100,
        },
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}?donation=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}?donation=cancel`,
  });
  return { url: session.url } as const;
}
