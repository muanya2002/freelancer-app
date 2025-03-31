import React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, CreditCard, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <span className="text-xl font-bold">FreelanceHub</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-hero-pattern bg-cover bg-center text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Connect with Top Freelancers
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Post jobs, hire talent, and get work done efficiently with our credit-based marketplace.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register?type=client">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                    Hire Talent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register?type=freelancer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    Find Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="card-hover-effect overflow-hidden border-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg -z-10"></div>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle>For Clients</CardTitle>
                  <CardDescription>Post jobs and find the perfect freelancer for your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Purchase credits to post jobs</p>
                  <p>• Review bids from qualified freelancers</p>
                  <p>• Hire based on skills and budget</p>
                  <p>• Secure payment processing</p>
                </CardContent>
                <CardFooter>
                  <Link href="/register?type=client" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="card-hover-effect overflow-hidden border-none relative">
                <div className="absolute inset-0 bg-card-gradient rounded-lg opacity-90 -z-10"></div>
                <CardHeader>
                  <Briefcase className="h-8 w-8 mb-2 text-white" />
                  <CardTitle className="text-white">For Freelancers</CardTitle>
                  <CardDescription className="text-white/80">
                    Find projects that match your skills and expertise
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-white">
                  <p>• Browse available projects</p>
                  <p>• Bid on jobs that match your skills</p>
                  <p>• Build your reputation with reviews</p>
                  <p>• Get paid securely and on time</p>
                </CardContent>
                <CardFooter>
                  <Link href="/register?type=freelancer" className="w-full">
                    <Button className="w-full bg-white text-indigo-600 hover:bg-white/90">Find Work</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="card-hover-effect overflow-hidden border-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg -z-10"></div>
                <CardHeader>
                  <CreditCard className="h-8 w-8 mb-2 text-violet-600" />
                  <CardTitle>Credit System</CardTitle>
                  <CardDescription>Our credit-based system makes hiring simple and transparent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Purchase credits in bundles</p>
                  <p>• Use credits to post jobs</p>
                  <p>• No hidden fees or charges</p>
                  <p>• Secure payment processing</p>
                </CardContent>
                <CardFooter>
                  <Link href="/pricing" className="w-full">
                    <Button variant="outline" className="w-full border-violet-200 text-violet-700 hover:bg-violet-50">
                      View Pricing
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-violet-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                  How It Works
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform makes it easy to connect freelancers with clients
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12 mt-8">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 card-hover-effect bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Register</h3>
                  <p className="text-muted-foreground text-center">Sign up as a client or freelancer</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 card-hover-effect bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Post or Bid</h3>
                  <p className="text-muted-foreground text-center">Clients post jobs, freelancers bid on them</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 card-hover-effect bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Hire</h3>
                  <p className="text-muted-foreground text-center">Clients select the best freelancer for the job</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 card-hover-effect bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-600 text-white">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Get Paid</h3>
                  <p className="text-muted-foreground text-center">Secure payment processing for completed work</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FreelanceHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

