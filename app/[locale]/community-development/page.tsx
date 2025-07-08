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
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"

export default function CommunityDevelopmentPage() {
  const [language, setLanguage] = useState("en")
const tHeroSection = useTranslations('communityDevelopmentPage.heroSection')
const tCommunityProjectSection = useTranslations('communityDevelopmentPage.communityProjectSection')
const tOurImpactSection = useTranslations('communityDevelopmentPage.ourImpactSection')
const tCallToActionSection = useTranslations('communityDevelopmentPage.callToActionSection')


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
<ResponsiveNavigation/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-orange-400  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">🌱 {tHeroSection('title')}</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
             {tHeroSection('description')}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">  {tCommunityProjectSection('title')}</h2>
            <p className="text-xl text-gray-600"> {tCommunityProjectSection('description')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Water Supply Project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">{tCommunityProjectSection('waterProjectTitle')}</CardTitle>
                    <p className="text-sm text-gray-600">Sumba</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                 {tCommunityProjectSection('waterProjectContent')}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span> {tCommunityProjectSection('waterProjectDetail1')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span> {tCommunityProjectSection('waterProjectDetail2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span> {tCommunityProjectSection('waterProjectDetail3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span> {tCommunityProjectSection('waterProjectDetail4')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                 {tCommunityProjectSection('waterProjectNote')}
                </p>
              </CardContent>
            </Card>

            {/* Pig Farming Project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Sprout className="h-8 w-8 text-green-500" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">🐖 {tCommunityProjectSection('pigFarmTitle')}</CardTitle>
                    <p className="text-sm text-gray-600">Seretan</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {tCommunityProjectSection('pigFarmContent')}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('pigFarmDetail1')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('pigFarmDetail2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('pigFarmDetail3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('pigFarmDetail4')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {tCommunityProjectSection('pigFarmNote')}
                </p>
              </CardContent>
            </Card>

            {/* Catfish Fishery */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Fish className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-xl text-blue-900">🐟   {tCommunityProjectSection('catfishFisheryTitle')} </CardTitle>
                    <p className="text-sm text-gray-600">Manokwari</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                 {tCommunityProjectSection('catfishFisheryContent')} 
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>   {tCommunityProjectSection('catfishFisheryDetail1')} </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>  {tCommunityProjectSection('catfishFisheryDetail2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>  {tCommunityProjectSection('catfishFisheryDetail3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>  {tCommunityProjectSection('catfishFisheryDetail4')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                 {tCommunityProjectSection('catfishFisheryNote')}
                </p>
              </CardContent>
            </Card>

            {/* Starlink Connectivity */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-8 w-8 text-purple-500" />
                  <div>
                    <CardTitle className="text-xl text-blue-900"> {tCommunityProjectSection('starlinkInstallmentTitle')}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                 {tCommunityProjectSection('starlinkInstallmentContent')}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('starlinkInstallmentDetail1')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('starlinkInstallmentDetail2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('starlinkInstallmentDetail3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{tCommunityProjectSection('starlinkInstallmentDetail4')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                 {tCommunityProjectSection('starlinkInstallmentNote')}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{tOurImpactSection('title')}</h2>
            <p className="text-xl text-gray-600">{tOurImpactSection('description')}</p>
          </div>

          <div className="grid md:grid-cols-2 items-center">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{tOurImpactSection('cleanWater')}</h3>
              <p className="text-gray-600">{tOurImpactSection('cleanWaterDesc')}</p>
            </div>

           

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{tOurImpactSection('connectivity')}</h3>
              <p className="text-gray-600">{tOurImpactSection('connectivityDesc')}</p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🤝 {tCallToActionSection('title')}</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-green-100">
          {tCallToActionSection('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              <Mail className="h-5 w-5 mr-2" />{tCallToActionSection('contactUsButton')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
            >
              <Heart className="h-5 w-5 mr-2" />
              {tCallToActionSection('donateNowButton')}
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
