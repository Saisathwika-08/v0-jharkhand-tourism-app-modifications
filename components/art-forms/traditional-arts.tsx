import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Star } from "lucide-react"

const artForms = [
  {
    name: "Sohrai Painting",
    origin: "Hazaribagh",
    period: "3000+ years",
    description:
      "Ancient cave paintings celebrating harvest festivals, featuring geometric patterns and animal motifs painted with natural pigments on mud walls.",
    significance: "UNESCO recognized art form representing the deep connection between tribal communities and nature.",
    techniques: ["Natural pigments", "Finger painting", "Geometric patterns", "Animal motifs"],
    image: "/sohrai-painting-tribal-art-jharkhand.jpg",
    status: "UNESCO Protected",
  },
  {
    name: "Kohvar Art",
    origin: "Hazaribagh",
    period: "Ancient tradition",
    description:
      "Sacred art form created during wedding ceremonies, featuring intricate patterns symbolizing fertility, prosperity, and marital bliss.",
    significance: "Represents the cultural continuity of tribal marriage traditions and spiritual beliefs.",
    techniques: ["Clay relief work", "Natural colors", "Sacred symbols", "Ritual patterns"],
    image: "/kohvar-art-wedding-tribal-jharkhand.jpg",
    status: "Traditional",
  },
  {
    name: "Jadopatia Scroll Painting",
    origin: "Santhal Parganas",
    period: "500+ years",
    description:
      "Narrative scroll paintings telling stories of gods, goddesses, and tribal folklore, used by traveling storytellers.",
    significance: "Living tradition of oral storytelling combined with visual art, preserving tribal mythology.",
    techniques: ["Natural dyes", "Cloth scrolls", "Narrative art", "Storytelling"],
    image: "/jadopatia-scroll-painting-tribal-stories.jpg",
    status: "Endangered",
  },
  {
    name: "Dokra Metal Craft",
    origin: "Khunti, Ranchi",
    period: "4000+ years",
    description:
      "Ancient lost-wax casting technique creating bronze figurines, jewelry, and decorative items with intricate tribal motifs.",
    significance: "One of the oldest metal casting techniques in the world, showcasing advanced tribal metallurgy.",
    techniques: ["Lost-wax casting", "Bronze alloy", "Tribal motifs", "Handcrafted"],
    image: "/dokra-metal-craft-bronze-tribal-art.jpg",
    status: "GI Tagged",
  },
  {
    name: "Paitkar Painting",
    origin: "Amadubi",
    period: "Ancient",
    description:
      "Ritualistic paintings on paper and cloth depicting Hindu epics and tribal deities, used in religious ceremonies.",
    significance: "Unique blend of Hindu and tribal artistic traditions, representing cultural synthesis.",
    techniques: ["Natural colors", "Paper/cloth medium", "Religious themes", "Ritual use"],
    image: "/paitkar-painting-religious-tribal-art.jpg",
    status: "Traditional",
  },
  {
    name: "Bamboo and Cane Craft",
    origin: "Throughout Jharkhand",
    period: "Timeless",
    description: "Intricate basketry, furniture, and decorative items crafted from locally sourced bamboo and cane.",
    significance: "Sustainable craft representing the harmony between tribal communities and forest resources.",
    techniques: ["Weaving", "Natural materials", "Functional art", "Eco-friendly"],
    image: "/bamboo-cane-craft-tribal-basketry.jpg",
    status: "Sustainable",
  },
]

export function TraditionalArts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Traditional Art Forms</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Each art form carries centuries of wisdom, spiritual significance, and cultural identity, passed down
            through generations of skilled artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {artForms.map((art, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={art.image || "/placeholder.svg"}
                  alt={art.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      art.status === "UNESCO Protected"
                        ? "default"
                        : art.status === "Endangered"
                          ? "destructive"
                          : art.status === "GI Tagged"
                            ? "secondary"
                            : "outline"
                    }
                    className="bg-white/90 text-black"
                  >
                    {art.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{art.name}</h3>
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{art.origin}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{art.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{art.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Cultural Significance:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{art.significance}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Techniques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {art.techniques.map((technique, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More About {art.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
