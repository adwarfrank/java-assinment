"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          newsletter: formData.get("newsletter") === "on",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("Thanks for reaching out! We'll be in touch.");
    } catch (e) {
      setStatus("Something went wrong. Please try again later.");
    }
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
        <form action={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <label className="flex flex-col gap-1">
            <span className="text-sm">Name</span>
            <input name="name" required className="rounded-md border p-2" placeholder="Your name" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm">Email</span>
            <input name="email" type="email" required className="rounded-md border p-2" placeholder="you@example.com" />
          </label>
          <label className="flex flex-col gap-1 md:col-span-2">
            <span className="text-sm">Message</span>
            <textarea name="message" required rows={5} className="rounded-md border p-2" placeholder="Your message" />
          </label>
          <label className="flex items-center gap-2 md:col-span-2">
            <input name="newsletter" type="checkbox" className="h-4 w-4" />
            <span className="text-sm">Subscribe to newsletter</span>
          </label>
          <div className="md:col-span-2">
            <button className="button-primary">Send Message</button>
          </div>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </section>
  );
}
