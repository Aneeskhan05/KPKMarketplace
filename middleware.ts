import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token")?.value

  // Protected routes that require authentication
  const protectedPaths = ["/sell", "/messages", "/profile", "/listings", "/settings"]

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  // If trying to access a protected route without auth, redirect to login
  if (isProtectedPath && !authToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // If trying to access auth pages while already logged in, redirect to home
  if (
    (request.nextUrl.pathname.startsWith("/auth/login") || request.nextUrl.pathname.startsWith("/auth/register")) &&
    authToken
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/sell/:path*",
    "/messages/:path*",
    "/profile/:path*",
    "/listings/:path*",
    "/settings/:path*",
    "/auth/login",
    "/auth/register",
  ],
}

