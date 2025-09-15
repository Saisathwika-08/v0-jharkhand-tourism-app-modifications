import { Shield, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TravelCareHero() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Shield className="h-12 w-12" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Travel Care & Safety</h1>
        <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto text-pretty">
          Your safety and well-being are our top priority. Comprehensive support for a worry-free journey through
          Jharkhand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Helpline
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <MapPin className="mr-2 h-5 w-5" />
            Find Nearest Hospital
          </Button>
        </div>
      </div>
    </section>
  )
}
