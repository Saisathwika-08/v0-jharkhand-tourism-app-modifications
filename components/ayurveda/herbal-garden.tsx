import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, MapPin, Clock, Users } from "lucide-react"

const herbs = [
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    uses: "Stress relief, immunity boost, energy enhancement",
    location: "Ranchi hills, Hazaribagh forests",
    season: "Winter harvest",
    image: "/ashwagandha-herb-jharkhand.jpg",
  },
  {
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    uses: "Memory enhancement, mental clarity, anxiety relief",
    location: "Wetlands of Dhanbad, Bokaro",
    season: "Monsoon growth",
    image: "/brahmi-herb-memory-ayurveda.jpg",
  },
  {
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    uses: "Respiratory health, immunity, spiritual wellness",
    location: "Throughout Jharkhand",
    season: "Year-round",
    image: "/tulsi-holy-basil-ayurvedic-herb.jpg",
  },
  {
    name: "Neem",
    scientificName: "Azadirachta indica",
    uses: "Skin disorders, blood purification, antimicrobial",
    location: "Palamu, Garhwa districts",
    season: "Summer flowering",
    image: "/neem-tree-medicinal-properties.jpg",
  },
  {
    name: "Arjuna",
    scientificName: "Terminalia arjuna",
    uses: "Heart health, blood pressure, cardiac strength",
    location: "Damodar river banks",
    season: "Spring bark collection",
    image: "/arjuna-bark-heart-medicine.jpg",
  },
  {
    name: "Giloy",
    scientificName: "Tinospora cordifolia",
    uses: "Fever reduction, immunity, liver health",
    location: "Forest edges, Chatra region",
    season: "Post-monsoon",
    image: "/giloy-immunity-booster-herb.jpg",
  },
]

export function HerbalGarden() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sacred Medicinal Herbs of Jharkhand</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Our pristine forests are home to over 200 medicinal plants. These herbs form the foundation of our authentic
            Ayurvedic treatments, harvested sustainably by local communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {herbs.map((herb, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${herb.image}')` }}>
                <div className="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <Leaf className="h-6 w-6 text-green-300" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{herb.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{herb.scientificName}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Therapeutic Uses:</h4>
                    <p className="text-sm text-gray-600">{herb.uses}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span>{herb.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span>{herb.season}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Medicinal Plant Gardens</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take guided tours of our herbal gardens, learn about sustainable harvesting, and understand how these plants
            are processed into healing medicines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700">
              <Users className="h-4 w-4 mr-2" />
              Book Garden Tour
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
              Learn About Herbs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
