"use client"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientHeader } from "../client-header"
import { User, MapPin, Globe, Plus, X, Upload } from "lucide-react"

export default function ProfilePage() {
  const [skills, setSkills] = useState<string[]>(["Project Management", "Marketing", "Business Strategy", "E-commerce"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container max-w-4xl">
          <div className="grid gap-6">
            <h1 className="text-3xl font-bold gradient-text">My Profile</h1>

            <div className="grid gap-6 md:grid-cols-[250px_1fr]">
              <div className="space-y-6">
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="h-32 w-32 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-16 w-16 text-blue-600" />
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
                      >
                        <Upload className="h-4 w-4" />
                        <span className="sr-only">Upload photo</span>
                      </Button>
                    </div>
                    <h2 className="text-xl font-bold">John Smith</h2>
                    <p className="text-sm text-muted-foreground">Client since Jan 2023</p>

                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      New York, USA
                    </div>

                    <div className="w-full border-t my-4"></div>

                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm">Profile Visibility</div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Account Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">Jobs Posted</div>
                        <div className="font-medium">12</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">Active Jobs</div>
                        <div className="font-medium">5</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">Completed Jobs</div>
                        <div className="font-medium">7</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">Hired Freelancers</div>
                        <div className="font-medium">9</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">Credits Balance</div>
                        <div className="font-medium text-blue-700">150</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="bg-muted/50 w-full justify-start">
                    <TabsTrigger value="info">Basic Info</TabsTrigger>
                    <TabsTrigger value="company">Company</TabsTrigger>
                    <TabsTrigger value="skills">Skills & Interests</TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="mt-4 space-y-4">
                    <Card className="overflow-hidden border-none">
                      <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                      <CardHeader className="pb-2">
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input
                              id="first-name"
                              defaultValue="John"
                              className="bg-white focus-visible:ring-blue-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input
                              id="last-name"
                              defaultValue="Smith"
                              className="bg-white focus-visible:ring-blue-400"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="john.smith@example.com"
                            className="bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            defaultValue="New York, USA"
                            className="bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            defaultValue="Entrepreneur and business owner looking for talented freelancers to help grow my online business."
                            className="min-h-[100px] bg-white focus-visible:ring-blue-400"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          Save Changes
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="company" className="mt-4 space-y-4">
                    <Card className="overflow-hidden border-none">
                      <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                      <CardHeader className="pb-2">
                        <CardTitle>Company Information</CardTitle>
                        <CardDescription>Add details about your company</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input
                            id="company-name"
                            defaultValue="Smith Enterprises"
                            className="bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company-website">Website</Label>
                          <div className="flex">
                            <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-muted px-3 text-sm">
                              <Globe className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <Input
                              id="company-website"
                              defaultValue="www.smithenterprises.com"
                              className="rounded-l-none bg-white focus-visible:ring-blue-400"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Input
                            id="industry"
                            defaultValue="E-commerce & Retail"
                            className="bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company-size">Company Size</Label>
                          <Input
                            id="company-size"
                            defaultValue="10-50 employees"
                            className="bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company-description">Company Description</Label>
                          <Textarea
                            id="company-description"
                            defaultValue="Smith Enterprises is an e-commerce company specializing in consumer electronics and accessories. We've been in business since 2015 and are looking to expand our online presence."
                            className="min-h-[100px] bg-white focus-visible:ring-blue-400"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          Save Changes
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="skills" className="mt-4 space-y-4">
                    <Card className="overflow-hidden border-none">
                      <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                      <CardHeader className="pb-2">
                        <CardTitle>Skills & Interests</CardTitle>
                        <CardDescription>
                          Add skills and interests to help us match you with the right freelancers
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="skills">Skills</Label>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-blue-100 text-blue-700 hover:bg-blue-200 flex items-center gap-1"
                              >
                                {skill}
                                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              id="skills"
                              placeholder="Add a skill"
                              value={newSkill}
                              onChange={(e) => setNewSkill(e.target.value)}
                              className="bg-white focus-visible:ring-blue-400"
                            />
                            <Button type="button" onClick={addSkill} className="bg-blue-600 hover:bg-blue-700">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="interests">Project Interests</Label>
                          <Textarea
                            id="interests"
                            placeholder="What kind of projects are you interested in?"
                            defaultValue="I'm primarily interested in e-commerce website development, digital marketing campaigns, and mobile app development for retail businesses."
                            className="min-h-[100px] bg-white focus-visible:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Project Categories</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              "Web Development",
                              "Mobile Apps",
                              "Design & Creative",
                              "Writing & Translation",
                              "Marketing",
                              "Business",
                              "Data Science",
                              "IT & Networking",
                            ].map((category) => (
                              <div key={category} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  id={`category-${category}`}
                                  defaultChecked={["Web Development", "Mobile Apps", "Marketing"].includes(category)}
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <Label htmlFor={`category-${category}`} className="text-sm font-normal">
                                  {category}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          Save Changes
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

