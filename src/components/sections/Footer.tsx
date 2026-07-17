import { portfolioData } from "@/data/portfolio";

const socialLinks = [
    { id: "github", name: "GitHub", icon: "/icons/github.svg", url: portfolioData.github },
    { id: "linkedin", name: "LinkedIn", icon: "/icons/linkedin.svg", url: portfolioData.linkedin },
    { id: "instagram", name: "Instagram", icon: "/icons/instagram.svg", url: portfolioData.instagram },
    { id: "twitter", name: "X", icon: "/icons/twitter.svg", url: portfolioData.twitter },
    { id: "mail", name: "Email", icon: "/icons/gmail.svg", url: `mailto:${portfolioData.email}` },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0b0c10]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-10 md:flex-row md:py-14 md:gap-6">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-tight text-slate-200">
                    {"<Rahini-Raneru/>"}
                </div>

                {/* Mobile Simplified Glass Dock */}
                <div className="flex md:hidden my-4 items-center gap-5 px-[22px] py-[14px] rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-[1.08] active:scale-[0.94]"
                        >
                            <img
                                src={link.icon}
                                alt={link.name}
                                className="w-[28px] h-[28px] object-contain"
                            />
                        </a>
                    ))}
                </div>

                {/* Mobile Quieter Copyright */}
                <div className="flex md:hidden flex-col items-center gap-2 text-center text-xs text-muted-foreground font-medium">
                    <div className="text-zinc-400">© {new Date().getFullYear()}</div>
                    <div className="text-zinc-500">Full Stack • AI • ML • Automation</div>
                </div>

                {/* Desktop Copyright */}
                <div className="hidden md:block text-right text-slate-200 text-sm">
                    © {new Date().getFullYear()} · Full Stack · AI · Machine Learning · Automation
                </div>

            </div>
        </footer>
    );
}