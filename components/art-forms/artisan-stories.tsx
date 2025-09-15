import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Award, Heart } from "lucide-react"

const artisans = [
  {
    name: "Bua Devi",
    age: 75,
    artForm: "Sohrai Painting",
    village: "Jorakath, Hazaribagh",
    story:
      "I learned this sacred art from my grandmother when I was just 8 years old. Each painting tells the story of our ancestors and their deep connection with nature. The walls of our homes become canvases where we celebrate the harvest and honor the spirits of the forest.",
    achievement: "Padma Shri Recipient 2020",
    experience: "65+ years",
    studentsTrained: "200+",
    image: "/bua-devi-sohrai-artist-padma-shri.jpg",
  },
  {
    name: "Subhash Mahato",
    age: 52,
    artForm: "Dokra Metal Craft",
    village: "Bikna, Dhanbad",
    story:
      "My family has been practicing Dokra for 12 generations. This ancient technique requires patience, skill, and deep understanding of metal properties. Each piece we create carries the soul of our tribal heritage and the wisdom of our forefathers.",
    achievement: "National Award Winner",
    experience: "35+ years",
    studentsTrained: "150+",
    image: "/subhash-mahato-dokra-craftsman.jpg",
  },
  {
    name: "Jamuna Devi",
    age: 68,
    artForm: "Kohvar Art",
    village: "Hazaribagh",
    story:
      "Kohvar is not just art, it's our prayer for prosperity and happiness in marriage. Every symbol has meaning - the lotus for purity, the fish for fertility, the peacock for beauty. When I paint these on the walls, I'm blessing the new couple with all the good wishes of our community.",
    achievement: "State Award Recipient",
    experience: "50+ years",
    studentsTrained: "100+",
    image: "/jamuna-devi-kohvar-artist.jpg",
  },
]

export function ArtisanStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Master Artisans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Meet the guardians of our cultural heritage - master artisans who have dedicated their lives to preserving
            and passing on these ancient art forms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{artisan.name}</h3>
                  <p className="text-amber-300">{artisan.artForm}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-amber-700">{artisan.achievement}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <p className="font-semibold">{artisan.experience}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Students Trained:</span>
                    <p className="font-semibold">{artisan.studentsTrained}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-6 h-6 text-green-600 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed text-sm">"{artisan.story}"</p>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Village:</span> {artisan.village}
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Support {artisan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
