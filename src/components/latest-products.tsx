"use client"

import * as React from "react"
import { ProductCard } from "@/components/ui/product-card-home"

const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"]

const latestProducts = [
  {
    id: "1",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair1.png",
   
  },
  {
    id: "2",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair2.png",
  },
  {
    id: "3",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair3.png",
  },
  {
    id: "4",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair4.png",
  },
  {
    id: "5",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair5.png",
  },
  {
    id: "6",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair-4.png",
  },
]

export function LatestProducts() {
  const [activeCategory, setActiveCategory] = React.useState("New Arrival")

  return (
    <section className="py-16">
      <div className="  md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          Latest Products
        </h2>
        <div className="mb-8 flex justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base ${
                activeCategory === category
                  ? "text-[#FB2E86]"
                  : "text-[#151875]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

