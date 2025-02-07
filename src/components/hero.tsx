"use client"

import * as React from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    title: "New Furniture Collection",
    subtitle: "Best Furniture For Your Castle....",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    titleSpan: "Trends in 2020",
    image: "/images/home-1.png",
    decorative: "/images/lamp.png",
  },
  {
    title: "Modern Interior Design",
    subtitle: "Elevate Your Living Space....",
    description:
      "Discover our latest collection of modern furniture designed to transform your home into a stylish sanctuary.",
    titleSpan: "Collection 2024",
    image: "/images/soft.png",
    decorative: "/images/lamp.png",
  },
  {
    title: "Sustainable Furniture",
    subtitle: "Eco-Friendly Choices For Your Home....",
    description:
      "Explore our range of sustainable furniture, crafted with care for both your home and the environment.",
    titleSpan: "Solutions",
    image: "/images/sofa-b.png",
    decorative: "/images/lamp.png",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlaying, nextSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide()
    }

    if (touchStart - touchEnd < -150) {
      prevSlide()
    }
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section
      className="relative bg-[#F2F0FF] lg::min-h-[80vh] overflow-hidden pr-4 md:pr-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className=" mx-auto  md:grid grid-cols-5 px-4 lg:h-[85vh]">
      <div className="relative">
                  <Image
                    src={slides[currentSlide].decorative || "/placeholder.svg"}
                    alt="Decorative lamp"
                    width={400}
                    height={800}
                    className="absolute top-0  opacity-30 lg:opacity-100"
                  />
                </div>
        <div className="grid h-full items-center lg:grid-cols-2 col-span-4 gap-8 md:mx-8 ">
        
          {/* Left Content */}
          <div className="relative z-10 md:max-w-xl  md:mx-auto lg:mx-0  lg:text-left pt-20 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
               
                <h3 className="text-[#FB2E86] text-base md:text-lg font-bold">{slides[currentSlide].subtitle}</h3>
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight">
                    {slides[currentSlide].titleSpan}
                  </h2>
                </div>
                <p className="text-[#8A8FB9] max-w-md mx-auto lg:mx-0">{slides[currentSlide].description}</p>
                <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white px-8 py-6 text-lg rounded-sm">
                  Shop Now
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content */}
          <div className="relative flex md:justify-center my-[30px] py-8 md:my[0px] items-center h-full mb-14 md:mb-0">
            {/* Background circles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="relative md:w-[900px] md:h-[900px]">
                {/* First circle */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px]  sm:w-[400px] sm:h-[400px]  md:w-[450px] md:h-[450px]  lg:h-[450px] lg:w-[450px] xl:w-[600px] xl:h-[600px] rounded-full"
                  style={{
                    background: "rgba(236, 210, 250, 0.35)",
                  }}
                />
                {/* Second circle */}
                <div
                  className="absolute right-[-30px] md:right-[-50px] top-[-20px] md:top-[45%] -translate-y-1/2 w-[300px] h-[300px]  sm:w-[400px] sm:h-[400px]  md:w-[450px] md:h-[450px]  lg:h-[450px] lg:w-[450px] xl:w-[600px] xl:h-[600px] rounded-full"
                  style={{
                    background: "rgba(236, 210, 250, 0.35)",
                  }}
                />
              </div>
            </div>

            {/* Main image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-[600px] xl:max-w-[800px]"
              >
                <div className="relative">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt="Featured Furniture"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                  <div
                    className="absolute top-[-18px] right-0 bg-[#00C1FE] text-white rounded-full flex items-center justify-center w-16 h-16 md:w-32 md:h-32"
                    style={{
                      boxShadow: "0 4px 20px rgba(0, 193, 254, 0.2)",
                    }}
                  >
                    <div className="text-center">
                      <p className=" text-lg md:text-4xl font-bold leading-none mb-1">50%</p>
                      <p className="text-base md:text-lg">off</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-[#FB2E86]" : "bg-[#FB2E86]/30"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

