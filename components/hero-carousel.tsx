"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const carouselImages = [
  {
    src:'/picsam1.png',
    alt: "Bible translation team working together",
    caption: "Training local translators",
  },
  {
    src: "/13.png",
    alt: "Community gathering for Bible study",
    caption: "Community Bible study",
  },
  {
    src: "/14.png",
    alt: "Indonesian landscape with church",
    caption: "Reaching remote communities",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl">
      <Image src='/picsam1.png' alt='..' fill  className='h-full w-full'/>
      <div className="relative h-80 lg:h-96">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src='/picsam1.png' alt={image.alt} fill  className='h-full w-full'/>
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
