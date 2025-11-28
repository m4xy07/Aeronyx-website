import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Leaf } from "lucide-react"

export const metadata = {
  title: "Products | AERONYX",
  description: "Shop our collection of high-performance, eco-engineered compression wear.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">Sustainable Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">Our Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-performance compression wear engineered for excellence. Every purchase supports girl-child education.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-full">
                All Products
              </button>
              <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Compression
              </button>
              <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Comfort
              </button>
            </div>
            <p className="text-sm text-muted-foreground">{products.length} products</p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-24 text-center">
            <div className="bg-secondary/50 rounded-2xl p-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">More Coming Soon</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Compression shorts, performance tanks, and more eco-engineered gear launching soon.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <span className="text-sm font-medium">Pre-orders open soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
