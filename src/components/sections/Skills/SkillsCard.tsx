"use client";

import { cn } from "@/lib/utils";
import type { Skill } from "@/data/portfolio";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: Skill;
}

const statusStyles = {
  Core: "bg-white/10 text-white border-white/30",
  Comfortable: "bg-slate-500/10 text-slate-300 border-slate-500/30",
  Learning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="glass flex items-center justify-between gap-3 rounded-xl border border-border/40 px-5 py-4"
    >
      <h4 className="text-base font-bold text-white">{skill.name}</h4>

      <span
        className={cn(
          "shrink-0 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
          statusStyles[skill.status]
        )}
      >
        {skill.status}
      </span>
    </motion.div>
  );
}