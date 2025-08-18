"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_kvjtq8t",        // replace with your EmailJS service ID
        "template_fp8t42a",       // replace with your EmailJS template ID
        formData,
        "9R71y87EKnr3DcFuO"       // replace with your EmailJS public key
      )

      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send message:", error)
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="section-heading">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-accent/50 border-border">
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full button-primary">
                {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-accent/50 border-border">
          <CardHeader>
            <CardTitle>Connect With Me</CardTitle>
            <CardDescription>You can also reach out to me on these platforms!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Email</h3>
                <a href="mailto:me@ishahaider.com" className="text-primary/80 hover:text-primary transition-colors">
                  me@ishahaider.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium">GitHub</h3>
                <a
                  href="https://github.com/IshaHaider"
                  className="text-primary/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/IshaHaider
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/isha-haider"
                  className="text-primary/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/isha-haider
                </a>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon" className="button-outline">
                <a href="https://github.com/IshaHaider" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="button-outline">
                <a href="https://linkedin.com/in/isha-haider" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="button-outline">
                <a href="mailto:me@ishahaider.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}