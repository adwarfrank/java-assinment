"use client";

import dynamic from "next/dynamic";
import type { TimelineItem } from "react-chrono";
import { timeline as raw } from "@/lib/data";

const ChronoNoSSR = dynamic(async () => (await import("react-chrono")).Chrono, { ssr: false });

export default function Timeline() {
  const timeline = raw as unknown as TimelineItem[];
  return (
    <section id="timeline" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Timeline</h2>
        <div className="w-full">
          <ChronoNoSSR items={timeline} mode="HORIZONTAL" slideShow slideItemDuration={3500} theme={{
            primary: "#FF8000",
            secondary: "#0057B8",
            cardBgColor: "#ffffff",
            titleColorActive: "#FF8000",
          }}
          fontSizes={{ title: "1rem" }}
          />
        </div>
      </div>
    </section>
  );
}
