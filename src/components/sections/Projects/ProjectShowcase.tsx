"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import type { Project } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  project: Project;
};

export default function ProjectShowcase({ project }: Props) {
  return (
    <motion.div
      className="relative flex items-center justify-center w-full"
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full"
        >
          <Card className="overflow-hidden rounded-3xl border border-border/60 bg-background/70 backdrop-blur-xl shadow-2xl">

            <CardContent className="p-8 space-y-8">

              {/* Preview */}
              <div className="relative h-40 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">

                {/* The Image */}
                <img
                  src={project.image}
                  alt="Project Preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-100"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-4 left-4 rounded-full border border-primary/30 px-3 py-1 text-xs backdrop-blur bg-white/10 text-white">
                  Featured Project
                </div>
              </div>
              {/* Heading */}

              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}

              <p className="leading-8 text-muted-foreground">
                {project.description}
              </p>

              {/* Stack */}

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1.5 text-sm transition hover:border-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}

              <div className="flex gap-3">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:border-primary"
                  >
                    <Code2 className="h-4 w-4" />
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-primary-foreground transition hover:scale-[1.02]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}