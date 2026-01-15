import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChartLine, ShieldCheck, Lightning, Users, Clock, Sparkle } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: ChartLine,
    title: "Best Rates Available",
    description: "Compare offers from multiple funders to ensure you're getting the most competitive rates in the market."
  },
  {
    icon: Lightning,
    title: "Fast Approval Process",
    description: "Get pre-approved in as little as 24 hours with our streamlined application process."
  },
  {
    icon: Users,
    title: "Vetted Funders Network",
    description: "Work only with pre-screened, reputable funders who meet our strict quality standards."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Terms",
    description: "No hidden fees or surprises. All terms are clearly disclosed before you make a decision."
  },
  {
    icon: Clock,
    title: "Flexible Timeline Options",
    description: "Choose funding options that align with your specific timeline and financial needs."
  },
  {
    icon: Sparkle,
    title: "Dedicated Support",
    description: "Our team is here to guide you through every step of the process and answer your questions."
  }
]

export function BenefitsSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
            Why Choose Advance Settlement Group
          </Badge>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Advantages That Matter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're committed to helping you find the best settlement advance solution
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-card">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon size={28} weight="duotone" className="text-primary" />
                </div>
                
                <h3 className="mb-3 text-xl font-medium text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
