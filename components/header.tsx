"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Heart, Menu, MessageSquare, Plus, Search, User, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">KPK Hub</span>
        </Link>

        {/* Search - Desktop */}
        {!isMobile && (
          <div className="mx-4 flex flex-1 max-w-md relative">
            <Input placeholder="Search for anything..." className="pr-10" />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/favorites">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/messages">
                <MessageSquare className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="ml-2 gap-2" asChild>
              <Link href="/sell">
                <Plus className="h-4 w-4" />
                <span>Sell</span>
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/listings">My Listings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">KPK Hub</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/favorites"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/messages"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/notifications"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sell"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Plus className="h-5 w-5" />
                  <span>Sell an Item</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Settings</span>
                </Link>
              </li>
              <li className="pt-4">
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

