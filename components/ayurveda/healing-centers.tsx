import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Star, Award, Users } from "lucide-react"

const centers = [
  {
    name: "Jharkhand Ayurveda Wellness Center",
    location: "Ranchi",
    rating: 4.8,
    specialties: ["Panchakarma", "Stress Management", "Chronic Pain Relief"],
    doctors: 8,
    established: "1995",
    contact: "+91 651 2234567",
    image: "/ayurveda-wellness-center-ranchi.jpg",
    features: ["24/7 Care", "Organic Herbs", "Certified Doctors", "Modern Facilities"],
  },
  {
    name: "Forest Healing Retreat",
    location: "Hazaribagh",
    rating: 4.9,
    specialties: ["Detoxification", "Mental Wellness", "Skin Disorders"],
    doctors: 6,
    established: "2001",
    contact: "+91 6546 234567",
    image: "/forest-healing-retreat-hazaribagh.jpg",
    features: ["Nature Therapy", "Yoga Sessions", "Meditation", "Herbal Gardens"],
  },
  {
    name: "Tribal Ayurveda Institute",
    location: "Jamshedpur",
    rating: 4.7,
    specialties: ["Traditional Healing", "Joint Disorders", "Digestive Health"],
    doctors: 10,
    established: "1988",
    contact: "+91 657 2345678",
    image: "/tribal-ayurveda-institute-jamshedpur.jpg",
    features: ["Ancient Methods", "Tribal Wisdom", "Research Center", "Training Programs"],
  },
  {
    name: "Himalayan Herbs Clinic",
    location: "Dhanbad",
    rating: 4.6,
    specialties: ["Respiratory Disorders", "Heart Health", "Immunity Boost"],
    doctors: 5,
    established: "2005",
    contact: "+91 326 3456789",
    image: "/himalayan-herbs-clinic-dhanbad.jpg",
    features: ["Specialized Care", "Home Remedies", "Consultation", "Follow-up Care"],
  },
]

export function HealingCenters() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Certified Ayurvedic Healing Centers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Experience authentic Ayurvedic treatments at our certified centers, where traditional wisdom meets modern
            healthcare standards for optimal healing results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {centers.map((center, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${center.image}')` }}>
                <div className="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{center.rating}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{center.name}</h3>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{center.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="h-4 w-4" />
                    <span>Est. {center.established}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{center.doctors} Doctors</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{center.contact}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {center.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">Book Consultation</Button>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      View Details
                    </Button>
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
