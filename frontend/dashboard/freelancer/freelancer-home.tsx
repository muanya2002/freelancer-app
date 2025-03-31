import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Search, Bell } from "lucide-react"
import { FreelancerHeader } from "./freelancer-header"
import { JobsGrid } from "@/app/dashboard/freelancer/jobs-grid"

export default function FreelancerDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <FreelancerHeader />
      <main className="flex-1 py-6">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold gradient-text">Freelancer Dashboard</h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                    5
                  </span>
                </Button>
                <Link href="/dashboard/freelancer/find-jobs">
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4" />
                    <span>Find Jobs</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Bids</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">12</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">3</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-violet-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-violet-600">$2,450</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="recommended">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="recommended">Recommended Jobs</TabsTrigger>
                  <TabsTrigger value="active">Active Bids</TabsTrigger>
                  <TabsTrigger value="projects">My Projects</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Filter
                  </Button>
                </div>
              </div>
              <TabsContent value="recommended" className="mt-6">
                <JobsGrid />
              </TabsContent>
              <TabsContent value="active" className="mt-6">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Briefcase className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No active bids</h3>
                  <p className="mt-2 text-sm text-muted-foreground">When you bid on jobs, they will appear here.</p>
                </div>
              </TabsContent>
              <TabsContent value="projects" className="mt-6">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Briefcase className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No active projects</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    When clients hire you, your projects will appear here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

