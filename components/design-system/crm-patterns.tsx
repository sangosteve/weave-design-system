"use client"

import { SectionHeader } from "./section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  MoreHorizontalIcon,
  Add01Icon,
  Call02Icon,
  Mail01Icon,
  Calendar03Icon,
  Time02Icon,
  ArrowRight01Icon,
  Message01Icon,
  File01Icon,
  User03Icon
} from "@hugeicons/react"

const pipelineStages = [
  { name: "New", count: 12, color: "var(--stage-new)", value: "$45,000" },
  { name: "Contacted", count: 8, color: "var(--stage-contacted)", value: "$32,000" },
  { name: "Qualified", count: 15, color: "var(--stage-qualified)", value: "$125,000" },
  { name: "Proposal", count: 6, color: "var(--stage-proposal)", value: "$89,000" },
  { name: "Won", count: 24, color: "var(--stage-won)", value: "$450,000" },
]

const activities = [
  { type: "call", contact: "John Smith", action: "Call completed", time: "2 hours ago", icon: Call02Icon },
  { type: "email", contact: "Emily Davis", action: "Email sent", time: "4 hours ago", icon: Mail01Icon },
  { type: "meeting", contact: "Mike Chen", action: "Meeting scheduled", time: "Yesterday", icon: Calendar03Icon },
  { type: "note", contact: "Sarah Johnson", action: "Note added", time: "2 days ago", icon: File01Icon },
]

const kanbanCards = [
  { id: 1, name: "Acme Corp Deal", value: "$25,000", contact: "John Smith", daysInStage: 3 },
  { id: 2, name: "TechCorp Renewal", value: "$15,000", contact: "Emily Davis", daysInStage: 7 },
  { id: 3, name: "StartupXYZ Pilot", value: "$8,000", contact: "Mike Chen", daysInStage: 1 },
]

