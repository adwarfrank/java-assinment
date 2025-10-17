"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData as any)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4 max-w-xl">
      <label className="grid gap-1">
        <span className="text-sm font-medium">Name</span>
        <input
          name="name"
          required
          className="rounded-md border border-black/10 p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)]"
          placeholder="Your full name"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm font-medium">Email</span>
        <input
          type="email"
          name="email"
          required
          className="rounded-md border border-black/10 p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)]"
          placeholder="you@example.com"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-md border border-black/10 p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)]"
          placeholder="How can we help?"
        />
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        {status === "success" && <span className="text-green-600">Sent!</span>}
        {status === "error" && <span className="text-red-600">Failed. Try again.</span>}
      </div>
      <div className="mt-4 grid gap-2">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" name="subscribe" className="accent-[color:var(--color-brand-blue)]" />
          <span>Subscribe to newsletter</span>
        </label>
        <div className="text-sm text-[color:var(--color-ink)]/70">
          Follow on social: <a className="underline" href="#">Twitter</a> · <a className="underline" href="#">Facebook</a>
        </div>
      </div>
    </form>
  );
}
