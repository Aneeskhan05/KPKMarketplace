import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import admin from "@/lib/firebase-admin"

export async function POST(request: NextRequest) {
  try {
    const { email, phone, password } = await request.json()

    let userRecord

    // Login with email or phone
    if (email) {
      try {
        // In a real implementation, you would use Firebase Auth SDK on the client
        // and then verify the token on the server. This is a simplified version.
        userRecord = await admin.auth().getUserByEmail(email)
      } catch (error) {
        return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
      }
    } else if (phone) {
      try {
        userRecord = await admin.auth().getUserByPhoneNumber(phone)
      } catch (error) {
        return NextResponse.json({ message: "Invalid phone number or password" }, { status: 401 })
      }
    } else {
      return NextResponse.json({ message: "Email or phone number is required" }, { status: 400 })
    }

    // Create a custom token for the user
    const token = await admin.auth().createCustomToken(userRecord.uid)

    // Set a secure HTTP-only cookie
    const cookieStore = cookies()
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return NextResponse.json({
      message: "Login successful",
      userId: userRecord.uid,
    })
  } catch (error: any) {
    console.error("Login error:", error)
    return NextResponse.json({ message: error.message || "An error occurred during login" }, { status: 500 })
  }
}

