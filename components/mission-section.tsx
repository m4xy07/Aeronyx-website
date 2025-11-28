"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

export function MissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? "animate-slide-in" : "opacity-0"}`}>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/tee2.jpeg"
                alt="Athlete wearing AERONYX compression wear during training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">
                Social Impact Initiative
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Every Purchase Educates a Girl Child
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              At AERONYX, we believe in the power of education to transform
              lives. That's why 55% of our profits go directly to supporting
              girl-child education initiatives across underserved communities.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When you wear AERONYX, you're not just investing in your
              performance — you're investing in a brighter future for girls who
              deserve the chance to learn, grow, and lead.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <p className="text-3xl font-semibold text-foreground">55%</p>
                <p className="text-sm text-muted-foreground">Profits Donated</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">1000+</p>
                <p className="text-sm text-muted-foreground">Girls Supported</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Eco Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