export function CRMPatternsSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="CRM Patterns"
        description="Common patterns and layouts specific to CRM applications including pipeline views, activity feeds, contact lists, and conversation interfaces."
      />
      
      <div className="space-y-10">
        {/* Pipeline Summary */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Pipeline Summary</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pipelineStages.map((stage) => (
              <Card key={stage.name} className="relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 right-0 h-1" 
                  style={{ backgroundColor: stage.color }}
                />
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stage.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold">{stage.count}</div>
                  <p className="text-xs text-muted-foreground">{stage.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kanban Board */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Kanban Board</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {["New", "Qualified", "Proposal"].map((stage, stageIndex) => (
              <div key={stage} className="flex-shrink-0 w-72">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className="h-2 w-2 rounded-full" 
                      style={{ backgroundColor: pipelineStages[stageIndex === 0 ? 0 : stageIndex === 1 ? 2 : 3].color }}
                    />
                    <span className="font-medium text-sm">{stage}</span>
                    <Badge variant="secondary" className="text-xs">{kanbanCards.length}</Badge>
                  </div>
                  <Button variant="ghost" size="icon-sm">
                    <Add01Icon className="size-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {kanbanCards.map((card) => (
                    <Card key={card.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-sm">{card.name}</h4>
                          <Button variant="ghost" size="icon-xs" className="-mr-2 -mt-1">
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </div>
                        <p className="text-lg font-semibold mb-3">{card.value}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="size-6">
                              <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                                {card.contact.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">{card.contact}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{card.daysInStage}d</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Activity Feed</h3>
          <Card className="max-w-lg">
            <CardHeader>
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="size-8 rounded-full bg-muted flex items-center justify-center">
                        <activity.icon className="size-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.contact}</span>
                        <span className="text-muted-foreground"> - {activity.action}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-sm">
                View All Activity
                <ArrowRight01Icon className="ml-2 size-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact List Item */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Contact List Items</h3>
          <div className="space-y-2 max-w-2xl">
            {[
              { name: "John Smith", company: "Acme Inc.", email: "john@acme.com", status: "Active", value: "$25,000" },
              { name: "Emily Davis", company: "TechCorp", email: "emily@techcorp.com", status: "VIP", value: "$50,000" },
              { name: "Mike Chen", company: "StartupXYZ", email: "mike@startup.io", status: "New", value: "$15,000" },
            ].map((contact, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <Avatar className="size-10">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">{contact.name}</p>
                    <Badge 
                      variant={contact.status === "VIP" ? "default" : "secondary"} 
                      className="text-xs"
                    >
                      {contact.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {contact.company} · {contact.email}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{contact.value}</p>
                  <p className="text-xs text-muted-foreground">Deal Value</p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon-sm">
                    <Call02Icon className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon-sm">
                    <Mail01Icon className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Message Thread</h3>
          <Card className="max-w-lg">
            <CardHeader className="border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">John Smith</CardTitle>
                  <p className="text-xs text-muted-foreground">Acme Inc. · Last active 2h ago</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {/* Agent Message */}
              <div className="flex gap-3">
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">AG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div 
                    className="rounded-lg p-3 max-w-[80%]"
                    style={{ backgroundColor: "var(--message-agent)" }}
                  >
                    <p className="text-sm">Hi John! I wanted to follow up on our conversation about the enterprise package. Do you have any questions?</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 flex-row-reverse">
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">JS</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex flex-col items-end">
                  <div 
                    className="rounded-lg p-3 max-w-[80%]"
                    style={{ backgroundColor: "var(--message-user)", color: "var(--message-user-text)" }}
                  >
                    <p className="text-sm">Yes! I&apos;d like to know more about the pricing for teams over 50 users.</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">10:45 AM</p>
                </div>
              </div>

              {/* Highlighted Message */}
              <div className="flex gap-3">
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">AG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div 
                    className="rounded-lg p-3 max-w-[80%] border-l-4"
                    style={{ 
                      backgroundColor: "var(--message-highlight)", 
                      borderLeftColor: "var(--warning)" 
                    }}
                  >
                    <p className="text-sm">For teams over 50 users, we offer custom enterprise pricing starting at $15/user/month with volume discounts.</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">11:00 AM · Highlighted</p>
                </div>
              </div>
            </CardContent>
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button size="icon">
                  <Message01Icon className="size-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Quick Action Bar</h3>
          <div className="flex flex-wrap gap-2 p-4 rounded-lg border border-border bg-muted/30 max-w-2xl">
            <Button size="sm" variant="outline" className="gap-2">
              <Call02Icon className="size-4" />
              Log Call
            </Button>
            <Button size="sm" variant="outline" className="gap-2">
              <Mail01Icon className="size-4" />
              Send Email
            </Button>
            <Button size="sm" variant="outline" className="gap-2">
              <Calendar03Icon className="size-4" />
              Schedule Meeting
            </Button>
            <Button size="sm" variant="outline" className="gap-2">
              <File01Icon className="size-4" />
              Add Note
            </Button>
            <Button size="sm" variant="outline" className="gap-2">
              <User03Icon className="size-4" />
              Create Task
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Timeline</h3>
          <div className="relative max-w-lg pl-8 space-y-6">
            {/* Timeline line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
            
            {[
              { date: "Today", title: "Deal moved to Proposal", description: "Deal value updated to $25,000", color: "var(--stage-proposal)" },
              { date: "Yesterday", title: "Meeting completed", description: "30 min call with John Smith", color: "var(--info)" },
              { date: "Mar 10", title: "Email sent", description: "Proposal document attached", color: "var(--primary)" },
              { date: "Mar 8", title: "Contact created", description: "Added via web form", color: "var(--success)" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div 
                  className="absolute -left-5 w-3 h-3 rounded-full border-2 border-background"
                  style={{ backgroundColor: item.color }}
                />
                <div className="pb-1">
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Upcoming Tasks</h3>
          <Card className="max-w-lg">
            <CardHeader>
              <CardTitle className="text-base">Today&apos;s Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "Follow up with John Smith", time: "10:00 AM", priority: "high" },
                { title: "Send proposal to TechCorp", time: "2:00 PM", priority: "medium" },
                { title: "Review contract draft", time: "4:00 PM", priority: "low" },
              ].map((task, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <input type="checkbox" className="size-4 rounded border-border accent-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{task.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Time02Icon className="size-3" />
                      {task.time}
                    </div>
                  </div>
                  <Badge 
                    className="text-xs"
                    style={{ 
                      backgroundColor: `var(--priority-${task.priority})`,
                      color: task.priority === "medium" ? "black" : "white"
                    }}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
