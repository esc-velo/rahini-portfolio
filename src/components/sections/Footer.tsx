import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0b0c10]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-14 md:flex-row">

                <div className="text-2xl font-bold tracking-tight text-slate-200">
                    {"<Rahini-Raneru/>"}
                </div>

                <div className="text-center text-slate-200 text-sm md:text-right">
                    © {new Date().getFullYear()} · Full Stack · AI · Machine Learning · Automation
                </div>

            </div>
        </footer>
    );
}