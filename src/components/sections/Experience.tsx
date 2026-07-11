"use client"
import { motion, type Variants } from "framer-motion"
import { Briefcase, Code2, Users, FlaskConical, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { portfolioData } from "@/data/portfolio"

const iconMap: Record<string, LucideIcon> = {
  work: Briefcase,
  opensource: Code2,
  leadership: Users,
  research: FlaskConical,
}

export default function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="experience" className="relative py-28 bg-white/[0.01]">
    <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<experience>"}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-14"
          >
            {portfolioData.experience.map((exp, index) => {
              const EntryIcon = iconMap[exp.type] ?? Briefcase
              return (
                <motion.div key={index} variants={itemVariants} className="relative pl-14">
                  <div className="absolute left-0 top-0 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-background border-2 border-primary text-primary shadow-lg">
                    <EntryIcon className="w-5 h-5" />
                  </div>
                  <Card className="glass hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 md:p-10 space-y-6">
                      <div className="space-y-2 border-b border-white/10 pb-5">
                        <h3 className="text-2xl font-bold">
                            {exp.role}
                        </h3>

                        <p className="text-base text-white/90">
                            {exp.company}
                        </p>
                        <span className="inline-flex rounded-full ...">
                            {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground/90 font-medium">
                        {exp.description.map((desc, dIndex) => (
                          <li key={dIndex} className="flex gap-2">
                            <span className="text-secondary shrink-0"><div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /></span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}