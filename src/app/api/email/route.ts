import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const {
      orderId,
      email,
      firstName,
      lastName,
      estimatedDelivery,
      totalAmount,
      items,
    } = await request.json();

    console.log("Received request body:", {
      orderId,
      email,
      firstName,
      lastName,
      estimatedDelivery,
      totalAmount,
      items,
    });

    // Validate required fields
    if (!email || !firstName || !lastName || !items || items.length === 0) {
      console.error("Missing required fields");
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    interface Item {
      name: string;
      quantity: number;
      price: number;
    }

    interface MailOptions {
      from: string;
      to: string;
      subject: string;
      html: string;
    }

    const mailOptions: MailOptions = {
      from: "Yusra Saleem",
      to: email,
      subject: "✨ Thank You for Shopping with Hekto! ✨",
      html: `
         <div style="font-family: 'Georgia', serif; color: #333; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
          <!-- Header Section -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #151875; font-size: 36px; margin-bottom: 10px; font-weight: bold;">Thank You, ${firstName}!</h1>
            <p style="font-size: 18px; color: #555; line-height: 1.6;">
              We're thrilled to have you as part of the <strong style="color: #FB2E86;">Hekto</strong> family. Your order has been successfully placed and is now being processed with care.
            </p>
          </div>

          <!-- Order Summary Section -->
          <div style="background-color: #F6F5FF; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: #151875; font-size: 28px; margin-bottom: 15px; font-weight: bold;">📦 Order Summary</h2>
            <ul style="list-style-type: none; padding: 0; margin: 0;">
              ${items
                .map(
                  (item: Item) => 
                {`<li style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                  <div style="display: flex; align-items: center;">
                    <div>
                      <p style="font-size: 18px; color: #151875; font-weight: bold; margin: 0;">${item.name}</p>
                      <p style="font-size: 16px; color: #555; margin: 5px 0;">Quantity: ${item.quantity}</p>
                      <p style="font-size: 16px; color: #555; margin: 0;">Price: $${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </li>`}
              
                )
                .join("")}
            </ul>
            <p style="font-size: 20px; font-weight: bold; color: #151875; margin-top: 15px;">
              💵 Total: $${totalAmount.toFixed(2)}
            </p>
          </div>

          <!-- Delivery Information Section -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #151875; font-size: 28px; margin-bottom: 15px; font-weight: bold;">🚚 Delivery Information</h2>
            <p style="font-size: 18px; color: #555; line-height: 1.6;">
              Your order is being carefully prepared and will be shipped soon. You'll receive another email with tracking information once it's on its way.
            </p>
          </div>

          <!-- Payment Information Section -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #151875; font-size: 28px; margin-bottom: 15px; font-weight: bold;">💳 Payment Information</h2>
            <p style="font-size: 18px; color: #555; line-height: 1.6;">
              Payment Method: <strong style="color: #151875;">Credit Card</strong><br>
              Payment Status: <strong style="color: #FB2E86;">Paid</strong>
            </p>
          </div>

          <!-- Customer Support Section -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #151875; font-size: 28px; margin-bottom: 15px; font-weight: bold;">📞 Need Help?</h2>
            <p style="font-size: 18px; color: #555; line-height: 1.6;">
              If you have any questions or need assistance, feel free to contact us at 
              <a href="mailto:support@hekto.com" style="color: #FB2E86; text-decoration: none; font-weight: bold;">yusrasaleem679@gmail.com</a> 
              or call us at <strong style="color: #151875;">+92-3102983718</strong>.
            </p>
          </div>

          <!-- Social Media Section -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #151875; font-size: 28px; margin-bottom: 15px; font-weight: bold;">📱 Follow Us</h2>
            <p style="font-size: 18px; color: #555; line-height: 1.6;">
              Stay connected with us on social media for the latest updates, promotions, and more!
            </p>
            <div style="margin-top: 15px;">
              <a href="https://facebook.com/hekto" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" style="width: 40px; height: 40px;">
              </a>
              <a href="https://instagram.com/hekto" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" style="width: 40px; height: 40px;">
              </a>
              <a href="https://twitter.com/hekto" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" style="width: 40px; height: 40px;">
              </a>
            </div>
          </div>

          <!-- Footer Section -->
          <div style="text-align: center; margin-top: 30px;">
            <p style="font-size: 18px; color: #555; line-height: 1.6;">
              Thank you for choosing <strong style="color: #151875;">Hekto</strong>. We appreciate your trust in us and look forward to serving you again! ❤️
            </p>
            <p style="font-size: 14px; color: #777; margin-top: 15px;">
              This is an automated email. Please do not reply directly to this message.
            </p>
          </div>
        </div>
      `,
    };

    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}