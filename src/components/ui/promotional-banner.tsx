import Link from "next/link"

interface PromotionalBannerProps {
  title: string
  image: string
  href: string
  bgColor?: string
  relatedProducts?: Array<{
    title: string
    price: number
    image: string
  }>
}

export function PromotionalBanner({
  title,
  image,
  href,
  bgColor = "#FFF6FB",
  relatedProducts
}: PromotionalBannerProps) {
  return (
    <div className="group relative overflow-hidden rounded-sm">
      <Link href={href} className="block">
        <div 
          className="flex h-48 items-center justify-between p-6"
          style={{ backgroundColor: bgColor }}
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#151875]">{title}</h3>
            {relatedProducts && (
              <div className="space-y-2">
                {relatedProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-12 w-12 rounded-sm object-cover"
                    />
                    <div>
                      <p className="text-sm text-[#151875]">{product.title}</p>
                      <p className="text-sm text-[#151875]">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <img
            src={image}
            alt={title}
            className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  )
}

