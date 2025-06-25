"use client"

import ResponsiveNavigation from "@/components/navigation-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Target,
  MapPin,
  Languages,
  Heart,
  Speech,
  FolderCheck,
  MessageCircleQuestion,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
ResponsiveNavigation
import { useTranslations } from "next-intl"
export default function BibleTranslationTrainingPage() {
  const [language, setLanguage] = useState("en")
   const tTrainingProcessSection = useTranslations("bibleTranslationTrainingPage.trainingProcessSection")
   const tHeroSection = useTranslations("bibleTranslationTrainingPage.heroSection")
   const tOverviewSection = useTranslations("bibleTranslationTrainingPage.overviewSection")
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
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <BookOpen className="h-16 w-16 mx-auto mb-6 text-orange-600" /> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">{tHeroSection('title')}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-400 ">
             {tHeroSection('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">{tOverviewSection('title1')}<br /> {tOverviewSection('title2')}</h2>
              <p className="text-lg text-gray-700 mb-6 text-justify">
              {tOverviewSection('description')}
              </p>
              {/* <p className="text-lg text-gray-700 mb-6">
                Through comprehensive training programs, we equip indigenous speakers with the linguistic, theological,
                and technical skills needed to translate Scripture accurately while preserving the heart and meaning of
                God's Word in their mother tongue.
              </p>
              <p className="text-lg text-gray-700">
                Our approach combines academic rigor with practical application, ensuring that every translator is not
                only skilled but also deeply committed to serving their community through God's Word.
              </p> */}
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4700</div>
                  <div className="text-sm text-gray-600">  {tOverviewSection('trainedTranslators')}</div>
                </div>
                <div className="text-center">
                  <Languages className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">442</div>
                  <div className="text-sm text-gray-600"> {tOverviewSection('languages')}</div>
                </div>
                <div className="text-center">
                  <Speech className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">585</div>
                  <div className="text-sm text-gray-600"> {tOverviewSection('activeTranslators')}</div>
                </div>
                <div className="text-center">
                  <FolderCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">65</div>
                  <div className="text-sm text-gray-600"> {tOverviewSection('activeProjects')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum designed for different skill levels and needs
            </p>
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircleQuestion className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">Why Bible Translation Training ? </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                 Millions of people still do not have access to the full Bible in their own language. This training program empowers communities to take ownership of Bible translation efforts, ensuring that translations are:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Faithful to the original meaning</li>
                  <li>• Understandable to local readers</li>
                  <li>• Naturally expressed in the local language</li>
                </ul>
                
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">Who Can Join ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                We welcome:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Church leaders and laypeople with a calling to Bible translation</li>
                  <li>• Local believers fluent in their mother tongue and Indonesian</li>
                  <li>• Those with a passion for language development and Scripture engagement</li>
                  <li>• Quality checking procedures</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                   No prior translation experience is needed—just a heart to serve and willingness to learn.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-xl text-blue-900">What is The Outcomes After Training ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                 By the end of the training, participants will be able to:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Understand key concepts in Bible translation</li>
                  <li>• Begin drafting Scripture in their local language</li>
                  <li>• Use translation software</li>
                  <li>• Collaborate in a translation team under the guidance of the leader </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{tTrainingProcessSection('title')}</h2>
            <p className="text-lg text-gray-600">{tTrainingProcessSection('subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step1Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step1Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-900">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step2Title')}</h3>
              <p className="text-gray-600">
                 {tTrainingProcessSection('step2Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-900">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step3Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step3Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-900">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step4Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step4Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-900">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step5Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step5Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-900">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step6Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step6Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-900">7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step7Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step7Subtitle')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-900">8</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tTrainingProcessSection('step8Title')}</h3>
              <p className="text-gray-600">
                {tTrainingProcessSection('step8Subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Meet some of our trained translators making a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Pak Yosef Manurung"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">Pak Yosef Manurung</h3>
                  <p className="text-blue-900 font-medium">Lead Translator - Batak Toba</p>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The training program transformed not just my translation skills, but my understanding of God's Word.
                  Now our entire community can worship in their heart language."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Completed: Advanced Translation</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Ibu Sarah Kairupan"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">Ibu Sarah Kairupan</h3>
                  <p className="text-blue-900 font-medium">Translation Consultant - Minahasa</p>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "From being a student to training others, this program has equipped me to multiply the impact across
                  multiple language groups in North Sulawesi."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Completed: Consultant Training</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Bapak Daniel Waromi"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">Bapak Daniel Waromi</h3>
                  <p className="text-blue-900 font-medium">Team Leader - Papuan Languages</p>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The comprehensive training gave me confidence to lead a team of translators. We've completed the New
                  Testament in three Papuan languages."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Completed: Foundation + Advanced</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Training Program</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Are you passionate about bringing God's Word to your community? Our training programs can equip you with the
            skills and knowledge needed to make an eternal impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Apply for Training
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Learn More
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
