"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  { code: "bho", name: "भोजपुरी", flag: "🇮🇳" },
  { code: "sa", name: "संथाली", flag: "🇮🇳" },
  { code: "ur", name: "اردو", flag: "🇮🇳" },
  { code: "bn", name: "বাংলা", flag: "🇮🇳" },
]

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isTranslating, setIsTranslating] = useState(false)

  const translatePage = async (languageCode: string) => {
    if (languageCode === selectedLanguage.code) return

    setIsTranslating(true)

    try {
      if (languageCode === "en") {
        // Remove any existing Google Translate elements
        const googleTranslateElements = document.querySelectorAll(
          ".goog-te-banner-frame, .goog-te-menu-frame, .skiptranslate",
        )
        googleTranslateElements.forEach((el) => el.remove())

        // Reload to original language
        window.location.reload()
      } else {
        // Initialize Google Translate if not already done
        if (!window.google?.translate) {
          await loadGoogleTranslate()
        }

        // Trigger translation
        const translateElement = document.getElementById("google_translate_element")
        if (translateElement) {
          // Simulate Google Translate selection
          const event = new Event("change")
          translateElement.dispatchEvent(event)
        }
      }
    } catch (error) {
      console.error("Translation error:", error)
      // Fallback to Google Translate URL
      const googleTranslateUrl = `https://translate.google.com/translate?sl=en&tl=${languageCode}&u=${encodeURIComponent(window.location.href)}`
      window.open(googleTranslateUrl, "_blank")
    } finally {
      setIsTranslating(false)
    }
  }

  const loadGoogleTranslate = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("google-translate-script")) {
        resolve(true)
        return
      }

      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi,bho,sa,ur,bn",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element",
        )
      }
    })
  }

  useEffect(() => {
    // Create hidden Google Translate element
    if (!document.getElementById("google_translate_element")) {
      const div = document.createElement("div")
      div.id = "google_translate_element"
      div.style.display = "none"
      document.body.appendChild(div)
    }
  }, [])

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2" disabled={isTranslating}>
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{isTranslating ? "Translating..." : selectedLanguage.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language)
                translatePage(language.code)
              }}
              className="gap-2 cursor-pointer"
            >
              <span>{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {selectedLanguage.code === language.code && <Check className="w-4 h-4 text-emerald-600" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </>
  )
}

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}
