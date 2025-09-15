import { WeddingHero } from "@/components/weddings/wedding-hero"
import { WeddingVenues } from "@/components/weddings/wedding-venues"
import { WeddingPackages } from "@/components/weddings/wedding-packages"
import { WeddingServices } from "@/components/weddings/wedding-services"
import { WeddingGallery } from "@/components/weddings/wedding-gallery"
import { WeddingTestimonials } from "@/components/weddings/wedding-testimonials"

export default function DestinationWeddingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingHero />
      <WeddingVenues />
      <WeddingPackages />
      <WeddingServices />
      <WeddingGallery />
      <WeddingTestimonials />
    </div>
  )
}
