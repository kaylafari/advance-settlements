import { Card } from "@/components/ui/card"
import { ClipboardText, Handshake, CurrencyDollar, CheckCircle } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    icon: ClipboardText,
    title: "Submit Your Information",
    description: "Fill out our simple form with details about your settlement and funding needs."
  },
  {
    number: 2,
    icon: Handshake,
    title: "Review Multiple Offers",
    description: "We connect you with vetted funders who compete to offer you the best terms."
  },
  {
    number: 3,
    icon: CurrencyDollar,
    title: "Choose Your Best Option",
    description: "Compare rates, timelines, and terms to select the offer that works for you."
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Get Your Funds",
    description: "Once you accept an offer, receive your settlement advance quickly and securely."
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Getting your settlement advance is simple and straightforward
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-full p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-md">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <step.icon size={32} weight="duotone" className="text-accent" />
                  </div>
                </div>
                
                <h3 className="mb-3 text-center text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
