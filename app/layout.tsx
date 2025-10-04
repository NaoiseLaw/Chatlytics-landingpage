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
  metadataBase: new URL("https://pointer-ai.vercel.app"),
  title: {
    default: "Pointer AI - AI-Powered Code Review & Development",
    template: "%s | Pointer AI",
  },
  description:
    "Accelerate your development workflow with intelligent AI agents that write, review, and optimize your code. Get instant code reviews, automated refactoring, and smart suggestions.",
  keywords: [
    "AI code review",
    "automated code analysis",
    "AI development tools",
    "code optimization",
    "AI agents",
    "developer productivity",
    "code quality",
    "intelligent code assistant",
  ],
  authors: [{ name: "Pointer AI Team" }],
  creator: "Pointer AI",
  publisher: "Pointer AI",
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
    url: "https://pointer-ai.vercel.app",
    title: "Pointer AI - AI-Powered Code Review & Development",
    description:
      "Accelerate your development workflow with intelligent AI agents that write, review, and optimize your code.",
    siteName: "Pointer AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pointer AI - AI-Powered Code Review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pointer AI - AI-Powered Code Review & Development",
    description:
      "Accelerate your development workflow with intelligent AI agents that write, review, and optimize your code.",
    images: ["/og-image.png"],
    creator: "@pointerai",
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
