import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Cookie Policy</h1>
        <p className="text-muted-foreground">Last Updated: 3/19/2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">What Are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small data files stored on your device when you visit a website. They help enhance your user
            experience by remembering your preferences and providing personalized content.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">How We Use Cookies</h2>
          <p className="mb-2 text-muted-foreground">KPK Hub uses cookies for the following purposes:</p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Preferences:</span> To remember your settings and
              preferences when you use our platform.
            </li>
            <li>
              <span className="font-medium text-foreground">Performance:</span> To improve website performance and
              provide a better user experience.
            </li>
            <li>
              <span className="font-medium text-foreground">Personalization:</span> To deliver content tailored to your
              interests and browsing behavior.
            </li>
            <li>
              <span className="font-medium text-foreground">Analytics:</span> To understand how visitors interact with
              our website and identify areas for improvement.
            </li>
            <li>
              <span className="font-medium text-foreground">Security:</span> To help protect our platform and users from
              fraudulent activities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">Managing Cookies</h2>
          <p className="text-muted-foreground">
            You can control and manage cookies in your browser settings. Most web browsers allow you to:
          </p>
          <ul className="ml-6 list-disc space-y-2 mt-2 text-muted-foreground">
            <li>View and delete cookies</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from particular sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Please note that blocking or deleting cookies may impact your experience on KPK Hub, as some features may
            not function properly without cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">Third-Party Cookies</h2>
          <p className="text-muted-foreground">
            KPK Hub may use third-party services that set cookies on our behalf. These services help us analyze site
            traffic, understand user behavior, and provide certain features. We do not have control over these
            third-party cookies.
          </p>
        </section>

        <div className="mt-8 rounded-lg border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            For more detailed information about how we handle your data, please read our
            <Link href="/privacy" className="text-primary hover:underline mx-1">
              Privacy Policy
            </Link>
            or contact us at:
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">📧</span>
              <span className="font-medium">Gmail:</span>
              <a href="mailto:Vikingheroofficial@gmail.com" className="text-primary hover:underline">
                Vikingheroofficial@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">📞</span>
              <span className="font-medium">Phone:</span>
              <a href="tel:03301561509" className="text-primary hover:underline">
                03301561509
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

