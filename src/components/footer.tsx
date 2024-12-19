import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] pt-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="space-y-4 col-span-2">
            <h2 className="text-2xl font-bold text-[#0D0E43]">Hekto</h2>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="rounded-r-none border border-gray-400 text-gray-400 bg-purple-50"
              />
              <Button className="rounded-l-none rounded-r text-white bg-[#FB2E86]">Sign Up</Button>
            </div>
            <p className="text-sm text-[#8A8FB9]">Contact Info</p>
            <p className="text-sm text-[#8A8FB9]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#0D0E43]">Categories</h3>
            <ul className="space-y-2 text-sm text-[#8A8FB9]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#0D0E43]">Customer Care</h3>
            <ul className="space-y-2 text-sm text-[#8A8FB9]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#0D0E43]">Pages</h3>
            <ul className="space-y-2 text-sm text-[#8A8FB9]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-[#E7E4F8] py-4">
        <div className="container md:w-[1177px] mx-auto px-4">
          <div className="flex items-center px-16 justify-between text-sm text-[#9DA0AE]">
            <p>©2024 Hekto - All rights reserved</p>
            <div className="flex items-center gap-4">
              <Link href="#">
                <img
                  src="/images/fb.png"
                  alt="Payment method"
                  className="h-6"
                />
              </Link>
              <Link href="#">
                <img
                  src="/images/insta.png"
                  alt="Payment method"
                  className="h-6"
                />
              </Link>
              <Link href="#">
                <img
                  src="/images/x.png"
                  alt="Payment method"
                  className="h-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

