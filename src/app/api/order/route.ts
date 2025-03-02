// app/api/order/route.ts
import { NextResponse } from "next/server";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(request: Request) {
  try {
    const orderData = await request.json();

   
    const dataToSave = {
      _type: 'order',
      ...orderData,
      cartItems: orderData.cartItems.map((item: any) => ({
        _type: 'cartItem',
        ...item,
      })),
      shippingRate: {
        _type: 'shippingRate', 
        ...orderData.shippingRate,
      },
      trackingStatus: {
        _type: 'trackingStatus',
        ...orderData.trackingStatus,
      },
      paymentDetails: {
        _type: 'paymentDetails', 
        ...orderData.paymentDetails,
      },
    };

    // Save order data to Sanity
    const result = await client.create(dataToSave);

    return NextResponse.json({ orderId: result._id });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json(
      { error: "Failed to save order", details: error },
      { status: 500 }
    );
  }
}
