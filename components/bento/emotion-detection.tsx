import React from "react"

const EmotionDetection: React.FC = () => {
  const emotions = [
    { name: "Joy", color: "bg-yellow-500", percentage: 45 },
    { name: "Excitement", color: "bg-orange-500", percentage: 30 },
    { name: "Frustration", color: "bg-red-500", percentage: 15 },
    { name: "Surprise", color: "bg-purple-500", percentage: 10 }
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
      <div className="text-center mb-6">
        <div className="text-sm font-medium text-purple-400 mb-2">Detected Emotions</div>
        <div className="text-2xl font-bold text-foreground">4 emotions</div>
      </div>
      <div className="w-full space-y-3">
        {emotions.map((emotion, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 ${emotion.color} rounded-full`}></div>
              <span className="text-sm text-muted-foreground">{emotion.name}</span>
            </div>
            <span className="text-sm font-medium text-foreground">{emotion.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmotionDetection
