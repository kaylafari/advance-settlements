import { motion } from "framer-motion"

const stats = [
  {
    value: "$50M+",
    label: "Total Funded"
  },
  {
    value: "2,500+",
    label: "Happy Clients"
  },
  {
    value: "4.9/5",
    label: "Average Rating"
  },
  {
    value: "24hrs",
    label: "Average Response Time"
  }
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
