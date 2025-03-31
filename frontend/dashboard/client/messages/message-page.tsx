"use client"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientHeader } from "../client-header"
import { Search, Send, Paperclip, MoreHorizontal, User, Clock } from "lucide-react"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold gradient-text">Messages</h1>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="all">All Messages</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search messages..."
                    className="pl-10 w-[250px] bg-white focus-visible:ring-blue-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-[300px_1fr] gap-4 h-[600px]">
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
                  <CardContent className="p-0">
                    <div className="h-[600px] overflow-y-auto">
                      {conversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-blue-100/50 border-b border-blue-100 transition-colors ${
                            selectedConversation.id === conversation.id ? "bg-blue-100/50" : ""
                          }`}
                          onClick={() => setSelectedConversation(conversation)}
                        >
                          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center flex-shrink-0">
                            {conversation.avatar ? (
                              <img
                                src={conversation.avatar || "/placeholder.svg"}
                                alt={conversation.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <User className="h-5 w-5 text-blue-600" />
                            )}
                            {conversation.isOnline && (
                              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div className="font-medium truncate">{conversation.name}</div>
                              <div className="text-xs text-muted-foreground">{conversation.lastMessageTime}</div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</div>
                              {conversation.unread > 0 && (
                                <Badge className="ml-2 bg-blue-600 hover:bg-blue-700 h-5 min-w-5 flex items-center justify-center rounded-full px-1.5">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none flex flex-col">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        {selectedConversation.avatar ? (
                          <img
                            src={selectedConversation.avatar || "/placeholder.svg"}
                            alt={selectedConversation.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 text-blue-600" />
                        )}
                        {selectedConversation.isOnline && (
                          <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{selectedConversation.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          {selectedConversation.isOnline ? (
                            <>
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block mr-1"></span>
                              Online
                            </>
                          ) : (
                            <>
                              <Clock className="h-3 w-3 mr-1" />
                              Last seen {selectedConversation.lastSeen}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedConversation.messages.map((message, index) => (
                      <div key={index} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isMe ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-gray-100"
                          }`}
                        >
                          <div className="text-sm">{message.text}</div>
                          <div className={`text-xs mt-1 ${message.isMe ? "text-blue-100" : "text-muted-foreground"}`}>
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t p-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        className="bg-white focus-visible:ring-blue-400"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                      />
                      <Button size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

