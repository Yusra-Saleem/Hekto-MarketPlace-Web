import { ProductCategoryCard } from "@/components/ui/product-category-card"

const categories = [
  {
    id: "1",
    title: "Mini LCW Chair",
    price: 56.00,
    image: "/images/chair4.png",
    href: "/product/1",
    isNew: true,
  },
  {
    id: "2",
    title: "",
    price: 56.00,
    image: "/images/chair-3.png",
    href: "/product/1",
  },
  {
    id: "3",
    title: "Mini LCW Chair",
    price: 56.00,
    image: "/images/chair-4.png",
    href: "/product/1",
  },
  {
    id: "4",
    title: "Mini LCW Chair",
    price: 56.00,
    image: "/images/chair2.png",
    href: "/product/1",
  },
]

export function TopCategories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-[#1A0B5B]">
          Top Categories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <ProductCategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

