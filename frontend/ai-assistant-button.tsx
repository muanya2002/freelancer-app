"use client"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, Sparkles, Maximize2 } from "lucide-react"
import Link from "next/link"

export function AiAssistantButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 z-50"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="absolute inset-0 bg-white rounded-lg -z-10"></div>
            <CardHeader className="pb-2 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-base flex items-center">
                <Bot className="mr-2 h-4 w-4 text-blue-600" />
                AI Assistant
                <span className="ml-2 flex items-center text-xs font-normal text-muted-foreground">
                  <Sparkles className="mr-1 h-3 w-3" />
                  AI Powered
                </span>
              </CardTitle>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                  <Link href="./dashboard/ai-assistant">
                    <Maximize2 className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="h-64 overflow-y-auto p-4">
              <div className="flex items-start gap-3 max-w-[90%]">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-lg p-3 bg-gray-100">
                  <div className="text-sm">Hi there! I'm your FreelanceHub AI assistant. How can I help you today?</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-3">
              <div className="flex items-center gap-2 w-full">
                <Input
                  placeholder="Type a message..."
                  className="bg-white focus-visible:ring-blue-400 text-sm h-9"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  size="icon"
                  className="h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    setMessage("")
                    setIsOpen(false)
                    window.location.href = "./dashboard/ai-assistant"
                  }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  )
}

