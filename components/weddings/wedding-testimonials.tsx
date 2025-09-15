import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya & Arjun",
    location: "Mumbai",
    rating: 5,
    image: "/testimonial-couple-1.jpg",
    text: "Our wedding at Palamau Fort was absolutely magical! The team handled everything perfectly, from the traditional ceremonies to the modern reception. The natural beauty of Jharkhand provided the perfect backdrop for our special day.",
    venue: "Palamau Fort Palace",
  },
  {
    id: 2,
    name: "Sneha & Vikram",
    location: "Delhi",
    rating: 5,
    image: "/testimonial-couple-2.jpg",
    text: "We wanted something unique and different from typical city weddings. The Hundru Falls venue exceeded all our expectations. Our guests are still talking about the breathtaking waterfall ceremony!",
    venue: "Hundru Falls Resort",
  },
  {
    id: 3,
    name: "Anita & Rajesh",
    location: "Kolkata",
    rating: 5,
    image: "/testimonial-couple-3.jpg",
    text: "The cultural richness and tribal performances made our wedding truly special. The attention to detail and personalized service made us feel like royalty. Highly recommend for couples seeking authentic experiences.",
    venue: "Tribal Heritage Resort",
  },
]

export function WeddingTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Happy Couples</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
            Read what our couples have to say about their dream weddings in Jharkhand
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-emerald-200">
                  <Quote className="h-12 w-12" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                    <p className="text-sm text-emerald-600 font-medium">{testimonial.venue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Plan Your Dream Wedding?</h3>
            <p className="text-slate-600 mb-6">
              Let our expert wedding planners help you create the perfect celebration in the heart of Jharkhand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-slate-500">Weddings Planned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">4.9★</div>
                <div className="text-sm text-slate-500">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-slate-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
