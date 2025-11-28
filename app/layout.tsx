import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AERONYX | Power Your Performance. Protect Your Planet.",
  description:
    "High-performance eco-engineered compression wear made from recycled materials. 55% of profits support girl-child education.",
  keywords: ["compression wear", "sustainable fashion", "eco-friendly", "athletic wear", "performance clothing"],
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
