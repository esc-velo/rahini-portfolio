"use client";

import AsciiName from "./AsciiName";

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
                <button
                    onClick={() => scrollTo("projects")}
                    className="rounded-full bg-white px-6 py-3 text-black transition hover:scale-105"
                >
                    View Projects
                </button>

                <button
                    onClick={() => scrollTo("contact")}
                    className="rounded-full border border-zinc-500 px-6 py-3 transition hover:border-white"
                >
                    Contact Me
                </button>
            </div>
        </div>
    );
}