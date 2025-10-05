import React from "react"

const TrendingKeywords: React.FC = () => {
  const keywords = [
    { word: "game", count: 247 },
    { word: "stream", count: 189 },
    { word: "chat", count: 156 },
    { word: "music", count: 134 },
    { word: "viewers", count: 98 }
  ]

  return (
    <div className="w-full h-full flex flex-col p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-sm font-medium text-blue-400 mb-1">Trending Now</div>
        <div className="text-xs text-muted-foreground">Real-time keywords</div>
      </div>
      <div className="flex-1 space-y-3">
        {keywords.map((keyword, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-foreground">#{keyword.word}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 bg-blue-500/20 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${(keyword.count / 250) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground">{keyword.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingKeywords
