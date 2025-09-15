import { AyurvedaHero } from "@/components/ayurveda/ayurveda-hero"
import { TreatmentCategories } from "@/components/ayurveda/treatment-categories"
import { HealingCenters } from "@/components/ayurveda/healing-centers"
import { HerbalGarden } from "@/components/ayurveda/herbal-garden"
import { WellnessPackages } from "@/components/ayurveda/wellness-packages"
import { AyurvedicPrinciples } from "@/components/ayurveda/ayurvedic-principles"

export default function AyurvedaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <AyurvedaHero />
      <AyurvedicPrinciples />
      <TreatmentCategories />
      <HerbalGarden />
      <HealingCenters />
      <WellnessPackages />
    </div>
  )
}
