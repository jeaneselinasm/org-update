"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="supports-[backdrop-filter]:bg-background/60 bg-background/95 backdrop-blur border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">Bahtraku</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#about"
                className="text-gray-700 text-md hover:text-blue-900 px-3 py-2 transition-colors hover:underline"
              >
                About
              </Link>
              <Link
                href="#translations"
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-md transition-colors hover:underline"
              >
                Translations
              </Link>
              <Button className="bg-blue-900 hover:bg-blue-800 text-md">Contact</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <Link
                    href="#about"
                    className="text-gray-700 text-lg hover:text-blue-900 px-3 py-2 transition-colors hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="#translations"
                    className="text-gray-700 hover:text-blue-900 px-3 py-2 text-lg transition-colors hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    Translations
                  </Link>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-lg w-full" onClick={() => setIsOpen(false)}>
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
