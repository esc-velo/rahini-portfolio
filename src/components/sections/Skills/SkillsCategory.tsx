"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import type { SkillCategory as SkillCategoryType } from "@/data/portfolio";

import SkillCard from "./SkillsCard";

interface SkillsCategoryProps {
  category: SkillCategoryType;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

const HOVER_DELAY = 150;

export default function SkillsCategory({
  category,
  active,
  onActivate,
  onDeactivate,
}: SkillsCategoryProps) {
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      onActivate();
    }, HOVER_DELAY);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  return (
    <motion.div
      layout
      tabIndex={0}
      role="button"
      aria-expanded={active}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onActivate}
      onBlur={onDeactivate}
      onFocus={onActivate}
    >
      <Card
        className={cn(
          "glass cursor-pointer transition-colors duration-200",
          active ? "!border-primary/40" : "hover:!border-primary/30"
        )}
      >
        <div className="px-8 py-7">
          <motion.h3
            layout
            className={cn(
              "text-2xl font-semibold tracking-tight transition-colors duration-200",
              active ? "text-primary" : "text-foreground"
            )}
          >
            {category.title}
          </motion.h3>

          <AnimatePresence initial={false}>
            {!active && (
              <motion.p
                key="collapsed"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="mt-2 text-sm text-muted-foreground"
              >
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {active && (
              <motion.div
                layout
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}