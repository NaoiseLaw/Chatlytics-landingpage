"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookies-accepted", "false")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-muted-foreground">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
            <a href="/privacy" className="underline hover:text-foreground">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={declineCookies}>
            Decline
          </Button>
          <Button size="sm" onClick={acceptCookies}>
            Accept
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={declineCookies}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
