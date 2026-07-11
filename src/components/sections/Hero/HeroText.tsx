"use client";

import AsciiName from "./AsciiName";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
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
    style: ["italic"], // Specific to the styled intro
    display: "swap",
});

export default function HeroText() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full flex flex-col items-center text-center px-4">
            <p className={`${instrumentSerif.className} text-3xl italic tracking-wide text-zinc-400 low-descender mb-2`}>
                Hi, I'm
            </p>

            <div className="w-full max-w-full overflow-x-auto no-scrollbar py-2">
                <AsciiName />
            </div>

            <p className={`${instrumentSerif.className} text-3xl italic tracking-wide text-zinc-400 low-descender mb-3`}>
                Software developer specializing in web applications.
            </p>

            {/* Consistent button styling - Unified on the clean neo-brutalist look */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
                <Button
                    shine
                    onClick={() => scrollTo("projects")}
                    className="
                        rounded-lg
                        bg-white
                        text-black
                        px-7
                        py-6
                        border-2
                        border-black
                        shadow-[4px_4px_0px_0px_rgba(255,255,255,0.25)]
                        hover:-translate-x-[2px]
                        hover:-translate-y-[2px]
                        hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]
                        active:translate-x-0
                        active:translate-y-0
                        active:shadow-none
                        transition-all
                    "
                >
                    View Projects
                </Button>

                <Button 
                    shine
                    variant="outline"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = portfolioData.resume;
                        link.download = "Rahini_Raneru_Resume.pdf";
                        link.click();
                    }}
                    className="
                        rounded-lg 
                        border-2 
                        border-zinc-700 
                        bg-transparent 
                        text-zinc-300
                        px-7 
                        py-6 
                        transition-all 
                        hover:border-zinc-400 
                        hover:text-white
                    "
                >
                    Download Resume
                </Button>
            </div>
        </div>
    );
}