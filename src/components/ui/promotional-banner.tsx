
interface PromotionalBannerProps {
  title?: string
  bgColor?: string
  actionLabel?: string
  relatedProducts?: Array<{
    title: string
    price: number
    image: string
  }>
}

export function PromotionalBanner({
  title,
  bgColor = "#FFF6FB",
  actionLabel,
  relatedProducts
}: PromotionalBannerProps) {
  return (
    <div className="group relative overflow-hidden rounded-sm">
        <div 
          className="flex min-h-[230px] items-start justify-between p-4"
          style={{ backgroundColor: bgColor }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#151875]">{title}</h3>
            <span>

              {actionLabel}
              
            </span>
            
            {relatedProducts && (
              <div className="mt-4 ">
                {relatedProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-sm bg-white p-2">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[#151875]">{product.title}</p>
                      <p className="text-sm text-[#151875]">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        
        </div>
    </div>
  )
}

