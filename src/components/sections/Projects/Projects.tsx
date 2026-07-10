"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import ProjectList from "@/components/sections/Projects/ProjectList";
import ProjectShowcase from "@/components/sections/Projects/ProjectShowcase";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-28 bg-white/[0.01] min-h-screen flex flex-col justify-center">
    <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />
      <div className="container max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<projects>"}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-panel architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Panel: The List */}
          <div className="md:col-span-5 lg:col-span-5">
            <ProjectList
              projects={projects}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>

          {/* Right Panel: The Detailed Showcase */}
          <div className="md:col-span-7 lg:col-span-7 flex items-center">
            <ProjectShowcase project={projects[activeIndex]} />
          </div>
        </div>
      </div>
    </section>
  );
}