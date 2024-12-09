import { Clock, ShieldCheck, Trophy, Truck } from 'lucide-react'
import { ServiceCard } from "@/components/ui/service-card"

export function WhatShopexOffers() {
  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          What Shopex Offers!
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<Truck className="h-8 w-8" />}
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ServiceCard
            icon={<ShieldCheck className="h-8 w-8" />}
            title="Money Back Guarantee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ServiceCard
            icon={<Trophy className="h-8 w-8" />}
            title="Premium Quality"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8" />}
            title="Free Shipping"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </div>
    </section>
  )
}

