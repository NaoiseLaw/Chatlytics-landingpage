import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      {/* Desktop Dashboard Preview */}
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl mb-8">
        <Image
          src="/images/Chatlytics-Dashboard.PNG"
          alt="Chatlytics desktop dashboard showing live sentiment analysis, trending keywords, real-time chat monitoring, and stream alerts"
          width={1160}
          height={700}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
      
      {/* Mobile App Preview */}
      <div className="flex justify-center">
        <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl max-w-sm">
          <Image
            src="/images/ChatLytics-MobileDashboard.PNG"
            alt="Chatlytics mobile app showing quick stats, sentiment meter, and trends with bottom navigation"
            width={375}
            height={812}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
