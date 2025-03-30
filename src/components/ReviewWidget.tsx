import { Star } from "lucide-react"

export default function ReviewWidget() {
  return (
    <div className="flex items-center gap-4 p-4 max-w-md">
      {/* Avatar stack */}
      <div className="flex -space-x-3">
        <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 z-50"></div>
        <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 z-40"></div>
        <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 z-30"></div>
        <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 z-20"></div>
        <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-xs font-medium z-10">
          <span>GW</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex flex-col">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 font-bold">5.0</span>
        </div>
        <div className="text-sm text-gray-600">from 5 reviews</div>
      </div>
    </div>
  )
} 