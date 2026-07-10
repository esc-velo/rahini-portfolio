"use client";

import { useState } from "react";

import IntroScreen from "@/components/intro/IntroScreen";

import Hero from "@/components/sections/Hero/Hero";
import AboutMe from "@/components/sections/About/AboutMe";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

import SocialDock from "@/components/ui/SocialDock";

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

      <SocialDock />
    </main>
  );
}