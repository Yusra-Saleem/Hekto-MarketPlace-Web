import Link from "next/link"
import { cn } from "@/lib/utils"

interface TrendingProductCardProps {
  title: string
  price: number
  originalPrice: number
  image: string
  href: string
  className?: string
}

export function TrendingProductCard({
  title,
  price,
  originalPrice,
  image,
  href,
  className
}: TrendingProductCardProps) {
  return (
    <Link 
      href={href}
      className={cn("group block text-center", className)}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm bg-[#F7F7F7] p-8">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-normal text-[#151875]">{title}</h3>
        <div className="flex items-center justify-center gap-3">
          <span className="text-base font-normal text-[#151875]">${price.toFixed(2)}</span>
          <span className="text-base font-normal text-[#FB2448] line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  )
}

