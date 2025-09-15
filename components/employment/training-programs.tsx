import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Calendar, MapPin } from "lucide-react"

const programs = [
  {
    title: "Tourism Guide Certification",
    duration: "6 Months",
    mode: "Full-time",
    batch: "30 Students",
    level: "Beginner to Advanced",
    certification: "Government Certified",
    location: "Ranchi, Jamshedpur, Dhanbad",
    modules: [
      "Local History & Culture",
      "Communication Skills",
      "First Aid & Safety",
      "Digital Marketing",
      "Customer Service",
      "Language Training",
    ],
    training: {
      theoretical: "40%",
      practical: "60%",
      fieldWork: "20 Days",
      internship: "2 Months",
    },
    career: {
      startingSalary: "₹15,000 - ₹25,000",
      experience: "₹30,000 - ₹50,000",
      opportunities: ["Tour Guide", "Heritage Guide", "Adventure Guide", "Cultural Interpreter"],
    },
    image: "/tourism-guide-training-program.jpg",
    nextBatch: "15th March 2024",
  },
  {
    title: "Hospitality Management",
    duration: "12 Months",
    mode: "Full-time",
    batch: "25 Students",
    level: "Intermediate",
    certification: "Industry Recognized",
    location: "Ranchi, Bokaro",
    modules: [
      "Hotel Operations",
      "Food & Beverage Service",
      "Housekeeping Management",
      "Front Office Operations",
      "Event Management",
      "Revenue Management",
    ],
    training: {
      theoretical: "30%",
      practical: "70%",
      fieldWork: "45 Days",
      internship: "4 Months",
    },
    career: {
      startingSalary: "₹20,000 - ₹35,000",
      experience: "₹45,000 - ₹80,000",
      opportunities: ["Hotel Manager", "Restaurant Manager", "Event Coordinator", "Guest Relations"],
    },
    image: "/hospitality-management-training.jpg",
    nextBatch: "1st April 2024",
  },
  {
    title: "Adventure Tourism Specialist",
    duration: "4 Months",
    mode: "Intensive",
    batch: "20 Students",
    level: "Advanced",
    certification: "Adventure Sports Certified",
    location: "Netarhat, Betla",
    modules: [
      "Rock Climbing & Rappelling",
      "Trekking & Navigation",
      "Water Sports Safety",
      "Wildlife Conservation",
      "Emergency Response",
      "Equipment Management",
    ],
    training: {
      theoretical: "20%",
      practical: "80%",
      fieldWork: "60 Days",
      internship: "1 Month",
    },
    career: {
      startingSalary: "₹25,000 - ₹40,000",
      experience: "₹50,000 - ₹1,00,000",
      opportunities: ["Adventure Guide", "Expedition Leader", "Safety Instructor", "Outdoor Educator"],
    },
    image: "/adventure-tourism-specialist-training.jpg",
    nextBatch: "10th May 2024",
  },
  {
    title: "Cultural Heritage Interpreter",
    duration: "8 Months",
    mode: "Part-time",
    batch: "15 Students",
    level: "Specialized",
    certification: "Heritage Certified",
    location: "Hazaribagh, Deoghar",
    modules: [
      "Tribal History & Traditions",
      "Art Forms & Crafts",
      "Archaeological Sites",
      "Storytelling Techniques",
      "Museum Management",
      "Digital Documentation",
    ],
    training: {
      theoretical: "50%",
      practical: "50%",
      fieldWork: "30 Days",
      internship: "3 Months",
    },
    career: {
      startingSalary: "₹18,000 - ₹30,000",
      experience: "₹35,000 - ₹60,000",
      opportunities: ["Heritage Guide", "Museum Curator", "Cultural Consultant", "Research Assistant"],
    },
    image: "/cultural-heritage-interpreter-training.jpg",
    nextBatch: "20th March 2024",
  },
]

export function TrainingPrograms() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Comprehensive skill development programs designed to create tourism professionals with deep knowledge of
            Jharkhand's culture, heritage, and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{program.certification}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {program.level}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{program.batch}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-xs">{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-xs">{program.nextBatch}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Training Structure:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Theoretical:</span>
                      <p className="font-semibold text-blue-600">{program.training.theoretical}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Practical:</span>
                      <p className="font-semibold text-green-600">{program.training.practical}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Field Work:</span>
                      <p className="font-semibold text-amber-600">{program.training.fieldWork}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Internship:</span>
                      <p className="font-semibold text-purple-600">{program.training.internship}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Modules:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.modules.slice(0, 4).map((module, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {module}
                      </Badge>
                    ))}
                    {program.modules.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{program.modules.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Career Prospects:</h4>
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">
                      Starting Salary:{" "}
                      <span className="font-semibold text-green-600">{program.career.startingSalary}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                      With Experience: <span className="font-semibold text-green-600">{program.career.experience}</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {program.career.opportunities.slice(0, 2).map((opp, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {opp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Detailed Curriculum
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
