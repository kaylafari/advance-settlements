import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaperPlaneRight, CheckCircle } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  settlementType: string
  estimatedAmount: string
  timeline: string
  additionalInfo: string
}

export function ContactFormSection() {
  const [submissions, setSubmissions] = useState<FormData[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    settlementType: "",
    estimatedAmount: "",
    timeline: "",
    additionalInfo: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    setSubmissions((current) => [...current, { ...formData }])
    
    setIsSubmitted(true)
    toast.success("Application submitted successfully! We'll be in touch soon.")
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        settlementType: "",
        estimatedAmount: "",
        timeline: "",
        additionalInfo: ""
      })
    }, 3000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                      formData.phone && formData.settlementType && formData.timeline

  return (
    <section id="contact-form" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Fill out the form below and we'll connect you with multiple funders within 24 hours
          </p>
        </motion.div>

        <Card className="p-8 md:p-10 shadow-xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="settlementType">Settlement Type *</Label>
                    <Select
                      value={formData.settlementType}
                      onValueChange={(value) => handleChange("settlementType", value)}
                      required
                    >
                      <SelectTrigger id="settlementType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal-injury">Personal Injury</SelectItem>
                        <SelectItem value="auto-accident">Auto Accident</SelectItem>
                        <SelectItem value="workers-comp">Workers Compensation</SelectItem>
                        <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                        <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">When do you need funds? *</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => handleChange("timeline", value)}
                      required
                    >
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                        <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                        <SelectItem value="1-2-months">1-2 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedAmount">Estimated Settlement Amount (Optional)</Label>
                  <Input
                    id="estimatedAmount"
                    value={formData.estimatedAmount}
                    onChange={(e) => handleChange("estimatedAmount", e.target.value)}
                    placeholder="$50,000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleChange("additionalInfo", e.target.value)}
                    placeholder="Tell us more about your situation..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium shadow-lg transition-all hover:scale-[1.02]"
                  style={{ letterSpacing: '0.02em' }}
                >
                  Submit Application
                  <PaperPlaneRight className="ml-2" weight="fill" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted by our network of funders. 
                  We respect your privacy and will never share your information without consent.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex min-h-[400px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle size={48} weight="fill" className="text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  Application Submitted!
                </h3>
                <p className="mb-6 max-w-md text-muted-foreground">
                  Thank you for choosing Advance Settlements. We're connecting you with our network 
                  of funders and you'll hear from us within 24 hours.
                </p>
                <div className="text-sm text-muted-foreground">
                  Check your email for confirmation and next steps.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </section>
  )
}
