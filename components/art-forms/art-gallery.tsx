import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Heart, Share2 } from "lucide-react"

const galleryItems = [
  {
    title: "Sacred Sohrai Motifs",
    artist: "Bua Devi",
    type: "Traditional Painting",
    year: "2023",
    description: "Ancient symbols representing the harmony between humans and nature",
    image: "/sohrai-sacred-motifs-gallery.jpg",
    price: "₹15,000",
  },
  {
    title: "Dokra Tribal Figurine",
    artist: "Subhash Mahato",
    type: "Metal Craft",
    year: "2023",
    description: "Bronze casting depicting tribal dancers in celebration",
    image: "/dokra-tribal-figurine-gallery.jpg",
    price: "₹8,500",
  },
  {
    title: "Kohvar Wedding Blessing",
    artist: "Jamuna Devi",
    type: "Ritual Art",
    year: "2023",
    description: "Sacred patterns for marital prosperity and happiness",
    image: "/kohvar-wedding-blessing-gallery.jpg",
    price: "₹12,000",
  },
  {
    title: "Jadopatia Story Scroll",
    artist: "Dukhushyam Chitrakar",
    type: "Narrative Art",
    year: "2023",
    description: "Epic tale of tribal gods and goddesses",
    image: "/jadopatia-story-scroll-gallery.jpg",
    price: "₹20,000",
  },
  {
    title: "Bamboo Craft Collection",
    artist: "Artisan Collective",
    type: "Sustainable Craft",
    year: "2023",
    description: "Eco-friendly functional art pieces",
    image: "/bamboo-craft-collection-gallery.jpg",
    price: "₹3,500",
  },
  {
    title: "Paitkar Divine Stories",
    artist: "Ram Chitrakar",
    type: "Religious Art",
    year: "2023",
    description: "Hindu-tribal synthesis in visual storytelling",
    image: "/paitkar-divine-stories-gallery.jpg",
    price: "₹18,000",
  },
]

export function ArtGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Art Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Discover and collect authentic pieces from master artisans. Each artwork comes with a certificate of
            authenticity and the story of its creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-green-600 text-white mb-2">{item.type}</Badge>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-amber-300">{item.artist}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-green-600 font-semibold">{item.artist}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.year}</span>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{item.price}</span>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4">
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
