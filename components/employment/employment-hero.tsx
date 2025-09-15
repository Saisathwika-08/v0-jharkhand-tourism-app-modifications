import { Button } from "@/components/ui/button"
import { ArrowDown, Users, Award, TrendingUp, MapPin } from "lucide-react"

export function EmploymentHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/jharkhand-tourism-employment-training.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-green-800/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Build Your Career in
            <span className="block text-amber-400">Tourism Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty leading-relaxed">
            Join Jharkhand's growing tourism industry with comprehensive training programs, skill development, and
            guaranteed career opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-white">
              <Users className="w-6 h-6 text-amber-400" />
              <span className="text-lg">5000+ Trained</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-6 h-6 text-amber-400" />
              <span className="text-lg">Certified Programs</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="w-6 h-6 text-amber-400" />
              <span className="text-lg">95% Placement Rate</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-6 h-6 text-amber-400" />
              <span className="text-lg">Pan-Jharkhand</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              Explore Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
            >
              Apply Now
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  )
}
