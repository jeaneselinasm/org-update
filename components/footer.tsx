import Link from "next/link";
import {
  MapPin,
  Users,
  BookOpen,
  Printer,
  Instagram,
  Youtube,
  Phone,
  Mail,
} from "lucide-react"


export default function Footer(){
    return (
         <footer className="bg-orange-50 text-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bahtraku</h3>
              <p className="text-orange-400">
                Translating God's Word into every language across Indonesia,
                bringing hope and transformation to communities.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Registration Information
              </h4>
              <p className="text-orange-400 text-sm">
                Bahtraku Foundation
                <br />
                Registered Non-Profit Organization
                <br />
                License No: NPO-2019-IDN-001
                <br />
                Jakarta, Indonesia
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-orange-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-orange-400 hover:text-white transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-orange-300 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  +62 21 1234 5678
                </div>
                <div className="flex items-center text-orange-300 text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  info@bahtraku.org
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="border-t border-zinc-400 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link
                href="#"
                className="text-orange-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-orange-300 text-sm">
              © 2025 Bahtraku. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    )
}