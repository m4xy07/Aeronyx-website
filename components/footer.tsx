import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight mb-4">AERONYX</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Power Your Performance. Protect Your Planet. High-performance eco-engineered compression wear with 55% of
              profits supporting girl-child education.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">© 2025 AERONYX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
