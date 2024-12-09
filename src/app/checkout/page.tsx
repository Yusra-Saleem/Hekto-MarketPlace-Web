"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// This would typically come from your cart state management
const cartItems = [
  {
    id: "1",
    title: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    title: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CheckoutPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 6.00
  const total = subtotal + shipping

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Hekto Demo</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Checkout</span>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <form className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email or mobile phone number</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">
                    Keep me up to date on news and exclusive offers
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div>
                  <Label htmlFor="apartment">
                    Apartment, suite, etc. (optional)
                  </Label>
                  <Input id="apartment" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div>
                    <Label htmlFor="postal">Postal code</Label>
                    <Input id="postal" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">Order notes (optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
            >
              Continue Shopping
            </Button>
          </form>

          <div>
            <div className="rounded-lg bg-[#F4F4FC] p-6">
              <h2 className="text-xl font-bold mb-4">Your Order</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        Color: {item.color}, Size: {item.size}
                      </p>
                      <p className="mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotals:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Totals:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    ✓ Shipping & taxes calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

