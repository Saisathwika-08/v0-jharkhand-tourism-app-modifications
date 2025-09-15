import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    title: "Tribal Delicacies",
    description: "Authentic dishes from various tribal communities of Jharkhand",
    dishes: ["Dhuska", "Arsa Roti", "Rugra", "Bamboo Shoot Curry"],
    image: "/tribal-delicacies-jharkhand-traditional-food.jpg",
    specialty: "Forest Ingredients",
  },
  {
    title: "Rice & Grain Based",
    description: "Staple foods made from locally grown rice and millets",
    dishes: ["Pittha", "Malpua", "Kheer", "Handia"],
    image: "/rice-grain-jharkhand-staple-food.jpg",
    specialty: "Daily Meals",
  },
  {
    title: "Festival Foods",
    description: "Special dishes prepared during festivals and celebrations",
    dishes: ["Thekua", "Anarsa", "Khaja", "Tilkut"],
    image: "/festival-foods-jharkhand-celebration-sweets.jpg",
    specialty: "Celebrations",
  },
  {
    title: "Forest Cuisine",
    description: "Unique dishes made from forest produce and wild ingredients",
    dishes: ["Mahua Flowers", "Sal Leaves Dishes", "Wild Mushrooms", "Forest Honey"],
    image: "/forest-cuisine-wild-ingredients-jharkhand.jpg",
    specialty: "Wild Harvest",
  },
]

export function CuisineCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Culinary Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore the diverse range of Jharkhand cuisine, from tribal specialties to festival delicacies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <Badge variant="secondary">{category.specialty}</Badge>
                </div>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Popular Dishes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.dishes.map((dish, dishIndex) => (
                      <Badge key={dishIndex} variant="outline" className="text-xs">
                        {dish}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
