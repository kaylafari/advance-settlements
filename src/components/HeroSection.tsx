import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Get the Best Deal on Your Settlement Advance
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-primary-foreground/90 md:text-xl"
            style={{ lineHeight: '1.6' }}
          >
            Advance Settlement Group connects you with multiple funders, letting you shop the market 
            for the best rates and terms based on your timeline. Fast, transparent, and designed 
            to help you make the right choice.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="group bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ letterSpacing: '0.02em' }}
            >
              Get Started Today
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={onCtaClick}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/20 bg-transparent px-8 py-6 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn How It Works
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Fast Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Multiple Offers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Best Rates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
