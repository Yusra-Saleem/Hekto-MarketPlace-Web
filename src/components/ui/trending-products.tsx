import { TrendingProductCard } from "@/components/ui/trending-product-card"
import { PromotionalBanner } from "@/components/ui/promotional-banner"

const trendingProducts = [
  {
    id: "1",
    title: "Cantilever chair",
    price: 26.00,
    originalPrice: 42.00,
    image: "/images/chair-2.png",
    href: "/product/1",
  },
  {
    id: "2",
    title: "Cantilever chair",
    price: 26.00,
    originalPrice: 42.00,
    image: "/images/chair5.png",
    href: "/product/1",
  },
  {
    id: "3",
    title: "Cantilever chair",
    price: 26.00,
    originalPrice: 42.00,
    image: "/images/chair-1.png",
    href: "/product/1",
  },
  {
    id: "4",
    title: "Cantilever chair",
    price: 26.00,
    originalPrice: 42.00,
    image: "/images/chair2.png",
    href: "/product/1",
  },
]


const executiveChairs = [
  {
    title: "Executive Seat chair",
    price: 32.00,
    image: "/images/trending-3.png"
  },
  {
    title: "Executive Seat chair",
    price: 32.00,
    image: "/images/trending-3.png"
  },
  {
    title: "Executive Seat chair",
    price: 32.00,
    image: "/images/trending-3.png"
  }
]

export function TrendingProducts() {
  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#151875]">
          Trending Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <TrendingProductCard key={product.id} {...product} />
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

              relatedProducts={executiveChairs}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

