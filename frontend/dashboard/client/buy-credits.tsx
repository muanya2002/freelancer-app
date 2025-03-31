"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientHeader } from "./client-header"
import { ArrowLeft, CreditCard, Check, Clock, Shield, Zap, Award, Sparkles } from "lucide-react"

export default function BuyCreditsPage() {
  const [selectedPlan, setSelectedPlan] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link
              href="/dashboard/client"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to dashboard
            </Link>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold gradient-text">Buy Credits</h1>
            <p className="mt-2 text-muted-foreground">Purchase credits to post jobs and hire freelancers</p>
          </div>

          <div className="grid gap-6">
            <Card className="overflow-hidden border-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">Current Balance</h2>
                    <p className="text-muted-foreground">You currently have 150 credits</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-700">150</div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold mb-4">Select a Plan</h2>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-4">
                  {plans.map((plan) => (
                    <div key={plan.id} className="relative">
                      {plan.popular && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                      <Label
                        htmlFor={plan.id}
                        className={`flex h-full flex-col rounded-lg border p-5 cursor-pointer card-hover-effect ${
                          selectedPlan === plan.id
                            ? "border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50"
                            : "border-muted"
                        }`}
                      >
                        <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                        <div className="mb-2 flex items-center justify-between">
                          <div className="text-lg font-semibold">{plan.name}</div>
                          {selectedPlan === plan.id && <Check className="h-5 w-5 text-blue-600" />}
                        </div>
                        <div className="mb-1">
                          <span className="text-3xl font-bold gradient-text">{plan.credits}</span>
                          <span className="text-muted-foreground"> credits</span>
                        </div>
                        <div className="mb-4 text-sm text-muted-foreground">{plan.description}</div>
                        <div className="mt-auto text-xl font-bold text-blue-700">${plan.price}</div>
                        {plan.savings && (
                          <div className="text-sm text-green-600 font-medium mt-1">Save {plan.savings}%</div>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">What You Can Do With Credits</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        <Zap className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Post Jobs</span> - 50 credits per job posting
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mt-0.5">
                        <Award className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Feature Jobs</span> - 25 credits to highlight your job
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 mt-0.5">
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Contact Freelancers</span> - 10 credits per direct contact
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                    <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card" className="mt-4 space-y-4">
                    <Card className="overflow-hidden border-none">
                      <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <div className="flex">
                            <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-white px-3 text-sm">
                              <CreditCard className="h-4 w-4 text-blue-600" />
                            </div>
                            <Input
                              id="card-number"
                              placeholder="0000 0000 0000 0000"
                              className="rounded-l-none bg-white focus-visible:ring-blue-400"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" className="bg-white focus-visible:ring-blue-400" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="CVC" className="bg-white focus-visible:ring-blue-400" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="name">Name on Card</Label>
                          <Input id="name" placeholder="John Smith" className="bg-white focus-visible:ring-blue-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="paypal" className="mt-4">
                    <Card className="overflow-hidden border-none">
                      <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                      <CardContent className="p-6 text-center">
                        <div className="py-6">
                          <div className="text-2xl font-bold mb-2 text-[#253b80]">
                            Pay<span className="text-[#179bd7]">Pal</span>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            You will be redirected to PayPal to complete your purchase.
                          </p>
                          <Button className="bg-[#0070ba] hover:bg-[#005ea6]">Continue with PayPal</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <Card className="overflow-hidden border-none mt-6">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <div className="text-muted-foreground">Plan</div>
                        <div className="font-medium">{plans.find((p) => p.id === selectedPlan)?.name}</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-muted-foreground">Credits</div>
                        <div className="font-medium">{plans.find((p) => p.id === selectedPlan)?.credits}</div>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between">
                          <div className="font-medium">Total</div>
                          <div className="font-bold text-lg">${plans.find((p) => p.id === selectedPlan)?.price}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Complete Purchase
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-3 w-3" />
                      <span>Secure payment processing</span>
                      <Clock className="h-3 w-3 ml-2" />
                      <span>Credits added instantly</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const plans = [
  {
    id: "basic",
    name: "Basic",
    credits: 100,
    price: 49,
    popular: false,
    description: "Perfect for small projects or occasional hiring",
    savings: null,
  },
  {
    id: "standard",
    name: "Standard",
    credits: 300,
    price: 99,
    popular: true,
    description: "Most popular option for regular hiring needs",
    savings: 32,
  },
  {
    id: "premium",
    name: "Premium",
    credits: 750,
    price: 199,
    popular: false,
    description: "Best value for businesses with ongoing projects",
    savings: 46,
  },
]

// Removed duplicate export default function
export function Loading() {
    return null
}