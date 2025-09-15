import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Flame, Mountain } from "lucide-react"

const principles = [
  {
    icon: Leaf,
    title: "Vata (Air & Space)",
    description:
      "Governs movement, breathing, and nervous system. Balanced through grounding herbs and warm treatments.",
    color: "text-blue-600",
  },
  {
    icon: Flame,
    title: "Pitta (Fire & Water)",
    description:
      "Controls digestion, metabolism, and body temperature. Cooled with bitter herbs and calming therapies.",
    color: "text-red-600",
  },
  {
    icon: Mountain,
    title: "Kapha (Earth & Water)",
    description:
      "Maintains structure, immunity, and lubrication. Stimulated with warming spices and energizing treatments.",
    color: "text-green-600",
  },
]

export function AyurvedicPrinciples() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Three Doshas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Ayurveda recognizes three fundamental energies that govern all physiological and psychological functions.
            Understanding your dosha helps create personalized healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <principle.icon className={`h-16 w-16 mx-auto mb-6 ${principle.color}`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
