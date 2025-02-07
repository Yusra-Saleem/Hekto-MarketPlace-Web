// app/api/orders/route.ts
import { client } from "../../../sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const query = `*[_type == "order" && email == $email]{
      _id,
      email,
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      cartItems,
      subtotal,
      total,
      shippingRate,
      shippingLabel,
      trackingStatus,
      paymentDetails
    }`;
    const orders = await client.fetch(query, { email });
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}