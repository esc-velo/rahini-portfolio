"use client";

import { useState } from "react";

import IntroScreen from "@/components/intro/IntroScreen";
import Aurora from "@/components/ui/Aurora";

import Hero from "@/components/sections/Hero/Hero";
import AboutMe from "@/components/sections/About/AboutMe";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

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
    <div className="relative min-h-screen">
      {/* Aurora Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <Aurora
          colorStops={["#202833", "#414354", "#1b3250"]}
          amplitude={1}
          blend={1}
          speed={0.5}
        />
      </div>
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <SocialDock />
    </main>
    </div>
  );
}