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
    <section id="experience" className="py-20 bg-white/[0.01] border-y border-border/40 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<experience>"}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {portfolioData.experience.map((exp, index) => {
              const EntryIcon = iconMap[exp.type] ?? Briefcase
              return (
                <motion.div key={index} variants={itemVariants} className="relative pl-14">
                  <div className="absolute left-0 top-0 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary text-primary shadow-lg">
                    <EntryIcon className="w-4 h-4" />
                  </div>
                  <Card className="glass glass-hover">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-2">
                        <span className="text-xs font-bold text-primary tracking-wide uppercase px-2 py-0.5 rounded-full bg-primary/10">
                          {exp.period}
                        </span>
                        <span className="text-sm font-bold text-white">{exp.company}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-white">{exp.role}</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground/90 font-medium">
                        {exp.description.map((desc, dIndex) => (
                          <li key={dIndex} className="flex gap-2">
                            <span className="text-secondary shrink-0">•</span>
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