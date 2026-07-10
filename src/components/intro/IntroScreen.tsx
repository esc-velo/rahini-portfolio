"use client";

import SlideButton from "./SlideButton";

type IntroScreenProps = {
  onComplete: () => void;
};

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
        <SlideButton onComplete={onComplete} />
    </div>
  );
}