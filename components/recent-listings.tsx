import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"

// Mock data for recent listings
const recentListings = [
  {
    id: "5",
    title: "iPhone 14 Pro - Mint Condition",
    price: 899,
    location: "Seattle, WA",
    image: "/placeholder.svg?height=300&width=400",
    category: "Electronics",
    timePosted: "2 hours ago",
  },
  {
    id: "6",
    title: "Dining Table with 4 Chairs",
    price: 350,
    location: "Chicago, IL",
    image: "/placeholder.svg?height=300&width=400",
    category: "Furniture",
    timePosted: "3 hours ago",
  },
  {
    id: "7",
    title: "Sony PlayStation 5",
    price: 450,
    location: "Austin, TX",
    image: "/placeholder.svg?height=300&width=400",
    category: "Electronics",
    timePosted: "5 hours ago",
  },
  {
    id: "8",
    title: "Vintage Record Player",
    price: 120,
    location: "Portland, OR",
    image: "/placeholder.svg?height=300&width=400",
    category: "Electronics",
    timePosted: "6 hours ago",
  },
  {
    id: "9",
    title: "Mountain Bike Helmet",
    price: 45,
    location: "Boulder, CO",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sports",
    timePosted: "8 hours ago",
  },
  {
    id: "10",
    title: "Designer Sunglasses",
    price: 85,
    location: "Miami, FL",
    image: "/placeholder.svg?height=300&width=400",
    category: "Clothing",
    timePosted: "10 hours ago",
  },
  {
    id: "11",
    title: "Electric Guitar",
    price: 275,
    location: "Nashville, TN",
    image: "/placeholder.svg?height=300&width=400",
    category: "Music",
    timePosted: "12 hours ago",
  },
  {
    id: "12",
    title: "Professional Camera Kit",
    price: 1200,
    location: "San Diego, CA",
    image: "/placeholder.svg?height=300&width=400",
    category: "Electronics",
    timePosted: "1 day ago",
  },
]

export default function RecentListings() {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Listings</h2>
        <Link href="/recent" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {recentListings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="relative">
              <Link href={`/listing/${listing.id}`}>
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform hover:scale-105"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 rounded-full bg-background/80 hover:bg-background"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <CardContent className="p-4">
              <Link href={`/listing/${listing.id}`} className="line-clamp-1 font-medium hover:underline">
                {listing.title}
              </Link>
              <p className="mt-1 text-lg font-bold">PKR{listing.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{listing.timePosted}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t p-4 pt-2 text-xs text-muted-foreground">
              <span>{listing.location}</span>
              <Badge variant="outline">{listing.category}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

