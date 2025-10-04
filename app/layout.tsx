import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieBanner } from "@/components/cookie-banner"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://chatlytics.com"),
  title: {
    default: "Chatlytics - Real-Time Twitch Chat Sentiment Analysis",
    template: "%s | Chatlytics",
  },
  description:
    "Know how your chat feels in real-time. Transform chaotic Twitch chat into actionable insights with AI-powered sentiment analysis, emotion detection, and toxicity alerts.",
  keywords: [
    "Twitch sentiment analysis",
    "real-time chat analytics",
    "stream analytics",
    "emotion detection",
    "toxicity monitoring",
    "streamer tools",
    "chat insights",
    "audience engagement",
    "live sentiment tracking",
  ],
  authors: [{ name: "Chatlytics Team" }],
  creator: "Chatlytics",
  publisher: "Chatlytics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatlytics.com",
    title: "Chatlytics - Real-Time Twitch Chat Sentiment Analysis",
    description:
      "Transform chat chaos into real-time insights. Understand your audience's emotions while you're still streaming.",
    siteName: "Chatlytics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chatlytics - Real-Time Twitch Chat Sentiment Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatlytics - Real-Time Twitch Chat Sentiment Analysis",
    description:
      "Know how your chat feels in real-time. AI-powered sentiment analysis for Twitch streamers.",
    images: ["/og-image.png"],
    creator: "@chatlytics",
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <CookieBanner />
          </ThemeProvider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
