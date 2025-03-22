import Link from "next/link"
import { Car, Home, Laptop, Sofa, Shirt, BikeIcon as Bicycle, Smartphone, BookOpen } from "lucide-react"

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    href: "/category/electronics",
  },
  {
    name: "Furniture",
    icon: Sofa,
    href: "/category/furniture",
  },
  {
    name: "Clothing",
    icon: Shirt,
    href: "/category/clothing",
  },
  {
    name: "Vehicles",
    icon: Car,
    href: "/category/vehicles",
  },
  {
    name: "Real Estate",
    icon: Home,
    href: "/category/real-estate",
  },
  {
    name: "Sports",
    icon: Bicycle,
    href: "/category/sports",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    href: "/category/mobile",
  },
  {
    name: "Books",
    icon: BookOpen,
    href: "/category/books",
  },
]

export default function CategorySection() {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Browse Categories</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center rounded-lg border p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <category.icon className="mb-2 h-8 w-8" />
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

