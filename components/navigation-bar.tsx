"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", name: "English" },
  { code: "id", name: "Bahasa Indonesia" },
];
export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Get the current language name
   const currentLanguage = languages.find((lang) => lang.code === locale)?.name || "English"

  // Handle language change
  const handleLanguageChange = (newLocale: string) => {
    console.log('here')
    // Replace the current locale in the path with the new one
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    console.log(currentLanguage, 'lang'
    )
  };

  const [language, setLanguage] = useState<"en" | "id">("en");

  const toggleLanguage = (lang: "en" | "id") => {
    setLanguage(lang);
    // Here you would typically implement actual language switching logic
    // such as updating i18n context or localStorage
  };

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
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  <span>{currentLanguage}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={
                      locale === language.code ? "bg-muted font-medium" : ""
                    }
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-blue-900 hover:bg-blue-800 text-md">
              Contact
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher Button - Mobile Top Navbar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <span >{currentLanguage === "English" ? "EN" : "ID"}</span>
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={
                      locale === language.code ? "bg-muted font-medium" : ""
                    }
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
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

        
                  <Button
                    className="bg-blue-900 hover:bg-blue-800 text-lg w-fit"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
