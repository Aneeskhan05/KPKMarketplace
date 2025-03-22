import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Terms of Service</h1>
        <p className="text-muted-foreground">Last Updated: 3/19/2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">1. Introduction</h2>
          <p className="text-muted-foreground">
            By using KPK Hub, you agree to our terms and conditions. These Terms of Service ("Terms") govern your access
            to and use of the KPK Hub website and mobile application (collectively, the "Platform"). Please read these
            Terms carefully before using our Platform.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">2. User Accounts</h2>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>You must be 18 years or older to create an account on KPK Hub.</li>
            <li>You are responsible for keeping your login credentials secure and confidential.</li>
            <li>You are responsible for all activities that occur under your account.</li>
            <li>We reserve the right to suspend or terminate accounts that violate our policies.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">3. Buying & Selling</h2>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Sellers must provide accurate and complete product descriptions.</li>
            <li>Buyers must ensure payments are made through secure methods approved by KPK Hub.</li>
            <li>KPK Hub is not responsible for the quality, safety, or legality of items sold on the platform.</li>
            <li>Users are responsible for complying with all applicable laws and regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">4. Prohibited Activities</h2>
          <p className="mb-2 text-muted-foreground">The following activities are strictly prohibited on KPK Hub:</p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Selling illegal or restricted items as defined by local, state, or federal laws.</li>
            <li>Spamming or sending misleading messages to other users.</li>
            <li>Engaging in fraudulent transactions or activities.</li>
            <li>Attempting to manipulate the platform's features or functionality.</li>
            <li>Harassing, threatening, or intimidating other users.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">5. Dispute Resolution</h2>
          <p className="text-muted-foreground">
            In case of disputes between buyers and sellers, KPK Hub encourages users to first attempt to resolve the
            issue directly. If that fails, users can contact our support team for assistance:
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary">📧</span>
              <span className="font-medium">Gmail:</span>
              <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
                Vikingheroofficial@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary">📞</span>
              <span className="font-medium">Phone:</span>
              <a href="tel:03301561509" className="text-primary hover:underline">
                03301561509
              </a>
            </p>
          </div>
        </section>

        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            By using KPK Hub, you acknowledge that you have read, understood, and agree to be bound by these Terms. KPK
            Hub reserves the right to modify these Terms at any time. Continued use of the Platform after any such
            changes constitutes your acceptance of the new Terms.
          </p>
        </div>
      </div>
    </div>
  )
}

