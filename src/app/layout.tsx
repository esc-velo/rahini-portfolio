import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alex Carter | Full Stack & AI Engineer Portfolio",
  description: "Explore the professional developer portfolio of Alex Carter, featuring premium designs, SaaS dashboards, and AI writing studios built with Next.js & Tailwind CSS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="antialiased text-slate-200 bg-[#0b0c10] selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
