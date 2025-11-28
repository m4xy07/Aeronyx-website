"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Leaf, Heart } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/50 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">Eco-Engineered Performance Wear</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
              <span className="block">Power Your</span>
              <span className="block text-accent">Performance</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Where high-performance compression wear meets eco-innovation. Crafted from recycled fibres, engineered for
              excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full hover:bg-secondary transition-colors"
              >
                <span>Learn More</span>
              </Link>
            </div>

            {/* Impact Badge */}
            <div className="inline-flex items-center gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">55% profits to girl-child education</span>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div className={`relative ${isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/whatsapp-20image-202025-11-28-20at-208.jpeg"
                  alt="AERONYX White Compression Tee - Athletic performance wear"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-xl animate-float animation-delay-600">
                <img
                  src="/images/whatsapp-20image-202025-11-28-20at-208.jpeg"
                  alt="AERONYX Brown Hoodie - Eco-friendly comfort wear"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
