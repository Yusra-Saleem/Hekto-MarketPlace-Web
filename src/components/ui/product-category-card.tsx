"use client";
import Link from "next/link";

interface ProductCategoryCardProps {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export function ProductCategoryCard({
  _id,
  name,
  price,
  imageUrl,
}: ProductCategoryCardProps) {
  return (
    <div className="group relative text-center">
      <div className="relative mx-auto aspect-square w-56 overflow-hidden hover:border-l-[6px] hover:border-b-[6px] border-[#151875] rounded-full bg-[#F6F7FB] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-lg">
        {/* ✅ View Details button - Initially Hidden and Positioned Lower, Moves Up on Hover */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[18px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center mx-auto  bg-[#00FF66] px-2 p-1 rounded text-sm font-medium text-white">
          View Details
        </span>

        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-6">
        <Link href={_id} className="text-lg font-normal text-[#151875] hover:text-[#FB2E86] line-clamp-1">
          {name}
        </Link>
        <p className="mt-1 text-base font-normal text-[#151875]">${price}</p>
      </div>
    </div>
  );
}
