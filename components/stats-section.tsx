"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Trained People", value: "2,847", color: "bg-blue-500" },
  { label: "Active Projects", value: "156", color: "bg-green-500" },
  { label: "NT Chapters", value: "1,243", color: "bg-purple-500" },
  { label: "OT Chapters", value: "892", color: "bg-orange-500" },
  { label: "Total Verses", value: "45,678", color: "bg-red-500" },
  { label: "Printed Bibles", value: "12,450", color: "bg-indigo-500" },
]

export default function StatsSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Indonesian Map Placeholder */}
      <div className="relative">
        <div className="bg-blue-100 rounded-lg p-8 text-center">
          <svg viewBox="0 0 400 200" className="w-full h-64 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified Indonesian archipelago outline */}
            <path
              d="M50 120 Q80 100 120 110 Q160 105 200 115 Q240 110 280 120 Q320 115 350 125 L350 140 Q320 135 280 140 Q240 135 200 145 Q160 140 120 135 Q80 130 50 140 Z"
              fill="#3B82F6"
              className="opacity-80"
            />
            <path
              d="M70 80 Q90 70 110 75 Q130 70 150 80 L150 95 Q130 90 110 95 Q90 90 70 95 Z"
              fill="#3B82F6"
              className="opacity-80"
            />
            <path
              d="M180 90 Q200 85 220 90 Q240 85 260 95 L260 110 Q240 105 220 110 Q200 105 180 110 Z"
              fill="#3B82F6"
              className="opacity-80"
            />
            <circle cx="100" cy="110" r="3" fill="#EF4444" />
            <circle cx="180" cy="125" r="3" fill="#EF4444" />
            <circle cx="250" cy="120" r="3" fill="#EF4444" />
            <circle cx="320" cy="130" r="3" fill="#EF4444" />
            <circle cx="130" cy="85" r="3" fill="#EF4444" />
            <circle cx="220" cy="100" r="3" fill="#EF4444" />
          </svg>
          <p className="text-sm text-gray-600 mt-4">Active translation projects across Indonesia</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-lg">{stat.value.charAt(0)}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
