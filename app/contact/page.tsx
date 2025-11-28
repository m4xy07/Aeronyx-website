"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Phone, Send, Check, Instagram, Twitter, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products, sustainability mission, or partnership opportunities? We'd love to hear
              from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-card rounded-2xl border border-border p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-accent hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="products">Product Inquiry</option>
                        <option value="orders">Order Support</option>
                        <option value="partnerships">Partnership Opportunities</option>
                        <option value="press">Press & Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:hello@aeronyx.in"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@aeronyx.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Mumbai, Maharashtra
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-accent/10 rounded-2xl p-8">
                <h3 className="font-semibold text-foreground mb-2">Frequently Asked Questions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Find quick answers to common questions about our products, shipping, and returns.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-foreground">• What materials are used in AERONYX products?</p>
                  <p className="text-sm text-foreground">• How does the 55% profit donation work?</p>
                  <p className="text-sm text-foreground">• What is your return policy?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
