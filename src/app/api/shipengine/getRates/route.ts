// app/api/shipengine/getRates/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const { from, to, weight, rate_options } = await request.json();

    // Debug: Log the incoming request body
    console.log("Request Body:", { from, to, weight, rate_options });

    // // Ensure phone numbers are provided
    // if (!from.phone || !to.phone) {
    //   return NextResponse.json(
    //     { error: "Phone numbers are required for both 'from' and 'to' addresses" },
    //     { status: 400 }
    //   );
    // }


    // Ensure rate_options are provided
    if (!rate_options || !rate_options.carrier_ids) {
      return NextResponse.json(
        { error: "rate_options with carrier_ids are required" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      "https://api.shipengine.com/v1/rates",
      {
        shipment: {
          service_code: "usps_priority_mail",
          ship_to: to,
          ship_from: from,
          packages: [
            {
              weight: {
                value: weight,
                unit: "pound",
              },
            },
          ],
        },
        rate_options, // Include rate_options
      },
      {
        headers: {
          "API-Key": process.env.SHIPENGINE_API_KEY,
        },
      }
    );

    // Debug: Log the ShipEngine API response
    console.log("ShipEngine API Response:", response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    // Debug: Log the error
    console.error("ShipEngine API Error:", error);

    if (axios.isAxiosError(error)) {
      console.error("ShipEngine API Error Details:", error.response?.data || error.message);
      return NextResponse.json(
        { error: "Failed to fetch shipping rates", details: error.response?.data },
        { status: 500 }
      );
    } else {
      const err = error as Error;
      return NextResponse.json(
        { error: "Failed to fetch shipping rates", details: err.message },
        { status: 500 }
      );
    }
  }
}

