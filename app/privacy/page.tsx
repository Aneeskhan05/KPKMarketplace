import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Privacy Policy for KPK Hub</h1>
        <p className="text-muted-foreground">Last Updated: 3/19/2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to KPK Hub! Your privacy is important to us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our marketplace website and mobile app.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">2. Information We Collect</h2>
          <p className="mb-2 text-muted-foreground">We collect the following types of information:</p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Personal Information:</span> Name, email, phone number,
              address, and payment details (if applicable).
            </li>
            <li>
              <span className="font-medium text-foreground">Account Information:</span> Profile details, listings,
              chats, and transaction history.
            </li>
            <li>
              <span className="font-medium text-foreground">Device & Usage Data:</span> IP address, device type, browser
              type, and app usage statistics.
            </li>
            <li>
              <span className="font-medium text-foreground">Location Data:</span> If enabled, we collect location data
              to provide localized listings.
            </li>
            <li>
              <span className="font-medium text-foreground">Cookies & Tracking Technologies:</span> We use cookies to
              improve user experience and provide personalized content.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">3. How We Use Your Information</h2>
          <p className="mb-2 text-muted-foreground">We use your data for:</p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Creating and managing user accounts.</li>
            <li>Facilitating transactions between buyers and sellers.</li>
            <li>Sending OTP verification for security.</li>
            <li>Providing personalized recommendations.</li>
            <li>Preventing fraud and ensuring platform security.</li>
            <li>Improving and analyzing app performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">4. How We Share Your Information</h2>
          <p className="mb-2 text-muted-foreground">
            We do not sell or share your personal data with third parties except:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>When required by law or to comply with legal processes.</li>
            <li>With service providers that help operate our platform (e.g., payment gateways, analytics).</li>
            <li>To enforce our Terms of Service and protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">5. Data Security</h2>
          <p className="text-muted-foreground">
            We implement strict security measures to protect user data, including encryption, two-factor authentication
            (2FA), and secure payment processing.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">6. Your Privacy Rights</h2>
          <p className="mb-2 text-muted-foreground">You can:</p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Access, update, or delete your account information.</li>
            <li>Opt-out of marketing emails and notifications.</li>
            <li>Disable location tracking from your device settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">7. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of significant changes via email or
            app notifications.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns, contact us at:
            <br />📧{" "}
            <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
              Vikingheroofficial@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

