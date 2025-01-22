"use client";

import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/components/ui/CartProvider";
import { useWishlist } from '@/components/ui/WishListProvide';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity: 1,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
    });
  };

  return (
    <Card className="group relative overflow-hidden rounded-none border-none">
      <div className="flex justify-center">
        <div className="relative h-[280px] w-[270px] flex justify-center items-center overflow-hidden hover:bg-[#EBF4F3] bg-[#F6F7FB]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-[200px] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute -left-12 bottom-3 flex flex-col gap-2 transition-all duration-300 group-hover:left-3">
            <Button
              onClick={handleAddToCart}
              className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleAddToWishlist}
              className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
            >
              <Heart className={`h-4 w-4 ${isInWishlist(product._id) ? 'fill-[#FB2E86]' : ''}`} />
            </Button>
            <Button
              className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
              asChild
            >
              <Link href={`/product/${product._id}`}>
                <Search className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="py-4 group-hover:bg-[#E7E4F8] text-center">
        <Link
          href={`/product/${product._id}`}
          className="font-heading font-bold text-[#151875] hover:underline line-clamp-2"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-center my-4 gap-1">
          <span className="bg-[#DE9034] h-[10px] w-[10px] rounded-full"></span>
          <span className="bg-[#EC42A2] h-[10px] w-[10px] rounded-full"></span>
          <span className="bg-[#8568FF] h-[10px] w-[10px] rounded-full"></span>
        </div>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="font-bold text-[14px] font-heading text-[#151875]">${product.price}</span>
          <span className="text-[14px] text-[#EC42A2] font-heading line-through">
            ${product.priceWithoutDiscount?.toFixed(2) ?? "0.00"}
          </span>
        </div>
      </div>
    </Card>
  );
}