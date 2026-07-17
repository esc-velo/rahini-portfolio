"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { FlipButton } from "@/components/ui/FlipButton"
import { sendContactEmail } from "@/app/actions/contact"
import { portfolioData } from "@/data/portfolio"
import { IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
    display: "swap",
});

export default function Contact() {
  const [error, setError] = React.useState<string | null>(null)
  const [formState, setFormState] = React.useState({ name: "", email: "", message: "" })
  const [isPending, setIsPending] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    setError(null)

    const formData = new FormData()
    formData.append("name", formState.name)
    formData.append("email", formState.email)
    formData.append("message", formState.message)

    const result = await sendContactEmail(formData)
    setIsPending(false)

    if (result.error) {
      setError(result.error)
      return
    }

    setIsSuccess(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSuccess(false), 5000)
  }
  return (
    <section id="contact" className="relative py-28 bg-white/[0.01]">
    <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />

      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {"<contact-me>"}
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
            <h3 className={`${instrumentSerif.className} mb-5 text-5xl font-bold text-white`}>Let's talk</h3>
            <p className="text-sm text-muted-foreground/90 leading-relaxed font-medium">
              Always in for new opportunities and collaborations. Feel free to drop a message, and I'll ping you back as soon as possible.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="mb-1 text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${portfolioData.email}`} className={`${instrumentSerif.className} mb-2 text-md font-bold text-white hover:text-primary transition-colors`}>
                    {portfolioData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="mb-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">Location</p>
                  <p className={`${instrumentSerif.className} mb-2 text-sm font-bold text-white`}>Hyderabad, Telangana, India <br />Jaipur, Rajasthan, India</p>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Your Name
                    </label>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Your Email
                    </label>

                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="
                        flex
                        w-full
                        rounded-xl
                        border
                        border-border
                        bg-white/5
                        px-4
                        py-3
                        text-sm
                        placeholder:text-muted-foreground/60
                        transition-all
                        duration-300
                        resize-none
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary/50
                        focus-visible:border-primary/50
                      "
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <div className="flex justify-center pt-2">
                    <FlipButton
                      type="submit"
                      isPending={isPending}
                      idleText="Sending..."
                      loadingText="Send Message"
                    />
                  </div>

                  {/* Success */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-500/20
                        bg-slate-500/10
                        p-3
                        text-sm
                        font-medium
                        text-slate-400
                      "
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span>Received! I'll get back to you soon.</span>
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