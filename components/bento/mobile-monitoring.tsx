import React from "react"

const MobileMonitoring: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg">
      <div className="text-center mb-6">
        <div className="text-sm font-medium text-indigo-400 mb-2">Mobile Dashboard</div>
        <div className="text-xs text-muted-foreground">iOS & Android</div>
      </div>
      
      <div className="w-full space-y-4">
        <div className="bg-card/50 border border-border rounded-lg p-3">
          <div className="text-xs font-medium text-foreground mb-1">Last Stream</div>
          <div className="text-xs text-muted-foreground">85% positive • 4.2k messages</div>
        </div>
        
        <div className="bg-card/50 border border-border rounded-lg p-3">
          <div className="text-xs font-medium text-foreground mb-1">7 Days</div>
          <div className="text-xs text-muted-foreground">12% negative • emotion-detect</div>
        </div>
        
        <div className="bg-card/50 border border-border rounded-lg p-3">
          <div className="text-xs font-medium text-foreground mb-1">30 Days</div>
          <div className="text-xs text-muted-foreground">30k tokens • trending keywords</div>
        </div>
      </div>
    </div>
  )
}

export default MobileMonitoring
