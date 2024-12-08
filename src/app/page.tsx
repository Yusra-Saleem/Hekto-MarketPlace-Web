import { Clock, ShieldCheck, Trophy, Truck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card-home"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import Hero from "@/components/hero"
// Sample data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: "1",
    title: "Cantilever Chair",
    price: 42.00,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: "2",
    title: "Modern Chair",
    price: 38.00,
    image: "/placeholder.svg?height=300&width=300",
  },
  // Add more products...
]

const latestProducts = [
  {
    id: "3",
    title: "Comfort Handy Craft",
    price: 65.00,
    image: "/placeholder.svg?height=300&width=300",
  },
  // Add more products...
]

const trendingProducts = [
  {
    id: "7",
    title: "Cantilever Chair",
    price: 26.00,
    image: "/placeholder.svg?height=300&width=300",
  },
  // Add more products...
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero/>
      {/* Featured Products */}
      <section className="py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <SectionHeader title="Featured Products" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <SectionHeader title="Latest Products" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* What Shopex Offer */}
      <section className="bg-[#F6F5FF] py-16">
        <div className="container lg:w-[1177px] mx-auto ">
          <SectionHeader title="What Shopex Offer!" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Truck className="h-8 w-8" />}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ServiceCard
              icon={<ShieldCheck className="h-8 w-8" />}
              title="Money Back Guarantee"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ServiceCard
              icon={<Trophy className="h-8 w-8" />}
              title="Premium Quality"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ServiceCard
              icon={<Clock className="h-8 w-8" />}
              title="Free Shipping"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Featured Chair"
                className="w-full rounded-lg bg-[#F6F7FB] p-8"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-[#151875]">
                Unique Features Of leatest & Trending Products
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F52B70]" />
                  All frames constructed with hardwood solids and laminates
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2B2BF5]" />
                  Reinforced with double wood dowels, glue, screw - nails corner blocks
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2BF5CC]" />
                  Arms, backs and seats are structurally reinforced
                </li>
              </ul>
              <div className="mt-8 space-x-4">
                <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                  Add To Cart
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <SectionHeader title="Trending Products" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Discount Offer */}
      <section className="bg-[#F6F5FF] py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-[#FB2E86]">Discount Item</h3>
              <h2 className="mb-6 text-3xl font-bold text-[#151875]">
                20% Discount Of All Products
              </h2>
              <p className="mb-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <Button className="w-fit bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                Shop Now
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Discount Chair"
                className="w-full rounded-lg bg-[#FFF6FB] p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#151875]">
              Get Leatest Update By Subscribe Our Newsletter
            </h2>
            <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-16">
        <div className="container lg:w-[1177px] mx-auto">
          <SectionHeader title="Latest Blog" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((blog) => (
              <div key={blog} className="group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt={`Blog ${blog}`}
                  className="mb-4 w-full rounded-lg"
                />
                <div className="space-y-2">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>By Admin</span>
                    <span>December 12, 2023</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#151875] group-hover:text-[#FB2E86]">
                    Top essential Trends in 2023
                  </h3>
                  <p className="text-gray-600">
                    More off this less hello samlande lied much over tightly circa
                    horse taped mightly
                  </p>
                  <Button variant="link" className="p-0 text-[#FB2E86]">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

