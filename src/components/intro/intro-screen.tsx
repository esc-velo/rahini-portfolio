"use client";

import SlideButton from "./slide-button";
import DataGridHero from "@/components/background/data-grid-hero";

type IntroScreenProps = {
  onComplete: () => void;
};

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <DataGridHero
        rows={20}
        cols={20}
        spacing={32}
        duration={2.5}
        color="#1e293b"
        animationType="pulse"
        pulseEffect={true}
        mouseGlow={true}
        opacityMin={0.05}
        opacityMax={0.15}
        background="transparent"
      >
        <SlideButton onComplete={onComplete} />
      </DataGridHero>
    </div>
  );
}