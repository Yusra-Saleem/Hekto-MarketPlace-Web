import Link from "next/link"




interface TrendingProductCardProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
}

export function TrendingProductCard({
  _id,
  name,
  
  price,
  
  priceWithoutDiscount,
  
  imageUrl
}: TrendingProductCardProps) {
  return (
    <Link href={`/product/${_id}`} className="group block text-center">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-[#F7F7F7] p-8">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-normal text-[#151875] line-clamp-2">{name}</h3>
        <div className="flex items-center justify-center gap-3">
          <span className="text-base font-normal text-[#151875]">${price}</span>
          <span className="text-base font-normal text-[#FB2448] line-through">
            ${priceWithoutDiscount}
          </span>
        </div>
      </div>
    </Link>
  )
 
}