import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PlantCard from "@/components/plant-card"
import { featuredPlants } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-sky-50">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-sky-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-4 w-[1px] bg-white rotate-45"></span>
                <span className="h-4 w-[1px] bg-white -rotate-45"></span>
              </div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              PlantBuddy
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/plants" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Plants
            </Link>
            <Link href="/guides" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Guides
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Sign In
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white border-none">
              Get Started
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-5"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-700 bg-clip-text text-transparent">
                Grow Any Plant with Confidence
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8">
                Discover everything you need to know about growing and caring for your plants, from sunlight
                requirements to watering schedules.
              </p>
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for a plant..."
                  className="pl-10 pr-4 py-6 rounded-full border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 bg-white/90 backdrop-blur-sm shadow-lg"
                />
                <Button className="absolute right-1.5 top-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white border-none">
                  Search
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-emerald-100 transform transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v8" />
                    <path d="M4.93 10.93 12 18" />
                    <path d="M19.07 10.93 12 18" />
                    <path d="M22 22H2" />
                    <path d="M12 18v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">Detailed Growth Guides</h3>
                <p className="text-slate-600">Step-by-step instructions for growing any plant from seed to maturity.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-sky-100 transform transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sky-800">Care Requirements</h3>
                <p className="text-slate-600">
                  Learn about watering, sunlight, soil, and temperature needs for optimal growth.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-teal-100 transform transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-800">Community Support</h3>
                <p className="text-slate-600">Connect with other plant enthusiasts to share tips and get advice.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-emerald-900 to-sky-900">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Featured Plants</h2>
              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                View All Plants
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Why Plant Enthusiasts Love Us
              </h2>
              <p className="text-slate-600">
                Join thousands of plant lovers who use PlantBuddy to grow beautiful, healthy plants.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-6 rounded-xl border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden mr-4">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Sarah Johnson</h4>
                    <p className="text-sm text-slate-500">Urban Gardener</p>
                  </div>
                </div>
                <p className="text-slate-700">
                  "PlantBuddy helped me transform my apartment into a thriving indoor garden. The detailed care guides
                  are a lifesaver!"
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-emerald-50 p-6 rounded-xl border border-sky-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 overflow-hidden mr-4">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Michael Chen</h4>
                    <p className="text-sm text-slate-500">Beginner Gardener</p>
                  </div>
                </div>
                <p className="text-slate-700">
                  "As a complete beginner, I was killing every plant I touched until I found PlantBuddy. Now my garden
                  is thriving!"
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 overflow-hidden mr-4">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Emily Rodriguez</h4>
                    <p className="text-sm text-slate-500">Plant Collector</p>
                  </div>
                </div>
                <p className="text-slate-700">
                  "The community feature has connected me with other rare plant collectors. I've learned so much from
                  everyone!"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50 to-sky-50">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                    Ready to grow your dream garden?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Sign up for our newsletter to receive weekly plant care tips, seasonal guides, and exclusive offers.
                  </p>
                  <div className="space-y-4">
                    <Input type="email" placeholder="Enter your email" className="w-full" />
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white border-none">
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Plants"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-sky-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="h-4 w-[1px] bg-white rotate-45"></span>
                    <span className="h-4 w-[1px] bg-white -rotate-45"></span>
                  </div>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                  PlantBuddy
                </span>
              </div>
              <p className="text-slate-400 mb-4">Your trusted companion for all things plant-related.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Plant Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Indoor Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Outdoor Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Succulents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Herbs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Vegetables
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>hello@plantbuddy.com</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Green Street, Plant City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} PlantBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
