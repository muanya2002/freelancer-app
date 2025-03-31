"use client"
import React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ClientHeader } from "@/app/dashboard/client/client-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  Send,
  User,
  Sparkles,
  Briefcase,
  FileText,
  PanelRight,
  X,
  Paperclip,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { useChat } from "ai/react"

export default function AiAssistantPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome-message",
        role: "assistant",
        content:
          "Hi there! I'm your FreelanceHub AI assistant. I can help you define job requirements, find suitable freelancers, or answer any questions about our platform. How can I assist you today?",
      },
    ],
  })

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />
      <main className="flex-1 py-6">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold gradient-text">AI Assistant</h1>
              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Powered by AI
                </Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
              <div className="flex flex-col h-[70vh]">
                <Card className="flex-1 overflow-hidden border-none flex flex-col">
                  <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
                  <CardHeader className="pb-2 border-b">
                    <CardTitle className="flex items-center">
                      <Bot className="mr-2 h-5 w-5 text-blue-600" />
                      FreelanceHub Assistant
                    </CardTitle>
                    <CardDescription>
                      Ask me anything about jobs, freelancers, or how to use the platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className="flex items-start gap-3 max-w-[80%]">
                          {message.role === "assistant" && (
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                              <Bot className="h-4 w-4" />
                            </div>
                          )}
                          <div
                            className={`rounded-lg p-3 ${
                              message.role === "user"
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                                : "bg-gray-100"
                            }`}
                          >
                            <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                            {message.role === "assistant" && index > 0 && (
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                                >
                                  <ThumbsUp className="h-3 w-3 mr-1" />
                                  Helpful
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                                >
                                  <ThumbsDown className="h-3 w-3 mr-1" />
                                  Not helpful
                                </Button>
                              </div>
                            )}
                          </div>
                          {message.role === "user" && (
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                              <User className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex items-start gap-3 max-w-[80%]">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                            <Bot className="h-4 w-4" />
                          </div>
                          <div className="rounded-lg p-3 bg-gray-100">
                            <div className="flex space-x-2">
                              <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce"></div>
                              <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce [animation-delay:0.2s]"></div>
                              <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce [animation-delay:0.4s]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {error && (
                      <div className="flex justify-center">
                        <div className="rounded-lg p-3 bg-red-50 text-red-700 text-sm">
                          Error: {error.message || "Something went wrong. Please try again."}
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Input
                        placeholder="Type your message..."
                        className="bg-white focus-visible:ring-blue-400"
                        value={input}
                        onChange={handleInputChange}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="rounded-full bg-blue-600 hover:bg-blue-700"
                        disabled={isLoading || !input.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </Card>
              </div>

              <div className={`${sidebarOpen ? "block" : "hidden md:block"}`}>
                <div className="md:hidden flex justify-end mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Close
                  </Button>
                </div>
                <Card className="overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Suggested Topics</CardTitle>
                    <CardDescription>Click on any topic to get started</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Tabs defaultValue="client">
                      <TabsList className="w-full">
                        <TabsTrigger value="client">For Clients</TabsTrigger>
                        <TabsTrigger value="freelancer">For Freelancers</TabsTrigger>
                      </TabsList>
                      <TabsContent value="client" className="mt-4 space-y-2">
                        {clientSuggestions.map((suggestion, index) => (
                          <SuggestionButton key={index} icon={suggestion.icon} text={suggestion.text} />
                        ))}
                      </TabsContent>
                      <TabsContent value="freelancer" className="mt-4 space-y-2">
                        {freelancerSuggestions.map((suggestion, index) => (
                          <SuggestionButton key={index} icon={suggestion.icon} text={suggestion.text} />
                        ))}
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg -z-10"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">How It Works</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        1
                      </div>
                      <div className="text-sm">Ask the AI assistant about jobs, freelancers, or platform features</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mt-0.5">
                        2
                      </div>
                      <div className="text-sm">Get personalized recommendations and guidance</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 mt-0.5">
                        3
                      </div>
                      <div className="text-sm">
                        Use the assistant's suggestions to create better job postings or find work
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:hidden">
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                  onClick={() => setSidebarOpen(true)}
                >
                  <PanelRight className="h-4 w-4 mr-2" />
                  Show Suggestions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SuggestionButton({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <Button
      variant="outline"
      className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50 text-sm h-auto py-2"
    >
      <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
      <span className="truncate">{text}</span>
    </Button>
  )
}

const clientSuggestions = [
  { icon: Briefcase, text: "Help me write a job description" },
  { icon: FileText, text: "What skills should I look for?" },
  { icon: User, text: "How to find the right freelancer?" },
  { icon: Sparkles, text: "Suggest job post improvements" },
  { icon: Bot, text: "What are the trending skills?" },
]

const freelancerSuggestions = [
  { icon: Briefcase, text: "Find jobs matching my skills" },
  { icon: FileText, text: "Help me write a better proposal" },
  { icon: User, text: "How to stand out to clients?" },
  { icon: Sparkles, text: "Improve my profile visibility" },
  { icon: Bot, text: "What skills are in demand?" },
]

