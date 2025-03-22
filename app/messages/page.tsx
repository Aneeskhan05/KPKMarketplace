"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Search, Phone, Video, Info, ImageIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Mock data for conversations
const conversations = [
  {
    id: "1",
    user: {
      id: "user1",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=50&width=50",
      online: true,
    },
    lastMessage: {
      text: "Is this still available?",
      time: "10:30 AM",
      isRead: true,
      isFromMe: false,
    },
    unreadCount: 0,
  },
  {
    id: "2",
    user: {
      id: "user2",
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      online: false,
    },
    lastMessage: {
      text: "I'll take it for $50. Can we meet tomorrow?",
      time: "Yesterday",
      isRead: false,
      isFromMe: false,
    },
    unreadCount: 2,
  },
  {
    id: "3",
    user: {
      id: "user3",
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=50&width=50",
      online: true,
    },
    lastMessage: {
      text: "Thanks for the quick response!",
      time: "Yesterday",
      isRead: true,
      isFromMe: true,
    },
    unreadCount: 0,
  },
  {
    id: "4",
    user: {
      id: "user4",
      name: "David Brown",
      avatar: "/placeholder.svg?height=50&width=50",
      online: false,
    },
    lastMessage: {
      text: "Can you send more pictures?",
      time: "2 days ago",
      isRead: true,
      isFromMe: false,
    },
    unreadCount: 0,
  },
]

// Mock data for messages in the active conversation
const messages = [
  {
    id: "m1",
    text: "Hi, is this still available?",
    time: "10:30 AM",
    isFromMe: false,
    user: conversations[0].user,
  },
  {
    id: "m2",
    text: "Yes, it's still available!",
    time: "10:32 AM",
    isFromMe: true,
  },
  {
    id: "m3",
    text: "Great! I'm interested in buying it. What's the lowest you can go?",
    time: "10:33 AM",
    isFromMe: false,
    user: conversations[0].user,
  },
  {
    id: "m4",
    text: "I can do PKR180, that's the best I can offer.",
    time: "10:35 AM",
    isFromMe: true,
  },
  {
    id: "m5",
    text: "That works for me. When and where can we meet?",
    time: "10:36 AM",
    isFromMe: false,
    user: conversations[0].user,
  },
]

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // In a real app, you would send the message to the server
      setNewMessage("")
    }
  }

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] px-4 py-4">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Conversations List */}
        <div className="md:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <Input
              placeholder="Search conversations..."
              className="h-10"
              prefix={<Search className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
          <div className="h-[calc(100vh-8rem)] overflow-y-auto rounded-lg border">
            {conversations.map((conversation) => (
              <div key={conversation.id}>
                <button
                  className={`w-full p-3 text-left hover:bg-accent ${
                    activeConversation.id === conversation.id ? "bg-accent" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={conversation.user.avatar || "/placeholder.svg"}
                        alt={conversation.user.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      {conversation.user.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                      )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{conversation.user.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.lastMessage.time}</span>
                      </div>
                      <p
                        className={`truncate text-sm ${
                          !conversation.lastMessage.isRead && !conversation.lastMessage.isFromMe
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {conversation.lastMessage.isFromMe && "You: "}
                        {conversation.lastMessage.text}
                      </p>
                    </div>
                    {conversation.unreadCount > 0 && <Badge className="ml-2">{conversation.unreadCount}</Badge>}
                  </div>
                </button>
                <Separator />
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex h-full flex-col rounded-lg border md:col-span-2 lg:col-span-3">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b p-3">
            <div className="flex items-center gap-3">
              <Image
                src={activeConversation.user.avatar || "/placeholder.svg"}
                alt={activeConversation.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">{activeConversation.user.name}</h3>
                <p className="text-xs text-muted-foreground">{activeConversation.user.online ? "Online" : "Offline"}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Info className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 flex ${message.isFromMe ? "justify-end" : "justify-start"}`}>
                {!message.isFromMe && (
                  <Image
                    src={message.user.avatar || "/placeholder.svg"}
                    alt={message.user.name}
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.isFromMe ? "bg-primary text-primary-foreground" : "bg-accent"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`mt-1 text-right text-xs ${
                      message.isFromMe ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-3">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Button type="button" variant="ghost" size="icon" className="shrink-0">
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!newMessage.trim()} className="shrink-0">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

