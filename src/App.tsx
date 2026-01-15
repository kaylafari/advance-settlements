import { HeroSection } from "@/components/HeroSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { StatsSection } from "@/components/StatsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ContactFormSection } from "@/components/ContactFormSection"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"

function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen">
      <Toaster />
      <HeroSection onCtaClick={scrollToForm} />
      <StatsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </div>
  )
}

export default App