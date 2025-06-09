import HeroCarousel from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, BookOpen, FileText, Printer, Instagram, Youtube, Phone, Mail, MapIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">Bahtraku</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#get-involved"
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Get Involved
                </Link>
                <Link
                  href="#translations"
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Translations
                </Link>
                <Button className="bg-blue-900 hover:bg-blue-800">Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Translate Bible into Every Language</h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-blue-100">
              Bringing God's Word to every tribe and tongue across Indonesia. Join us in making the Bible accessible to
              all people in their heart language.
            </p>
           <div className="mb-2 lg:pl-8">
              <HeroCarousel />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 p-2 justify-center">
                <Button size="lg" variant="secondary" className="text-blue-900 hover:bg-gray-100">
                  <Link href="#testimonies">Read Testimonies</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white  hover:bg-white text-blue-900"
                >
                  <Link href="#ministry">Get Involved</Link>
                </Button>
                <Button size="lg" className="bg-orange-400 hover:bg-orange-600 text-white">
                  <Link href="#donate">Donate Now</Link>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact Across Indonesia</h2>
            <p className="text-xl text-gray-600">
              See how God is working through Bible translation across the archipelago
            </p>
          </div>

          {/* Map of Indonesia */}
          <div className="mb-12 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <div className="flex items-center justify-center h-64 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <MapIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-semibold">Indonesia Map</p>
                  <p className="text-blue-600 text-sm">Translation Projects Across the Nation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Trained People</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-600">Active Projects</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">34</div>
              <div className="text-sm text-gray-600">New Testament</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Old Testament</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <FileText className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,847</div>
              <div className="text-sm text-gray-600">Chapters</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <FileText className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">89,234</div>
              <div className="text-sm text-gray-600">Verses</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Printer className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15,678</div>
              <div className="text-sm text-gray-600">Printed Bibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ministry Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Ministry</h2>
            <p className="text-xl text-gray-600">Three pillars of our mission to serve communities across Indonesia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Bible Translation Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Equipping local communities with the skills and knowledge needed to translate God's Word into their
                  heart languages with accuracy and cultural sensitivity.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  See Detail
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Open Bible Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Providing accessible biblical education and literacy programs to help communities understand and
                  engage with Scripture in their own language.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  See Detail
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Community Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Supporting holistic community development through education, healthcare, and economic empowerment
                  alongside Bible translation work.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  See Detail
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonies</h2>
            <p className="text-xl text-gray-600">Hear how God's Word is transforming lives across Indonesia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "When I first heard the Gospel in my own language, it was like my heart was opened for the first time.
                  Now our entire village gathers to hear God's Word in Batak."
                </p>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Maria Situmorang"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-2"
                  />
                  <p className="font-semibold text-gray-900">Maria Situmorang</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Batak Language</span>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "Being part of the translation team has been the greatest honor of my life. Seeing my people
                  understand Scripture in Javanese brings tears of joy."
                </p>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Budi Santoso"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-2"
                  />
                  <p className="font-semibold text-gray-900">Budi Santoso</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Javanese Language</span>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "The children in our village now sing Bible songs in Sundanese. It's beautiful to see how God's Word
                  comes alive in our mother tongue."
                </p>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Sari Wijaya"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-2"
                  />
                  <p className="font-semibold text-gray-900">Sari Wijaya</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sundanese Language</span>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bahtraku</h3>
              <p className="text-gray-300">
                Translating God's Word into every language across Indonesia, bringing hope and transformation to
                communities.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Registration Information</h4>
              <p className="text-gray-300 text-sm">
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
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  +62 21 1234 5678
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  info@bahtraku.org
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="text-gray-300 text-sm">© 2025 Bahtraku. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
