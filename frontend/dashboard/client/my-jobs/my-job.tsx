import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClientHeader } from "../client-header"
import { Plus, Search, Filter, Eye, MessageSquare, Edit, Trash2 } from "lucide-react"

export default function MyJobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold gradient-text">My Jobs</h1>
              <div className="flex items-center gap-4">
                <Link href="/dashboard/client/post-job">
                  <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Plus className="h-4 w-4" />
                    <span>Post a Job</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">All Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">12</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">5</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-600">4</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">3</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search jobs..." className="pl-10 bg-white focus-visible:ring-blue-400" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="active" className="mt-6">
                <div className="grid gap-4">
                  {jobs
                    .filter((job) => job.status === "active")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="in-progress" className="mt-6">
                <div className="grid gap-4">
                  {jobs
                    .filter((job) => job.status === "in-progress")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <div className="grid gap-4">
                  {jobs
                    .filter((job) => job.status === "completed")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="draft" className="mt-6">
                <div className="grid gap-4">
                  {jobs
                    .filter((job) => job.status === "draft")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function JobCard({ job }: { job: any }) {
  return (
    <Card className="card-hover-effect overflow-hidden border-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <StatusBadge status={job.status} />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{job.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {job.skills.map((skill: string, index: number) => (
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

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
            <div>
              <div className="text-muted-foreground">Budget</div>
              <div className="font-medium">{job.budget}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Bids</div>
              <div className="font-medium">{job.bids} received</div>
            </div>
            <div>
              <div className="text-muted-foreground">Posted</div>
              <div className="font-medium">{job.posted}</div>
            </div>
          </div>

          <div className="flex md:flex-col gap-2 justify-end">
            <Link href={`/dashboard/client/jobs/${job.id}`}>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                <Eye className="h-4 w-4 mr-1" />
                <span>View</span>
              </Button>
            </Link>
            <Link href={`/dashboard/client/jobs/${job.id}/messages`}>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>Messages</span>
              </Button>
            </Link>
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 px-2 border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="flex-1 px-2 border-red-200 text-red-700 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "active":
      return <Badge className="bg-green-600 hover:bg-green-700">Active</Badge>
    case "in-progress":
      return <Badge className="bg-amber-600 hover:bg-amber-700">In Progress</Badge>
    case "completed":
      return <Badge className="bg-indigo-600 hover:bg-indigo-700">Completed</Badge>
    case "draft":
      return (
        <Badge variant="outline" className="border-slate-200 text-slate-700">
          Draft
        </Badge>
      )
    default:
      return null
  }
}

const jobs = [
  {
    id: 1,
    title: "Website Redesign for E-commerce Store",
    description:
      "Looking for an experienced web designer to redesign our online store. The current website is outdated and needs a modern look and feel.",
    budget: "$1,500 - $3,000",
    bids: 8,
    status: "active",
    posted: "2 days ago",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    id: 2,
    title: "Mobile App Development - iOS and Android",
    description:
      "Need a developer to create a mobile app for both iOS and Android platforms. The app should have user authentication, profile management, and push notifications.",
    budget: "$5,000 - $10,000",
    bids: 12,
    status: "active",
    posted: "5 days ago",
    skills: ["React Native", "iOS", "Android", "API Integration"],
  },
  {
    id: 3,
    title: "Content Writing for Blog Articles",
    description:
      "Seeking a content writer to create 10 blog articles about digital marketing. Each article should be 1500-2000 words and SEO optimized.",
    budget: "$500 - $1,000",
    bids: 4,
    status: "in-progress",
    posted: "1 week ago",
    skills: ["Content Writing", "SEO", "Digital Marketing"],
  },
  {
    id: 4,
    title: "Logo Design for Tech Startup",
    description:
      "Need a creative designer to create a modern logo for our tech startup. The logo should be simple, memorable, and reflect our brand values.",
    budget: "$300 - $500",
    bids: 15,
    status: "in-progress",
    posted: "2 weeks ago",
    skills: ["Logo Design", "Illustrator", "Branding"],
  },
  {
    id: 5,
    title: "WordPress Website Development",
    description:
      "Looking for a WordPress developer to build a corporate website with 5-7 pages, contact form, and blog section.",
    budget: "$800 - $1,200",
    bids: 9,
    status: "completed",
    posted: "1 month ago",
    skills: ["WordPress", "PHP", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Social Media Marketing Strategy",
    description: "Need a marketing expert to develop a comprehensive social media strategy for our new product launch.",
    budget: "$1,000 - $2,000",
    bids: 6,
    status: "completed",
    posted: "1 month ago",
    skills: ["Social Media", "Marketing", "Content Strategy"],
  },
  {
    id: 7,
    title: "Database Optimization for Web Application",
    description: "Looking for a database expert to optimize our MySQL database for better performance and scalability.",
    budget: "$1,500 - $2,500",
    bids: 0,
    status: "draft",
    posted: "Not posted yet",
    skills: ["MySQL", "Database Optimization", "SQL"],
  },
]

