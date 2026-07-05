"use client";

import { useState } from "react";

import IntroScreen from "@/components/intro/intro-screen";

import Hero from "@/components/sections/hero";
import AboutMe from "@/components/sections/about-me";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <IntroScreen
        onComplete={() => setEntered(true)}
      />
    );
  }

  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}