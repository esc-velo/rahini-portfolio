"use client";

import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import TextStagger from "./TextStagger";
import { useRef } from "react";

type ProjectItemProps = {
  project: Project;
  index: number;
  isActive: boolean;
  onActivate: () => void;
};

export default function ProjectItem({
  project,
  index,
  isActive,
  onActivate,
}: ProjectItemProps) {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
      timeout.current = setTimeout(onActivate,100);
  };

  const handleLeave = () => {
      if(timeout.current)
          clearTimeout(timeout.current);
  };
  return (
    <button
      type="button"
      onMouseEnter={handleEnter}
      onFocus={handleEnter}
      onClick={onActivate}
      onMouseLeave={handleLeave}
      className={cn(
        "group w-full border-l-4 py-6 pl-8 pr-4 text-left transition-all duration-300",
        isActive
          ? "border-primary"
          : "border-border hover:border-primary/50"
      )}
    >
      <div className="flex items-start gap-6">
        {/* Number */}
        <span
          className={cn(
            "mt-2 text-xs font-medium tracking-[0.25em] shrink-0",
            isActive ? "text-primary" : "text-muted-foreground/60"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3
          className={cn(
            "text-3xl font-extrabold tracking-tight uppercase transition-colors",
            isActive
              ? "text-foreground"
              : "text-muted-foreground/50 group-hover:text-foreground/80"
          )}
        >
          <TextStagger
            text={project.title}
            active={isActive}
          />
        </h3>
      </div>
    </button>
  );
}