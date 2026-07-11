"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import ProjectList from "@/components/sections/Projects/ProjectList";
import ProjectShowcase from "@/components/sections/Projects/ProjectShowcase";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-28 bg-white/[0.01] min-h-lvh flex flex-col justify-center">
    <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />
      <div className="container max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<projects>"}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-panel architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-[550px_minmax(0,1fr)] gap-12 items-center">
          {/* Left Panel: The List */}
          <div>
            <ProjectList
              projects={projects}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>

          {/* Right Panel: The Detailed Showcase */}
          <div className="flex items-center justify-center">
            <ProjectShowcase project={projects[activeIndex]} />
          </div>
        </div>
      </div>
    </section>
  );
}