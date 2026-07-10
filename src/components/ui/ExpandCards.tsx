"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AboutCard } from "@/data/portfolio";

type ExpandCardsProps = {
  cards: AboutCard[];
};

const EXPANDED_WIDTH = "24rem";
const COLLAPSED_WIDTH = "5rem";
const CARD_HEIGHT = "24rem";

export default function ExpandCards({ cards }: ExpandCardsProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Cards */}
      <div className="flex justify-center gap-2 overflow-hidden" onMouseLeave={() => setActiveCard(null)}>

        {cards.map((card, index) => {
          const active = activeCard === index;

          return (
            <motion.div
              layout
              key={card.title}
              onMouseEnter={() => setActiveCard(index)}
              className={`
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
                shrink-0
                transition-all
                duration-500
                ease-out
                ${active
                  ? "scale-[1.02] brightness-100 saturate-100 shadow-2xl"
                  : "scale-[0.98] brightness-90 saturate-90 opacity-80"
                }
              `}
              style={{
                width: active ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
                height: CARD_HEIGHT,
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority={index === 0}
                className={`
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  ${active ? "scale-105" : "scale-100"}
                `}
                sizes="(max-width:768px) 100vw, 400px"
              />

              {/* Better Overlay */}
              <div
                className={`
                  absolute
                  inset-0
                  transition-all
                  duration-500
                  ${active
                    ? "bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    : "bg-gradient-to-t from-black/80 via-black/30 to-black/20"
                  }
                `}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Text */}
      <div className="mt-12 max-w-3xl mx-auto text-center min-h-[160px]">
        <AnimatePresence mode="wait">
          {activeCard !== null && (
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-3xl font-bold mb-4">
                {cards[activeCard].title}
              </h3>

              <p className="text-muted-foreground text-lg leading-8">
                {cards[activeCard].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}