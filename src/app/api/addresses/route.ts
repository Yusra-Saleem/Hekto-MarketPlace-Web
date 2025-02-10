// app/api/addresses/route.ts
import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

interface Address {
  _id?: string;
  email: string; // Use `email` instead of `userId`
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Fetch addresses for a user
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  console.log("Received email:", email);

  if (!email) {
    return NextResponse.json({ error: "User Email is required" }, { status: 400 });
  }

  try {
    const query = `*[_type == "address" && email == $email]{
      _id,
      email,
      name,
      street,
      city,
      state,
      postalCode,
      country
    }`;
    const addresses = await client.fetch(query, { email }); // Pass `email` instead of `userEmail`
    return NextResponse.json(addresses, { status: 200 });
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return NextResponse.json({ error: "Failed to fetch addresses" }, { status: 500 });
  }
}
// Add a new address
export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, street, city, state, postalCode, country } = body;

  // Validate required fields
  if (!email || !name || !street || !city || !state || !postalCode || !country) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const newAddress = {
      _type: "address",
      email,
      name,
      street,
      city,
      state,
      postalCode,
      country,
    };

    const result = await client.create(newAddress);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error adding address:", error);
    return NextResponse.json(
      { error: "Failed to add address" },
      { status: 500 }
    );
  }
}

// Delete an address
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const addressId = searchParams.get("addressId");

  if (!addressId) {
    return NextResponse.json({ error: "Address ID is required" }, { status: 400 });
  }

  try {
    await client.delete(addressId);
    return NextResponse.json({ message: "Address deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting address:", error);
    return NextResponse.json({ error: "Failed to delete address" }, { status: 500 });
  }
}