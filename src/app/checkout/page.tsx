"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const cartItems = [
  {
    id: 1,
    name: "Ut diam consequat",
    price: 32.00,
    image: "/images/cart-5.png",
    size: "XL",
    color: "Brown",
  },
  {
    id: 2,
    name: "Ut diam consequat",
    price: 32.00,
    image: "/images/demo-2.png",
    size: "XL",
    color: "Brown",
  },
  {
    id: 3,
    name: "Ut diam consequat",
    price: 32.00,
    image: "/images/demo-3.png",
    size: "XL",
    color: "Brown",
  },
  {
    id: 4,
    name: "Ut diam consequat",
    price: 32.00,
    image: "/images/demo-4.png",
    size: "XL",
    color: "Brown",
  },
  {
    id: 5,
    name: "Ut diam consequat",
    price: 32.00,
    image: "/images/demo-5.png",
    size: "XL",
    color: "Brown",
  },
]

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  postalCode: z.string().min(5, "Postal code is required"),
  saveInfo: z.boolean().default(false),
})

export default function CheckoutPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apartment: "",
      city: "",
      country: "",
      postalCode: "",
      saveInfo: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0)
  const shipping = 86.00
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-white">

       {/* Page Header */}
  <div className="h-[286px] bg-[#F6F5FF]  flex items-center py-16">
    <div className="container  md:w-[1177px] mx-auto px-4">
      <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">Hekto Demo</h1>
    </div>
  </div>

  <main className="container  md:w-[1177px] mx-auto px-4 py-16 sm:px-2 sm:py-8">
    <div className="mb-10">
      <h1 className="text-xl font-bold text-[#101750] md:text-xl">Hekto Demo</h1>
      <h2 className="mt-4   text-[#101750] ">
      Cart/ Information/ Shipping/ Payment
          </h2>
    </div>
    <div className="grid gap-8 lg:grid-cols-3 grid-cols-1">
      <div className="space-y-8 bg-gray-100 lg:col-span-2 px-6 py-16 rounded-[4px]">
        <div >
          <div className="flex mb-8 flex-col md:flex-row md:justify-between">
          <h2 className="mb- text-xl font-bold text-[#101750] sm:text-lg">
            Contact Information
          </h2>
          <p className="text-sm text-gray-400">
          Already have an account? Log in
          </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mb-24"
            >
            
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" border-b-[3px] border-gray-300">
                    <FormControl>
                      <Input type="email" placeholder="Email" className=" border-none text-gray-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
              <FormField
                control={form.control}
                name="saveInfo"
                render={({ field }) => (
                  <FormItem className="flex  items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-600">
                      Save this information for next time
                    </FormLabel>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div>
          <h2 className="mb-8 text-xl font-bold text-[#101750] sm:text-lg">
            Shipping Address
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className=" border-b-[3px] border-gray-300">
                      <FormControl>
                        <Input placeholder="First Name"  className=" border-none text-gray-400" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className=" border-b-[3px] border-gray-300" >
                      <FormControl>
                        <Input placeholder="Last Name" className=" border-none text-gray-400" {...field} />
                      </FormControl>
                      <FormMessage />
                      
                    </FormItem>
                  )}
                  
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className=" border-b-[3px] border-gray-300">
                    <FormControl>
                      <Input placeholder="Address" className=" border-none text-gray-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem className=" border-b-[3px] border-gray-300">
                    <FormControl>
                      <Input
                        placeholder="Apartment, suite, etc. (optional)" className=" border-none text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className=" border-b-[3px] border-gray-300">
                      <FormControl>
                        <Input placeholder="City" className=" border-none text-gray-400" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem className=" border-b-[3px] border-gray-300">
                      <FormControl>
                        <Input placeholder="Postal Code" className=" border-none text-gray-400"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className=" border-b-[3px] border-gray-300">
                    <FormControl>
                      <Input placeholder="Country" className=" border-none text-gray-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
            </form>
          </Form>
        </div>
        <Button
            type="button"
            className="flex-1 bg-[#FB2E86] text-white md:mt-14 rounded-[2px] hover:bg-[#FB2E86]/90"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </Button>
      </div>

      <div className="  p-8">
        <div className=" mb-14 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex border-b pb-4 sm:flex-row items-start sm:items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg bg-white object-cover p-2"
              />
              <div className="flex-grow">
                <h3 className="font-medium ">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Size: {item.size}, Color: {item.color}
                </p>
              </div>
              <p className="font-medium text-[#101750]">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        {/* Cart Totals */}
        <div className="rounded-xl bg-[#F4F4FC] p-6">
         
          <div className="space-y-4">
            <div className="flex justify-between border-b py-4 text-[#151875]  font-heading">
              <span>Subtotals:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b py-4 text-[#151875]  font-heading">
              <span>Totals:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 py-2">
              ✓ Shipping & taxes calculated at checkout
            </p>
            <Button
              className="w-full bg-green-500 rounded-[6px] font-semibold text-white hover:bg-green-600/90"
              asChild
            >
              <Link href="/checkout">Proceed To Checkout</Link>
            </Button>
          </div>
        </div>
       
      </div>
    </div>
  </main>
</div>

  )
}

