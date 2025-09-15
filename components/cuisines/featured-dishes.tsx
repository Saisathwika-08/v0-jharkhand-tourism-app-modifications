import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, ChefHat } from "lucide-react"

const featuredDishes = [
  {
    name: "Dhuska",
    description:
      "A popular deep-fried snack made from rice and lentil batter, crispy outside and soft inside. Often served with aloo sabzi (potato curry) and is a favorite breakfast item across Jharkhand.",
    image: "/dhuska-jharkhand-traditional-snack-rice-lentil.jpg",
    prepTime: "30 mins",
    serves: "4-6 people",
    difficulty: "Easy",
    ingredients: ["Rice", "Black Gram Dal", "Ginger", "Green Chili", "Salt", "Oil"],
    origin: "Tribal communities of Jharkhand",
    nutritionalBenefits: "High in protein and carbohydrates, provides sustained energy",
  },
  {
    name: "Arsa Roti",
    description:
      "A traditional sweet flatbread made with rice flour and jaggery, deep-fried until golden. This festive delicacy is prepared during special occasions and has a unique crispy texture with sweet flavor.",
    image: "/arsa-roti-sweet-flatbread-rice-flour-jaggery.jpg",
    prepTime: "45 mins",
    serves: "6-8 people",
    difficulty: "Medium",
    ingredients: ["Rice Flour", "Jaggery", "Ghee", "Cardamom", "Sesame Seeds"],
    origin: "Festival cuisine of Jharkhand",
    nutritionalBenefits: "Rich in iron from jaggery, provides quick energy",
  },
  {
    name: "Rugra (Mushroom Curry)",
    description:
      "A delicious curry made from wild mushrooms found in Jharkhand forests. Cooked with minimal spices to preserve the natural earthy flavor, it's a protein-rich delicacy enjoyed by tribal communities.",
    image: "/rugra-mushroom-curry-wild-forest-jharkhand.jpg",
    prepTime: "25 mins",
    serves: "4 people",
    difficulty: "Easy",
    ingredients: ["Wild Mushrooms", "Onions", "Garlic", "Turmeric", "Red Chili", "Mustard Oil"],
    origin: "Forest-dwelling tribal communities",
    nutritionalBenefits: "High in protein, vitamins, and minerals from wild mushrooms",
  },
  {
    name: "Handia",
    description:
      "A traditional fermented rice beer with low alcohol content, prepared using rice and herbs. It's not just a beverage but a cultural symbol, often served during festivals and social gatherings.",
    image: "/handia-fermented-rice-beer-traditional-drink.jpg",
    prepTime: "7 days (fermentation)",
    serves: "8-10 people",
    difficulty: "Hard",
    ingredients: ["Rice", "Ranu Tablets", "Water", "Traditional Herbs"],
    origin: "Ancient tribal brewing tradition",
    nutritionalBenefits: "Contains probiotics, aids digestion, cultural significance",
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Signature Dishes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the most beloved and authentic dishes that define Jharkhand's culinary heritage
          </p>
        </div>

        <div className="space-y-12">
          {featuredDishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`aspect-video lg:aspect-square ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{dish.name}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">{dish.description}</p>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{dish.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{dish.serves}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ChefHat className="w-4 h-4 text-primary" />
                        <span>{dish.difficulty}</span>
                      </div>
                    </div>

                    {/* Origin */}
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Cultural Origin</h4>
                      <p className="text-sm text-muted-foreground">{dish.origin}</p>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <h4 className="font-semibold mb-2">Key Ingredients</h4>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ingredient, ingredientIndex) => (
                          <Badge key={ingredientIndex} variant="outline" className="text-xs">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Nutritional Benefits */}
                    <div>
                      <h4 className="font-semibold mb-2 text-accent">Nutritional Benefits</h4>
                      <p className="text-sm text-muted-foreground">{dish.nutritionalBenefits}</p>
                    </div>

                    <Button className="w-fit">Learn Recipe</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
