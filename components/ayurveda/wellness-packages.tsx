import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Gift, Calendar, CheckCircle } from "lucide-react"

const packages = [
  {
    name: "Detox & Rejuvenation",
    duration: "7 Days",
    price: "₹25,000",
    originalPrice: "₹30,000",
    rating: 4.9,
    participants: "1-2 People",
    image: "/detox-rejuvenation-package-ayurveda.jpg",
    includes: [
      "Panchakarma treatments",
      "Daily Abhyanga massage",
      "Herbal steam baths",
      "Yoga & meditation sessions",
      "Organic Ayurvedic meals",
      "Doctor consultations",
      "Herbal medicine kit",
    ],
    benefits: [
      "Complete body detoxification",
      "Improved energy levels",
      "Better sleep quality",
      "Enhanced immunity",
      "Stress relief",
    ],
  },
  {
    name: "Stress Relief Retreat",
    duration: "5 Days",
    price: "₹18,000",
    originalPrice: "₹22,000",
    rating: 4.8,
    participants: "1-4 People",
    image: "/stress-relief-retreat-ayurveda.jpg",
    includes: [
      "Shirodhara therapy",
      "Aromatherapy sessions",
      "Meditation classes",
      "Nature walks",
      "Calming herbal teas",
      "Stress management counseling",
      "Relaxation techniques",
    ],
    benefits: ["Reduced anxiety", "Mental clarity", "Emotional balance", "Better focus", "Inner peace"],
  },
  {
    name: "Joint & Pain Relief",
    duration: "10 Days",
    price: "₹35,000",
    originalPrice: "₹42,000",
    rating: 4.7,
    participants: "1-2 People",
    image: "/joint-pain-relief-ayurveda.jpg",
    includes: [
      "Specialized joint treatments",
      "Medicated oil massages",
      "Heat therapy",
      "Physiotherapy sessions",
      "Anti-inflammatory herbs",
      "Diet consultation",
      "Exercise guidance",
    ],
    benefits: [
      "Reduced joint pain",
      "Improved mobility",
      "Inflammation reduction",
      "Muscle strength",
      "Long-term relief",
    ],
  },
  {
    name: "Skin & Beauty Care",
    duration: "6 Days",
    price: "₹20,000",
    originalPrice: "₹25,000",
    rating: 4.8,
    participants: "1-3 People",
    image: "/skin-beauty-care-ayurveda.jpg",
    includes: [
      "Herbal face treatments",
      "Body scrubs & wraps",
      "Natural beauty therapies",
      "Skin analysis",
      "Customized skincare",
      "Beauty diet plan",
      "Home care products",
    ],
    benefits: ["Glowing skin", "Reduced acne", "Anti-aging effects", "Natural radiance", "Healthy complexion"],
  },
]

export function WellnessPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Wellness Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Choose from our carefully curated wellness packages designed to address specific health concerns and provide
            holistic healing experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${pkg.image}')` }}>
                <div className="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{pkg.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gift className="h-4 w-4" />
                        <span className="text-sm">Special Offer</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{pkg.name}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{pkg.participants}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                    <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                    <div className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.benefits.map((benefit, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Package
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Custom Wellness Programs Available</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Need a personalized treatment plan? Our Ayurvedic doctors can create custom wellness programs tailored to
            your specific health needs and goals.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Consult Our Doctors
          </Button>
        </div>
      </div>
    </section>
  )
}
