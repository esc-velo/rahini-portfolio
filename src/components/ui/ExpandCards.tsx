"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AboutCard } from "@/data/portfolio";
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

type ExpandCardsProps = {
  cards: AboutCard[];
};

const EXPANDED_WIDTH = "24rem";
const COLLAPSED_WIDTH = "5rem";
const CARD_HEIGHT = "24rem";

// Mobile card dimensions
const MOBILE_CARD_WIDTH = 280;
const MOBILE_CARD_HEIGHT = 320;
const MOBILE_CARD_GAP = 12;

export default function ExpandCards({ cards }: ExpandCardsProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMobileTap = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Mobile: horizontal scroll carousel with tap-to-select
  if (isMobile) {
    return (
      <div className="w-full">
        {/* Scrollable card row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-4 -mx-4"
          style={{ scrollPaddingInline: "16px" }}
        >
          {cards.map((card, index) => {
            const active = activeCard === index;
            return (
              <motion.div
                key={card.title}
                onClick={() => handleMobileTap(index)}
                className={`
                  relative
                  overflow-hidden
                  rounded-2xl
                  cursor-pointer
                  shrink-0
                  snap-center
                  transition-all
                  duration-300
                  ${active
                    ? "ring-2 ring-white/40 brightness-100"
                    : "brightness-75 opacity-80"
                  }
                `}
                style={{
                  width: `${MOBILE_CARD_WIDTH}px`,
                  height: `${MOBILE_CARD_HEIGHT}px`,
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
                {/* Dark overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-300
                    ${active
                      ? "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      : "bg-gradient-to-t from-black/80 via-black/30 to-black/20"
                    }
                  `}
                />
                {/* Title on card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white drop-shadow-lg">
                    {card.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Description below */}
        <div className="mt-8 max-w-xl mx-auto text-center min-h-[80px] px-4">
          <AnimatePresence mode="wait">
            {activeCard !== null && (
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold mb-3">
                  {cards[activeCard].title}
                </h3>
                <p className={`${instrumentSerif.className} text-muted-foreground text-base leading-7`}>
                  {cards[activeCard].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Desktop: original hover-to-expand layout (unchanged)
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
      <div className="mt-12 max-w-3xl mx-auto text-center min-h-[96px]">
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

              <p className={`${instrumentSerif.className} text-muted-foreground text-xl leading-8`}>
                {cards[activeCard].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}