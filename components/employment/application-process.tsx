import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Users, ArrowRight } from "lucide-react"

const applicationSteps = [
  {
    step: 1,
    title: "Online Application",
    duration: "5 minutes",
    description:
      "Fill out the online application form with your basic details, educational background, and program preference.",
    requirements: ["Valid ID proof", "Educational certificates", "Recent photograph"],
    status: "Easy",
  },
  {
    step: 2,
    title: "Document Verification",
    duration: "2-3 days",
    description: "Our team verifies your submitted documents and educational qualifications for program eligibility.",
    requirements: ["Original certificates", "Address proof", "Category certificate (if applicable)"],
    status: "Quick",
  },
  {
    step: 3,
    title: "Aptitude Assessment",
    duration: "1 hour",
    description:
      "Take a simple aptitude test to assess your communication skills, general knowledge, and program-specific interests.",
    requirements: ["Basic English knowledge", "General awareness", "Program interest"],
    status: "Simple",
  },
  {
    step: 4,
    title: "Personal Interview",
    duration: "30 minutes",
    description:
      "Face-to-face or video interview with our training coordinators to understand your motivation and career goals.",
    requirements: ["Clear communication", "Career clarity", "Commitment to complete program"],
    status: "Friendly",
  },
  {
    step: 5,
    title: "Selection & Enrollment",
    duration: "1-2 days",
    description:
      "Receive selection confirmation and complete the enrollment process with fee payment and batch allocation.",
    requirements: ["Program fee", "Medical fitness certificate", "Commitment letter"],
    status: "Final",
  },
]

const supportServices = [
  {
    title: "Financial Assistance",
    description: "Scholarships and EMI options available for deserving candidates",
    features: ["50% scholarship for tribal students", "Easy EMI options", "Government scheme benefits"],
    icon: "💰",
  },
  {
    title: "Accommodation Support",
    description: "Hostel facilities and local accommodation assistance",
    features: ["On-campus hostels", "Local family stays", "Affordable options"],
    icon: "🏠",
  },
  {
    title: "Career Guidance",
    description: "Continuous mentorship and career development support",
    features: ["Personal mentors", "Industry connections", "Job placement assistance"],
    icon: "🎯",
  },
  {
    title: "Skill Enhancement",
    description: "Additional workshops and certification programs",
    features: ["Language training", "Digital skills", "Soft skills development"],
    icon: "📚",
  },
]

export function ApplicationProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Simple, transparent, and supportive application process designed to help you start your tourism career
            journey with confidence.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto relative z-10">
                        {step.step}
                      </div>

                      <Badge
                        className={`mb-3 ${
                          step.status === "Easy"
                            ? "bg-green-100 text-green-800"
                            : step.status === "Quick"
                              ? "bg-blue-100 text-blue-800"
                              : step.status === "Simple"
                                ? "bg-yellow-100 text-yellow-800"
                                : step.status === "Friendly"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {step.status}
                      </Badge>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>

                      <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>

                      <p className="text-sm text-gray-700 mb-4 leading-relaxed">{step.description}</p>

                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                        <ul className="space-y-1">
                          {step.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {index < applicationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-4 z-20">
                      <ArrowRight className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Support Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Tourism Career?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful professionals who transformed their lives through our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8"
              >
                <FileText className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 px-8 bg-transparent">
                <Users className="w-5 h-5 mr-2" />
                Talk to Counselor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
