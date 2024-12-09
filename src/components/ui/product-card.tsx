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
  color?:boolean
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  isNew,
  color,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-none border-none">
      <div className="relative h-[280px] w-[270px] flex justify-center items-center overflow-hidden  hover:bg-[#EBF4F3] bg-[#F6F7FB]">
        {isNew && (
          <span className="absolute left-3 top-3 rounded bg-[#FB2E86] px-2 py-1 text-xs text-white">
            New
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-[200px] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute -left-12 bottom-3 flex flex-col gap-2 transition-all duration-300 group-hover:left-3">
          <Button
           
            className="h-8 w-8 rounded-full  bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
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
      <div className="py-4 group-hover:bg-[#E7E4F8] text-center">
        <Link
          href={`/product/${id}`}
          className="font-heading font-bold text-[#151875] hover:underline"
        >
          {title}
        </Link>
        {color && (
          
        <div className=" flex items-center justify-center my-4 gap-1">
         
            <span className="bg-[#DE9034] h-[10px] w-[10px] rounded-full">
              
            </span>

            <span className="bg-[#EC42A2] h-[10px] w-[10px] rounded-full">
              
            </span>

            <span className="bg-[#8568FF] h-[10px] w-[10px] rounded-full">
              
            </span>
          
        </div>
        )}
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="font-bold text-[14px] font-heading text-[#151875]">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-[14px]  text-[#EC42A2] font-heading line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

