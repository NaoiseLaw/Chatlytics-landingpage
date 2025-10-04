"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [contactType, setContactType] = useState<"investors" | "users">("users")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", { contactType, email, message })
    // Handle form submission
  }

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="max-w-2xl w-full mx-auto">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg">Questions about Chatlytics? Want a demo? We're here to help.</p>
          </div>

          <div className="flex justify-center">
            <div className="p-1 bg-muted rounded-lg inline-flex gap-1">
              <button
                onClick={() => setContactType("users")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  contactType === "users"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For Streamers
              </button>
              <button
                onClick={() => setContactType("investors")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  contactType === "investors"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For Partners
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder={
                  contactType === "investors" ? "Let's discuss partnership opportunities..." : "Tell us about your streaming setup..."
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="bg-card border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium"
            >
              Send Message
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">We typically respond within 12 hours</p>
        </div>
      </div>
    </section>
  )
}
