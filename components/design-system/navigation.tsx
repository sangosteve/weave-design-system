"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { 
  Home01Icon, 
  UserMultiple02Icon, 
  Settings01Icon, 
  AnalyticsUpIcon, 
  Mail01Icon, 
  Call02Icon, 
  Calendar01Icon, 
  File01Icon, 
  ArrowRight01Icon, 
  Building03Icon, 
  Target02Icon, 
  Comment01Icon 
} from "@hugeicons/react"

export function NavigationSection() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Navigation"
        description="Navigation components help users move through the application. They include tabs, breadcrumbs, sidebars, and menu patterns."
      />
      
      <div className="space-y-10">
        {/* Tabs */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Tabs</h3>
          <div className="space-y-6">
            {/* Default Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="rounded-lg border border-border p-4 mt-2">
                <p className="text-sm text-muted-foreground">Overview content goes here.</p>
              </TabsContent>
              <TabsContent value="activity" className="rounded-lg border border-border p-4 mt-2">
                <p className="text-sm text-muted-foreground">Activity timeline content.</p>
              </TabsContent>
              <TabsContent value="notes" className="rounded-lg border border-border p-4 mt-2">
                <p className="text-sm text-muted-foreground">Notes and comments.</p>
              </TabsContent>
              <TabsContent value="files" className="rounded-lg border border-border p-4 mt-2">
                <p className="text-sm text-muted-foreground">Attached files and documents.</p>
              </TabsContent>
            </Tabs>

            {/* Tabs with Icons */}
            <Tabs defaultValue="contacts" className="w-full">
              <TabsList>
                <TabsTrigger value="contacts" className="gap-2">
                  <UserMultiple02Icon size={16} />
                  Contacts
                </TabsTrigger>
                <TabsTrigger value="deals" className="gap-2">
                  <Target02Icon size={16} />
                  Deals
                </TabsTrigger>
                <TabsTrigger value="emails" className="gap-2">
                  <Mail01Icon size={16} />
                  Emails
                </TabsTrigger>
                <TabsTrigger value="calls" className="gap-2">
                  <Call02Icon size={16} />
                  Calls
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Tabs with Counts */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all" className="gap-2">
                  All
                  <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">128</Badge>
                </TabsTrigger>
                <TabsTrigger value="active" className="gap-2">
                  Active
                  <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">45</Badge>
                </TabsTrigger>
                <TabsTrigger value="pending" className="gap-2">
                  Pending
                  <Badge className="ml-1 h-5 px-1.5 text-xs bg-warning text-warning-foreground">12</Badge>
                </TabsTrigger>
                <TabsTrigger value="closed" className="gap-2">
                  Closed
                  <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">71</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Breadcrumbs</h3>
          <div className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Contacts</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>John Smith</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="flex items-center gap-1">
                    <Home01Icon size={16} />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="flex items-center gap-1">
                    <Building03Icon size={16} />
                    Companies
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Acme Inc.</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Deals</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Sidebar Navigation</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Standard Sidebar */}
            <div className="rounded-lg border border-border p-4 w-64">
              <div className="space-y-1">
                <Button variant="secondary" className="w-full justify-start gap-2">
                  <Home01Icon size={16} />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <UserMultiple02Icon size={16} />
                  Contacts
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Building03Icon size={16} />
                  Companies
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Target02Icon size={16} />
                  Deals
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Calendar01Icon size={16} />
                  Calendar
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <AnalyticsUpIcon size={16} />
                  Reports
                </Button>
                <div className="border-t border-border my-2" />
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings01Icon size={16} />
                  Settings
                </Button>
              </div>
            </div>

            {/* Sidebar with Badges */}
            <div className="rounded-lg border border-border p-4 w-64">
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Mail01Icon size={16} />
                    Inbox
                  </span>
                  <Badge className="h-5 px-1.5 text-xs">23</Badge>
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Comment01Icon size={16} />
                    Messages
                  </span>
                  <Badge variant="destructive" className="h-5 px-1.5 text-xs">5</Badge>
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <File01Icon size={16} />
                    Tasks
                  </span>
                  <Badge className="h-5 px-1.5 text-xs bg-warning text-warning-foreground">12</Badge>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Call02Icon size={16} />
                  Calls
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Segmented Control */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Segmented Control</h3>
          <div className="space-y-4">
            <div className="inline-flex rounded-lg border border-border p-1 bg-muted">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "overview"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "analytics"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "reports"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Reports
              </button>
            </div>
          </div>
        </div>

        {/* List Navigation */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">List Navigation</h3>
          <div className="rounded-lg border border-border divide-y divide-border max-w-md">
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <UserMultiple02Icon size={20} className="text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Contacts</p>
                  <p className="text-sm text-muted-foreground">Manage your contacts</p>
                </div>
              </div>
              <ArrowRight01Icon size={20} className="text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Building03Icon size={20} className="text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Companies</p>
                  <p className="text-sm text-muted-foreground">View company profiles</p>
                </div>
              </div>
              <ArrowRight01Icon size={20} className="text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Target02Icon size={20} className="text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Deals</p>
                  <p className="text-sm text-muted-foreground">Track your pipeline</p>
                </div>
              </div>
              <ArrowRight01Icon size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
