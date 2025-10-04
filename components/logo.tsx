export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">P</span>
      </div>

      {/* Text adapts to theme */}
      <span className="text-2xl font-bold text-gray-900 dark:text-white">Pointer AI</span>
    </div>
  )
}
