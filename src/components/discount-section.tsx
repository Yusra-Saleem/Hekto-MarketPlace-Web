"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const features = [
  "Material expose like metals",
  "Simple neutral colours",
  "Clear lines and geomatric figures",
  "Material expose like metals"
]

export function DiscountSection() {
  const [activeTab, setActiveTab] = React.useState("wood")

  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-base font-medium text-[#FB2E86]">Discount Item</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("wood")}
                  className={`text-sm ${
                    activeTab === "wood" ? "text-[#FB2E86]" : "text-[#151875]"
                  }`}
                >
                  Wood Chair
                </button>
                <span className="text-[#151875]">•</span>
                <button
                  onClick={() => setActiveTab("plastic")}
                  className={`text-sm ${
                    activeTab === "plastic" ? "text-[#FB2E86]" : "text-[#151875]"
                  }`}
                >
                  Plastic Chair
                </button>
                <span className="text-[#151875]">•</span>
                <button
                  onClick={() => setActiveTab("sofa")}
                  className={`text-sm ${
                    activeTab === "sofa" ? "text-[#FB2E86]" : "text-[#151875]"
                  }`}
                >
                  Sofa Collection
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#151875]">
                20% Discount Of All Products
              </h2>
              <p className="text-[#B7BACB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <ul className="grid gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#B7BACB]">
                    <Check className="h-4 w-4 text-[#7E33E0]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative  ">
            <div className="absolute inset-0 w-[80%] rounded-full flex justify-center items-center pr-12 bg-[#FFF6FB]" />
            <img
              src="/images/discount.png"
              alt="Discount Chair"
              className="relative z-10  mr-12 md:mr-20  w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

