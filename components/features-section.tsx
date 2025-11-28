"use client"

import { useEffect, useRef, useState } from "react"
import { Recycle, Zap, Droplets, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "High-Performance Compression",
    description: "Advanced compression technology that enhances endurance and stabilizes muscles during any activity.",
  },
  {
    icon: Droplets,
    title: "Sweat-Wicking Fabric",
    description: "Breathable materials that keep you cool and dry, no matter how intense your workout.",
  },
  {
    icon: Recycle,
    title: "Sustainable Manufacturing",
    description: "Made from recycled performance fibres, reducing environmental impact without compromising quality.",
  },
  {
    icon: Shield,
    title: "Ethical Production",
    description: "Every piece is crafted with care under fair working conditions with a social mission at heart.",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every AERONYX piece combines cutting-edge performance technology with sustainable innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
