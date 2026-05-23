import { SectionHeader } from "./section-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Info, HelpCircle } from "lucide-react"

export function DataDisplaySection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Data Display"
        description="Components for displaying data including avatars, progress indicators, tooltips, and other visual elements."
      />
      
      <div className="space-y-10">
        {/* Avatars */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Avatars</h3>
          <div className="space-y-6">
            {/* Sizes */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">XS</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-1">XS</p>
              </div>
              <div className="text-center">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-1">SM</p>
              </div>
              <div className="text-center">
                <Avatar>
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-1">MD</p>
              </div>
              <div className="text-center">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-1">LG</p>
              </div>
              <div className="text-center">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg">XL</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-1">XL</p>
              </div>
            </div>

            {/* With Images */}
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>

            {/* Color Variants */}
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback style={{ backgroundColor: "var(--avatar-1)", color: "white" }}>A1</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback style={{ backgroundColor: "var(--avatar-2)", color: "white" }}>A2</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback style={{ backgroundColor: "var(--avatar-3)", color: "white" }}>A3</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback style={{ backgroundColor: "var(--avatar-4)", color: "black" }}>A4</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback style={{ backgroundColor: "var(--avatar-5)", color: "white" }}>A5</AvatarFallback>
              </Avatar>
            </div>

            {/* Avatar Group */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">ED</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback style={{ backgroundColor: "var(--avatar-3)", color: "white" }}>MC</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback style={{ backgroundColor: "var(--avatar-4)", color: "black" }}>SJ</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-muted text-muted-foreground text-xs">+5</AvatarFallback>
                </Avatar>
              </div>
              <span className="ml-4 text-sm text-muted-foreground">Team members</span>
            </div>

            {/* With Status */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">ON</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-success" />
              </div>
              <div className="relative">
                <Avatar>
                  <AvatarFallback className="bg-secondary text-secondary-foreground">AW</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-warning" />
              </div>
              <div className="relative">
                <Avatar>
                  <AvatarFallback className="bg-muted text-muted-foreground">OF</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Progress Bars</h3>
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Default Progress</span>
                <span className="text-muted-foreground">60%</span>
              </div>
              <Progress value={60} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Pipeline Progress</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div 
                  className="h-2 rounded-full transition-all" 
                  style={{ width: "75%", backgroundColor: "var(--stage-qualified)" }} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Goal Achievement</span>
                <span className="text-muted-foreground">90%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div 
                  className="h-2 rounded-full transition-all" 
                  style={{ width: "90%", backgroundColor: "var(--success)" }} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>At Risk</span>
                <span className="text-muted-foreground">25%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div 
                  className="h-2 rounded-full transition-all" 
                  style={{ width: "25%", backgroundColor: "var(--error)" }} 
                />
              </div>
            </div>

            {/* Segmented Progress */}
            <div className="space-y-2">
              <span className="text-sm">Deal Pipeline</span>
              <div className="flex h-3 w-full overflow-hidden rounded-full">
                <div style={{ width: "20%", backgroundColor: "var(--stage-new)" }} />
                <div style={{ width: "15%", backgroundColor: "var(--stage-contacted)" }} />
                <div style={{ width: "25%", backgroundColor: "var(--stage-qualified)" }} />
                <div style={{ width: "15%", backgroundColor: "var(--stage-proposal)" }} />
                <div style={{ width: "20%", backgroundColor: "var(--stage-won)" }} />
                <div style={{ width: "5%", backgroundColor: "var(--stage-lost)" }} />
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--stage-new)" }} />
                  New (20%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--stage-contacted)" }} />
                  Contacted (15%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--stage-qualified)" }} />
                  Qualified (25%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--stage-proposal)" }} />
                  Proposal (15%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--stage-won)" }} />
                  Won (20%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--stage-lost)" }} />
                  Lost (5%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tooltips */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Tooltips</h3>
          <TooltipProvider>
            <div className="flex flex-wrap items-center gap-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More information</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 text-sm cursor-help">
                    Deal Value
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>The total expected value of this deal based on the products and services selected.</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">
                    <p className="font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground">john@acme.com</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        {/* Key-Value Display */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Key-Value Display</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4 space-y-3">
              <h4 className="text-sm font-medium">Contact Details</h4>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Name</dt>
                  <dd className="font-medium">John Smith</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="font-medium">john@acme.com</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="font-medium">+1 (555) 123-4567</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Company</dt>
                  <dd className="font-medium">Acme Inc.</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg border border-border p-4 space-y-3">
              <h4 className="text-sm font-medium">Deal Summary</h4>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Value</dt>
                  <dd className="font-medium">$25,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Stage</dt>
                  <dd className="font-medium">Qualified</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Probability</dt>
                  <dd className="font-medium">65%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Close Date</dt>
                  <dd className="font-medium">Mar 15, 2024</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
