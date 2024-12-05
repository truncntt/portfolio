import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Cấu hình transporter cho Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_USER,
    pass: process.env.NEXT_PUBLIC_SENDER_PASS,
  },
});

export async function POST(request) {
  try {
    console.log("Incoming request...");
    const { name, email, message } = await request.json();
    console.log("Received payload:", { name, email, message });

    if (!name || !email || !message) {
      console.log("Validation failed: Missing fields");
      return NextResponse.json(
        { error: "Name, Email, and Message are required!" },
        { status: 400 }
      );
    }

    // Log email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_RECEIVER_USER,
      to: process.env.NEXT_PUBLIC_SENDER_USER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };
    console.log("Mail options:", mailOptions);

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Contact Form Submitted Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error.message);
    if (error.response) {
      console.error("SMTP error:", error.response);
    }
    return NextResponse.json(
      { error: "Failed processing contact form!" },
      { status: 500 }
    );
  }
}
