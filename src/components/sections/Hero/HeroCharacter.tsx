"use client";

export default function HeroCharacter() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="
        h-[600px]
        w-auto
        object-contain
        pointer-events-none
        select-none
      "
    >
      <source
        src="/video/typing.webm"
        type="video/webm"
      />
    </video>
  );
}