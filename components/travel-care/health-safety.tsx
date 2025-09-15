import { Heart, Shield, Thermometer, Pill } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HealthSafety() {
  const healthTips = [
    {
      title: "Vaccination Requirements",
      description: "Ensure you're up to date with routine vaccines. Consider hepatitis A/B and typhoid vaccines.",
      icon: Pill,
      color: "text-blue-600",
    },
    {
      title: "Water Safety",
      description: "Drink bottled or properly boiled water. Avoid ice cubes and raw vegetables from street vendors.",
      icon: Shield,
      color: "text-emerald-600",
    },
    {
      title: "Climate Precautions",
      description: "Protect yourself from heat and humidity. Use sunscreen and stay hydrated.",
      icon: Thermometer,
      color: "text-orange-600",
    },
    {
      title: "Medical Insurance",
      description: "Ensure comprehensive travel insurance covering medical emergencies and evacuation.",
      icon: Heart,
      color: "text-red-600",
    },
  ]

  const hospitals = [
    {
      name: "Rajendra Institute of Medical Sciences (RIMS)",
      location: "Ranchi",
      speciality: "Multi-specialty Government Hospital",
      contact: "+91-651-2450145",
    },
    {
      name: "Brahmanand Narain Singh Hospital",
      location: "Ranchi",
      speciality: "Private Multi-specialty",
      contact: "+91-651-2331188",
    },
    {
      name: "Tata Main Hospital",
      location: "Jamshedpur",
      speciality: "Corporate Multi-specialty",
      contact: "+91-657-2426825",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Health & Safety Guidelines</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential health information for a safe and healthy trip
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {healthTips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gray-100 ${tip.color}`}>
                    <tip.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-lg text-center">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Major Hospitals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{hospital.name}</CardTitle>
                  <p className="text-emerald-600 font-medium">{hospital.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{hospital.speciality}</p>
                  <p className="text-sm font-medium text-gray-900">{hospital.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
