import { TravelCareHero } from "@/components/travel-care/travel-care-hero"
import { EmergencyServices } from "@/components/travel-care/emergency-services"
import { HealthSafety } from "@/components/travel-care/health-safety"
import { TravelInsurance } from "@/components/travel-care/travel-insurance"
import { LocalSupport } from "@/components/travel-care/local-support"
import { TravelTips } from "@/components/travel-care/travel-tips"

export default function TravelCarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <TravelCareHero />
      <EmergencyServices />
      <HealthSafety />
      <TravelInsurance />
      <LocalSupport />
      <TravelTips />
    </div>
  )
}
