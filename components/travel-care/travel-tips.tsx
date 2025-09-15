import { Lightbulb, Camera, Utensils, Car, Shirt, Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TravelTips() {
  const tips = [
    {
      category: "Photography",
      icon: Camera,
      color: "text-purple-600",
      tips: [
        "Respect local customs when photographing people",
        "Ask permission before photographing in religious places",
        "Best lighting for landscapes is during golden hour",
      ],
    },
    {
      category: "Food Safety",
      icon: Utensils,
      color: "text-orange-600",
      tips: [
        "Try local cuisine from reputable restaurants",
        "Avoid street food if you have a sensitive stomach",
        "Always drink bottled or boiled water",
      ],
    },
    {
      category: "Transportation",
      icon: Car,
      color: "text-blue-600",
      tips: [
        "Book transportation through verified operators",
        "Keep emergency contacts handy while traveling",
        "Inform someone about your travel itinerary",
      ],
    },
    {
      category: "Clothing",
      icon: Shirt,
      color: "text-green-600",
      tips: [
        "Dress modestly when visiting religious sites",
        "Carry light cotton clothes for hot weather",
        "Pack a light jacket for hill stations",
      ],
    },
    {
      category: "Money Matters",
      icon: Coins,
      color: "text-yellow-600",
      tips: [
        "Carry sufficient cash as ATMs may be limited in remote areas",
        "Keep money in multiple places for security",
        "Negotiate prices at local markets",
      ],
    },
    {
      category: "General Tips",
      icon: Lightbulb,
      color: "text-red-600",
      tips: [
        "Learn basic Hindi phrases for better communication",
        "Respect local customs and traditions",
        "Keep copies of important documents",
      ],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Essential Travel Tips</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insider tips to make your Jharkhand journey smooth and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 bg-gray-100 rounded-lg ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
