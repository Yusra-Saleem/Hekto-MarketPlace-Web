"use client"
import { TrendingProductCard } from "@/components/ui/trending-product-card"
import { PromotionalBanner } from "@/components/ui/promotional-banner"
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";




interface Product {
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



async function getProducts() {
  try {
    const products = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
      }[14...18]
    `);
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

// fetch data from sanity for excutive chairs 
async function getExecutiveChairs() {
  try {
    const products = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
      }[2...5]
    `);
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}



export function TrendingProducts() {
  const [latestProducts, setLatestProducts] = useState<Product[]>([])
  const [executiveChairs, setExecutiveChairs] = useState<Product[]>([])


  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts()
      const fetchedExecutiveChairs = await getExecutiveChairs()
      setExecutiveChairs(fetchedExecutiveChairs)
      setLatestProducts(fetchedProducts)
    }
    fetchData()
  }, [])
  return (
    
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#151875]">
          Trending Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {latestProducts.map((product: Product) => (
            <TrendingProductCard key={product._id} {...product} />
          ))}
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3 md:grid-cols-8">
          <div className="col-span-3 relative">
            <PromotionalBanner
              title="23% off in all products"
              bgColor="#FFF6FB"
              actionLabel="Shop Now"

            />
               <img
              src="/images/trending-2.png"
              alt="/images/trending-2.png"
              className=" right-[0px] absolute top-[25px] "
            />
          </div>
          <div className="col-span-3 relative">
            <PromotionalBanner
              title="23% off in all products"
              bgColor="#F6F7FB"
              actionLabel="View Collection"

            />
            <img
              src="/images/trending-1.png"
              alt="/images/trending-2.png"
              className=" right-[0px] absolute top-[60px] "
            />
          </div>
          <div className="col-span-2">
            <PromotionalBanner

              relatedProducts={executiveChairs.map(chair => ({
                title: chair.name,
                price: chair.price,
                image: chair.imageUrl
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

