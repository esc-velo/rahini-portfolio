"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import ProjectList from "@/components/sections/Projects/ProjectList";
import ProjectShowcase from "@/components/sections/Projects/ProjectShowcase";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<projects>"}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-panel architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Panel: The List */}
          <div className="md:col-span-5 lg:col-span-4">
            <ProjectList
              projects={projects}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>

          {/* Right Panel: The Detailed Showcase */}
          <div className="md:col-span-7 lg:col-span-8 flex items-center">
            <ProjectShowcase project={projects[activeIndex]} />
          </div>
        </div>
      </div>
    </section>
  );
}