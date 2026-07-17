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
        h-[300px]
        md:h-[450px]
        lg:h-[600px]
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