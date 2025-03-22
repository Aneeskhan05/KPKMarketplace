import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    // Clear the auth cookie
    const cookieStore = cookies()
    cookieStore.delete("auth_token")

    return NextResponse.json({ message: "Logged out successfully" })
  } catch (error: any) {
    console.error("Logout error:", error)
    return NextResponse.json({ message: error.message || "An error occurred during logout" }, { status: 500 })
  }
}

