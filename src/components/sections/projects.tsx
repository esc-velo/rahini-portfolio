"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/data/portfolio"
export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }
  return (
    <section id="projects" className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass glass-hover overflow-hidden h-full flex flex-col group">
                {/* Project Image Panel */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-border/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-white text-glow">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground/90 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Actions Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: "sm" }), "flex items-center gap-1.5")}
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: "sm", variant: "outline" }), "flex items-center gap-1.5")}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}