"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

import SkillsCategory from "./SkillsCategory";

export default function Skills() {
const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          {"<skills>"}
        </h2>

      </div>

      <div className="space-y-4" onMouseLeave={() => setActiveCategory(null)}>
        {portfolioData.skills.map((category) => (
          <SkillsCategory
            key={category.title}
            category={category}
            active={activeCategory === category.title}
            onActivate={() => setActiveCategory(category.title)}
            onDeactivate={() => setActiveCategory(null)}
          />
        ))}
      </div>
    </section>
  );
}