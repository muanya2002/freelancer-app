"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FreelancerHeader } from "./freelancer-header"
import { ArrowLeft, Clock, DollarSign, User } from "lucide-react"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [bidAmount, setBidAmount] = useState("")
  const [deliveryTime, setDeliveryTime] = useState("")
  const [proposal, setProposal] = useState("")

  // This would normally be fetched from an API based on the ID
  const job = {
    id: params.id,
    title: "Website Redesign for E-commerce Store",
    description:
      "We are looking for an experienced web designer to redesign our online store. The current website is outdated and needs a modern look and feel. The redesign should focus on improving user experience, mobile responsiveness, and conversion rates. The ideal candidate will have experience with e-commerce websites and a strong portfolio of previous work.",
    budget: "$1,500 - $3,000",
    posted: "2 days ago",
    category: "Web Design",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design", "E-commerce"],
    client: {
      name: "TechStore Inc.",
      rating: 4.8,
      jobsPosted: 15,
      location: "United States",
      memberSince: "Jan 2022",
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <FreelancerHeader />
      <main className="flex-1 py-6">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link
              href="./dashboard/freelancer"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to jobs
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">{job.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-lg font-semibold">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      {job.budget}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Skills Required</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submit a Proposal</CardTitle>
                  <CardDescription>Tell the client why you're the best fit for this job</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bid-amount">Your Bid (USD)</Label>
                      <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-muted px-3 text-sm">
                          $
                        </div>
                        <Input
                          id="bid-amount"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          placeholder="Enter your bid amount"
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-time">Delivery Time</Label>
                      <Input
                        id="delivery-time"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        placeholder="e.g. 7 days"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proposal">Cover Letter</Label>
                    <Textarea
                      id="proposal"
                      value={proposal}
                      onChange={(e) => setProposal(e.target.value)}
                      placeholder="Explain why you're the best fit for this job"
                      className="min-h-[200px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit Proposal</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>About the Client</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{job.client.name}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <span className="font-medium">{job.client.rating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jobs Posted:</span>
                      <span className="font-medium">{job.client.jobsPosted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{job.client.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Member Since:</span>
                      <span className="font-medium">{job.client.memberSince}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

