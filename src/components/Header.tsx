import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className={`text-xl md:text-2xl font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}>
                Advance Settlement Group
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
            >
              How It Works
            </a>
            <a
              href="#benefits"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
            >
              Testimonials
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onGetStartedClick}
              className={`font-medium ${
                isScrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              }`}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
