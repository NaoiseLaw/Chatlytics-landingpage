import React from "react"

const HistoricalAnalytics: React.FC = () => {
  const dataPoints = [
    { date: "Today", positive: 74, negative: 6 },
    { date: "Yesterday", positive: 68, negative: 12 },
    { date: "2 days ago", positive: 82, negative: 4 },
    { date: "3 days ago", positive: 71, negative: 9 },
    { date: "4 days ago", positive: 79, negative: 7 }
  ]

  return (
    <div className="w-full h-full flex flex-col p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-sm font-medium text-emerald-400 mb-1">90-Day History</div>
        <div className="text-xs text-muted-foreground">Sentiment patterns</div>
      </div>
      
      <div className="flex-1 space-y-2">
        {dataPoints.map((point, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{point.date}</span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-400">{point.positive}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-400">{point.negative}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-xs text-emerald-400 font-medium">View Full Report</div>
      </div>
    </div>
  )
}

export default HistoricalAnalytics
