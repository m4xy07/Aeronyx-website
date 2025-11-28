export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  features: string[]
  images: string[]
  category: string
  sizes: string[]
  inStock: boolean
  badge?: string
}

export const products: Product[] = [
  {
    id: "compression-tee-white",
    name: "Performance Compression Tee",
    price: 2499,
    originalPrice: 2999,
    description:
      "Engineered for maximum performance, our signature compression tee boosts circulation and provides a sculpted fit. Made from recycled performance fibres for eco-conscious athletes.",
    features: [
      "High-quality compression technology",
      "Sweat-wicking breathable fabric",
      "Made from recycled fibres",
      "Muscle stabilization support",
      "Quick-dry technology",
    ],
    images: [
      "/images/whatsapp-20image-202025-11-28-20at-208.jpeg",
      "/images/whatsapp-20image-202025-11-28-20at-208.jpeg",
      "/images/whatsapp-20image-202025-11-28-20at-208.jpeg",
    ],
    category: "Compression",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: "eco-hoodie-brown",
    name: "Eco Comfort Hoodie",
    price: 3499,
    originalPrice: 3999,
    description:
      "The perfect blend of comfort and sustainability. Our eco hoodie features hybrid comfort with eco-warmth technology, ideal for training sessions or casual wear.",
    features: [
      "Eco-engineered warmth technology",
      "Soft organic cotton blend",
      "Recycled polyester lining",
      "Adjustable drawstring hood",
      "Kangaroo pocket design",
    ],
    images: [
      "/images/whatsapp-20image-202025-11-28-20at-208.jpeg",
      "/images/whatsapp-20image-202025-11-28-20at-208.jpeg",
    ],
    category: "Comfort",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    badge: "New Arrival",
  },
]
