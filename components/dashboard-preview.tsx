import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-full max-w-[1160px] mx-auto px-4">
      {/* Desktop Dashboard Preview */}
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/Chatlytics-Dashboard.PNG"
          alt="Chatlytics desktop dashboard showing live sentiment analysis, trending keywords, real-time chat monitoring, and stream alerts"
          width={1160}
          height={700}
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
