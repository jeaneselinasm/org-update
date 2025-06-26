"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Globe,
  ArrowLeft,
  BookOpen,
  Users,
  GraduationCap,
  Lightbulb,
  CheckCircle,
  MapPin,
  Award,
  School,
  FileText,
  Heart,
  Library,
  PenTool,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function OpenBibleEducationPage() {
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
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <School className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Bible Education</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
              Providing accessible biblical education and literacy programs to help communities understand and engage
              with Scripture in their own language.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Making Scripture Accessible</h2>
              <p className="text-lg text-gray-700 mb-6">
                Open Bible Education is our commitment to ensuring that translated Scripture doesn't just exist, but is
                actively understood and applied by communities across Indonesia. We believe that literacy and biblical
                education go hand in hand.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through innovative educational programs, we help communities develop the skills needed to read, study,
                and teach from their newly translated Scriptures. Our approach combines traditional teaching methods
                with modern technology to reach learners of all ages and backgrounds.
              </p>
              <p className="text-lg text-gray-700">
                From basic literacy to advanced biblical studies, we provide comprehensive educational resources that
                empower communities to become self-sustaining in their spiritual growth and biblical understanding.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15,847</div>
                  <div className="text-sm text-gray-600">Students Educated</div>
                </div>
                <div className="text-center">
                  <Library className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">234</div>
                  <div className="text-sm text-gray-600">Learning Centers</div>
                </div>
                <div className="text-center">
                  <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1,456</div>
                  <div className="text-sm text-gray-600">Certified Teachers</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">89%</div>
                  <div className="text-sm text-gray-600">Literacy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Education Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive learning opportunities for all ages and skill levels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <PenTool className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Adult Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Basic reading and writing skills for adults using their mother tongue Scripture.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Phonics and reading</li>
                  <li>• Writing skills</li>
                  <li>• Scripture reading</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Bible Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Structured Bible study programs using translated Scripture in local languages.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inductive Bible study</li>
                  <li>• Small group materials</li>
                  <li>• Leadership training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Children's Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Age-appropriate biblical education programs for children and youth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sunday school curriculum</li>
                  <li>• Youth programs</li>
                  <li>• Bible storytelling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle className="text-lg text-blue-900">Digital Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Technology-enhanced learning through mobile apps and digital resources.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mobile Bible apps</li>
                  <li>• Audio resources</li>
                  <li>• Online courses</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Learning Approach</h2>
            <p className="text-xl text-gray-600">Culturally relevant and community-centered education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heart Language Focus</h3>
              <p className="text-gray-600">
                All education is conducted in the learner's mother tongue, ensuring deep understanding and emotional
                connection to the material.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community-Based</h3>
              <p className="text-gray-600">
                Programs are designed and implemented within communities, respecting local customs and building on
                existing social structures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Application</h3>
              <p className="text-gray-600">
                Learning is immediately applicable to daily life, with emphasis on how Scripture addresses real-world
                challenges and opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Train the Trainer</h3>
              <p className="text-gray-600">
                We equip local leaders to become teachers and trainers, ensuring program sustainability and cultural
                authenticity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Materials</h3>
              <p className="text-gray-600">
                We develop culturally appropriate learning materials, including textbooks, workbooks, and multimedia
                resources.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Assessment</h3>
              <p className="text-gray-600">
                Regular evaluation and feedback ensure that programs meet learner needs and achieve educational
                objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
            <p className="text-xl text-gray-600">See how education is transforming communities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Ibu Ratna"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Ibu Ratna Sari</h3>
                    <p className="text-blue-900 text-sm font-medium mb-3">Adult Literacy Graduate - Lampung</p>
                    <p className="text-gray-700 italic">
                      "At 45, I learned to read for the first time using the Lampung Bible. Now I teach other women in
                      my village. Reading God's Word in my own language has changed my life completely."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Pak Andreas"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Pak Andreas Rumbiak</h3>
                    <p className="text-blue-900 text-sm font-medium mb-3">Bible Study Leader - Papua</p>
                    <p className="text-gray-700 italic">
                      "Our Bible study program has grown from 5 people to over 100. When people can study Scripture in
                      Dani language, they understand God's love in a completely new way."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Maria"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Maria Kairupan</h3>
                    <p className="text-blue-900 text-sm font-medium mb-3">Children's Teacher - North Sulawesi</p>
                    <p className="text-gray-700 italic">
                      "The children's program has transformed our Sunday school. Kids are excited to learn Bible stories
                      in Minahasa language, and they're teaching their parents at home!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Pak David"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Pak David Siahaan</h3>
                    <p className="text-blue-900 text-sm font-medium mb-3">Digital Learning Coordinator - Sumatra</p>
                    <p className="text-gray-700 italic">
                      "The mobile Bible app has reached remote villages we couldn't visit physically. Young people are
                      especially engaged with the digital format and audio features."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Bible Education</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Help us expand biblical education programs across Indonesia. Your support can help more communities access
            and understand God's Word in their heart language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              Support Our Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
              Become a Teacher
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
