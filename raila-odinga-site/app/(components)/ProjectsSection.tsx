"use client";

import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article key={p.id} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <h3 className="font-heading text-xl text-[color:var(--color-ink)]">{p.title}</h3>
          <p className="mt-2 text-sm text-[color:var(--color-ink)]/80">{p.description}</p>
          <div className="mt-4 flex items-center gap-3">
            {p.href && (
              <a href={p.href} className="btn-secondary">Learn More</a>
            )}
            {p.canDonate && (
              <form action="/api/donate" method="POST">
                <button type="submit" className="btn-primary">Donate</button>
              </form>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
