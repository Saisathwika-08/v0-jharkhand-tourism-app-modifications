import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, IndianRupee } from "lucide-react"

const careerPaths = [
  {
    title: "Tourism Guide",
    levels: [
      {
        position: "Junior Guide",
        experience: "0-2 years",
        salary: "₹15,000 - ₹25,000",
        responsibilities: ["Local site tours", "Basic interpretation", "Group assistance"],
        skills: ["Communication", "Local knowledge", "First aid"],
      },
      {
        position: "Senior Guide",
        experience: "2-5 years",
        salary: "₹25,000 - ₹40,000",
        responsibilities: ["Specialized tours", "Training juniors", "Customer relations"],
        skills: ["Advanced interpretation", "Leadership", "Multiple languages"],
      },
      {
        position: "Master Guide",
        experience: "5+ years",
        salary: "₹40,000 - ₹70,000",
        responsibilities: ["VIP tours", "Guide training", "Route development"],
        skills: ["Expert knowledge", "Business development", "Cultural expertise"],
      },
    ],
    growth: "Linear progression with certification upgrades",
    locations: ["All tourist destinations", "Heritage sites", "Adventure spots"],
    image: "/career-path-tourism-guide.jpg",
  },
  {
    title: "Hospitality Management",
    levels: [
      {
        position: "Assistant Manager",
        experience: "0-3 years",
        salary: "₹20,000 - ₹35,000",
        responsibilities: ["Daily operations", "Staff coordination", "Guest services"],
        skills: ["Operations management", "Team coordination", "Customer service"],
      },
      {
        position: "Department Manager",
        experience: "3-7 years",
        salary: "₹35,000 - ₹60,000",
        responsibilities: ["Department oversight", "Budget management", "Quality control"],
        skills: ["Leadership", "Financial management", "Strategic planning"],
      },
      {
        position: "General Manager",
        experience: "7+ years",
        salary: "₹60,000 - ₹1,20,000",
        responsibilities: ["Overall operations", "Business strategy", "Stakeholder relations"],
        skills: ["Executive leadership", "Business strategy", "Market analysis"],
      },
    ],
    growth: "Fast-track progression in growing hospitality sector",
    locations: ["Hotels", "Resorts", "Restaurants", "Event venues"],
    image: "/career-path-hospitality-management.jpg",
  },
  {
    title: "Adventure Tourism",
    levels: [
      {
        position: "Activity Instructor",
        experience: "0-2 years",
        salary: "₹25,000 - ₹40,000",
        responsibilities: ["Activity instruction", "Safety management", "Equipment maintenance"],
        skills: ["Technical skills", "Safety protocols", "Physical fitness"],
      },
      {
        position: "Expedition Leader",
        experience: "2-5 years",
        salary: "₹40,000 - ₹70,000",
        responsibilities: ["Expedition planning", "Team leadership", "Risk assessment"],
        skills: ["Leadership", "Risk management", "Advanced technical skills"],
      },
      {
        position: "Adventure Consultant",
        experience: "5+ years",
        salary: "₹70,000 - ₹1,50,000",
        responsibilities: ["Program development", "Business consulting", "Training design"],
        skills: ["Business development", "Consulting", "Industry expertise"],
      },
    ],
    growth: "High-growth sector with premium earning potential",
    locations: ["Adventure parks", "Trekking routes", "Water sports centers"],
    image: "/career-path-adventure-tourism.jpg",
  },
]

export function CareerPaths() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Career Progression Paths</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Clear advancement opportunities with structured growth, competitive salaries, and leadership development in
            Jharkhand's expanding tourism industry.
          </p>
        </div>

        <div className="space-y-12">
          {careerPaths.map((path, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                      <img
                        src={path.image || "/placeholder.svg"}
                        alt={path.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.growth}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Work Locations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {path.locations.map((location, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="space-y-6">
                      {path.levels.map((level, levelIndex) => (
                        <div key={levelIndex} className="relative">
                          {levelIndex < path.levels.length - 1 && (
                            <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-green-300"></div>
                          )}

                          <div className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                {levelIndex + 1}
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="bg-white rounded-lg p-6 shadow-sm border">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                  <div>
                                    <h4 className="text-xl font-bold text-gray-900">{level.position}</h4>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{level.experience}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <IndianRupee className="w-4 h-4" />
                                        <span className="font-semibold text-green-600">{level.salary}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Badge
                                    className={`${
                                      levelIndex === 0
                                        ? "bg-blue-100 text-blue-800"
                                        : levelIndex === 1
                                          ? "bg-green-100 text-green-800"
                                          : "bg-purple-100 text-purple-800"
                                    }`}
                                  >
                                    Level {levelIndex + 1}
                                  </Badge>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {level.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                          <span>{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-gray-900 mb-2">Required Skills:</h5>
                                    <div className="flex flex-wrap gap-1">
                                      {level.skills.map((skill, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Start Your Journey in {path.title}
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
