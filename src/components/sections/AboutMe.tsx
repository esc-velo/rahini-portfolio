"use client"
import { motion } from "framer-motion"
import { Avatar } from "@/components/ui/avatar"
import { portfolioData } from "@/data/portfolio"
import { Calendar, MapPin, Mail, Award } from "lucide-react"
export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white/[0.01] border-y border-border/40 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Avatar side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg group-hover:opacity-75 transition duration-500" />
              <Avatar 
                src={portfolioData.avatar} 
                alt={portfolioData.name} 
                fallback={portfolioData.name.split(" ").map(n => n[0]).join("")}
                size="xxl" 
                className="relative z-10 border-2 border-primary/20 bg-background"
              />
            </div>
          </motion.div>
          {/* Description side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Who I am
            </h3>
            
            <p className="text-muted-foreground/90 leading-relaxed font-medium">
              {portfolioData.about}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{portfolioData.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span>20+ Projects Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}