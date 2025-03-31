"use client"

import { Badge } from "@/components/ui/badge"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClientHeader } from "../client-header"
import { CreditCard, Smartphone, Trash2, AlertTriangle, Globe } from "lucide-react"

export default function SettingsPage() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container max-w-4xl">
          <div className="grid gap-6">
            <h1 className="text-3xl font-bold gradient-text">Account Settings</h1>

            <Tabs defaultValue="account" className="w-full">
              <TabsList className="bg-muted/50 w-full justify-start">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="billing">Billing & Payments</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="mt-4 space-y-4">
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Manage your account details and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="johnsmith" className="bg-white focus-visible:ring-blue-400" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.smith@example.com"
                        className="bg-white focus-visible:ring-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language" className="bg-white">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="america-new_york">
                        <SelectTrigger id="timezone" className="bg-white">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="america-new_york">Eastern Time (ET)</SelectItem>
                          <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                          <SelectItem value="america-los_angeles">Pacific Time (PT)</SelectItem>
                          <SelectItem value="europe-london">London (GMT)</SelectItem>
                          <SelectItem value="europe-paris">Central European Time (CET)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-red-600">Delete Account</CardTitle>
                    <CardDescription>Permanently delete your account and all data</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-4">
                      <p>Once you delete your account, there is no going back. This action cannot be undone.</p>
                    </div>

                    {showDeleteConfirm ? (
                      <div className="space-y-4">
                        <div className="rounded-md bg-red-50 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-800">Are you absolutely sure?</h3>
                              <div className="mt-2 text-sm text-red-700">
                                <p>
                                  This will permanently delete your account, all your data, and cancel any active
                                  subscriptions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirm">Type "DELETE" to confirm</Label>
                          <Input id="confirm" placeholder="DELETE" className="bg-white focus-visible:ring-red-400" />
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" onClick={() => setShowDeleteConfirm(false)} className="flex-1">
                            Cancel
                          </Button>
                          <Button variant="destructive" className="flex-1">
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        className="border-red-200 text-red-700 hover:bg-red-50"
                        onClick={() => setShowDeleteConfirm(true)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Account
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-4 space-y-4">
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Control how and when you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Browser Notifications</div>
                          <div className="text-sm text-muted-foreground">Receive notifications in your browser</div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">SMS Notifications</div>
                          <div className="text-sm text-muted-foreground">Receive important notifications via SMS</div>
                        </div>
                        <Switch />
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4">Notification Types</h3>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">New Bids</div>
                              <div className="text-sm text-muted-foreground">When freelancers bid on your jobs</div>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Messages</div>
                              <div className="text-sm text-muted-foreground">When you receive new messages</div>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Job Updates</div>
                              <div className="text-sm text-muted-foreground">Updates about your posted jobs</div>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Payment Notifications</div>
                              <div className="text-sm text-muted-foreground">
                                Updates about payments and transactions
                              </div>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Marketing & Promotions</div>
                              <div className="text-sm text-muted-foreground">News, updates, and special offers</div>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Save Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="billing" className="mt-4 space-y-4">
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50 border-blue-200">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Visa ending in 4242</div>
                            <div className="text-sm text-muted-foreground">Expires 12/2025</div>
                          </div>
                        </div>
                        <Badge className="bg-green-600 hover:bg-green-700">Default</Badge>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Mastercard ending in 5678</div>
                            <div className="text-sm text-muted-foreground">Expires 08/2024</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                          Set as Default
                        </Button>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-dashed border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your recent transactions</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          date: "May 15, 2023",
                          description: "300 Credits Purchase",
                          amount: "$99.00",
                          status: "Completed",
                        },
                        {
                          id: 2,
                          date: "Apr 02, 2023",
                          description: "100 Credits Purchase",
                          amount: "$49.00",
                          status: "Completed",
                        },
                        {
                          id: 3,
                          date: "Mar 18, 2023",
                          description: "300 Credits Purchase",
                          amount: "$99.00",
                          status: "Completed",
                        },
                        {
                          id: 4,
                          date: "Feb 05, 2023",
                          description: "750 Credits Purchase",
                          amount: "$199.00",
                          status: "Completed",
                        },
                      ].map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{transaction.amount}</div>
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      View All Transactions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-4 space-y-4">
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password to keep your account secure</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="bg-white focus-visible:ring-blue-400" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="bg-white focus-visible:ring-blue-400" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="bg-white focus-visible:ring-blue-400" />
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Update Password
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-medium">Enable Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">
                          Protect your account with an additional security layer
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle>Login Sessions</CardTitle>
                    <CardDescription>Manage your active sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50 border-blue-200">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                            <Smartphone className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Current Session</div>
                            <div className="text-sm text-muted-foreground">Chrome on Windows • New York, USA</div>
                          </div>
                        </div>
                        <Badge className="bg-green-600 hover:bg-green-700">Active</Badge>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white">
                            <Globe className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Safari on MacBook</div>
                            <div className="text-sm text-muted-foreground">Last active: 2 days ago • New York, USA</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-red-200 text-red-700 hover:bg-red-50">
                          Logout
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                      Logout of All Devices
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

