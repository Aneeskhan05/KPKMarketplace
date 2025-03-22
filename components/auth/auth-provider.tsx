"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
  sendEmailVerification,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { toast } from "@/hooks/use-toast"

interface AuthContextType {
  user: User | null
  loading: boolean
  signUpWithEmail: (email: string, password: string) => Promise<void>
  signUpWithPhone: (phone: string) => Promise<string>
  verifyPhoneCode: (verificationId: string, code: string) => Promise<void>
  loginWithEmail: (email: string, password: string) => Promise<void>
  loginWithPhone: (phone: string) => Promise<string>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null)

  useEffect(() => {
    // Set up recaptcha verifier for phone auth
    if (typeof window !== "undefined") {
      const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      })
      setRecaptchaVerifier(verifier)
    }

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Sign up with email
  const signUpWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true)

      // First check with our API if this email is allowed
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to sign up")
      }

      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // Send email verification
      await sendEmailVerification(userCredential.user)

      toast({
        title: "Account created successfully",
        description: "Please check your email for verification link",
      })
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Sign up with phone
  const signUpWithPhone = async (phone: string) => {
    try {
      setLoading(true)

      // First check with our API if this phone is allowed
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to sign up")
      }

      if (!recaptchaVerifier) {
        throw new Error("reCAPTCHA not initialized")
      }

      // Send verification code
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier)

      toast({
        title: "Verification code sent",
        description: "Please enter the code sent to your phone",
      })

      return confirmationResult.verificationId
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Verify phone code
  const verifyPhoneCode = async (verificationId: string, code: string) => {
    try {
      setLoading(true)

      const credential = PhoneAuthProvider.credential(verificationId, code)
      await auth.signInWithCredential(credential)

      toast({
        title: "Phone verified successfully",
        description: "Your account has been created",
      })
    } catch (error: any) {
      toast({
        title: "Verification failed",
        description: error.message,
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Login with email
  const loginWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)

      // Call our API to set the server-side session
      await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      toast({
        title: "Login successful",
        description: "Welcome back to KPK Hub!",
      })
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Login with phone
  const loginWithPhone = async (phone: string) => {
    try {
      setLoading(true)

      if (!recaptchaVerifier) {
        throw new Error("reCAPTCHA not initialized")
      }

      // Send verification code
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier)

      toast({
        title: "Verification code sent",
        description: "Please enter the code sent to your phone",
      })

      return confirmationResult.verificationId
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Logout
  const logout = async () => {
    try {
      setLoading(true)
      await signOut(auth)

      // Call our API to clear the server-side session
      await fetch("/api/auth/logout", {
        method: "POST",
      })

      toast({
        title: "Logged out successfully",
      })
    } catch (error: any) {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    loading,
    signUpWithEmail,
    signUpWithPhone,
    verifyPhoneCode,
    loginWithEmail,
    loginWithPhone,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
      <div id="recaptcha-container"></div>
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

