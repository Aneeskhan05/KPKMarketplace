"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share, Flag, MapPin, Calendar } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// Mock data for a single listing
const listing = {
  id: "1",
  title: "Apple MacBook Pro 16-inch (2023)",
  description:
    "Selling my MacBook Pro 16-inch with M2 Pro chip. Only 6 months old and in perfect condition. Comes with original box and charger. Space Gray color. 16GB RAM, 512GB SSD.",
  price: 1899,
  location: "San Francisco, CA",
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  category: "Electronics",
  condition: "Like New",
  seller: {
    id: "user123",
    name: "John Doe",
    rating: 4.8,
    memberSince: "January 2022",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  postedDate: "2023-05-15",
  features: ["M2 Pro Chip", "16GB RAM", "512GB SSD", "Space Gray", "16-inch Retina Display"],
  views: 245,
}

export default function ListingPage({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const formattedDate = new Date(listing.postedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleContactSeller = () => {
    // In a real app, this would open a chat with the seller
    window.location.href = "/messages"
  }

  const handleMakeOffer = () => {
    toast({
      title: "Make an Offer",
      description: "Offer form would appear here in a real application",
    })
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite
        ? "This item has been removed from your favorites"
        : "This item has been added to your favorites",
    })
  }

  const handleShare = () => {
    toast({
      title: "Share Listing",
      description: "Sharing options would appear here",
    })
  }

  const handleReport = () => {
    toast({
      title: "Report Listing",
      description: "Report form would appear here",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Images */}
        <div className="lg:col-span-2">
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={listing.images[0] || "/placeholder.svg"}
              alt={listing.title}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {listing.images.slice(1).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${listing.title} - Image ${index + 2}`}
                  width={200}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Listing Details */}
          <div className="mt-8">
            <Tabs defaultValue="details">
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1">
                  Details
                </TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">
                  Shipping
                </TabsTrigger>
                <TabsTrigger value="seller" className="flex-1">
                  Seller
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <h3 className="mb-2 text-lg font-semibold">Description</h3>
                <p className="text-muted-foreground">{listing.description}</p>

                <h3 className="mb-2 mt-4 text-lg font-semibold">Features</h3>
                <ul className="ml-5 list-disc text-muted-foreground">
                  {listing.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Condition</h3>
                    <Badge variant="outline">{listing.condition}</Badge>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Category</h3>
                    <Badge variant="outline">{listing.category}</Badge>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="mt-4">
                <h3 className="mb-2 text-lg font-semibold">Shipping Options</h3>
                <p className="text-muted-foreground">
                  This item can be picked up locally or shipped nationwide. Shipping costs will be calculated based on
                  your location.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-semibold">Returns</h3>
                <p className="text-muted-foreground">
                  This seller does not accept returns. Please contact the seller directly with any questions before
                  purchasing.
                </p>
              </TabsContent>
              <TabsContent value="seller" className="mt-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={listing.seller.avatar || "/placeholder.svg"}
                    alt={listing.seller.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{listing.seller.name}</h3>
                    <p className="text-sm text-muted-foreground">Member since {listing.seller.memberSince}</p>
                    <div className="mt-1 flex items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(listing.seller.rating) ? "text-yellow-500" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm">{listing.seller.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    className="w-full"
                    onClick={() => {
                      toast({
                        title: "View Seller Profile",
                        description: "Seller profile would be displayed here",
                      })
                    }}
                  >
                    View Seller Profile
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Column - Price and Actions */}
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <h1 className="text-2xl font-bold">{listing.title}</h1>
                <p className="mt-2 text-3xl font-bold">PKR{listing.price}</p>
              </div>

              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{listing.location}</span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4" />
                <span>Posted {formattedDate}</span>
              </div>

              <div className="space-y-3">
                <Button className="w-full" onClick={handleContactSeller}>
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full" onClick={handleMakeOffer}>
                  Make an Offer
                </Button>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="ghost" size="icon" onClick={toggleFavorite}>
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleShare}>
                    <Share className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleReport}>
                    <Flag className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>{listing.views} people have viewed this listing</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Safety Tips</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Meet in a public place</li>
              <li>Don't pay in advance</li>
              <li>Check the item before paying</li>
              <li>Pay only after inspecting the item</li>
            </ul>
            <Link href="/safety" className="mt-2 block text-sm text-primary hover:underline">
              Learn more about safety
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

