export interface Plant {
  id: string
  name: string
  scientificName: string
  slug: string
  description: string
  category: string
  difficulty: "Easy" | "Medium" | "Hard"
  sunlight: string
  water: string
  temperature: string
  image?: string
  growthTime?: string
  soilType?: string
  propagation?: string[]
  commonProblems?: string[]
  tips?: string[]
}
