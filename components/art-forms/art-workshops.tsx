import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, Star } from "lucide-react"

const workshops = [
  {
    title: "Sohrai Painting Workshop",
    instructor: "Bua Devi & Team",
    duration: "3 Days",
    level: "Beginner to Advanced",
    participants: "Max 15",
    location: "Jorakath Village, Hazaribagh",
    price: "₹2,500",
    includes: ["All materials", "Traditional lunch", "Certificate", "Take-home artwork"],
    schedule: "Every weekend",
    description:
      "Learn the ancient art of Sohrai painting directly from Padma Shri recipient Bua Devi. Experience the traditional techniques using natural pigments and understand the cultural significance of each motif.",
    image: "/sohrai-workshop-traditional-painting.jpg",
    rating: 4.9,
  },
  {
    title: "Dokra Metal Casting",
    instructor: "Subhash Mahato",
    duration: "5 Days",
    level: "Intermediate",
    participants: "Max 10",
    location: "Bikna Village, Dhanbad",
    price: "₹4,000",
    includes: ["Bronze materials", "Tools usage", "Accommodation", "Meals", "Finished piece"],
    schedule: "Monthly batches",
    description:
      "Master the 4000-year-old lost-wax casting technique. Create your own Dokra figurine while learning about tribal metallurgy and the cultural stories behind each design.",
    image: "/dokra-workshop-metal-casting.jpg",
    rating: 4.8,
  },
  {
    title: "Bamboo Craft Workshop",
    instructor: "Local Artisan Collective",
    duration: "2 Days",
    level: "Beginner",
    participants: "Max 20",
    location: "Ranchi Craft Center",
    price: "₹1,500",
    includes: ["Bamboo materials", "Basic tools", "Refreshments", "Product to take home"],
    schedule: "Twice a month",
    description:
      "Learn sustainable bamboo crafting techniques. Create functional items like baskets, decorative pieces, and understand the eco-friendly aspects of this traditional craft.",
    image: "/bamboo-craft-workshop-sustainable.jpg",
    rating: 4.7,
  },
]

export function ArtWorkshops() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Learn from Masters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Immerse yourself in authentic learning experiences with master artisans. Take home not just skills, but
            stories and cultural understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    {workshop.rating}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {workshop.level}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                <p className="text-green-600 font-semibold mb-4">{workshop.instructor}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{workshop.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-xs">{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{workshop.schedule}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{workshop.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {workshop.includes.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">{workshop.price}</span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700">Book Workshop</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
