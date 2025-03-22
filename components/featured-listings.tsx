import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"

// Mock data for featured listings
const featuredListings = [
  {
    id: "1",
    title: "Apple MacBook Pro 16-inch",
    price: 1899,
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=300&width=400",
    category: "Electronics",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Leather Sofa",
    price: 899,
    location: "New York, NY",
    image: "/placeholder.svg?height=300&width=400",
    category: "Furniture",
    featured: true,
  },
  {
    id: "3",
    title: "Mountain Bike - Like New",
    price: 450,
    location: "Denver, CO",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sports",
    featured: true,
  },
  {
    id: "4",
    title: "Designer Handbag",
    price: 350,
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=300&width=400",
    category: "Clothing",
    featured: true,
  },
]

export default function FeaturedListings() {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Listings</h2>
        <Link href="/featured" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {featuredListings.map((listing) => (
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
              <Badge className="absolute left-2 top-2">Featured</Badge>
            </div>
            <CardContent className="p-4">
              <Link href={`/listing/${listing.id}`} className="line-clamp-1 font-medium hover:underline">
                {listing.title}
              </Link>
              <p className="mt-1 text-lg font-bold">PKR{listing.price}</p>
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

