"use client"

import Footer from "@/components/footer"
import ResponsiveNavigation from "@/components/navigation-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Globe,
  ArrowLeft,
  Heart,
  Users,
  Droplets,
  Fish,
  Wifi,
  MapPin,
  Mail,
  Handshake,
  CheckCircle,
  Sprout,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CommunityDevelopmentPage() {
  const [language, setLanguage] = useState("en")

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
<ResponsiveNavigation/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-orange-400  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">🌱 Community Development</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              As part of our holistic approach to ministry, Bahtraku actively supports community development programs in
              regions where Bible translation is taking place. We believe that spiritual transformation must go hand in
              hand with practical impact.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Holistic Ministry Approach</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our community projects aim to improve livelihoods, ensure access to basic needs, and encourage
              self-sufficiency. We believe that when communities thrive physically and economically, they are better
              positioned to receive and engage with God's Word.
            </p>
          </div>
        </div>
      </section> */}

      {/* Current Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Community Projects</h2>
            <p className="text-xl text-gray-600"> Making a tangible difference in communities across Indonesia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Water Supply Project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">💧 Water Supply Project</CardTitle>
                    <p className="text-sm text-gray-600">Sumba</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  In partnership with the New Zealand Aid Programme, Bahtraku is supporting the installation of clean
                  water systems for communities in Sumba.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Reduces waterborne diseases</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Improves hygiene and health</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Relieves burden on women and children</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>More time for education, work, and ministry</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Clean water means healthier families and more opportunities for community development.
                </p>
              </CardContent>
            </Card>

            {/* Pig Farming Project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Sprout className="h-8 w-8 text-green-500" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">🐖 Pig Farming Initiative</CardTitle>
                    <p className="text-sm text-gray-600">Seretan</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We are developing a sustainable pig farming initiative in Seretan, aimed at supporting local families
                  with a steady source of income and food.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Training and resource access</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Small farm management skills</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Improved economic resilience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Better nutritional outcomes</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Equipping families to manage sustainable farms that improve both income and nutrition.
                </p>
              </CardContent>
            </Card>

            {/* Catfish Fishery */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Fish className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">🐟 Catfish Fishery</CardTitle>
                    <p className="text-sm text-gray-600">Manokwari</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  In Manokwari, we are helping communities establish catfish farming systems, utilizing affordable and
                  replicable methods.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Affordable aquaculture methods</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Protein-rich food production</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Income generation opportunities</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Replicable small-scale systems</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Empowering local households through sustainable aquaculture practices.
                </p>
              </CardContent>
            </Card>

            {/* Starlink Connectivity */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-8 w-8 text-purple-500" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">🌐 Starlink Connectivity</CardTitle>
                    <p className="text-sm text-gray-600">Pendau</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Access to the internet is a critical need in remote areas. Bahtraku's first Starlink installation in
                  Pendau marks a milestone in bridging the digital divide.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Access to training materials</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Coordination with partners</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Advanced translation work</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Community connectivity</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Connecting remote communities to global resources and opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Transforming communities through practical development</p>
          </div>

          <div className="grid md:grid-cols-2 items-center">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Clean Water</h3>
              <p className="text-gray-600">Healthier families and communities</p>
            </div>

           

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Connectivity</h3>
              <p className="text-gray-600">Bridging the digital divide</p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🤝 Join Us</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-green-100">
            Your support enables us to continue these impactful initiatives. Whether through prayer, donation, or
            partnership, you can be part of the transformation happening across Indonesia. Let's bring the Word and
            lasting hope to every tribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              <Mail className="h-5 w-5 mr-2" />📩 Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
            >
              <Heart className="h-5 w-5 mr-2" />
              ❤️ Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
            >
              <Globe className="h-5 w-5 mr-2" />🌐 Visit Website
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  )
}
