import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flower2, Droplets, Package as Massage, Zap, Brain, Heart } from "lucide-react"

const treatments = [
  {
    icon: Massage,
    title: "Panchakarma Detox",
    description: "Complete body purification through five therapeutic actions",
    benefits: ["Eliminates toxins", "Restores balance", "Rejuvenates tissues", "Boosts immunity"],
    duration: "7-21 days",
    image: "/panchakarma-detox-ayurveda-jharkhand.jpg",
  },
  {
    icon: Droplets,
    title: "Abhyanga Massage",
    description: "Full-body oil massage with warm herbal oils",
    benefits: ["Improves circulation", "Nourishes skin", "Calms nervous system", "Enhances flexibility"],
    duration: "60-90 minutes",
    image: "/abhyanga-massage-ayurvedic-treatment.jpg",
  },
  {
    icon: Brain,
    title: "Shirodhara Therapy",
    description: "Continuous pouring of warm oil on the forehead",
    benefits: ["Reduces stress", "Improves sleep", "Enhances concentration", "Balances emotions"],
    duration: "45-60 minutes",
    image: "/shirodhara-therapy-ayurveda-healing.jpg",
  },
  {
    icon: Flower2,
    title: "Herbal Steam Bath",
    description: "Medicated steam therapy with indigenous herbs",
    benefits: ["Opens pores", "Eliminates toxins", "Relieves joint pain", "Improves skin texture"],
    duration: "20-30 minutes",
    image: "/herbal-steam-bath-ayurvedic.jpg",
  },
  {
    icon: Heart,
    title: "Nasya Treatment",
    description: "Nasal administration of medicated oils and herbs",
    benefits: ["Clears sinuses", "Improves breathing", "Enhances mental clarity", "Prevents headaches"],
    duration: "30-45 minutes",
    image: "/nasya-treatment-ayurveda-nasal.jpg",
  },
  {
    icon: Zap,
    title: "Karna Purana",
    description: "Ear treatment with warm medicated oils",
    benefits: ["Improves hearing", "Reduces ear pain", "Prevents infections", "Calms mind"],
    duration: "20-30 minutes",
    image: "/karna-purana-ear-treatment-ayurveda.jpg",
  },
]

export function TreatmentCategories() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Authentic Ayurvedic Treatments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Experience time-tested healing therapies using pure herbs from Jharkhand's forests, administered by
            certified Ayurvedic practitioners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${treatment.image}')` }}>
                <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <treatment.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{treatment.title}</CardTitle>
                <p className="text-gray-600">{treatment.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">Duration: {treatment.duration}</span>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Book Now
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
