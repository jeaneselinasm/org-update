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
  School,
  FileText,
  Heart,
  Handshake,
} from "lucide-react"
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
      <section className="bg-gradient-to-r from-[#2f687a] to-[#51adbf] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <School className="h-16 w-16 mx-auto mb-6 text-[#162c36]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Bible Education</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#daf0f3] mb-4">
              In Partnership with Thirdmill Institute
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-[#162c36]">
              Empowering Church Leaders with Free, High-Quality Biblical Training
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#162c36] mb-6">What Is Open Bible Education?</h2>
              <p className="text-lg text-[#2f687a] mb-6">
                At Bahtraku, we believe every believer—especially those in underserved, remote, or indigenous
                communities—should have access to solid, biblical education, regardless of location, background, or
                financial status.
              </p>
              <p className="text-lg text-[#2f687a] mb-6">
                Open Bible Education is a non-formal biblical training program that provides free, high-quality
                theological education using Thirdmill Institute's globally recognized curriculum. This program is
                designed to equip church leaders, emerging pastors, and Bible teachers who may not have the opportunity
                to attend formal seminaries.
              </p>
              <p className="text-lg text-[#2f687a]">
                Through our partnership with Thirdmill Institute, we offer a clear path for spiritual growth,
                theological depth, and ministry readiness for communities across Indonesia and beyond.
              </p>
            </div>
            <div className="bg-[#f0fafb] rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#284551] mb-4">Partnership with Thirdmill Institute</h3>
                <p className="text-[#2f687a] mb-4">
                  Thirdmill Institute is a ministry committed to providing free, seminary-level biblical education to
                  the world.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">Theological video lessons</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">Downloadable study guides</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">Interactive assessments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">Mentorship and discussion groups</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">Certificates of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-[#f0fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162c36] mb-4">Program Features</h2>
            <p className="text-xl text-[#2f687a]">
              Comprehensive theological education designed for practical ministry application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">Modular Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Nine core modules from Thirdmill Institute covering essential theological topics:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Biblical Interpretation</li>
                  <li>• Old and New Testament Survey</li>
                  <li>• Theology and Doctrine</li>
                  <li>• Church Leadership</li>
                  <li>• Christian Ethics and Evangelism</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">Flexible Learning Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Study options designed to fit your schedule and circumstances:</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Study at your own pace—individually or in small groups</li>
                  <li>• Join guided cohorts facilitated by local mentors</li>
                  <li>• Access materials online or via offline flash drives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">Contextualized Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Culturally relevant guidance for Indonesian contexts:</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Local mentorship and facilitation</li>
                  <li>• Materials adapted for Indonesian culture</li>
                  <li>• Character and competency development</li>
                  <li>• Available in multiple languages</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Who Can Join Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Can Join?</h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              The program is open to anyone with a teachable heart and desire to grow:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Pastors & Church Planters</h4>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Elders & Ministry Leaders</h4>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Bible Teachers</h4>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Growing Believers</h4>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              No prior academic background is required—just a teachable heart and a desire to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-xl text-gray-600">
              Building biblically grounded, spiritually mature, mission-ready churches
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "A solid biblical foundation is vital for a thriving church. Open Bible Education allows us to train
                leaders even in the most remote areas."
              </blockquote>
              <cite className="text-blue-900 font-semibold">— Program Facilitator, Papua Region</cite>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Impact</h3>
              <p className="text-lg text-gray-700 mb-6">
                This program helps fulfill the vision of a biblically grounded, spiritually mature, and mission-ready
                church, especially in places where theological training has been inaccessible or unaffordable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Accessible theological education for remote communities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Free, high-quality seminary-level content</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Culturally contextualized for Indonesian churches</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Flexible learning for busy ministry leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
              Are you ready to grow in God's Word and serve more effectively?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Download Materials</h3>
                <p className="text-gray-600 mb-4">
                  Access study guides, video lessons, and resources for offline learning.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">📥 Download Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Join a Cohort</h3>
                <p className="text-gray-600 mb-4">
                  Register for guided learning with local mentors and fellow students.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">📚 Register Today</Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Handshake className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Partner with Us</h3>
                <p className="text-gray-600 mb-4">Help expand the reach of biblical education to more communities.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">🤝 Become a Partner</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl mb-6 text-green-100">
              Let's equip every tribe, every church, and every leader for the work of the ministry—together.
            </p>
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              👉 Contact Us to Get Started
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
