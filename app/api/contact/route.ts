import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const semaphoreApiKey = process.env.SEMAPHORE_API_KEY || "8d5e0598900941d91d7c0cb635ebd699";
    const semaphoreSenderId = process.env.SEMAPHORE_SENDER_ID || "JAYPEE";
    const recipientPhone = process.env.SEMAPHORE_TO_PHONE || "+639772044079";

    if (!semaphoreApiKey || !semaphoreSenderId || !recipientPhone) {
      return NextResponse.json(
        {
          success: false,
          error: "SMS provider is not configured yet. Add your Semaphore credentials.",
        },
        { status: 500 }
      );
    }

    const smsText = `New website contact from ${name} (${email}). ${message}`;

    const response = await fetch("https://api.semaphore.co/api/v4/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${semaphoreApiKey}`,
      },
      body: JSON.stringify({
        source: semaphoreSenderId,
        number: recipientPhone,
        message: smsText,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: result?.message || "Failed to send SMS." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error while sending your message." },
      { status: 500 }
    );
  }
}
