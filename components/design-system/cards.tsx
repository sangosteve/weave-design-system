import { SectionHeader } from "./section-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  MoreHorizontalIcon, 
  Call02Icon, 
  Mail01Icon, 
  Calendar01Icon, 
  TrendUp01Icon, 
  UserMultiple02Icon, 
  DollarCircleIcon, 
  Target02Icon 
} from "@hugeicons/react"

export function CardsSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Cards"
        description="Cards are used to group related content and actions. They provide a consistent container for various types of information throughout the CRM."
      />
      
      <div className="space-y-10">
        {/* Basic Cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Basic Cards</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is the card content area where you can place any content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>With Footer</CardTitle>
                <CardDescription>Card with action buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards can have footers for actions.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm">Save</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </CardFooter>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Highlighted</CardTitle>
                <CardDescription>Card with accent border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use border colors to highlight important cards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Contact Cards</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-base">John Smith</CardTitle>
                  <CardDescription>CEO at Acme Inc.</CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  john@acme.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">ED</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base">Emily Davis</CardTitle>
                    <Badge variant="secondary" className="text-xs">VIP</Badge>
                  </div>
                  <CardDescription>VP Sales at TechCorp</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  emily@techcorp.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Last contact: 2 days ago
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback style={{ backgroundColor: "var(--chart-3)", color: "var(--background)" }}>MC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-base">Mike Chen</CardTitle>
                  <CardDescription>Founder at StartupXYZ</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Lead</Badge>
                  <Badge variant="outline">Hot</Badge>
                  <Badge variant="outline">Enterprise</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Stat Cards</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">New Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">+180.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-destructive">-2.4%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Deals</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">+201</span> since last week
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deal Card */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Deal Cards</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge style={{ backgroundColor: "var(--stage-qualified)", color: "white" }}>Qualified</Badge>
                  <span className="text-lg font-bold">$25,000</span>
                </div>
                <CardTitle className="mt-2">Enterprise Software Deal</CardTitle>
                <CardDescription>Acme Corporation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">SJ</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Close date: Mar 15, 2024
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="h-2 rounded-full" style={{ width: "65%", backgroundColor: "var(--stage-qualified)" }} />
                </div>
                <p className="text-xs text-muted-foreground">65% probability</p>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "var(--stage-won)" }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge style={{ backgroundColor: "var(--stage-won)", color: "white" }}>Won</Badge>
                  <span className="text-lg font-bold text-success">$50,000</span>
                </div>
                <CardTitle className="mt-2">Annual Contract Renewal</CardTitle>
                <CardDescription>TechCorp Industries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">MC</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Mike Chen</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Closed: Feb 28, 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "var(--stage-new)" }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge style={{ backgroundColor: "var(--stage-new)", color: "white" }}>New</Badge>
                  <span className="text-lg font-bold">$15,000</span>
                </div>
                <CardTitle className="mt-2">Consulting Package</CardTitle>
                <CardDescription>StartupXYZ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Created: Today
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Inbound</Badge>
                  <Badge variant="outline" className="text-xs">Priority</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
