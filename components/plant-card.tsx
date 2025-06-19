import Link from "next/link"
import type { Plant } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Droplets, Sun, Thermometer } from "lucide-react"

interface PlantCardProps {
  plant: Plant
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link href={`/plants/${plant.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white/90 backdrop-blur-sm border-emerald-100">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={plant.image || "/placeholder.svg?height=200&width=400"}
            alt={plant.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          <Badge className="absolute top-2 right-2 bg-emerald-500 hover:bg-emerald-600">{plant.category}</Badge>
        </div>
        <CardHeader className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-emerald-800">{plant.name}</h3>
              <p className="text-sm text-slate-500">{plant.scientificName}</p>
            </div>
            <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full">
              <span className="text-xs font-medium text-emerald-700">{plant.difficulty}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-slate-600 line-clamp-2 mb-4">{plant.description}</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center p-2 rounded-lg bg-sky-50">
              <Sun className="h-4 w-4 text-sky-600 mb-1" />
              <span className="text-xs text-slate-700">{plant.sunlight}</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg bg-emerald-50">
              <Droplets className="h-4 w-4 text-emerald-600 mb-1" />
              <span className="text-xs text-slate-700">{plant.water}</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg bg-amber-50">
              <Thermometer className="h-4 w-4 text-amber-600 mb-1" />
              <span className="text-xs text-slate-700">{plant.temperature}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-500">+42 growing</span>
            </div>
            <span className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View Details →</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
