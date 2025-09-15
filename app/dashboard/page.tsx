"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, Star, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface UserData {
  name: string
  email: string
  phone?: string
  isAuthenticated: boolean
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1>
              <p className="text-muted-foreground">Explore Jharkhand's beauty and manage your travel experiences</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="mt-4 sm:mt-0 bg-transparent">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                {user.phone && (
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                )}
                <Badge variant="secondary" className="w-fit">
                  Verified Member
                </Badge>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Access all the features and sections of Jharkhand Tourism</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start bg-transparent" asChild>
                    <Link href="/cuisines">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🍽️</div>
                        <span className="font-medium">Explore Cuisines</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">
                        Discover traditional Jharkhand dishes and recipes
                      </p>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start bg-transparent" asChild>
                    <Link href="/art-forms">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🎨</div>
                        <span className="font-medium">Art Forms</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">
                        Learn about tribal art and cultural heritage
                      </p>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start bg-transparent" asChild>
                    <Link href="/ayurveda">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🌿</div>
                        <span className="font-medium">Ayurvedic Wellness</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">
                        Explore natural healing and wellness treatments
                      </p>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start bg-transparent" asChild>
                    <Link href="/weddings">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">💒</div>
                        <span className="font-medium">Destination Weddings</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">
                        Plan your dream wedding in natural settings
                      </p>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start bg-transparent" asChild>
                    <Link href="/employment">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">💼</div>
                        <span className="font-medium">Employment</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">Find career opportunities in tourism</p>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start bg-transparent" asChild>
                    <Link href="/travel-care">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🧳</div>
                        <span className="font-medium">Travel Care</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">
                        Get travel assistance and support services
                      </p>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Account Created</p>
                    <p className="text-sm text-muted-foreground">
                      Welcome to Jharkhand Tourism! Start exploring our amazing features.
                    </p>
                  </div>
                  <Badge variant="outline">New</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
