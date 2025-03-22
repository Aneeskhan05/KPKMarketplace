import { type NextRequest, NextResponse } from "next/server"
import admin from "@/lib/firebase-admin"
import { getFirestore } from "firebase-admin/firestore"

const db = getFirestore()

export async function POST(request: NextRequest) {
  try {
    const { email, phone, password } = await request.json()

    // Get client IP
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    const deviceId = request.headers.get("user-agent") || "unknown"

    // Check for multiple accounts
    const usersRef = db.collection("users")
    const ipSnapshot = await usersRef.where("ip", "==", ip).get()
    const deviceSnapshot = await usersRef.where("deviceId", "==", deviceId).get()

    if (ipSnapshot.size > 1 || deviceSnapshot.size > 1) {
      return NextResponse.json({ message: "Too many accounts from this device/IP. You are banned." }, { status: 403 })
    }

    // Check if user already exists
    try {
      const existingUser = await admin.auth().getUserByEmail(email)
      if (existingUser) {
        return NextResponse.json({ message: "Email already registered." }, { status: 400 })
      }
    } catch (error) {
      // User doesn't exist, continue with registration
    }

    try {
      const existingPhone = await admin.auth().getUserByPhoneNumber(phone)
      if (existingPhone) {
        return NextResponse.json({ message: "Phone number already registered." }, { status: 400 })
      }
    } catch (error) {
      // Phone doesn't exist, continue with registration
    }

    // Create user
    const userRecord = await admin.auth().createUser({
      email,
      phoneNumber: phone,
      password,
    })

    // Store additional user data
    await db.collection("users").doc(userRecord.uid).set({
      email,
      phone,
      ip,
      deviceId,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({
      message: "User created successfully. Verify your email/phone.",
      userId: userRecord.uid,
    })
  } catch (error: any) {
    console.error("Signup error:", error)
    return NextResponse.json({ message: error.message || "An error occurred during signup" }, { status: 500 })
  }
}

