"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CategorySection from "@/components/category-section"
import FeaturedListings from "@/components/featured-listings"
import RecentListings from "@/components/recent-listings"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Use window.location for navigation instead of router
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center md:p-12">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Buy and sell in your community</h1>
        <p className="mb-6 text-lg text-muted-foreground md:text-xl">
          Find great deals on items near you or sell something you no longer need
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <Input
            placeholder="Search for anything..."
            className="h-12 flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch()
              }
            }}
          />
          <Button size="lg" className="gap-2" onClick={handleSearch}>
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Featured Listings */}
      <FeaturedListings />

      {/* Recent Listings */}
      <RecentListings />
    </div>
  )
}

