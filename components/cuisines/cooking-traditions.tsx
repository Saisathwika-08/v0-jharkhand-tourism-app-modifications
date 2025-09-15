import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Leaf, Users, BookOpen } from "lucide-react"

const traditions = [
  {
    icon: Flame,
    title: "Traditional Cooking Methods",
    description:
      "Jharkhand cuisine relies on age-old cooking techniques like clay pot cooking, wood-fired stoves, and bamboo steaming. These methods not only preserve the authentic flavors but also add a unique smoky taste that defines tribal cuisine.",
    details: [
      "Clay pot cooking retains nutrients and adds earthy flavors",
      "Wood-fired cooking provides natural smokiness",
      "Bamboo steaming preserves delicate textures",
      "Stone grinding for spices maintains essential oils",
    ],
  },
  {
    icon: Leaf,
    title: "Forest-to-Table Philosophy",
    description:
      "The tribal communities of Jharkhand have practiced sustainable forest-to-table cooking for centuries. They harvest seasonal ingredients from forests, ensuring minimal environmental impact while maximizing nutritional value.",
    details: [
      "Seasonal harvesting of wild vegetables and fruits",
      "Sustainable collection of forest mushrooms",
      "Use of medicinal herbs in daily cooking",
      "Preservation techniques using natural methods",
    ],
  },
  {
    icon: Users,
    title: "Community Cooking Culture",
    description:
      "Food preparation in Jharkhand is deeply rooted in community participation. From festival preparations to daily meals, cooking is a collective activity that strengthens social bonds and preserves cultural knowledge.",
    details: [
      "Festival cooking involves entire communities",
      "Recipe knowledge passed through generations",
      "Communal kitchens during celebrations",
      "Sharing of ingredients and cooking responsibilities",
    ],
  },
  {
    icon: BookOpen,
    title: "Oral Recipe Traditions",
    description:
      "Most traditional recipes in Jharkhand are preserved through oral traditions. Elderly women are the keepers of culinary wisdom, passing down precise techniques, ingredient combinations, and cooking secrets through storytelling.",
    details: [
      "Recipes memorized and passed down orally",
      "Cooking techniques learned through observation",
      "Stories and folklore associated with dishes",
      "Seasonal cooking calendars based on traditional knowledge",
    ],
  },
]

export function CookingTraditions() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Culinary Traditions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Understanding the deep-rooted cooking traditions and cultural practices that shape Jharkhand's cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traditions.map((tradition, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <tradition.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tradition.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{tradition.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Aspects</h4>
                  <ul className="space-y-2">
                    {tradition.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Experience Authentic Jharkhand Cuisine</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Join our culinary tours and cooking workshops to learn these traditional techniques firsthand from local
                tribal communities and master chefs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
                  Book Culinary Tour
                </button>
                <button className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors">
                  Cooking Workshops
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
