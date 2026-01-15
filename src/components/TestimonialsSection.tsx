import { Card } from "@/components/ui/card"
import { Quotes, Star } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Personal Injury Settlement",
    content: "I was amazed at how easy the process was. Within 48 hours, I had three different offers to choose from. The transparency and support made all the difference during a stressful time.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Workers Compensation Settlement",
    content: "Advance Settlements helped me find funding options I didn't even know existed. The rates were significantly better than what I was originally quoted elsewhere.",
    rating: 5
  },
  {
    name: "Maria R.",
    role: "Auto Accident Settlement",
    content: "The team walked me through every step and made sure I understood all my options. I felt empowered to make the best decision for my situation. Highly recommend!",
    rating: 5
  }
]

export function TestimonialsSection() {
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
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real experiences from people who found their best settlement advance options
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-full p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex items-start justify-between">
                  <Quotes size={32} weight="fill" className="text-accent/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="mb-6 text-sm text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-accent/10 px-6 py-3">
            <Star size={24} weight="fill" className="text-accent" />
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">4.9 out of 5</div>
              <div className="text-xs text-muted-foreground">Based on 500+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
