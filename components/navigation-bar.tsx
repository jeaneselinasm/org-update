"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "id">("en")

  const toggleLanguage = (lang: "en" | "id") => {
    setLanguage(lang)
    // Here you would typically implement actual language switching logic
    // such as updating i18n context or localStorage
  }

  return (
    <nav className="supports-[backdrop-filter]:bg-background/60 bg-background/95 backdrop-blur border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">Bahtraku</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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

            {/* Language Switcher - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => toggleLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("id")}>
                  Indonesia {language === "id" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-blue-900 hover:bg-blue-800 text-md">Contact</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher Button - Mobile Top Navbar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => toggleLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("id")}>
                  Indonesia {language === "id" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
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

                  {/* Language Switcher - Inside Mobile Menu */}
                  <div className="px-3 py-2">
                    <p className="text-sm text-gray-500 mb-2">Language</p>
                    <div className="flex gap-2">
                      <Button
                        variant={language === "en" ? "default" : "outline"}
                        size="sm"
                        className={language === "en" ? "bg-blue-900" : ""}
                        onClick={() => toggleLanguage("en")}
                      >
                        English
                      </Button>
                      <Button
                        variant={language === "id" ? "default" : "outline"}
                        size="sm"
                        className={language === "id" ? "bg-blue-900" : ""}
                        onClick={() => toggleLanguage("id")}
                      >
                        Indonesia
                      </Button>
                    </div>
                  </div>

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
