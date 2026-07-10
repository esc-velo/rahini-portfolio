"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string
  const honeypot = formData.get("website") as string // spam trap, see below

  if (honeypot) return { success: true } // silently drop bots, don't tip them off

  if (!name || !email || !message) {
    return { error: "All fields are required." }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "That email doesn't look valid." }
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // swap once you verify a domain
      to: "your-real-inbox@example.com",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    })
    return { success: true }
  } catch (err) {
    console.error("Resend send failed:", err)
    return { error: "Something went wrong sending your message. Try emailing me directly." }
  }
}