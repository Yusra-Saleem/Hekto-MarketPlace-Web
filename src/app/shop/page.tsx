"use client"

import * as React from "react"
import Link from "next/link"
import { Grid, LayoutGrid } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// This would typically come from an API or database
const products = [
  {
    id: "1",
    title: "Vel elit euismod",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/gray.png",
  },
  {
    id: "2",
    title: "Ultricies condimentum imperdiet",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/soft.png",
  },
  {
    id: "3",
    title: "Vitae suspendisse sed",
    price: 26.00,
    originalPrice: 42.00,
    rating: 3,
    image: "/images/gray.png",
  },
  {
    id: "4",
    title: "Sed ut perspiciatis",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/sgop-bag.png",
  },
  {
    id: "5",
    title: "Fusce pellentesque at",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/smart.png",
  },
  {
    id: "6",
    title: "Vestibulum magna laoreet",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/watch-1.png",
  },
  {
    id: "7",
    title: "Sollicitudin amet orci",
    price: 26.00,
    originalPrice: 42.00,
    rating: 3,
    image: "/images/red-h-p.png",
  },
  {
    id: "8",
    title: "Ultrices mauris sit",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/pink-sofa.png",
  },
  {
    id: "9",
    title: "Pellentesque condimentum ac",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/bracelate.png",
  },
  {
    id: "10",
    title: "Cras scelerisque velit",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/cam.png",
  },
  {
    id: "11",
    title: "Lectus vulputate faucibus",
    price: 26.00,
    originalPrice: 42.00,
    rating: 3,
    image: "/image/shop-h-p.png",
  },
  {
    id: "12",
    title: "Purus risus, ut",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/sgop-bag.png",
  },
]

export default function ShopPage() {
  const [view, setView] = React.useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = React.useState("featured")
  const [perPage, setPerPage] = React.useState("12")

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container lg:w-[1177px] mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Shop Grid Default</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Shop Grid Default</span>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container lg:w-[1177px] mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#151875]">
            Ecommerce Acceories & Fashion item
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Per Page:</span>
              <Select value={perPage} onValueChange={setPerPage}>
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort By:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">View:</span>
              <div className="flex">
                <Button
                  variant={view === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setView("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setView("list")}
                  className="rounded-l-none"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={
            view === "grid"
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "space-y-6"
          }
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <Button
            
            className="h-8 w-8 rounded-full p-0 text-[#FB2E86]"
          >
            1
          </Button>
          {[2, 3, 4].map((page) => (
            <Button
              key={page}
              
              className="h-8 w-8 rounded-full p-0"
            >
              {page}
            </Button>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-16 flex items-center justify-center gap-8 grayscale">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src="/placeholder.svg?height=50&width=120"
              alt={`Brand logo ${i + 1}`}
              className="h-12 w-auto opacity-50 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

