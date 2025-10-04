# Chatlytics Landing Page

A modern, responsive landing page for Chatlytics - Real-Time Twitch Chat Sentiment Analysis platform.

## Features

- **Real-Time Sentiment Analysis**: Track positive, negative, and neutral sentiment with 5-minute updates
- **Emotion Detection**: Identify joy, excitement, frustration, and more in chat
- **Toxicity Alerts**: Get instant notifications when chat sentiment turns negative
- **Trending Keywords**: See what your audience is talking about most in real-time
- **Mobile Monitoring**: Check sentiment from anywhere with iOS and Android apps
- **Historical Analytics**: Review 90 days of sentiment history to identify patterns

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Styling**: Tailwind CSS
- **Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics & Speed Insights

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd chatlytics-landing-page
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── bento/            # Feature showcase components
│   ├── ui/               # Reusable UI components
│   └── ...               # Page sections
├── public/               # Static assets
│   └── images/          # Dashboard screenshots
└── lib/                 # Utility functions
```

## Customization

### Updating Content

All text content is located in the component files:
- Hero section: `components/hero-section.tsx`
- Features: `components/bento-section.tsx`
- Pricing: `components/pricing-section.tsx`
- Testimonials: `components/testimonial-grid-section.tsx`

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `app/globals.css`.

### Images

Replace the dashboard images in `public/images/`:
- `Chatlytics-Dashboard.PNG` - Desktop dashboard preview
- `ChatLytics-MobileDashboard.PNG` - Mobile app preview

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Analytics**: Built-in Vercel Analytics and Speed Insights

## License

Private project - All rights reserved.