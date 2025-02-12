"use client"

import * as React from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Image from "next/image"

export function PromoPopup() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [email, setEmail] = React.useState("")
  const [minutes, setMinutes] = React.useState(14)
  const [seconds, setSeconds] = React.useState(59)

  React.useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isOpen, minutes, seconds])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        console.log("Email submitted successfully")
        setIsOpen(false)
      } else {
        console.error("Failed to submit email")
      }
    } catch (error) {
      console.error("Error submitting email:", error)
    }
  }

  const onClose = () => setIsOpen(false)

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 overflow-y-auto z-50">
        <div className="flex min-h-full items-center justify-center  text-center  py-12 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-gradient-to-br from-white to-pink-50 p-6 text-left align-middle shadow-xl transition-all"
          >
            <button
              onClick={onClose}
              className=" absolute right-4 top-4 text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FB2E86] focus:ring-offset-2"
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6 text-gray-300" aria-hidden="true" />
            </button>

            <div className="mt-2">
              <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/images/promo.png"
                  alt="Luxury Sofa"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1">Exclusive Offer</h2>
                  <p className="text-sm sm:text-base opacity-90">Elevate Your Living Space</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                  className="text-4xl sm:text-5xl font-extrabold text-[#FB2E86]"
                >
                  SAVE 30%
                </motion.div>

                <p className="text-lg text-gray-600">on our premium collection of sofas and chairs</p>

                <div className="flex justify-center gap-3 font-mono">
                  <div className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg">
                    <span className="text-xl sm:text-2xl font-bold">{minutes.toString().padStart(2, "0")}</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-[#FB2E86]">:</span>
                  <div className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg">
                    <span className="text-xl sm:text-2xl font-bold">{seconds.toString().padStart(2, "0")}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 text-base sm:text-lg pl-10 pr-4 rounded-full border-2 border-[#151875] focus:ring-2 focus:ring-[#151875] focus:border-[#151875]"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                    <Button
                    type="submit"
                    className="w-full h-12 text-base sm:text-lg bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white rounded-full transition-all duration-200 transform hover:scale-105"
                    onClick={onClose}
                    >
                    Claim 30% Off Seating
                    </Button>
                </form>

                <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 underline">
                  No thanks, I'll pay full price
                </button>

                <p className="text-xs text-gray-500 mt-4">
                  Offer valid on select sofas and chairs. Cannot be combined with other promotions. Limited time offer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

