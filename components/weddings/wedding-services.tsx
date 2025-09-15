import { Card, CardContent } from "@/components/ui/card"
import { Camera, Music, Utensils, Car, Flower, Palette, Users, Gift } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional wedding photographers and videographers to capture every precious moment",
    features: ["Pre-wedding shoots", "Drone photography", "Same-day editing", "Digital albums"],
  },
  {
    icon: Music,
    title: "Entertainment & Music",
    description: "Live bands, DJs, and traditional tribal performances to keep your guests entertained",
    features: ["Live music bands", "Professional DJs", "Cultural performances", "Sound systems"],
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Authentic Jharkhandi cuisine and multi-cuisine options prepared by expert chefs",
    features: ["Traditional dishes", "Live cooking stations", "Dietary accommodations", "Beverage service"],
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Luxury transportation for the couple and guests with decorated vehicles",
    features: ["Bridal car decoration", "Guest shuttle service", "Airport transfers", "Vintage cars available"],
  },
  {
    icon: Flower,
    title: "Floral & Decoration",
    description: "Stunning floral arrangements and venue decoration with local and exotic flowers",
    features: ["Bridal bouquets", "Venue decoration", "Stage setup", "Entrance arrangements"],
  },
  {
    icon: Palette,
    title: "Makeup & Styling",
    description: "Professional makeup artists and stylists for the perfect bridal look",
    features: ["Bridal makeup", "Hair styling", "Groom grooming", "Family styling"],
  },
  {
    icon: Users,
    title: "Wedding Planning",
    description: "Dedicated wedding planners to coordinate every aspect of your special day",
    features: ["Timeline management", "Vendor coordination", "Guest management", "Day-of coordination"],
  },
  {
    icon: Gift,
    title: "Special Arrangements",
    description: "Unique experiences and special arrangements to make your wedding memorable",
    features: ["Helicopter entries", "Fireworks display", "Cultural ceremonies", "Spa services"],
  },
]

export function WeddingServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Wedding Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
            From planning to execution, we provide comprehensive wedding services to ensure your special day is perfect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Custom Services?</h3>
            <p className="text-slate-600 mb-6">
              Our wedding specialists can create a personalized service package tailored to your specific needs and
              preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium">Custom Packages</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
