import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service
    // Examples:
    // - Mailchimp API
    // - HubSpot API
    // - ConvertKit API
    // - Custom database

    // For now, we'll log it and return success
    console.log("New signup:", email);

    // Simulate storing in database or sending to email service
    // In production, you would:
    // 1. Save to database
    // 2. Send welcome email
    // 3. Add to email marketing list

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed!",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}

// Allow browser to know this is a valid endpoint
export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}