const conversations = [
  {
    id: 1,
    name: "Alex Johnson",
    lastMessage: "I'll send you the updated design files tomorrow",
    lastMessageTime: "10:42 AM",
    unread: 2,
    isOnline: true,
    lastSeen: "",
    avatar: "/placeholder.svg?height=200&width=200",
    messages: [
      {
        text: "Hi there! I saw your job posting for a website redesign and I'm very interested.",
        time: "Yesterday, 2:30 PM",
        isMe: false,
      },
      {
        text: "Hello Alex! Thanks for reaching out. Do you have experience with e-commerce sites?",
        time: "Yesterday, 3:15 PM",
        isMe: true,
      },
      {
        text: "Yes, I've worked on several e-commerce projects. I can share my portfolio with you.",
        time: "Yesterday, 3:20 PM",
        isMe: false,
      },
      {
        text: "That would be great! I'm looking for someone who can start next week.",
        time: "Yesterday, 4:00 PM",
        isMe: true,
      },
      {
        text: "Perfect timing! I'm wrapping up a project this week and can start on Monday.",
        time: "Yesterday, 4:15 PM",
        isMe: false,
      },
      {
        text: "I'll send you the updated design files tomorrow",
        time: "10:42 AM",
        isMe: false,
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Williams",
    lastMessage: "The logo designs are ready for review",
    lastMessageTime: "Yesterday",
    unread: 0,
    isOnline: false,
    lastSeen: "2 hours ago",
    avatar: "/placeholder.svg?height=200&width=200",
    messages: [
      {
        text: "Hi, I've completed the initial logo designs for your project.",
        time: "Yesterday, 11:30 AM",
        isMe: false,
      },
      {
        text: "That was quick! Can you share them with me?",
        time: "Yesterday, 12:15 PM",
        isMe: true,
      },
      {
        text: "Sure, I've uploaded them to the shared folder. There are 3 concepts to review.",
        time: "Yesterday, 12:20 PM",
        isMe: false,
      },
      {
        text: "Got them! I really like the second concept. Can we refine that one?",
        time: "Yesterday, 1:45 PM",
        isMe: true,
      },
      {
        text: "I'll work on some variations of concept #2 and have them ready by tomorrow.",
        time: "Yesterday, 2:00 PM",
        isMe: false,
      },
      {
        text: "The logo designs are ready for review",
        time: "Yesterday, 5:30 PM",
        isMe: false,
      },
    ],
  },
  {
    id: 3,
    name: "Michael Chen",
    lastMessage: "I've fixed the responsive issues on mobile",
    lastMessageTime: "Yesterday",
    unread: 0,
    isOnline: true,
    lastSeen: "",
    avatar: "/placeholder.svg?height=200&width=200",
    messages: [
      {
        text: "I've been working on the mobile app and noticed some responsive issues.",
        time: "2 days ago, 9:30 AM",
        isMe: false,
      },
      {
        text: "Can you elaborate on what issues you're seeing?",
        time: "2 days ago, 10:15 AM",
        isMe: true,
      },
      {
        text: "The navigation menu doesn't collapse properly on smaller screens, and some images are getting cut off.",
        time: "2 days ago, 10:20 AM",
        isMe: false,
      },
      {
        text: "Thanks for catching that. Can you fix it or do you need more information from me?",
        time: "2 days ago, 11:00 AM",
        isMe: true,
      },
      {
        text: "I can fix it. I'll have it done by tomorrow.",
        time: "2 days ago, 11:15 AM",
        isMe: false,
      },
      {
        text: "I've fixed the responsive issues on mobile",
        time: "Yesterday, 3:30 PM",
        isMe: false,
      },
    ],
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    lastMessage: "The blog articles are ready for your review",
    lastMessageTime: "2 days ago",
    unread: 0,
    isOnline: false,
    lastSeen: "Yesterday",
    avatar: "/placeholder.svg?height=200&width=200",
    messages: [
      {
        text: "I've started working on the blog articles you requested.",
        time: "3 days ago, 1:30 PM",
        isMe: false,
      },
      {
        text: "Great! How's the progress so far?",
        time: "3 days ago, 2:15 PM",
        isMe: true,
      },
      {
        text: "I've completed the outlines for all 10 articles and written the first two completely.",
        time: "3 days ago, 2:30 PM",
        isMe: false,
      },
      {
        text: "Sounds good. When do you think you'll have all of them ready?",
        time: "3 days ago, 3:00 PM",
        isMe: true,
      },
      {
        text: "I should have all 10 articles completed by the end of the week.",
        time: "3 days ago, 3:15 PM",
        isMe: false,
      },
      {
        text: "The blog articles are ready for your review",
        time: "2 days ago, 4:30 PM",
        isMe: false,
      },
    ],
  },
  {
    id: 5,
    name: "David Kim",
    lastMessage: "I've deployed the updates to the staging server",
    lastMessageTime: "3 days ago",
    unread: 0,
    isOnline: false,
    lastSeen: "3 days ago",
    avatar: "/placeholder.svg?height=200&width=200",
    messages: [
      {
        text: "I'm working on setting up the CI/CD pipeline for your project.",
        time: "4 days ago, 10:30 AM",
        isMe: false,
      },
      {
        text: "That's great. How long do you think it will take?",
        time: "4 days ago, 11:15 AM",
        isMe: true,
      },
      {
        text: "I should have it ready by tomorrow. I'm using GitHub Actions and AWS.",
        time: "4 days ago, 11:30 AM",
        isMe: false,
      },
      {
        text: "Perfect. Will you also handle the deployment to staging?",
        time: "4 days ago, 12:00 PM",
        isMe: true,
      },
      {
        text: "Yes, I'll set up both staging and production environments.",
        time: "4 days ago, 12:15 PM",
        isMe: false,
      },
      {
        text: "I've deployed the updates to the staging server",
        time: "3 days ago, 2:30 PM",
        isMe: false,
      },
    ],
  },
]

