import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, MessageSquare } from "lucide-react"

export function JobsList() {
  const jobs = [
    {
      id: 1,
      title: "Website Redesign for E-commerce Store",
      description: "Looking for an experienced web designer to redesign our online store.",
      budget: "$1,500 - $3,000",
      bids: 8,
      status: "active",
      posted: "2 days ago",
      category: "Web Design",
    },
    {
      id: 2,
      title: "Mobile App Development - iOS and Android",
      description: "Need a developer to create a mobile app for both iOS and Android platforms.",
      budget: "$5,000 - $10,000",
      bids: 12,
      status: "active",
      posted: "5 days ago",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "Content Writing for Blog Articles",
      description: "Seeking a content writer to create 10 blog articles about digital marketing.",
      budget: "$500 - $1,000",
      bids: 4,
      status: "active",
      posted: "1 day ago",
      category: "Content Writing",
    },
  ]

  return (
    <div className="grid gap-4">
      {jobs.map((job) => (
        <Card key={job.id} className="card-hover-effect overflow-hidden border-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription className="mt-1">{job.description}</CardDescription>
              </div>
              <Badge className="bg-blue-600 hover:bg-blue-700">{job.status}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-3">
              <div>
                <div className="text-sm font-medium text-blue-700">Budget</div>
                <div className="text-sm">{job.budget}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-indigo-700">Category</div>
                <div className="text-sm">{job.category}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-violet-700">Posted</div>
                <div className="text-sm">{job.posted}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium text-blue-700">{job.bids}</span> bids received
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/dashboard/client/jobs/${job.id}/messages`}>
                <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
              </Link>
              <Link href={`/dashboard/client/jobs/${job.id}`}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

