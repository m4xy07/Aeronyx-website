"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"
import { ChevronLeft, Heart, Truck, Recycle, Shield, Check } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)

  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link href="/products" className="text-accent hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      setAddedToCart(true)
      setTimeout(() => setAddedToCart(false), 2000)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={product.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === selectedImageIndex ? "border-accent" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  {product.badge}
                </span>
              )}

              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground">{product.category}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 py-4 rounded-full font-medium transition-all ${
                    selectedSize
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {addedToCart ? (
                    <span className="inline-flex items-center gap-2">
                      <Check className="w-4 h-4" /> Added to Cart
                    </span>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:border-accent/50 transition-colors"
                  aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-accent text-accent" : ""}`} />
                </button>
              </div>

              {/* Features */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Recycle className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Eco-Friendly</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">30-Day Returns</p>
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
