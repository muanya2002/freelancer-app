import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Plus, CreditCard, Bell } from "lucide-react"
import { ClientHeader } from "./client-header"
import { JobsList } from "./job-list"

export default function ClientDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold gradient-text">Client Dashboard</h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                    3
                  </span>
                </Button>
                <Link href="./credit.tsx">
                  <Button variant="outline" className="flex items-center gap-2 border-blue-200 text-blue-700">
                    <CreditCard className="h-4 w-4" />
                    <span>150 Credits</span>
                  </Button>
                </Link>
                <Link href="./post-job.tsx">
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4" />
                    <span>Post a Job</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">5</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Bids</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">24</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none relative card-hover-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-violet-500/20 rounded-lg -z-10"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Hired Freelancers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-violet-600">3</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="active">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="active">Active Jobs</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="draft">Drafts</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Filter
                  </Button>
                </div>
              </div>
              <TabsContent value="active" className="mt-6">
                <JobsList />
              </TabsContent>
              <TabsContent value="completed" className="mt-6">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Briefcase className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No completed jobs yet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">When you complete jobs, they will appear here.</p>
                </div>
              </TabsContent>
              <TabsContent value="draft" className="mt-6">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Briefcase className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No draft jobs</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Save job postings as drafts to edit later.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

