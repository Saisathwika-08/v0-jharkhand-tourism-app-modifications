"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/wedding-gallery-1-ceremony.jpg",
    alt: "Traditional wedding ceremony",
    category: "Ceremony",
  },
  {
    id: 2,
    src: "/wedding-gallery-2-venue.jpg",
    alt: "Beautiful wedding venue",
    category: "Venues",
  },
  {
    id: 3,
    src: "/wedding-gallery-3-couple.jpg",
    alt: "Happy couple portrait",
    category: "Couples",
  },
  {
    id: 4,
    src: "/wedding-gallery-4-decoration.jpg",
    alt: "Wedding decoration",
    category: "Decoration",
  },
  {
    id: 5,
    src: "/wedding-gallery-5-reception.jpg",
    alt: "Wedding reception",
    category: "Reception",
  },
  {
    id: 6,
    src: "/wedding-gallery-6-cultural.jpg",
    alt: "Cultural performance",
    category: "Culture",
  },
]

const categories = ["All", "Ceremony", "Venues", "Couples", "Decoration", "Reception", "Culture"]

export function WeddingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Wedding Gallery</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
            Explore our collection of beautiful weddings and get inspired for your special day
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-emerald-600 px-3 py-1 rounded-full text-sm font-medium">{image.category}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
                alt={filteredImages.find((img) => img.id === selectedImage)?.alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
