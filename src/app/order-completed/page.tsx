import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrandLogos } from "@/components/ui/brand-logos"

export default function OrderCompletedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Header */}
        <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
          <div className="container md:w-[1177px] mx-auto px-4">
            <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">Order Completed</h1>
            <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
              <Link href="/">Home</Link>
              <span>•</span>
              <Link href="/pages">Pages</Link>
              <span>•</span>
              <span className="text-[#FB2E86]">Order Completed</span>
            </div>
          </div>
        </div>

        {/* Order Completed Content */}
        <div className="container md:w-[1177px] mx-auto md:py-[200px]  px-4 py-16">
          <div className=" py-8 md:py-[-10px] md:pb-24 px-8 w-[80%] mx-auto relative border-l border-dashed border-b text-center ">
            <img src="/images/clock.png" alt ="vector" className="top-[0px] absolute -left-[50px]"/>

            <div className=" flex justify-center ">
            <svg  className="-top-[80px] absolute  " width="48"  height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.31099 26.5001L14.311 37.5001C15.7293 38.7002 17.235 37.0001 17.8105 36L22.3105 30C21.8105 30.1667 22.8105 28.2 30.8105 19C40.8105 7.5 41.8105 9 46.8105 6C48.0105 2 44.9772 1 43.3105 1C42.6439 1.33333 40.8105 2.3 38.8105 3.5C33.6105 6.7 25.6439 15.1667 22.3105 19L14.311 29C13.4775 28.1667 10.6106 25.5001 5.81099 21.5001C0.610994 20.7001 0.644327 24.5001 1.31099 26.5001Z" fill="#FF1788" stroke="#FF1788"/>
</svg>

</div>
            <h1 className="text-[36px] font-bold text-[#151875] mb-8">
              Your Order Is Completed!
            </h1>
            <p className="text-[#8D92A7] text-base max-w-[667px] mx-auto leading-relaxed mb-8">
              Thank you for your order! Your order is being processed and will be completed within 3-6
              hours. You will receive an email confirmation when your order is completed.
            </p>
            <Button 
              asChild
              className="bg-[#FF1788] hover:bg-[#FF1788]/90 text-white px-8 h-12 rounded-sm text-base font-normal"
            >
              <Link href="/shop">
                Continue Shopping
              </Link>
            </Button>
            <img src="/images/board.png" alt ="vector" className="-right-[40px] absolute -bottom-[34px]"/>
          </div>
        </div>

        <BrandLogos />
      </main>
    </div>
  )
}

