import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Palette, Heart, Briefcase, Leaf, MapPin } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Utensils,
    title: "Authentic Cuisines",
    description:
      "Discover the rich flavors of Jharkhand with traditional tribal dishes, forest delicacies, and time-honored recipes.",
    href: "/cuisines",
    image: "/jharkhand-traditional-food-tribal-cuisine.jpg",
  },
  {
    icon: Palette,
    title: "Tribal Art Forms",
    description:
      "Explore the vibrant world of Sohrai, Kohvar, and other ancient art traditions that tell stories of our heritage.",
    href: "/art-forms",
    image: "/jharkhand-tribal-art-sohrai-kohvar-paintings.jpg",
  },
  {
    icon: Leaf,
    title: "Ayurvedic Wellness",
    description:
      "Experience traditional healing with forest-based Ayurvedic treatments and natural wellness practices.",
    href: "/ayurveda",
    image: "/ayurvedic-herbs-forest-wellness-natural-healing.jpg",
  },
  {
    icon: Heart,
    title: "Destination Weddings",
    description:
      "Create magical moments with traditional Jharkhand wedding ceremonies in breathtaking natural settings.",
    href: "/weddings",
    image: "/indian-tribal-wedding-ceremony-nature-setting.jpg",
  },
  {
    icon: Briefcase,
    title: "Employment Opportunities",
    description: "Join our tourism industry with comprehensive training programs and career development opportunities.",
    href: "/employment",
    image: "/tourism-training-career-development-hospitality.jpg",
  },
  {
    icon: MapPin,
    title: "Travel Care",
    description: "Complete travel assistance with guides, safety tips, accommodation, and 24/7 support services.",
    href: "/travel-care",
    image: "/travel-guide-assistance-tourism-support.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Experience Jharkhand's Rich Heritage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From ancient tribal traditions to modern wellness practices, discover what makes Jharkhand a unique
            destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  asChild
                >
                  <Link href={feature.href}>Explore More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
