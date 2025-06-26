"use client"

import Footer from "@/components/footer"
import ResponsiveNavigation from "@/components/navigation-bar"
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
  BookOpenText,
  Album
} from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"

export default function OpenBibleEducationPage() {
  const [language, setLanguage] = useState("en")
  const tHeroSection = useTranslations('openBibleEducationPage.heroSection') 
const  tOverviewSection = useTranslations('openBibleEducationPage.overviewSection')
const  tProgramSection = useTranslations('openBibleEducationPage.programSection')
const  tWhoCanJoinSection = useTranslations('openBibleEducationPage.whoCanJoinSection')
const  tWhyItMattersSection = useTranslations('openBibleEducationPage.whyItMattersSection')
const  tGetStartedSection = useTranslations('openBibleEducationPage.getStartedSection')
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      <ResponsiveNavigation />

      {/* <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
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
      </nav> */}

      {/* Back Navigation */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2f687a] to-[#51adbf] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <School className="h-16 w-16 mx-auto mb-6 text-[#162c36]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6"> {tHeroSection('title')} </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#daf0f3] mb-4">
              {tHeroSection('subtitle')}
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-[#162c36]">
               {tHeroSection('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#162c36] mb-6"> {tOverviewSection('title')} </h2>
              <p className="text-lg text-[#2f687a] mb-6">
             {tOverviewSection('description1')} 
              </p>
              <p className="text-lg text-[#2f687a] mb-6">
                             {tOverviewSection('description2')} 

              </p>
              <p className="text-lg text-[#2f687a]">
                             {tOverviewSection('description3')} 

              </p>
            </div>
            <div className="bg-[#f0fafb] rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#284551] mb-4">             {tOverviewSection('cardTitle')} 
</h3>
                <p className="text-[#2f687a] mb-4">
                 {tOverviewSection('cardDescription')} 
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">{tOverviewSection('cardPoint1')} </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">{tOverviewSection('cardPoint2')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">{tOverviewSection('cardPoint3')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">{tOverviewSection('cardPoint4')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#2f778b] mr-3" />
                  <span className="text-gray-700">{tOverviewSection('cardPoint5')}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#162c36] mb-4">{tProgramSection('title')}</h2>
            <p className="text-xl text-[#2f687a]">
             {tProgramSection('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">{tProgramSection('card1Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
               {tProgramSection('card1Subtitle')}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {tProgramSection('card1Point1')}</li>
                  <li>• {tProgramSection('card1Point2')}</li>
                  <li>• {tProgramSection('card1Point3')}</li>
                  <li>• {tProgramSection('card1Point4')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpenText className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">{tProgramSection('card2Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tProgramSection('card2Subtitle')}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {tProgramSection('card2Point1')}</li>
                  <li>• {tProgramSection('card2Point2')}</li>
                  <li>• {tProgramSection('card2Point3')}</li>
                  <li>• {tProgramSection('card2Point4')}</li>
                  <li>• {tProgramSection('card2Point5')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Album className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">{tProgramSection('card3Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tProgramSection('card3Subtitle')}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {tProgramSection('card3Point1')}</li>
                  <li>• {tProgramSection('card3Point2')}</li>
                  <li>• {tProgramSection('card3Point3')}</li>
                  <li>• {tProgramSection('card3Point4')}</li>
                  <li>• {tProgramSection('card3Point5')}</li>
                </ul>
              </CardContent>
            </Card>
            
          </div>

          {/* Who Can Join Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#162c36] mb-6 text-center">{tWhoCanJoinSection('title')}</h3>
            <p className="text-lg text-[#2f687a] mb-6 text-center">
              {tWhoCanJoinSection('subtitle')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-[#284551]">{tWhoCanJoinSection('pastors')}</h4>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-[#284551]">{tWhoCanJoinSection('elders')}</h4>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-[#284551]">{tWhoCanJoinSection('teachers')}</h4>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-semibold text-[#284551]">{tWhoCanJoinSection('believers')}</h4>
              </div>
            </div>
            <p className="text-center text-[#2f778b] mt-6 italic">
              {tWhoCanJoinSection('notes')}
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#284551] mb-4">{tWhyItMattersSection('title')}</h2>
            <p className="text-xl text-[#2f778b]">
           {tWhyItMattersSection('subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <blockquote className="text-xl text-[#2f687a] italic mb-6">
               {tWhyItMattersSection('testimonyQuote')}
              </blockquote>
              <cite className="text-[#284551] font-semibold">— {tWhyItMattersSection('facilitator')}</cite>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#284551] mb-4">{tWhyItMattersSection('contentTitle')}</h3>
              <p className="text-lg text-[#2f687a] mb-6">
                {tWhyItMattersSection('contentSubtitle')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#2f778b] mr-3" />
                  <span className="text-[#2f687a]">{tWhyItMattersSection('point1')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#2f778b] mr-3" />
                  <span className="text-[#2f687a]">{tWhyItMattersSection('point2')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#2f778b] mr-3" />
                  <span className="text-[#2f687a]">{tWhyItMattersSection('point3')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#2f778b] mr-3" />
                  <span className="text-[#2f687a]">{tWhyItMattersSection('point4')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-[#2b515f]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#284551]">{tGetStartedSection('title')}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[#2f687a]">
             {tGetStartedSection('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white text-[#284551] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{tGetStartedSection('downloadTitle')}</h3>
                <p className="text-gray-600 mb-4">
                 {tGetStartedSection('downloadSubtitle')}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">📥 {tGetStartedSection('downloadButton')}</Button>
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
            <p className="text-xl mb-6 text-[#2f687a]">
              Let's equip every tribe, every church, and every leader for the work of the ministry—together.
            </p>
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              👉 Contact Us to Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
