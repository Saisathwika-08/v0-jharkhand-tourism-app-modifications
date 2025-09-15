import { Navigation } from "@/components/navigation"
import { CuisineHero } from "@/components/cuisines/cuisine-hero"
import { CuisineCategories } from "@/components/cuisines/cuisine-categories"
import { FeaturedDishes } from "@/components/cuisines/featured-dishes"
import { CookingTraditions } from "@/components/cuisines/cooking-traditions"
import { Footer } from "@/components/footer"

export default function CuisinesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CuisineHero />
      <CuisineCategories />
      <FeaturedDishes />
      <CookingTraditions />
      <Footer />
    </div>
  )
}
