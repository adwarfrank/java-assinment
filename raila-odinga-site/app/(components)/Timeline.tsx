"use client";

import { Chrono } from "react-chrono";
import { timelineItems } from "@/lib/data";

export default function Timeline() {
  return (
    <div className="w-full">
      <Chrono
        items={timelineItems}
        mode="HORIZONTAL"
        cardWidth={300}
        slideShow
        theme={{
          primary: "#FF8000",
          secondary: "#0057B8",
          cardBgColor: "#ffffff",
          titleColor: "#0A1A33",
        }}
        disableToolbar
        scrollable
        useReadMore
      />
    </div>
  );
}
