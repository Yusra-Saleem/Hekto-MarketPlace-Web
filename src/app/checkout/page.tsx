"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/components/ui/CartProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the form schema using Zod
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  postalCode: z.string().min(5, "Postal code is required"),
  saveInfo: z.boolean().default(false),
});

export default function CheckoutPage() {
  const { cart, subtotal, total } = useCart();
  type Rate = {
    rate_id: string;
    service_type: string;
    shipping_amount: { amount: number };
    estimated_delivery_date: string;
  };
  const [rates, setRates] = React.useState<Rate[]>([]);
  const [selectedRate, setSelectedRate] = React.useState<Rate | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      apartment: "",
      city: "",
      country: "",
      postalCode: "",
      saveInfo: false,
    },
  });

  const fetchShippingRates = async () => {
    setIsLoading(true);
    try {
      const carrierIds = [
        process.env.NEXT_PUBLIC_SHIPENGINE_FIRST_CARRIER_ID?.trim().replace(
          /['"]+/g,
          ""
        ),
        process.env.NEXT_PUBLIC_SHIPENGINE_SECOND_CARRIER_ID?.trim().replace(
          /['"]+/g,
          ""
        ),
        process.env.NEXT_PUBLIC_SHIPENGINE_THIRD_CARRIER_ID?.trim().replace(
          /['"]+/g,
          ""
        ),
        process.env.NEXT_PUBLIC_SHIPENGINE_FOURTH_CARRIER_ID?.trim().replace(
          /['"]+/g,
          ""
        ),
      ].filter(Boolean); // Remove undefined/null values

      if (carrierIds.length === 0) {
        toast.error(
          "No valid carrier IDs found. Please check your environment variables."
        );
        return;
      }

      const response = await fetch("/api/shipengine/getRates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: {
            name: "Your Store",
            address_line1: "123 Main St",
            city_locality: "New York",
            state_province: "NY",
            postal_code: "10001",
            country_code: "US",
            phone: "123-456-7890",
          },
          to: {
            name: "Customer Name",
            address_line1: "456 Elm St",
            city_locality: "San Francisco",
            state_province: "CA",
            postal_code: "94107",
            country_code: "US",
            phone: "987-654-3210",
          },
          weight: 1.5, // Replace with actual weight
          rate_options: {
            carrier_ids: carrierIds,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("ShipEngine API Error:", errorData);
        throw new Error(
          errorData.errors?.[0]?.message || "Failed to fetch shipping rates"
        );
      }

      const data = await response.json();
      if (!data.rate_response || !data.rate_response.rates) {
        throw new Error("Invalid response format");
      }

      setRates(data.rate_response.rates);
    } catch (error) {
      console.error("Error fetching shipping rates:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to fetch shipping rates. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  console.log(
    "First Carrier ID:",
    process.env.NEXT_PUBLIC_SHIPENGINE_FIRST_CARRIER_ID
  );
  console.log(
    "Second Carrier ID:",
    process.env.NEXT_PUBLIC_SHIPENGINE_SECOND_CARRIER_ID
  );

  const handleCheckout = async () => {
    async () => {
      setIsLoading(true);
      try {
        // Perform checkout logic here
      } catch (error) {
        console.error('Checkout error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!selectedRate) {
      toast.error("Please select a shipping rate.");
      return;
    }

    const labelPrice = 5.0; // Example label price (replace with actual value)
    const shippingRate = selectedRate.shipping_amount.amount; // Shipping cost from selected rate
    const tax = 3.5; // Example tax (replace with actual value)
    const totalAmount = subtotal + shippingRate + tax + labelPrice;

    try {
      // Prepare order data
      const orderData = {
        _type: "order",
        cartItems: cart.map((item) => ({
          _type: "cartItem",
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        subtotal,
        total: totalAmount,
        shippingRate: {
          rateId: selectedRate.rate_id, // Use the selected rate's ID
          serviceType: selectedRate.service_type, // Use the selected rate's service type
          cost: selectedRate.shipping_amount.amount, // Use the selected rate's cost
          estimatedDelivery: selectedRate.estimated_delivery_date, // Use the selected rate's estimated delivery date
        },
        shippingLabel: {
          labelId: "LABEL12345", // Replace with actual label ID
          trackingNumber: "TRACK12345", // Replace with actual tracking number
          labelUrl: "https://example.com/label/LABEL12345", // Replace with actual label URL
          labelPrice,
          tax,
          service_type: selectedRate.service_type,
          info_date: new Date().toISOString(),
          shop_fit_owner: "Your Store",
          translate: false,
          validate_to_stress: "valid",
        },
        trackingStatus: {
          status: "Processing",
          lastUpdated: new Date().toISOString(),
          location: "Warehouse",
          estimatedDelivery: selectedRate.estimated_delivery_date,
        },
        paymentDetails: {
          paymentId: "example_payment_id", // Replace with actual payment ID
          paymentStatus: "Paid",
          paymentMethod: "Credit Card",
          amountPaid: totalAmount,
        },
      };

      // Save order to Sanity
      const saveOrderResponse = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!saveOrderResponse.ok) {
        throw new Error("Failed to save order to Sanity");
      }

      const { orderId } = await saveOrderResponse.json();

      // Create Stripe session
      const stripeResponse = await fetch("/api/checkout-route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartItems: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          orderId,
          labelPrice,
          shippingRate,
          tax,
          totalAmount,
        }),
      });

      if (!stripeResponse.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const { id } = await stripeResponse.json();

      // Redirect to Stripe checkout
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      await stripe?.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to process checkout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1177px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">
            Hekto Demo
          </h1>
        </div>
      </div>

      <main className="container md:w-[1177px] mx-auto px-4 py-16 sm:px-2 sm:py-8">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-[#101750] md:text-xl">
            Hekto Demo
          </h1>
          <h2 className="mt-4 text-[#101750]">
            Cart/ Information/ Shipping/ Payment
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 grid-cols-1">
          {/* Shipping Form */}
          <div className="space-y-8 bg-gray-100 lg:col-span-2 px-6 py-16 rounded-[4px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleCheckout)}
                className="space-y-8"
              >
                {/* Form Fields */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="border-b-[3px] border-gray-300">
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="border-none text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="saveInfo"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
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
                <div>
                  <h2 className="mb-8 text-xl font-bold text-[#101750] sm:text-lg">
                    Shipping Address
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="border-b-[3px] border-gray-300">
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              className="border-none text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="border-b-[3px] border-gray-300">
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              className="border-none text-gray-400"
                              {...field}
                            />
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
                      <FormItem className="border-b-[3px] border-gray-300">
                        <FormControl>
                          <Input
                            placeholder="Address"
                            className="border-none text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apartment"
                    render={({ field }) => (
                      <FormItem className="border-b-[3px] border-gray-300">
                        <FormControl>
                          <Input
                            placeholder="Apartment, suite, etc. (optional)"
                            className="border-none text-gray-400"
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
                      <FormItem className="border-b-[3px] border-gray-300">
                        <FormControl>
                          <Input
                            placeholder="City"
                            className="border-none text-gray-400"
                            {...field}
                          />
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
                        <FormItem className="border-b-[3px] border-gray-300">
                          <FormControl>
                            <Input
                              placeholder="Postal Code"
                              className="border-none text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="border-b-[3px] border-gray-300">
                          <FormControl>
                            <Input
                              placeholder="Country"
                              className="border-none text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Shipping Rates */}
                <div>
                  <h2 className="mb-4 text-xl font-bold text-[#101750] sm:text-lg">
                    Shipping Rates
                  </h2>
                  <button
                    type="button"
                    onClick={fetchShippingRates}
                    className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Get Shipping Rates
                  </button>
                  {rates.length > 0 && (
                    <div className="space-y-4">
                      {rates.map((rate) => (
                        <div
                          key={rate.rate_id}
                          onClick={() => setSelectedRate(rate)}
                          className={`p-4 border rounded cursor-pointer ${
                            selectedRate?.rate_id === rate.rate_id
                              ? "border-blue-500"
                              : "border-gray-300"
                          }`}
                        >
                          <p>{rate.service_type}</p>
                          <p>${rate.shipping_amount.amount}</p>
                          <p>
                            Estimated Delivery: {rate.estimated_delivery_date}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Checkout Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-500 rounded-[6px] font-semibold text-white hover:bg-green-600/90"
                  disabled={!form.formState.isValid || !selectedRate}
                  onClick={handleCheckout}>
                  {isLoading ? 'Processing...' : 'Proceed To Checkout'}
                  
                </Button>
              </form>
            </Form>
          </div>

          {/* Cart Summary */}
          <div className="p-8">
            <div className="mb-14 space-y-4">
              {cart.map((item) => (
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
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Size: {item.size}, Color: {item.color}
                    </p>
                  </div>
                  <p className="font-medium text-[#101750]">${item.price}</p>
                </div>
              ))}
            </div>

            {/* Cart Totals */}
            <div className="rounded-xl bg-[#F4F4FC] p-6">
              <div className="space-y-4">
                <div className="flex justify-between border-b py-4 text-[#151875] font-heading">
                  <span>Subtotals:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b py-4 text-[#151875] font-heading">
                  <span>Totals:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 py-2">
                  ✓ Shipping & taxes calculated at checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


