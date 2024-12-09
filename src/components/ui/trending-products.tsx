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

export function TrendingProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#151875]">
          Trending Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <TrendingProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <PromotionalBanner
            title="23% off in all products"
            image="/images/chair-2.png"
            href="/sale"
            bgColor="#FFF6FB"
          />
          <PromotionalBanner
            title="23% off in all products"
            image="/images/chair-4.png"
            href="/sale"
            bgColor="#F6F7FB"
            relatedProducts={[
              {
                title: "Executive Seat chair",
                price: 32.00,
                image: "/images/chair2.png"
              },
              {
                title: "Executive Seat chair",
                price: 32.00,
                image: "/images/chair4.png"
              },
              {
                title: "Executive Seat chair",
                price: 32.00,
                image: "/images/chair-3.png"
              }
            ]}
          />
        </div>
      </div>
    </section>
  )
}

