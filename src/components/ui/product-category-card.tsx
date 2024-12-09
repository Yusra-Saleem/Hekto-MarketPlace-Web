import Link from "next/link"

interface ProductCategoryCardProps {
  title: string
  price: number
  image: string
  href: string
  isNew?: boolean
}

export function ProductCategoryCard({
  title,
  price,
  image,
  href,
  isNew
}: ProductCategoryCardProps) {
  return (
    <div className="group relative text-center">
      <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full bg-[#F6F7FB] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-lg">
        {isNew && (
          <span className="absolute left-4 top-4 rounded-sm bg-[#00FF66] px-2 py-0.5 text-xs font-medium text-white">
            New
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#2F1AC4] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="mt-6">
        <Link href={href} className="text-lg font-normal text-[#151875] hover:text-[#FB2E86]">
          {title}
        </Link>
        <p className="mt-1 text-base font-normal text-[#151875]">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

