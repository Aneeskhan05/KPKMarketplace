"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Help Center – KPK Hub</h1>
        <p className="text-xl font-medium">How Can We Assist You?</p>
        <p className="mt-2 text-muted-foreground">
          Welcome to the KPK Hub Help Center! Find answers to your questions, guides on how to use our platform, and
          support for any issues you may face.
        </p>
      </div>

      <div className="mb-8 flex items-center gap-4 rounded-lg border bg-background p-4">
        <div className="flex items-center gap-4 text-muted-foreground">
          <Mail className="h-5 w-5 text-primary" />
          <span>
            Email:{" "}
            <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
              Vikingheroofficial@gmail.com
            </a>
          </span>
        </div>
        <div className="hidden md:block">|</div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Phone className="h-5 w-5 text-primary" />
          <span>
            Phone:{" "}
            <a href="tel:03301561509" className="text-primary hover:underline">
              03301561509
            </a>
          </span>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help topics..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-8">
        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">1. Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="create-account">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Click on Sign Up on the homepage.</li>
                    <li>Enter your phone number or email.</li>
                    <li>Verify your account using the OTP sent to your device.</li>
                    <li>Set up your profile and start using KPK Hub.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="login">
                <AccordionTrigger>How do I log in?</AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Click Login on the homepage.</li>
                    <li>Enter your registered email/phone number and password.</li>
                    <li>Verify via OTP if required.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="forgot-password">
                <AccordionTrigger>I forgot my password. What should I do?</AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Click Forgot Password on the login page.</li>
                    <li>Enter your registered email or phone number.</li>
                    <li>Follow the instructions sent via email or SMS to reset your password.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Buying & Selling */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2. Buying & Selling</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="list-item">
                <AccordionTrigger>How do I list an item for sale?</AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Click the Sell button on the homepage.</li>
                    <li>Upload images/videos of your item.</li>
                    <li>Add a title, description, price (PKR), and location.</li>
                    <li>Click Post to make your item live.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buy-item">
                <AccordionTrigger>How do I buy an item?</AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Browse listings using the search bar or categories.</li>
                    <li>Click on a product to see details and contact the seller.</li>
                    <li>Chat with the seller or make an offer.</li>
                    <li>Complete the purchase using secure payment methods.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="secure-payments">
                <AccordionTrigger>Are payments secure?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes! We support secure transactions through trusted payment gateways. Always use in-app payments to
                    avoid scams.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Account & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">3. Account & Security</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="update-profile">
                <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Go to Profile Settings in the app.</li>
                    <li>Click on Edit Profile.</li>
                    <li>Update your name, contact info, and profile picture.</li>
                    <li>Save changes.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delete-account">
                <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Contact our support team at{" "}
                    <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
                      Vikingheroofficial@gmail.com
                    </a>{" "}
                    with the subject "Account Deletion Request". Your request will be processed within 48 hours.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="report-scam">
                <AccordionTrigger>How do I report a scam or suspicious activity?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 text-muted-foreground">If you notice a scam or suspicious user:</p>
                  <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                    <li>Click Report on the listing or profile.</li>
                    <li>Provide details about the issue.</li>
                    <li>Our team will investigate and take necessary action.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Payment & Refunds */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">4. Payment & Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="payment-methods">
                <AccordionTrigger>What payment methods are supported?</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Bank Transfers</li>
                    <li>Mobile Wallets (Easypaisa, JazzCash, etc.)</li>
                    <li>Cash on Delivery (COD)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="refunds">
                <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 text-muted-foreground">Refunds are available if:</p>
                  <ul className="ml-6 list-disc space-y-2 mb-4 text-muted-foreground">
                    <li>The item is not as described.</li>
                    <li>The transaction was made using in-app payments.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To request a refund, contact us at{" "}
                    <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
                      Vikingheroofficial@gmail.com
                    </a>{" "}
                    within 3 days of the purchase.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Customer Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">5. Customer Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Still have questions? Contact our support team!</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Gmail:{" "}
                  <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
                    Vikingheroofficial@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Phone:{" "}
                  <a href="tel:03301561509" className="text-primary hover:underline">
                    03301561509
                  </a>
                </span>
              </div>
            </div>

            <p className="mt-4 text-muted-foreground">We're available Monday – Friday, 9 AM – 6 PM (Pakistan Time).</p>

            <div className="mt-6">
              <Button className="w-full sm:w-auto" onClick={() => (window.location.href = "/contact")}>
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

