import { EmploymentHero } from "@/components/employment/employment-hero"
import { TrainingPrograms } from "@/components/employment/training-programs"
import { CareerPaths } from "@/components/employment/career-paths"
import { SuccessStories } from "@/components/employment/success-stories"
import { ApplicationProcess } from "@/components/employment/application-process"

export default function EmploymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <EmploymentHero />
      <TrainingPrograms />
      <CareerPaths />
      <SuccessStories />
      <ApplicationProcess />
    </div>
  )
}
