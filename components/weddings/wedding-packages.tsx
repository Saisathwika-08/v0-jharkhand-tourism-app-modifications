import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Heart, Sparkles } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Essential Bliss",
    icon: Heart,
    price: "₹3,50,000",
    duration: "2 Days",
    guests: "Up to 150",
    color: "rose",
    features: [
      "Venue decoration with flowers",
      "Traditional welcome ceremony",
      "Professional photography (6 hours)",
      "Catering for all meals",
      "Basic sound system",
      "Bridal makeup artist",
      "Transportation for couple",
      "Wedding coordinator",
    ],
  },
  {
    id: 2,
    name: "Royal Celebration",
    icon: Crown,
    price: "₹8,50,000",
    duration: "3 Days",
    guests: "Up to 400",
    color: "emerald",
    popular: true,
    features: [
      "Premium venue with royal decor",
      "Traditional tribal performances",
      "Professional photography & videography",
      "Multi-cuisine catering",
      "DJ and live music",
      "Bridal suite accommodation",
      "Guest transportation",
      "Dedicated wedding planner",
      "Mehendi and sangeet arrangements",
      "Floral arrangements and lighting",
    ],
  },
  {
    id: 3,
    name: "Luxury Extravaganza",
    icon: Sparkles,
    price: "₹15,00,000",
    duration: "4 Days",
    guests: "Up to 800",
    color: "purple",
    features: [
      "Luxury palace venue booking",
      "Complete event management",
      "Cinematic wedding film",
      "Gourmet catering with live counters",
      "Celebrity entertainment",
      "Luxury accommodation for family",
      "Helicopter entry (optional)",
      "Personal wedding concierge",
      "Spa services for couple",
      "Custom wedding favors",
      "Fireworks display",
      "Pre-wedding photoshoot",
    ],
  },
]

export function WeddingPackages() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Wedding Packages</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
            Choose from our carefully curated wedding packages designed to make your special day unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            const isPopular = pkg.popular

            return (
              <Card
                key={pkg.id}
                className={`relative bg-slate-800 border-slate-700 hover:border-emerald-500 transition-all duration-300 ${
                  isPopular ? "ring-2 ring-emerald-500 scale-105" : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${pkg.color}-500/20 flex items-center justify-center`}
                  >
                    <IconComponent className={`h-8 w-8 text-${pkg.color}-400`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-emerald-400 mt-2">{pkg.price}</div>
                  <div className="text-slate-400">Starting from</div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">{pkg.duration}</div>
                      <div className="text-sm text-slate-400">Duration</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{pkg.guests}</div>
                      <div className="text-sm text-slate-400">Guests</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      isPopular ? "bg-emerald-500 hover:bg-emerald-600" : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Need a custom package?</p>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white bg-transparent"
          >
            Contact Our Wedding Planners
          </Button>
        </div>
      </div>
    </section>
  )
}
