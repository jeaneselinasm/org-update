import HeroCarousel from "@/components/hero-carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Users,
  BookOpen,
  FileText,
  Printer,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapIcon,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button_v2 } from "@/components/ui/button-shine-2";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { MorphingDialogBasicOne } from "@/components/motion-primitives/morphing-dialog-basic-one";
import { Badge } from "@/components/ui/badge";
import { RotateWords } from "@/components/rotate-words";
import ResponsiveNavigation from "@/components/navigation-bar";
import { useLocale, useTranslations } from "next-intl"

export default function HomePage() {
  const locale = useLocale()
  const theroSection = useTranslations("homePage.heroSection")
  return (
    <div className=" bg-white">
      {/* Navigation */}

      <ResponsiveNavigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen py-10 "
        style={{
          backgroundImage: "url('/image2.png')",
          backgroundSize: "center",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full absolute inset-0 bg-black/50 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  md:mt-60 text-white font-bold">
          <div className="font-light">
            <RotateWords text={theroSection('titleRotateText')} words={[theroSection('titleRotateWords1'), theroSection('titleRotateWords2')]} />
            <h1 className="text-3xl md:text-5xl mb-6 text-white ">              
             {theroSection('title')}
            </h1>
            <h2 className="text-lg md:text-2xl mb-4 max-w-3xl  text-left text-white">
              {theroSection('subtitle')}
            </h2>
            <div className=" flex flex-col sm:justify-start w-fit sm:flex-row gap-4 p-2 sm:w-full">
              <Button
                size="default"
                variant="secondary"
                className=" bg-orange-400 text-white "
              >
                <Link href="#testimonies">Learn More</Link>
              </Button>
              <Button
                size="default"
                variant="secondary"
                className=" text-white bg-blue-900 "
              >
                <Link href="#ministry"> {theroSection('getInvolvedButton')}</Link>
              </Button>
              <Button_v2
               
                className="bg-orange-400"
              >
                <Link href="https://bahtraku.bible/"  legacyBehavior passHref> 
                <a target="_blank" rel="noopener noreferrer"> {theroSection('donateButton')}</a>
                </Link>
              </Button_v2>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
              Our Impact Across Indonesia
            </h2>
            <p className="text-xl text-gray-600">
              See how God is working through Bible translation across the
              archipelago
            </p>
          </div>

          {/* Map of Indonesia */}
          {/* <div className="mb-12 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <div className="flex items-center justify-center h-64 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <MapIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-semibold">Indonesia Map</p>
                  <p className="text-blue-600 text-sm">
                    Translation Projects Across the Nation
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
             
              
              <NumberTicker
                value={4700}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
      
              <div className="text-sm text-gray-600">Trained People</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <NumberTicker
                value={65}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
              <div className="text-sm text-gray-600">Active Projects</div>
            </div>
             <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
             
              
              <NumberTicker
                value={585}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
      
              <div className="text-sm text-gray-600">Active Translator</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <NumberTicker
                value={44}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "} 
              </NumberTicker>
              <div className="text-sm text-gray-600"> Language Completed New Testament</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <NumberTicker
                value={3}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
              <div className="text-sm text-gray-600"> Language Completed Old Testament</div>
            </div>
            {/* <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <FileText className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <NumberTicker
                value={2847}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
              <div className="text-sm text-gray-600">Chapters</div>
            </div> */}
            {/* <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <FileText className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <NumberTicker
                value={827163}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
              <div className="text-sm text-gray-600">Verses</div>
            </div> */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Printer className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <NumberTicker
                value={12}
                decimalPlaces={0}
                startValue={0}
                className="text-2xl font-bold text-gray-900"
              >
                {" "}
              </NumberTicker>
              <div className="text-sm text-gray-600">Printed Bibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ministry Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              Our Ministry
            </h2>
            <p className="text-xl text-gray-600">
              Three pillars of our mission to serve communities across Indonesia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            <MorphingDialogBasicOne
              title="Bible Translation Training"
              subtitle="Equipping local communities with the skills and knowledge needed to translate God's Word into their
                  heart languages with accuracy and cultural sensitivity."
              image="/bible-translation-training.png"
            />

            <MorphingDialogBasicOne
              title="Open Bible Education"
              subtitle="Providing accessible biblical education and literacy programs to help communities understand and
                  engage with Scripture in their own language."
              image="/14.png"
            />

            <MorphingDialogBasicOne
              title="Community Development"
              subtitle="Supporting holistic community development through education, healthcare, and economic empowerment
                  alongside Bible translation work."
              image="/installment.png"
            />
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
              Testimonies
            </h2>
            <p className="text-xl text-gray-600">
              Hear how God's Word is transforming lives across Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg  hover:border-orange-100 transition-shadow bg-zinc-50">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-2">
                  "When I first heard the Gospel in my own language, it was like
                  my heart was opened for the first time. Now our entire village
                  gathers to hear God's Word in Batak."
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center gap-2">
                <Badge
                  variant="secondary"
                  className="h-8 w-2/4 text-sm text-orange-500"
                >
                  Maria Situmorang
                </Badge>
                <Badge
                  variant="secondary"
                  className=" h-8 w-2/4 text-sm text-blue-500"
                >
                  Batak Language
                </Badge>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "Being part of the translation team has been the greatest
                  honor of my life. Seeing my people understand Scripture in
                  Javanese brings tears of joy."
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center gap-2">
                <Badge
                  variant="secondary"
                  className="h-8 w-2/4 text-sm text-orange-500"
                >
                  Maria Situmorang
                </Badge>
                <Badge
                  variant="secondary"
                  className=" h-8 w-2/4 text-sm text-blue-500"
                >
                  Batak Language
                </Badge>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "The children in our village now sing Bible songs in
                  Sundanese. It's beautiful to see how God's Word comes alive in
                  our mother tongue."
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center gap-2">
                <Badge
                  variant="secondary"
                  className="h-8 w-2/4 text-sm text-orange-500"
                >
                  Maria Situmorang
                </Badge>
                <Badge
                  variant="secondary"
                  className=" h-8 w-2/4 text-sm text-blue-500"
                >
                  Batak Language
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
