import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Droplets,
  Sun,
  Thermometer,
  Clock,
  EarthIcon as Soil,
  Scissors,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuredPlants } from "@/lib/data"

interface PlantPageProps {
  params: {
    slug: string
  }
}

export default function PlantPage({ params }: PlantPageProps) {
  const plant = featuredPlants.find((p) => p.slug === params.slug)

  if (!plant) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-sky-50">
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center text-sm text-slate-600 hover:text-emerald-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden mb-6 border border-emerald-100 shadow-lg">
                <img
                  src={plant.image || "/placeholder.svg?height=400&width=400"}
                  alt={plant.name}
                  className="w-full aspect-square object-cover"
                />
              </div>

              <Card className="mb-6 border-emerald-100">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4 text-emerald-800">Quick Care Guide</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                        <Sun className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">Sunlight</p>
                        <p className="text-sm text-slate-500">{plant.sunlight}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Droplets className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">Water</p>
                        <p className="text-sm text-slate-500">{plant.water}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Thermometer className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">Temperature</p>
                        <p className="text-sm text-slate-500">{plant.temperature}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">Growth Time</p>
                        <p className="text-sm text-slate-500">{plant.growthTime}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center">
                        <Soil className="h-5 w-5 text-amber-800" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">Soil Type</p>
                        <p className="text-sm text-slate-500">{plant.soilType}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white border-none">
                Add to My Garden
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-1">{plant.name}</h1>
                  <p className="text-lg italic text-slate-500 mb-2">{plant.scientificName}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                      {plant.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800">
                      {plant.difficulty} to grow
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-800"
                  >
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-800"
                  >
                    Save
                  </Button>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">{plant.description}</p>

              <Tabs defaultValue="growing" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="growing">Growing Guide</TabsTrigger>
                  <TabsTrigger value="propagation">Propagation</TabsTrigger>
                  <TabsTrigger value="problems">Common Problems</TabsTrigger>
                  <TabsTrigger value="tips">Pro Tips</TabsTrigger>
                </TabsList>

                <TabsContent value="growing" className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-emerald-800">Getting Started</h3>
                      <p className="text-slate-700 mb-4">
                        {plant.name} is a {plant.difficulty.toLowerCase()}-to-grow plant that thrives in{" "}
                        {plant.sunlight.toLowerCase()} light conditions. It prefers temperatures between{" "}
                        {plant.temperature} and should be watered {plant.water.toLowerCase()}.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-sky-50 rounded-lg p-4">
                          <h4 className="font-medium text-sky-800 mb-2">Light Requirements</h4>
                          <p className="text-sm text-slate-700">
                            Place your {plant.name} in a spot with {plant.sunlight.toLowerCase()} light. Avoid direct
                            sunlight as it can scorch the leaves. A few feet away from a south or west-facing window is
                            ideal.
                          </p>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4">
                          <h4 className="font-medium text-emerald-800 mb-2">Watering Schedule</h4>
                          <p className="text-sm text-slate-700">
                            Water your {plant.name} {plant.water.toLowerCase()}. Allow the top inch of soil to dry out
                            between waterings. Reduce watering in winter when growth slows down.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-emerald-800">Planting Guide</h3>
                      <ol className="list-decimal list-inside space-y-3 text-slate-700">
                        <li>Choose a pot with drainage holes that's slightly larger than the root ball.</li>
                        <li>Use {plant.soilType?.toLowerCase()} to ensure proper drainage.</li>
                        <li>Place a layer of soil at the bottom of the pot.</li>
                        <li>
                          Position the plant in the center of the pot at the same depth it was previously growing.
                        </li>
                        <li>Fill in around the roots with soil, gently pressing down to remove air pockets.</li>
                        <li>Water thoroughly until water drains from the bottom of the pot.</li>
                        <li>Place in an appropriate location based on light requirements.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-emerald-800">Ongoing Care</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 rounded-lg p-4">
                          <h4 className="font-medium text-amber-800 mb-2">Fertilizing</h4>
                          <p className="text-sm text-slate-700">
                            Feed your {plant.name} with a balanced liquid fertilizer diluted to half strength every 4-6
                            weeks during the growing season (spring and summer). Avoid fertilizing in fall and winter
                            when growth naturally slows.
                          </p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-medium text-purple-800 mb-2">Pruning</h4>
                          <p className="text-sm text-slate-700">
                            Trim yellowing or damaged leaves at the base using clean, sharp scissors. For bushier
                            growth, pinch off the growing tips occasionally. Always use sterilized tools to prevent
                            disease spread.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="propagation" className="pt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-3 text-emerald-800">Propagation Methods</h3>
                    <p className="text-slate-700 mb-4">
                      {plant.name} can be propagated through {plant.propagation?.join(", ").toLowerCase()}. Here's how
                      to successfully multiply your plant:
                    </p>

                    {plant.propagation?.includes("Stem cuttings") && (
                      <div className="bg-emerald-50 rounded-lg p-6 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <Scissors className="h-6 w-6 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-emerald-800 mb-2">Stem Cuttings</h4>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700">
                              <li>Select a healthy stem with at least 2-3 nodes (the points where leaves emerge).</li>
                              <li>Using clean, sharp scissors, cut just below a node at a 45-degree angle.</li>
                              <li>Remove leaves from the bottom third of the cutting.</li>
                              <li>
                                Allow the cut end to callus for a few hours (for succulents, let it dry for 1-2 days).
                              </li>
                              <li>
                                Place the cutting in water or moist soil, ensuring at least one node is below the
                                surface.
                              </li>
                              <li>Keep in bright, indirect light and maintain consistent moisture.</li>
                              <li>
                                Roots should develop within 2-4 weeks. Once roots are 1-2 inches long, transplant to
                                soil if started in water.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    )}

                    {plant.propagation?.includes("Division") && (
                      <div className="bg-sky-50 rounded-lg p-6 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                            <Scissors className="h-6 w-6 text-sky-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sky-800 mb-2">Division</h4>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700">
                              <li>Water the plant thoroughly a day before division to reduce stress.</li>
                              <li>Carefully remove the plant from its pot.</li>
                              <li>
                                Gently separate the root ball into two or more sections, ensuring each section has
                                healthy roots and foliage.
                              </li>
                              <li>Plant each division in its own pot with fresh soil.</li>
                              <li>Water thoroughly and place in a location with appropriate light.</li>
                              <li>
                                Keep soil consistently moist (but not soggy) for the first few weeks as the plants
                                establish.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    )}

                    {plant.propagation?.includes("Air layering") && (
                      <div className="bg-purple-50 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            <Scissors className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-purple-800 mb-2">Air Layering</h4>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700">
                              <li>Select a healthy stem or branch.</li>
                              <li>Make a small upward cut about 1/3 of the way through the stem.</li>
                              <li>Insert a toothpick or small stick to keep the cut open.</li>
                              <li>Wrap the area with damp sphagnum moss.</li>
                              <li>Cover the moss with plastic wrap and secure with twine above and below the moss.</li>
                              <li>Keep the moss moist by occasionally unwrapping and misting.</li>
                              <li>After 4-8 weeks, roots should form in the moss.</li>
                              <li>Cut below the new roots and pot up the new plant.</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="problems" className="pt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-3 text-emerald-800">Common Problems & Solutions</h3>
                    <p className="text-slate-700 mb-4">
                      Even with proper care, {plant.name} may encounter some issues. Here's how to identify and address
                      common problems:
                    </p>

                    <div className="space-y-4">
                      {plant.commonProblems?.map((problem, index) => (
                        <div key={index} className="bg-amber-50 rounded-lg p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                              <AlertTriangle className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-amber-800 mb-2">{problem}</h4>
                              <div className="space-y-3 text-slate-700">
                                <div>
                                  <p className="font-medium text-sm">Symptoms:</p>
                                  <p className="text-sm">
                                    {problem === "Yellow leaves" &&
                                      "Leaves turning yellow, often starting from the bottom of the plant."}
                                    {problem === "Brown spots" &&
                                      "Brown, dry patches appearing on leaves, often with a yellow halo."}
                                    {problem === "Root rot" &&
                                      "Soft, brown roots; yellowing leaves; wilting despite moist soil; foul smell from soil."}
                                    {problem === "Leaf drop" &&
                                      "Leaves falling off the plant, often after turning yellow."}
                                    {problem === "Leggy growth" &&
                                      "Long, stretched stems with sparse foliage and increased space between leaves."}
                                    {problem === "Mealybugs" &&
                                      "White, cotton-like clusters in leaf joints and undersides; sticky residue on leaves."}
                                    {problem === "Lack of fenestration" &&
                                      "New leaves developing without the characteristic holes or splits."}
                                    {problem === "Brown tips" && "Leaf tips turning brown and crispy."}
                                    {problem === "Flowering" &&
                                      "Plant producing flowers, which can reduce leaf production and flavor in herbs."}
                                    {problem === "Aphids" &&
                                      "Tiny green, black, or white insects clustering on new growth and undersides of leaves."}
                                  </p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm">Causes:</p>
                                  <p className="text-sm">
                                    {problem === "Yellow leaves" &&
                                      "Overwatering, poor drainage, nutrient deficiency, or natural aging."}
                                    {problem === "Brown spots" && "Fungal infection, sunburn, or physical damage."}
                                    {problem === "Root rot" && "Overwatering, poor drainage, or contaminated soil."}
                                    {problem === "Leaf drop" &&
                                      "Stress from temperature changes, drafts, overwatering, or underwatering."}
                                    {problem === "Leggy growth" &&
                                      "Insufficient light causing the plant to stretch toward light sources."}
                                    {problem === "Mealybugs" &&
                                      "Insect infestation, often introduced from other plants."}
                                    {problem === "Lack of fenestration" &&
                                      "Insufficient light, young plant age, or inadequate nutrition."}
                                    {problem === "Brown tips" && "Low humidity, fluoride in water, or fertilizer burn."}
                                    {problem === "Flowering" &&
                                      "Natural part of the plant's life cycle, often triggered by age or stress."}
                                    {problem === "Aphids" &&
                                      "Insect infestation, often attracted to new, tender growth."}
                                  </p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm">Solutions:</p>
                                  <p className="text-sm">
                                    {problem === "Yellow leaves" &&
                                      "Adjust watering schedule, ensure proper drainage, and consider fertilizing if nutrient-deficient."}
                                    {problem === "Brown spots" &&
                                      "Remove affected leaves, improve air circulation, avoid wetting leaves when watering, and treat with fungicide if necessary."}
                                    {problem === "Root rot" &&
                                      "Remove plant from pot, trim away rotted roots, repot in fresh soil, and reduce watering frequency."}
                                    {problem === "Leaf drop" &&
                                      "Maintain consistent care routine, protect from drafts and temperature fluctuations."}
                                    {problem === "Leggy growth" &&
                                      "Move to a brighter location, rotate plant regularly, and consider pruning to encourage bushier growth."}
                                    {problem === "Mealybugs" &&
                                      "Isolate affected plant, remove bugs with alcohol-dipped cotton swab, and treat with insecticidal soap."}
                                    {problem === "Lack of fenestration" &&
                                      "Increase light exposure, ensure proper nutrition, and be patient as young plants mature."}
                                    {problem === "Brown tips" &&
                                      "Increase humidity, use filtered water, and dilute fertilizer applications."}
                                    {problem === "Flowering" &&
                                      "Pinch off flower buds as they appear to redirect energy to leaf production."}
                                    {problem === "Aphids" &&
                                      "Spray with water to dislodge, apply insecticidal soap, or introduce beneficial insects like ladybugs."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="pt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-3 text-emerald-800">Pro Tips for Thriving Plants</h3>
                    <p className="text-slate-700 mb-4">
                      Take your {plant.name} care to the next level with these expert recommendations:
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      {plant.tips?.map((tip, index) => (
                        <div key={index} className="bg-emerald-50 rounded-lg p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                              <Lightbulb className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-slate-700">{tip}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-sky-50 rounded-lg p-6 mt-6">
                      <h4 className="font-medium text-sky-800 mb-3">Seasonal Care Changes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                        <div>
                          <p className="font-medium mb-1">Spring & Summer (Growing Season)</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Increase watering frequency as growth accelerates</li>
                            <li>Begin regular fertilization schedule</li>
                            <li>Monitor for pests more frequently as they become active</li>
                            <li>Consider repotting if the plant is rootbound</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Fall & Winter (Dormant Season)</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Reduce watering as growth slows</li>
                            <li>Stop fertilizing or reduce frequency significantly</li>
                            <li>Move plants away from cold drafts and heating vents</li>
                            <li>Increase humidity if indoor heating dries the air</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-emerald-800">Community Growing Tips</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                    <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-slate-900">GreenThumb42</p>
                      <span className="text-xs text-slate-500">2 days ago</span>
                    </div>
                    <p className="text-slate-700 mb-2">
                      I've had great success with my {plant.name} by placing it near a humidifier. The extra moisture in
                      the air has really helped the leaves stay vibrant and healthy!
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <button className="flex items-center gap-1 hover:text-emerald-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                        Helpful (24)
                      </button>
                      <button className="hover:text-emerald-600">Reply</button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                    <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-slate-900">PlantLover99</p>
                      <span className="text-xs text-slate-500">1 week ago</span>
                    </div>
                    <p className="text-slate-700 mb-2">
                      I rotate my {plant.name} a quarter turn every week to ensure even growth. It's made such a
                      difference in keeping the plant balanced and healthy looking!
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <button className="flex items-center gap-1 hover:text-emerald-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                        Helpful (18)
                      </button>
                      <button className="hover:text-emerald-600">Reply</button>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    View All Comments (42)
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
              <h2 className="text-xl font-semibold mb-4 text-emerald-800">Share Your Experience</h2>
              <textarea
                className="w-full border border-slate-200 rounded-lg p-3 mb-4 focus:ring focus:ring-emerald-200 focus:border-emerald-300 outline-none"
                rows={4}
                placeholder={`Share your tips for growing ${plant.name}...`}
              ></textarea>
              <Button className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white border-none">
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
