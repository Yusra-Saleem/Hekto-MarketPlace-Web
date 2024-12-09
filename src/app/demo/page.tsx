"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/ui/cart-item"
import { Input } from "@/components/ui/input"

// This would typically come from your cart state management
const initialCartItems = [
  {
    id: "1",
    title: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    title: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    title: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "4",
    title: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "5",
    title: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState(initialCartItems)
  const [shippingCountry, setShippingCountry] = React.useState("")
  const [shippingState, setShippingState] = React.useState("")
  const [shippingZip, setShippingZip] = React.useState("")

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 6.00
  const total = subtotal + shipping

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Shopping Cart</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-4">Product</th>
                    <th className="py-4">Price</th>
                    <th className="py-4">Quantity</th>
                    <th className="py-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onQuantityChange={handleQuantityChange}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="outline"
                onClick={handleClearCart}
                className="bg-[#FB2E86] text-white hover:bg-[#FB2E86]/90"
              >
                Clear Cart
              </Button>
              <Button
                variant="outline"
                asChild
                className="bg-[#FB2E86] text-white hover:bg-[#FB2E86]/90"
              >
                <Link href="/shop">Update Cart</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            {/* Cart Totals */}
            <div className="rounded-lg bg-[#F4F4FC] p-6">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotals:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Totals:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">
                  ✓ Shipping & taxes calculated at checkout
                </p>
                <Button
                  className="w-full bg-[#FB2E86] hover:bg-[#FB2E86]/90"
                  asChild
                >
                  <Link href="/checkout">Proceed To Checkout</Link>
                </Button>
              </div>
            </div>

            {/* Calculate Shipping */}
            <div className="rounded-lg bg-[#F4F4FC] p-6">
              <h2 className="text-xl font-bold mb-4">Calculate Shopping</h2>
              <div className="space-y-4">
                <Input
                  placeholder="Bangladesh"
                  value={shippingCountry}
                  onChange={(e) => setShippingCountry(e.target.value)}
                />
                <Input
                  placeholder="Mirpur Dhaka - 1200"
                  value={shippingState}
                  onChange={(e) => setShippingState(e.target.value)}
                />
                <Input
                  placeholder="Postal Code"
                  value={shippingZip}
                  onChange={(e) => setShippingZip(e.target.value)}
                />
                <Button className="w-full bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                  Calculate Shipping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

