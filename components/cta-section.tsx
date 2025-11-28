"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground mb-4">
            Join the AERONYX Movement
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Be the first to know about new releases, exclusive offers, and our impact stories. Sign up for early access
            and unlock pre-launch discounts.
          </p>

          {isSubmitted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 rounded-full">
              <Check className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground">Thank you for joining!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full hover:opacity-90 transition-opacity group"
              >
                <span>Get Notified</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
