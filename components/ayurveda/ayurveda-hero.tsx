import { Button } from "@/components/ui/button"
import { Leaf, Heart, Sparkles } from "lucide-react"

export function AyurvedaHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/jharkhand-ayurveda-healing-herbs-nature.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <Leaf className="h-12 w-12 text-green-300" />
            <Heart className="h-10 w-10 text-red-300" />
            <Sparkles className="h-12 w-12 text-yellow-300" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Ancient Healing
          <span className="block text-green-300">Ayurvedic Wisdom</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          Discover the profound healing traditions of Jharkhand, where ancient Ayurvedic knowledge meets pristine
          natural herbs and time-tested therapeutic practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Explore Treatments
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 bg-transparent"
          >
            Find Healing Centers
          </Button>
        </div>
      </div>
    </section>
  )
}
