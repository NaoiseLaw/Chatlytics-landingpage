import Image from "next/image"

const testimonials = [
  {
    quote:
      "I constantly miss viral moments because I can't read 200+ chat messages while gaming. I had a great conversation with Naoise about building a tool to catch these opportunities in real-time. This could be a game-changer for content creators.",
    name: "Sarah Chen",
    company: "Twitch Partner",
    avatar: "/images/avatars/sarah-chen.png",
    type: "large-teal",
  },
  {
    quote:
      "Toxic viewers ruin my streams and I never catch them until it's too late. By the time I notice, they've already driven away potential subscribers. Need something to alert me immediately.",
    name: "Marcus Johnson",
    company: "500 avg viewers",
    avatar: "/images/avatars/marcus-johnson.png",
    type: "small-dark",
  },
  {
    quote:
      "Managing multiple streamers means I can't monitor every chat simultaneously. I miss crucial moments when content goes wrong or when there are opportunities to engage better with audiences.",
    name: "Taylor Rodriguez",
    company: "Esports Manager",
    avatar: "/images/avatars/taylor-rodriguez.png",
    type: "small-dark",
  },
  {
    quote:
      "I can't tell when my audience is getting bored until my viewer count drops. I need to know the moment engagement shifts so I can pivot my content strategy immediately.",
    name: "Jamie Park",
    company: "Variety Streamer",
    avatar: "/images/avatars/jamie-park.png",
    type: "small-dark",
  },
  {
    quote:
      "I talked with Naoise about the idea of detecting viral moments and toxic viewers in real-time. The concept of getting instant alerts about content opportunities and problems is exactly what streamers need.",
    name: "David Thompson",
    company: "Full-time Streamer",
    avatar: "/images/avatars/david-thompson.png",
    type: "small-dark",
  },
  {
    quote:
      "I spend more time trying to read chat than actually gaming. I need a way to understand audience sentiment without constantly alt-tabbing and losing focus on my content.",
    name: "Lisa Anderson",
    company: "Gaming Creator",
    avatar: "/images/avatars/lisa-anderson.png",
    type: "small-dark",
  },
  {
    quote:
      "I have no idea what content actually resonates with my audience. I'm just guessing what works and hoping for the best. A tool to analyze chat sentiment and identify successful content patterns would be invaluable.",
    name: "Chris Williams",
    company: "Twitch Affiliate",
    avatar: "/images/avatars/chris-williams.png",
    type: "large-light",
  },
  {
    quote:
      "When I'm focused on gameplay, I miss the best moments to interact with my community. I need something that tells me when chat is really engaged so I can capitalize on those high-energy moments.",
    name: "Alex Rivera",
    company: "Speedrunner",
    avatar: "/images/avatars/alex-rivera.png",
    type: "small-dark",
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type }) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8"
    nameClasses += " text-primary-foreground text-base font-normal leading-6"
    companyClasses += " text-primary-foreground/60 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-2xl font-medium leading-8"
    nameClasses += " text-foreground text-base font-normal leading-6"
    companyClasses += " text-muted-foreground text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6"
    nameClasses += " text-foreground text-sm font-normal leading-[22px]"
    companyClasses += " text-muted-foreground text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex justify-start items-center gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`w-${avatarSize / 4} h-${avatarSize / 4} ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Streamers struggle with these challenges daily
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Missing viral moments, toxic viewers, and content that doesn't resonate -"} <br />{" "}
            {"these are the real problems streamers face every day"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
          <TestimonialCard {...testimonials[2]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
          <TestimonialCard {...testimonials[5]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[6]} />
          <TestimonialCard {...testimonials[7]} />
        </div>
      </div>
    </section>
  )
}
