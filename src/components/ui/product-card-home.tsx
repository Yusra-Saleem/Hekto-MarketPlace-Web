import Link from "next/link"
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  isNew?: boolean
  isFeatured?: boolean
  discount?: string
}

export function ProductCard({
  id,
  title,
  price,
  image,
  isNew,
  discount,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden border-none">
      <div className="relative aspect-square overflow-hidden bg-[#F6F7FB]">
        {isNew && (
          <span className="absolute left-3 top-3 z-10 rounded bg-[#FB2E86] px-2 py-1 text-xs text-white">
            New
          </span>
        )}
        {discount && (
          <span className="absolute left-3 top-3 z-10 rounded bg-[#FB2E86] px-2 py-1 text-xs text-white">
            {discount}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute -right-12 top-3 flex flex-col gap-2 transition-all duration-300 group-hover:right-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
            asChild
          >
            <Link href={`/products/${id}`}>
              <Search className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center text-center">
        <Link
          href={`/products/${id}`}
          className="text-sm font-bold text-[#FB2E86]  hover:underline"
        >
          {title}
        </Link>
        <div className="">
          <span className="font-bold text-[#151875]">${price.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  )
}

