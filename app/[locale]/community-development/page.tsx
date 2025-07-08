"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Globe,
  ArrowLeft,
  Heart,
  Users,
  Home,
  Stethoscope,
  GraduationCap,
  Sprout,
  CheckCircle,
  MapPin,
  Award,
  Handshake,
  Building,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CommunityDevelopmentPage() {
  const [language, setLanguage] = useState("en")

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-blue-900">Bahtraku</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/get-involved"
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
                <div className="flex items-center space-x-4">
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-20 h-9 border-gray-300">
                      <div className="flex items-center space-x-1">
                        <Globe className="h-4 w-4 text-gray-600" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">EN</SelectItem>
                      <SelectItem value="id">ID</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-blue-900 hover:bg-blue-800">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Development</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
              Supporting holistic community development through education, healthcare, and economic empowerment
              alongside Bible translation work.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Holistic Community Transformation</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Bahtraku, we believe that Bible translation is most effective when it occurs within the context of
                comprehensive community development. Our approach addresses not only spiritual needs but also the
                physical, educational, and economic challenges that communities face.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through integrated development programs, we work alongside communities to build sustainable solutions
                that improve quality of life while creating an environment where God's Word can take root and flourish.
              </p>
              <p className="text-lg text-gray-700">
                Our community development initiatives are designed to be culturally appropriate, environmentally
                sustainable, and community-led, ensuring that positive changes continue long after our direct
                involvement ends.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">89,456</div>
                  <div className="text-sm text-gray-600">People Served</div>
                </div>
                <div className="text-center">
                  <Home className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">347</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
                <div className="text-center">
                  <Building className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">156</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">78%</div>
                  <div className="text-sm text-gray-600">Sustainability Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Focus Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive programs addressing community needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Building schools, training teachers, and providing educational resources.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• School construction</li>
                  <li>• Teacher training</li>
                  <li>• Educational materials</li>
                  <li>• Scholarship programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Improving access to healthcare and promoting community wellness.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Health clinics</li>
                  <li>• Medical training</li>
                  <li>• Preventive care</li>
                  <li>• Health education</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Economic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Creating sustainable income opportunities and financial literacy.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Microfinance programs</li>
                  <li>• Skills training</li>
                  <li>• Cooperative development</li>
                  <li>• Market access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sprout className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg text-blue-900">Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Improving food security through sustainable farming practices.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Crop diversification</li>
                  <li>• Organic farming</li>
                  <li>• Irrigation systems</li>
                  <li>• Farmer training</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Approach</h2>
            <p className="text-xl text-gray-600">Community-centered and sustainable development principles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Ownership</h3>
              <p className="text-gray-600">
                Communities lead their own development process, with our role being to facilitate, support, and provide
                resources as needed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Needs-Based Planning</h3>
              <p className="text-gray-600">
                All programs are designed based on comprehensive community assessments and prioritized according to
                local needs and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership Model</h3>
              <p className="text-gray-600">
                We work in partnership with local governments, NGOs, and community organizations to maximize impact and
                avoid duplication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Capacity Building</h3>
              <p className="text-gray-600">
                We focus on building local capacity and skills, ensuring that communities can continue and expand
                development efforts independently.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability Focus</h3>
              <p className="text-gray-600">
                All projects are designed with long-term sustainability in mind, including environmental, economic, and
                social sustainability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Integration</h3>
              <p className="text-gray-600">
                Development work is integrated with Bible translation efforts, creating synergies that benefit both
                spiritual and physical well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Success Stories</h2>
            <p className="text-xl text-gray-600">Real transformation happening across Indonesia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Desa Harapan Baru, Central Kalimantan</h3>
                  <p className="text-blue-900 text-sm font-medium mb-3">Healthcare & Education Project</p>
                </div>
                <p className="text-gray-700 mb-4">
                  "Before Bahtraku came, our children had to walk 15 kilometers to school and we had no medical care.
                  Now we have our own school and health clinic. Most importantly, we can read God's Word in Dayak
                  language while our community grows stronger every day."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Central Kalimantan</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Completed 2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kampung Sejahtera, West Papua</h3>
                  <p className="text-blue-900 text-sm font-medium mb-3">Economic Development & Agriculture</p>
                </div>
                <p className="text-gray-700 mb-4">
                  "The microfinance program helped us start a coffee cooperative. Now 50 families have steady income,
                  and we're using our profits to support the Bible translation work. Our community is thriving both
                  spiritually and economically."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>West Papua</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Ongoing since 2022</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Desa Mandiri, East Nusa Tenggara</h3>
                  <p className="text-blue-900 text-sm font-medium mb-3">Water & Sanitation Project</p>
                </div>
                <p className="text-gray-700 mb-4">
                  "Clean water changed everything for us. Our children are healthier, women have more time for other
                  activities, and our Bible study groups have grown because people aren't constantly worried about
                  finding water."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>East Nusa Tenggara</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Completed 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kampung Berkembang, North Sumatra</h3>
                  <p className="text-blue-900 text-sm font-medium mb-3">Integrated Development Program</p>
                </div>
                <p className="text-gray-700 mb-4">
                  "Our village transformation has been incredible - new school, health clinic, improved farming
                  techniques, and small businesses. But the greatest change is seeing our people understand Scripture in
                  Batak language and live it out daily."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>North Sumatra</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Ongoing since 2021</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Us in Community Development</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100">
            Join us in creating sustainable, holistic transformation in communities across Indonesia. Together, we can
            address both spiritual and physical needs while building stronger, more resilient communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
              Support Our Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-900"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  <MapPin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
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
