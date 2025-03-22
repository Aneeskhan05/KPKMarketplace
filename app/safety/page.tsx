import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, MapPin, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SafetyCenterPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Your Safety is Our Priority</h1>
        <p className="text-lg text-muted-foreground">
          Follow these safety tips when using KPK Hub to ensure a secure experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-semibold">Protect Your Personal Info</h2>
            </div>
            <p className="text-muted-foreground">
              Avoid sharing sensitive details with others. Never share your password, financial information, or personal
              identification details with other users.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Lock className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-semibold">Secure Payments</h2>
            </div>
            <p className="text-muted-foreground">
              Only use our secure payment methods. Avoid wire transfers or direct bank deposits to people you don't know
              and trust.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-semibold">Meet in Safe Places</h2>
            </div>
            <p className="text-muted-foreground">
              If meeting in person, choose public and safe locations. Consider meeting during daylight hours and bring a
              friend if possible.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-semibold">Report Suspicious Activity</h2>
            </div>
            <p className="text-muted-foreground">
              If you notice scams or fraud, report them immediately. Help us keep KPK Hub safe for everyone by reporting
              suspicious listings or messages.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-lg border bg-background p-6">
        <h2 className="mb-4 text-xl font-semibold">For Safety Concerns</h2>
        <p className="mb-4 text-muted-foreground">
          If you have any safety concerns or need to report an issue, please contact us immediately:
        </p>
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

