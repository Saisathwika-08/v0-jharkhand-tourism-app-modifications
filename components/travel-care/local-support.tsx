import { MapPin, Phone, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LocalSupport() {
  const supportCenters = [
    {
      city: "Ranchi",
      address: "Tourism Complex, Kanke Road",
      phone: "+91-651-2491040",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      city: "Jamshedpur",
      address: "Circuit House, Sakchi",
      phone: "+91-657-2426825",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      city: "Dhanbad",
      address: "District Collectorate",
      phone: "+91-326-2305234",
      hours: "9:00 AM - 5:00 PM",
    },
  ]

  const services = [
    {
      title: "24/7 Helpline",
      description: "Round-the-clock assistance for emergencies and queries",
      icon: Phone,
    },
    {
      title: "Local Guides",
      description: "Certified local guides for authentic cultural experiences",
      icon: Users,
    },
    {
      title: "Tourist Information",
      description: "Comprehensive information about attractions and services",
      icon: MapPin,
    },
    {
      title: "Booking Assistance",
      description: "Help with accommodation, transport, and activity bookings",
      icon: Clock,
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Support Centers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get assistance from our local support teams across Jharkhand
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Centers</h3>
            <div className="space-y-4">
              {supportCenters.map((center, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{center.city}</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-1 text-emerald-600" />
                        <span>{center.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <span>{center.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span>{center.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Available</h3>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
