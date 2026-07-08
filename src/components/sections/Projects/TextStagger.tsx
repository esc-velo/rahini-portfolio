"use client";

import { motion } from "framer-motion";

type TextStaggerProps = {
  text: string;
  active: boolean;
};

export default function TextStagger({
  text,
  active,
}: TextStaggerProps) {
  const characters = text.split("");

  return (
    <span className="inline-block overflow-hidden">
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="relative inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            animate={{
              y: active ? "-100%" : "0%",
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.025,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>

          <motion.span
            className="absolute left-0 top-0 inline-block"
            initial={{ y: "100%" }}
            animate={{
              y: active ? "0%" : "100%",
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.025,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}