"use client"
import ExpandCards from "@/components/ui/ExpandCards"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
    display: "swap",
});

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-28 bg-white/[0.01] min-h-screen flex flex-col justify-center"
    >
    <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />

      <div className="container max-w-8xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-5xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<about-me>"}
          </h2>

          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p
            className="max-w-3xl text-xl leading-9 text-muted-foreground/90 font-medium select-text"
          >
            {portfolioData.about}
          </p>
        </motion.div>

        {/* Expand Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-24"
        >
          <ExpandCards cards={portfolioData.aboutCards} />
        </motion.div>
      </div>
    </section>
  )
}