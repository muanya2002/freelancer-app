import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, Briefcase } from "lucide-react"

export function JobsGrid() {
  const jobs = [
    {
      id: 1,
      title: "Website Redesign for E-commerce Store",
      description: "Looking for an experienced web designer to redesign our online store.",
      budget: "$1,500 - $3,000",
      posted: "2 days ago",
      category: "Web Design",
      skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
      match: "95%",
    },
    {
      id: 2,
      title: "Mobile App Development - iOS and Android",
      description: "Need a developer to create a mobile app for both iOS and Android platforms.",
      budget: "$5,000 - $10,000",
      posted: "5 days ago",
      category: "Mobile Development",
      skills: ["React Native", "iOS", "Android", "API Integration"],
      match: "85%",
    },
    {
      id: 3,
      title: "Content Writing for Blog Articles",
      description: "Seeking a content writer to create 10 blog articles about digital marketing.",
      budget: "$500 - $1,000",
      posted: "1 day ago",
      category: "Content Writing",
      skills: ["Content Writing", "SEO", "Digital Marketing"],
      match: "90%",
    },
    {
      id: 4,
      title: "Logo Design for Tech Startup",
      description: "Need a creative designer to create a modern logo for our tech startup.",
      budget: "$300 - $500",
      posted: "3 days ago",
      category: "Graphic Design",
      skills: ["Logo Design", "Illustrator", "Branding"],
      match: "80%",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {jobs.map((job) => (
        <Card key={job.id} className="card-hover-effect overflow-hidden border-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription className="mt-1">{job.description}</CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-600/10 text-blue-700 border-blue-200 badge-glow">
                {job.match} Match
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <span className="text-sm">{job.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-indigo-600" />
                <span className="text-sm">{job.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-violet-600" />
                <span className="text-sm">Posted {job.posted}</span>
              </div>
              <div className="mt-2">
                <div className="flex flex-wrap gap-1">
                  {job.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/dashboard/freelancer/jobs/${job.id}`} className="w-full">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                View Job
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

