"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [loading, setLoading] = useState(false);

  async function donate() {
    setLoading(true);
    try {
      const res = await fetch("/api/donate", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url as string;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects & Initiatives</h2>
        <p className="max-w-3xl text-textDark/80">
          Supporting community development, youth empowerment, and infrastructure across Kenya through various initiatives
          and partnerships.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={donate} disabled={loading} className="button-primary">
            {loading ? "Processing..." : "Donate"}
          </button>
          <a href="#contact" className="button-secondary">Partner With Us</a>
        </div>
      </div>
    </section>
  );
}
