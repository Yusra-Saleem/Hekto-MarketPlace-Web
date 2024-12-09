import { Heart, Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const featuredProducts = [
  {
    id: "1",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-1.png",
  },
  {
    id: "2",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-2.png",
  },
  {
    id: "3",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-3.png",
  },
  {
    id: "4",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-4.png",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 justify-center lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group relative w-[270px] shadow-md overflow-hidden rounded-none border-none"
            >
              <div className="relative h-[280px] w-[270px] flex justify-center items-center overflow-hidden hover:bg-[#EBF4F3] bg-[#F6F7FB]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[200px] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -left-36 top-3 flex  gap-2 transition-all duration-300 group-hover:left-3">
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
                    <Link href={`/product/${product.id}`}>
                      <Search className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="py-4 group-hover:bg-[#151875]  text-center">
                <Link
                  href={`/product/${product.id}`}
                  className="font-heading font-bold group-hover:text-white text-pink-500 hover:underline"
                >
                  {product.title}
                </Link>
                <h3 className="font-heading font-bold group-hover:text-white text-[#151875] ">CODE : Y34579</h3>
                <div className="flex items-center justify-center my-4 gap-1">
                  <span className="bg-[#DE9034] h-[5px] w-[20px] rounded-full"></span>
                  <span className="bg-[#EC42A2] h-[5px] w-[20px] rounded-full"></span>
                  <span className="bg-[#8568FF] h-[5px] w-[20px] rounded-full"></span>
                </div>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="font-bold text-[14px] font-heading group-hover:text-white text-[#151875]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
