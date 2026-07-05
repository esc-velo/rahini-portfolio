"use client"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio"
export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }
  return (
    <section id="experience" className="py-20 bg-white/[0.01] border-y border-border/40 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline central vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary text-primary shadow-lg">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  {/* Left spacing for layout alignment */}
                  <div className="w-full md:w-1/2" />
                  {/* Card Section */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <Card className="glass glass-hover">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-2">
                          <span className="text-xs font-bold text-primary tracking-wide uppercase px-2 py-0.5 rounded-full bg-primary/10">
                            {exp.period}
                          </span>
                          <span className="text-sm font-bold text-white">
                            {exp.company}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-extrabold text-white">
                          {exp.role}
                        </h3>
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
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}