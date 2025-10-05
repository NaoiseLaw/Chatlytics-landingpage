import React from "react"

const SentimentUpdates: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-green-400">Live Sentiment</span>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-400 mb-1">74%</div>
        <div className="text-sm text-muted-foreground">Positive</div>
      </div>
      <div className="w-full mt-4 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-green-400">Positive</span>
          <span>74%</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-yellow-400">Neutral</span>
          <span>20%</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-red-400">Negative</span>
          <span>6%</span>
        </div>
      </div>
    </div>
  )
}

export default SentimentUpdates
