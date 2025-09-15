import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">JH</span>
              </div>
              <span className="font-bold text-xl text-primary-foreground">Jharkhand Tourism</span>
            </div>
            <p className="text-primary-foreground/90">
              Discover the heart of India with authentic experiences, rich culture, and natural beauty.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cuisines"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  href="/art-forms"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Art Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/ayurveda"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Ayurveda
                </Link>
              </li>
              <li>
                <Link
                  href="/destination-weddings"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Weddings
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/employment"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Employment
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-care"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Travel Care
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground/90 text-sm">Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground/90 text-sm">+91 651 2345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground/90 text-sm">info@jharkhnadtourism.gov.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/90">
            © 2024 Jharkhand Tourism. All rights reserved. | Developed with ❤️ for promoting Jharkhand's heritage.
          </p>
        </div>
      </div>
    </footer>
  )
}
