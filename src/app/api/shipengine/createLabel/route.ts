import { NextResponse } from "next/server";
import axios from "axios";

// Mock function to fetch order details
async function fetchOrderDetails(orderId: string) {
  // Replace this with actual implementation
  return {
    id: orderId,
    customerName: "Customer Name",
    addressLine1: "456 Elm St",
    city: "San Francisco",
    state: "CA",
    postalCode: "94107",
    country: "US",
    phone: "987-654-3210",
  };
}

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json();

    // Fetch order details using orderId (example)
    const orderDetails = await fetchOrderDetails(orderId);

    // Call ShipEngine API to create a label
    const response = await axios.post(
      "https://api.shipengine.com/v1/labels",
      {
        shipment: {
          service_code: "usps_priority_mail", // Example service code
          ship_to: {
            name: orderDetails.customerName,
            address_line1: orderDetails.addressLine1,
            city_locality: orderDetails.city,
            state_province: orderDetails.state,
            postal_code: orderDetails.postalCode,
            country_code: orderDetails.country,
            phone: orderDetails.phone,
          },
          ship_from: {
            name: "Your Store",
            address_line1: "123 Main St",
            city_locality: "New York",
            state_province: "NY",
            postal_code: "10001",
            country_code: "US",
            phone: "123-456-7890",
          },
          packages: [
            {
              weight: {
                value: 1.5,
                unit: "pound",
              },
            },
          ],
        },
      },
      {
        headers: {
          "API-Key": process.env.SHIPENGINE_API_KEY, // Ensure this is set in your environment variables
        },
      }
    );

    // Extract tracking details
    const trackingDetails = {
      trackingNumber: response.data.tracking_number,
      estimatedDelivery: response.data.estimated_delivery_date,
      status: response.data.status,
      labelUrl: response.data.label_download.href, // Ensure this is the correct field for the label URL
    };

    // Return tracking details
    return NextResponse.json(trackingDetails);
  } catch (error) {
    console.error("Error creating label:", error);

    if (axios.isAxiosError(error)) {
      console.error("ShipEngine API Error:", error.response?.data || error.message);
      return NextResponse.json(
        { error: "Failed to create label", details: error.response?.data },
        { status: 500 }
      );
    } else {
      const err = error as Error;
      return NextResponse.json(
        { error: "Failed to create label", details: err.message },
        { status: 500 }
      );
    }
  }
}