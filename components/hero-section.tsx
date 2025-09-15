"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/jharkhand-lush-green-hills-waterfall-tribal-cultur.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
          Discover the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Heart of India
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-pretty">
          Experience the untamed beauty of Jharkhand - where ancient tribal traditions meet pristine forests, cascading
          waterfalls, and rich cultural heritage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/explore">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Video
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-sm text-gray-300">Tourist Destinations</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">32</div>
            <div className="text-sm text-gray-300">Tribal Communities</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">15</div>
            <div className="text-sm text-gray-300">Art Forms</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">100+</div>
            <div className="text-sm text-gray-300">Authentic Cuisines</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
