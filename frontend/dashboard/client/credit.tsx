"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ClientHeader } from "./client-header"
import { ArrowLeft, CreditCard, Check } from "lucide-react"

export default function BuyCreditsPage() {
  const [selectedPlan, setSelectedPlan] = useState("standard")

  const plans = [
    {
      id: "basic",
      name: "Basic",
      credits: 100,
      price: 49,
      popular: false,
      description: "Perfect for small projects or occasional hiring",
    },
    {
      id: "standard",
      name: "Standard",
      credits: 300,
      price: 99,
      popular: true,
      description: "Most popular option for regular hiring needs",
    },
    {
      id: "premium",
      name: "Premium",
      credits: 750,
      price: 199,
      popular: false,
      description: "Best value for businesses with ongoing projects",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link
              href="./dashboard/client"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to dashboard
            </Link>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Buy Credits</h1>
            <p className="mt-2 text-muted-foreground">Purchase credits to post jobs and hire freelancers</p>
          </div>

          <div className="grid gap-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Current Balance</h2>
                <p className="text-muted-foreground">You currently have 150 credits</p>
              </div>
              <div className="text-3xl font-bold">150</div>
            </div>

            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-4 md:grid-cols-3">
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
                    <div className="mb-4">
                      <span className="text-3xl font-bold gradient-text">{plan.credits}</span>
                      <span className="text-muted-foreground"> credits</span>
                    </div>
                    <div className="mb-4 text-sm text-muted-foreground">{plan.description}</div>
                    <div className="mt-auto text-xl font-bold text-blue-700">${plan.price}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <Card className="overflow-hidden border-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your payment details to complete your purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <div className="flex">
                      <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-white px-3 text-sm">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <input
                        id="card-number"
                        placeholder="0000 0000 0000 0000"
                        className="flex h-10 w-full rounded-r-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <input
                        id="expiry"
                        placeholder="MM/YY"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <input
                        id="cvc"
                        placeholder="CVC"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Pay ${plans.find((p) => p.id === selectedPlan)?.price || 99}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

