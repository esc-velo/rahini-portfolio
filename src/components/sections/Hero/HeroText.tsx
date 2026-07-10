"use client";

import AsciiName from "./AsciiName";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";


export default function HeroText() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full flex flex-col items-center text-center">
            <p className="text-xl font-medium text-zinc-400 tracking-wide mb-3">
                Hi, I'm
            </p>

            <AsciiName />

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                Software developer specializing in web applications.
            </p>

            <div className="mt-10 flex gap-4">
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
            "
            >
            View Projects
            </Button>

                <Button shine
                    variant="outline"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = portfolioData.resume;
                        link.download = "Rahini_Raneru_Resume.pdf";
                        link.click();
                    }}
                    className="rounded-full border border-zinc-500 px-6 py-3 transition hover:border-white"
                >
                    Download Resume
                </Button>
            </div>
        </div>
    );
}