"use client"

import { Phone, MapPin, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EmergencyServices() {
  const emergencyContacts = [
    {
      service: "Police",
      number: "100",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      service: "Fire Brigade",
      number: "101",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      service: "Ambulance",
      number: "108",
      icon: Phone,
      color: "text-blue-600",
    },
    {
      service: "Tourist Helpline",
      number: "1363",
      icon: MapPin,
      color: "text-emerald-600",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emergency Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick access to essential emergency services across Jharkhand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gray-100 ${contact.color}`}>
                    <contact.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-lg">{contact.service}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600 mb-4">{contact.number}</div>
                <Button className="w-full" onClick={() => window.open(`tel:${contact.number}`)}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Emergency Guidelines</h3>
                <ul className="text-red-800 space-y-1">
                  <li>• Stay calm and provide clear location details</li>
                  <li>• Keep important documents and emergency contacts handy</li>
                  <li>• Follow local authorities' instructions</li>
                  <li>• Contact your embassy if you're a foreign tourist</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
