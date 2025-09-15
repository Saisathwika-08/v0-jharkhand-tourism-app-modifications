import { ArtFormsHero } from "@/components/art-forms/art-forms-hero"
import { TraditionalArts } from "@/components/art-forms/traditional-arts"
import { ArtisanStories } from "@/components/art-forms/artisan-stories"
import { ArtWorkshops } from "@/components/art-forms/art-workshops"
import { ArtGallery } from "@/components/art-forms/art-gallery"

export default function ArtFormsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <ArtFormsHero />
      <TraditionalArts />
      <ArtisanStories />
      <ArtWorkshops />
      <ArtGallery />
    </div>
  )
}
