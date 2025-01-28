'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../../components/ui/WishListProvide';
import { useCart } from '../../components/ui/CartProvider';

type WishlistItem = {
  id: string;
  name: string;
  image: string;
  color?: string;
  size?: string;
  price: number;
};

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  console.log('Wishlist items:', wishlist); // Debugging: Check if wishlist is being passed correctly

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({ ...item, quantity: 1 });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1177px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">
            Wishlist
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Wishlist</span>
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="container md:w-[1177px] mx-auto px-4 py-16">
        {wishlist.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#151875] mb-4">
              Your wishlist is empty
            </h2>
            <Link href="/shop">
              <Button className="bg-[#FB2E86] text-white hover:bg-[#FB2E86]/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow  flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" h-[230px] mx-auto  object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#151875] line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Color: {item.color || 'N/A'}, Size: {item.size || 'N/A'}
                  </p>
                  <p className="text-xl font-bold text-[#FB2E86] mt-2">
                    ${item.price}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      className="flex-1 bg-[#FB2E86] text-white hover:bg-[#FB2E86]/90"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="mr-[2px] h-4 w-4" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="text-[#FB2E86] border-[#FB2E86] hover:bg-[#FB2E86]/10 mr-2"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="mr-[2px] h-4 w-4" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}