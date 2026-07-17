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
  title: "Rahini Raneru | AI & Full-Stack Developer",
  description:
    "Portfolio of Rahini Raneru, a Computer Science student building AI systems, machine learning projects, full-stack applications, and intelligent automation workflows.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
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
