import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, FileText, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Welcome to KPK Hub Support</h1>
        <p className="text-lg text-muted-foreground">
          We're here to help! If you have any questions or issues, you can reach out to us anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="transition-all hover:shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <HelpCircle className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">FAQs</h2>
            <p className="mb-4 text-muted-foreground">Find answers to common questions.</p>
            <Link href="/help-center">
              <Button variant="outline" className="mt-auto">
                Browse FAQs
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <FileText className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Help Center</h2>
            <p className="mb-4 text-muted-foreground">Detailed guides on using KPK Hub.</p>
            <Link href="/help-center">
              <Button variant="outline" className="mt-auto">
                View Guides
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Phone className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Contact Us</h2>
            <p className="mb-4 text-muted-foreground">Get in touch with our support team.</p>
            <Link href="/contact">
              <Button variant="outline" className="mt-auto">
                Contact Support
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-lg border bg-background p-6">
        <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <span className="text-primary">📧</span>
            <span className="font-medium">Gmail:</span>
            <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
              Vikingheroofficial@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary">📞</span>
            <span className="font-medium">Phone:</span>
            <a href="tel:03301561509" className="text-primary hover:underline">
              03301561509
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

