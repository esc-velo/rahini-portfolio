"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"
export default function Contact() {
  const [formState, setFormState] = React.useState({ name: "", email: "", message: "" })
  const [isPending, setIsPending] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)

    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsPending(false)
    setIsSuccess(true)
    setFormState({ name: "", email: "", message: "" })

    // Auto reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }
  return (
    <section id="contact" className="py-20 bg-white/[0.01] border-t border-border/40 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-12 gap-12">
          {/* Info Details Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Let's talk</h3>
            <p className="text-sm text-muted-foreground/90 leading-relaxed font-medium">
              Have a question or want to work together? Feel free to drop a message, and I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${portfolioData.email}`} className="text-sm font-bold text-white hover:text-primary transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Form Interactive Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7"
          >
            <Card className="glass">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Name</label>
                    <Input
                      id="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Email</label>
                    <Input
                      id="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="flex w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? (
                      <span className="flex items-center gap-2">
                        Sending...
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-sm font-semibold"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Thank you! Your message was sent successfully.</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}