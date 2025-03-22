import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, Cookie } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function LegalPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Legal Information</h1>
        <p className="text-lg text-muted-foreground">
          All legal information related to KPK Hub, including user agreements, compliance, and data protection policies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="transition-all hover:shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <FileText className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Terms of Service</h2>
            <p className="mb-4 text-muted-foreground">User agreements and conditions for using KPK Hub.</p>
            <Link href="/terms" className="mt-auto">
              <Button variant="outline">View Terms</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Shield className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Privacy Policy</h2>
            <p className="mb-4 text-muted-foreground">How we collect, use, and protect your data.</p>
            <Link href="/privacy" className="mt-auto">
              <Button variant="outline">View Policy</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Cookie className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Cookie Policy</h2>
            <p className="mb-4 text-muted-foreground">Information about how we use cookies on our platform.</p>
            <Link href="/cookies" className="mt-auto">
              <Button variant="outline">View Policy</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-lg border bg-background p-6">
        <h2 className="mb-4 text-xl font-semibold">For Legal Inquiries</h2>
        <p className="mb-4 text-muted-foreground">If you have any legal questions or concerns, please contact us at:</p>
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

