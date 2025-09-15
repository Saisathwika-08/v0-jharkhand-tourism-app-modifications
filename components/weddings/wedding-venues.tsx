import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Star, Camera } from "lucide-react"

const venues = [
  {
    id: 1,
    name: "Palamau Fort Palace",
    location: "Palamau, Jharkhand",
    capacity: "500-1000 guests",
    rating: 4.9,
    price: "₹8,00,000 - ₹15,00,000",
    image: "/palamau-fort-wedding-venue-royal.jpg",
    features: ["Royal Architecture", "Garden Lawns", "Heritage Rooms", "Catering Services"],
    description:
      "A magnificent 16th-century fort offering royal grandeur with sprawling gardens and historic architecture.",
  },
  {
    id: 2,
    name: "Hundru Falls Resort",
    location: "Ranchi, Jharkhand",
    capacity: "200-400 guests",
    rating: 4.8,
    price: "₹5,00,000 - ₹10,00,000",
    image: "/hundru-falls-wedding-resort-nature.jpg",
    features: ["Waterfall Views", "Natural Setting", "Outdoor Ceremonies", "Luxury Accommodation"],
    description: "Experience the magic of exchanging vows with the spectacular Hundru Falls as your backdrop.",
  },
  {
    id: 3,
    name: "Tribal Heritage Resort",
    location: "Khunti, Jharkhand",
    capacity: "150-300 guests",
    rating: 4.7,
    price: "₹3,50,000 - ₹7,00,000",
    image: "/tribal-heritage-wedding-cultural.jpg",
    features: ["Cultural Performances", "Traditional Decor", "Tribal Cuisine", "Eco-Friendly"],
    description:
      "Celebrate your union with authentic tribal traditions and cultural performances in a serene forest setting.",
  },
  {
    id: 4,
    name: "Dalma Hills Resort",
    location: "Jamshedpur, Jharkhand",
    capacity: "300-600 guests",
    rating: 4.8,
    price: "₹6,00,000 - ₹12,00,000",
    image: "/dalma-hills-wedding-mountain-view.jpg",
    features: ["Mountain Views", "Wildlife Sanctuary", "Adventure Activities", "Spa Services"],
    description: "A unique wedding experience surrounded by wildlife sanctuary with panoramic mountain views.",
  },
]

export function WeddingVenues() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Enchanting Wedding Venues</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
            From royal palaces to waterfall resorts, discover the perfect venue that matches your dream wedding vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img src={venue.image || "/placeholder.svg"} alt={venue.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{venue.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{venue.name}</h3>
                    <div className="flex items-center text-slate-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{venue.capacity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{venue.price}</div>
                    <div className="text-sm text-slate-500">Starting from</div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{venue.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {venue.features.map((feature, index) => (
                    <span key={index} className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">Book Venue</Button>
                  <Button variant="outline" size="icon">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
