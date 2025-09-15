import { Shield, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TravelInsurance() {
  const coverageItems = [
    "Medical emergencies and hospitalization",
    "Emergency medical evacuation",
    "Trip cancellation and interruption",
    "Lost or stolen baggage",
    "Personal liability coverage",
    "Adventure sports coverage",
  ]

  const insuranceProviders = [
    {
      name: "ICICI Lombard",
      coverage: "Up to ₹50 Lakhs",
      premium: "Starting ₹299",
    },
    {
      name: "Bajaj Allianz",
      coverage: "Up to ₹1 Crore",
      premium: "Starting ₹399",
    },
    {
      name: "HDFC ERGO",
      coverage: "Up to ₹75 Lakhs",
      premium: "Starting ₹349",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Insurance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Protect yourself with comprehensive travel insurance coverage
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-emerald-600" />
                  What's Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {coverageItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Important Note</h3>
                    <p className="text-amber-800">
                      Purchase travel insurance before your trip begins. Coverage typically starts 24 hours after
                      purchase and payment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Providers</h3>
            <div className="space-y-4">
              {insuranceProviders.map((provider, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{provider.name}</h4>
                        <p className="text-gray-600">Coverage: {provider.coverage}</p>
                        <p className="text-emerald-600 font-medium">{provider.premium}</p>
                      </div>
                      <Button size="sm">Get Quote</Button>
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
