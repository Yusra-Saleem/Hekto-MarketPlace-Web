import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { QuantityInput } from "@/components/ui/quantity-input"

interface CartItemProps {
  
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: string[];
    colors: string[];
 
  quantity: number
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({
  _id,
  name,

  price,

  imageUrl,

  sizes,
  colors,
  

  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps)  {
  return (
    <tr className="border-b pr-4">
      <td className="py-4 ">
        <div className="flex items-center gap-2 md:gap-4">

          <div className="relative h-14 w-14  md:w-20 md:h-20 border ">
            <img src={imageUrl} alt={name} className="md:w-20 h-14 w-14   md:h-20  " />
            <Button
            variant="ghost"
            size="icon"
            className=" absolute top-[-18px] right-[-18px] hover:text-red-50"
            onClick={() => onRemove(_id)}
          >
            <X className="h-5 w-5 rounded-full p-[2px] text-white bg-black" />
          </Button>

          </div>
          <div>
            <h3 className=" text-sm md:text-base font-medium w-[80px] line-clamp-3 md:line-clamp-2 px-2  md:px-0 md:w-[300px]" >{name}</h3>
            <p className="text-sm hidden md:block text-gray-500">
              Color: {colors}, Size: {sizes}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 text-[#151875] font-semibold">${price}</td>
      <td className="py-4">
        <QuantityInput
  value={quantity}
  onChange={(value) => onQuantityChange(_id, value)}
/>
      </td>
      <td className="py-4 text-[#151875] font-semibold">${(price * quantity).toFixed(2)}</td>
    </tr>
  )
}

