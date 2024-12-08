"use client"

import Link from "next/link"
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  isNew?: boolean
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  isNew,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-none border-none">
      <div className="relative aspect-square overflow-hidden bg-[#F6F7FB]">
        {isNew && (
          <span className="absolute left-3 top-3 rounded bg-[#FB2E86] px-2 py-1 text-xs text-white">
            New
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute -left-12 bottom-3 flex flex-col gap-2 transition-all duration-300 group-hover:left-3">
          <Button
           
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button
           
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
           
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
            asChild
          >
            <Link href={`/product/${id}`}>
              <Search className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="p-4 text-center">
        <Link
          href={`/product/${id}`}
          className="text-sm font-bold text-[#FB2E86] hover:underline"
        >
          {title}
        </Link>
        <div className="mt-2 flex items-center justify-center gap-1">
         
            <span className="">
              
            </span>

            <span className="">
              
            </span>

            <span className="">
              
            </span>
          
        </div>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="font-bold text-[#151875]">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

