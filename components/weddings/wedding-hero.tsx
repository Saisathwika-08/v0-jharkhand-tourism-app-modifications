import { Button } from "@/components/ui/button"
import { Heart, MapPin, Calendar } from "lucide-react"

export function WeddingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/jharkhand-wedding-venue-palace-royal.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="h-8 w-8 text-rose-400" />
          <span className="text-rose-400 font-medium text-lg">Destination Weddings</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Your Dream Wedding in
          <span className="text-emerald-400 block">Jharkhand</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
          Create magical memories amidst the pristine forests, majestic waterfalls, and royal palaces of Jharkhand.
          Experience the perfect blend of natural beauty and cultural richness for your special day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
            <Calendar className="mr-2 h-5 w-5" />
            Plan Your Wedding
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Explore Venues
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-lg">Premium Venues</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-lg">Happy Couples</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-lg">Wedding Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
