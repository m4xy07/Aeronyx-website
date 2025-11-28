"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="group">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary mb-4">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            {product.badge}
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-9 h-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-accent text-accent" : "text-foreground"}`} />
        </button>

        {/* Image Navigation Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-foreground" : "bg-foreground/30"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <Link href={`/products/${product.id}`}>
        <h3 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
      </Link>
      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
        )}
      </div>
    </div>
  )
}
