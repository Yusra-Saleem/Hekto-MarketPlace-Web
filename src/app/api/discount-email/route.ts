import { NextResponse } from "next/server"
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { email } = await req.json()

      const submission = await client.create({
        _type: "emailSubmission",
        email,
        submittedAt: new Date().toISOString(),
      })

      return NextResponse.json({ message: "Email submitted successfully" }, { status: 200 })
    } catch (error) {
      console.error("Error submitting email:", error)
      return NextResponse.json({ message: "Error submitting email" }, { status: 500 })
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
  }
}

