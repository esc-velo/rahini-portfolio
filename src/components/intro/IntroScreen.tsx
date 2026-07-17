"use client";
import { Card } from "@/components/ui/Card";
import SlideButton from "./SlideButton";

type IntroScreenProps = {
  onComplete: () => void;
};

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030303] overflow-hidden">
      {/* Background Ambient Glows to reveal the glass refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none delay-700" />

      <Card
        className="
          relative
          w-full
          max-w-[420px]
          mx-4
          rounded-[32px]
          bg-gradient-to-br from-white/[0.07] to-white/[0.01]
          backdrop-blur-xl
          
          border border-transparent 
          bg-clip-padding 
          before:absolute before:inset-0 before:rounded-[32px] before:p-[1px] 
          before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent 
          before:-z-10 before:mask-composite
          
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
          
          p-8
          overflow-hidden
        "
      >
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-repeat"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        />

        <div className="relative z-10 space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-400/80 subpixel-antialiased">
              Portfolio
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 drop-shadow-sm">
              Rahini Raneru
            </h1>

            <p className="text-sm font-medium text-zinc-400/60 tracking-wide">
              Computer Science • AI • Full Stack
            </p>
          </div>

          <div className="pt-2">
            <div className="w-full p-1 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
              <SlideButton onComplete={onComplete} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}