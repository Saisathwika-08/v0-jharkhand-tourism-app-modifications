import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, TrendingUp, Award } from "lucide-react"

const successStories = [
  {
    name: "Priya Kumari",
    age: 28,
    program: "Tourism Guide Certification",
    year: "2021",
    currentRole: "Senior Heritage Guide",
    company: "Jharkhand Tourism Development Corporation",
    salary: "₹35,000/month",
    location: "Ranchi",
    story:
      "After completing my graduation, I was unsure about my career path. The Tourism Guide Certification program not only gave me technical skills but also deep knowledge about our rich cultural heritage. Today, I guide international tourists and have become a cultural ambassador for Jharkhand.",
    achievements: ["Best Guide Award 2023", "Featured in National Geographic", "Trained 50+ junior guides"],
    beforeAfter: {
      before: "Unemployed graduate",
      after: "Senior Heritage Guide with international recognition",
    },
    image: "/success-story-priya-kumari.jpg",
  },
  {
    name: "Rajesh Singh",
    age: 32,
    program: "Hospitality Management",
    year: "2020",
    currentRole: "General Manager",
    company: "Forest View Resort, Netarhat",
    salary: "₹75,000/month",
    location: "Netarhat",
    story:
      "I started as a waiter in a small restaurant. The Hospitality Management program transformed my understanding of the industry. The practical training and internship opportunities helped me climb the ladder quickly. Now I manage a 50-room resort and employ 30+ people from my village.",
    achievements: ["Resort of the Year 2023", "Employed 30+ locals", "Revenue growth of 200%"],
    beforeAfter: {
      before: "Restaurant waiter earning ₹8,000",
      after: "Resort General Manager leading a team of 30+",
    },
    image: "/success-story-rajesh-singh.jpg",
  },
  {
    name: "Anita Devi",
    age: 26,
    program: "Adventure Tourism Specialist",
    year: "2022",
    currentRole: "Expedition Leader",
    company: "Jharkhand Adventure Sports",
    salary: "₹60,000/month",
    location: "Betla National Park",
    story:
      "As a tribal woman, I faced many challenges. But my love for nature and adventure drove me to join this program. The training was intense but rewarding. Now I lead trekking expeditions and have become a role model for other women in my community to pursue adventure careers.",
    achievements: [
      "First female expedition leader in Betla",
      "Led 100+ successful expeditions",
      "Women empowerment advocate",
    ],
    beforeAfter: {
      before: "Village woman with limited opportunities",
      after: "Professional expedition leader inspiring others",
    },
    image: "/success-story-anita-devi.jpg",
  },
  {
    name: "Suresh Mahato",
    age: 35,
    program: "Cultural Heritage Interpreter",
    year: "2019",
    currentRole: "Museum Curator",
    company: "Tribal Research Institute",
    salary: "₹45,000/month",
    location: "Ranchi",
    story:
      "Being from a tribal family, I always felt disconnected from formal education. This program helped me realize that my traditional knowledge was actually my strength. Now I curate exhibitions, conduct research, and help preserve our tribal heritage for future generations.",
    achievements: ["Curated 15+ exhibitions", "Published research papers", "Heritage preservation award"],
    beforeAfter: {
      before: "Traditional craftsman with informal knowledge",
      after: "Professional curator preserving tribal heritage",
    },
    image: "/success-story-suresh-mahato.jpg",
  },
]

export function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Real transformations of individuals who built successful careers through our training programs, becoming
            leaders and change-makers in Jharkhand's tourism industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-green-300">{story.currentRole}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Success Story
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Program:</span>
                    <p className="font-semibold text-blue-600">{story.program}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Year:</span>
                    <p className="font-semibold">{story.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Current Salary:</span>
                    <p className="font-semibold text-green-600">{story.salary}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <p className="font-semibold">{story.location}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed text-sm">"{story.story}"</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {story.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Award className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Transformation Journey
                  </h4>
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Before:</span> {story.beforeAfter.before}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">After:</span> {story.beforeAfter.after}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
