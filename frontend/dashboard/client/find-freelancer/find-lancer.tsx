"use client"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ClientHeader } from "../client-header"
import { Search, Filter, Star, MapPin, Briefcase, MessageSquare, User } from "lucide-react"

export default function FindFreelancersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState([4])
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold gradient-text">Find Freelancers</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by skill, name, or keyword..."
                  className="pl-10 bg-white focus-visible:ring-blue-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="icon"
                  className={`border-blue-200 hover:bg-blue-50 ${showFilters ? "text-blue-700 bg-blue-50" : "text-blue-600"}`}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {showFilters && (
              <Card className="overflow-hidden border-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Hourly Rate</h3>
                      <div className="flex items-center gap-4">
                        <Select defaultValue="any">
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="0-25">$0 - $25</SelectItem>
                            <SelectItem value="25-50">$25 - $50</SelectItem>
                            <SelectItem value="50-100">$50 - $100</SelectItem>
                            <SelectItem value="100+">$100+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Rating</h3>
                      <div className="pt-2 px-2">
                        <Slider
                          defaultValue={[4]}
                          max={5}
                          step={1}
                          value={ratingFilter}
                          onValueChange={setRatingFilter}
                          className="py-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Any</span>
                          <span>{ratingFilter[0]}+ stars</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Location</h3>
                      <Select defaultValue="anywhere">
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Anywhere" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anywhere">Anywhere</SelectItem>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Experience Level</h3>
                      <Select defaultValue="any">
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="entry">Entry</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Reset Filters
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                </CardFooter>
              </Card>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {freelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FreelancerCard({ freelancer }: { freelancer: any }) {
  return (
    <Card className="card-hover-effect overflow-hidden border-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
      <CardHeader className="pb-2 flex flex-row items-start gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
          {freelancer.avatar ? (
            <img
              src={freelancer.avatar || "/placeholder.svg"}
              alt={freelancer.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <User className="h-8 w-8 text-blue-600" />
          )}
          {freelancer.isOnline && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg">{freelancer.name}</CardTitle>
          <div className="text-sm text-muted-foreground">{freelancer.title}</div>
          <div className="flex items-center mt-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < freelancer.rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="ml-1 text-sm text-muted-foreground">({freelancer.reviews})</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm mb-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{freelancer.location}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-blue-700 font-medium">${freelancer.hourlyRate}/hr</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{freelancer.bio}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {freelancer.skills.map((skill: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex gap-2">
        <Button variant="outline" className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50">
          <MessageSquare className="h-4 w-4 mr-2" />
          Message
        </Button>
        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          <Briefcase className="h-4 w-4 mr-2" />
          Invite
        </Button>
      </CardFooter>
    </Card>
  )
}

const freelancers = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack Developer",
    bio: "Experienced full stack developer with 6+ years of experience in React, Node.js, and MongoDB. I specialize in building scalable web applications.",
    rating: 4.9,
    reviews: 56,
    hourlyRate: 65,
    location: "United States",
    isOnline: true,
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Sarah Williams",
    title: "UI/UX Designer",
    bio: "Creative UI/UX designer with a passion for creating beautiful and functional user interfaces. I have worked with startups and enterprise clients.",
    rating: 4.8,
    reviews: 42,
    hourlyRate: 55,
    location: "United Kingdom",
    isOnline: false,
    skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping"],
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Mobile App Developer",
    bio: "Mobile app developer specializing in React Native and Flutter. I've built and published over 15 apps to the App Store and Google Play.",
    rating: 4.7,
    reviews: 38,
    hourlyRate: 60,
    location: "Canada",
    isOnline: true,
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Content Writer & SEO Specialist",
    bio: "Professional content writer with expertise in SEO optimization. I help businesses increase their organic traffic through high-quality content.",
    rating: 4.9,
    reviews: 64,
    hourlyRate: 45,
    location: "Spain",
    isOnline: false,
    skills: ["Content Writing", "SEO", "Copywriting", "Blog Posts", "Research"],
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "David Kim",
    title: "DevOps Engineer",
    bio: "DevOps engineer with strong experience in AWS, Docker, and Kubernetes. I help teams implement CI/CD pipelines and improve deployment processes.",
    rating: 4.6,
    reviews: 29,
    hourlyRate: 75,
    location: "South Korea",
    isOnline: true,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    title: "Graphic Designer",
    bio: "Versatile graphic designer with 8 years of experience. I specialize in branding, logo design, and marketing materials that help businesses stand out.",
    rating: 4.8,
    reviews: 51,
    hourlyRate: 50,
    location: "Mexico",
    isOnline: false,
    skills: ["Logo Design", "Branding", "Illustrator", "Photoshop", "Print Design"],
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

