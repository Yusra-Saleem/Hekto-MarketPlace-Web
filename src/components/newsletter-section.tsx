"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <section className="relative overflow-hidden bg-[#F6F5FF] py-32">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mx-auto mb-8 max-w-2xl text-3xl font-bold text-[#151875]">
          Get Leatest Update By Subscribe Our Newsletter
        </h2>
        <form onSubmit={handleSubmit}>
          <Button type="submit" className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
            Shop Now
          </Button>
        </form>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

