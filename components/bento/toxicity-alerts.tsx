import React from "react"

const ToxicityAlerts: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <span className="text-sm font-medium text-red-400">Alert System</span>
      </div>
      <div className="text-center mb-4">
        <div className="text-lg font-bold text-red-400 mb-1">Toxicity Detected</div>
        <div className="text-xs text-muted-foreground">Instant notification sent</div>
      </div>
      <div className="w-full bg-red-500/20 border border-red-500/30 rounded-lg p-3">
        <div className="text-xs text-red-400 font-medium">⚠️ Warning</div>
        <div className="text-xs text-muted-foreground mt-1">
          Negative sentiment spike detected in chat
        </div>
      </div>
    </div>
  )
}

export default ToxicityAlerts
