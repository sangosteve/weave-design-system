import { SectionHeader } from "./section-header"
import { Badge } from "@/components/ui/badge"
import { Cancel01Icon } from "@hugeicons/react"

export function BadgesSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Badges & Tags"
        description="Badges and tags are used to label, categorize, and highlight information. They help users quickly identify status, priority, and categories."
      />
      
      <div className="space-y-10">
        {/* Default Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Default Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        {/* Status Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Status Badges</h3>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-success text-success-foreground">Active</Badge>
            <Badge className="bg-warning text-warning-foreground">Pending</Badge>
            <Badge className="bg-error text-error-foreground">Inactive</Badge>
            <Badge className="bg-info text-info-foreground">In Progress</Badge>
          </div>
        </div>

        {/* Pipeline Stage Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Pipeline Stages</h3>
          <div className="flex flex-wrap gap-3">
            <Badge style={{ backgroundColor: "var(--stage-new)", color: "white" }}>New</Badge>
            <Badge style={{ backgroundColor: "var(--stage-contacted)", color: "white" }}>Contacted</Badge>
            <Badge style={{ backgroundColor: "var(--stage-qualified)", color: "black" }}>Qualified</Badge>
            <Badge style={{ backgroundColor: "var(--stage-proposal)", color: "white" }}>Proposal</Badge>
            <Badge style={{ backgroundColor: "var(--stage-won)", color: "white" }}>Won</Badge>
            <Badge style={{ backgroundColor: "var(--stage-lost)", color: "white" }}>Lost</Badge>
          </div>
        </div>

        {/* Priority Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Priority Levels</h3>
          <div className="flex flex-wrap gap-3">
            <Badge style={{ backgroundColor: "var(--priority-low)", color: "white" }}>Low</Badge>
            <Badge style={{ backgroundColor: "var(--priority-medium)", color: "black" }}>Medium</Badge>
            <Badge style={{ backgroundColor: "var(--priority-high)", color: "white" }}>High</Badge>
            <Badge style={{ backgroundColor: "var(--priority-urgent)", color: "white" }}>Urgent</Badge>
          </div>
        </div>

        {/* Tag Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Category Tags</h3>
          <div className="flex flex-wrap gap-3">
            <Badge style={{ backgroundColor: "var(--tag-billing)", color: "white" }}>Billing</Badge>
            <Badge style={{ backgroundColor: "var(--tag-lead)", color: "white" }}>Lead</Badge>
            <Badge style={{ backgroundColor: "var(--tag-device-setup)", color: "white" }}>Device Setup</Badge>
          </div>
        </div>

        {/* Soft/Subtle Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Soft/Subtle Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Primary Soft</Badge>
            <Badge className="bg-success/10 text-success hover:bg-success/20">Success Soft</Badge>
            <Badge className="bg-warning/10 text-warning hover:bg-warning/20">Warning Soft</Badge>
            <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">Error Soft</Badge>
            <Badge className="bg-info/10 text-info hover:bg-info/20">Info Soft</Badge>
          </div>
        </div>

        {/* Dot Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">With Status Dots</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="gap-1.5">
              <span className="h-2 w-2 rounded-full bg-success" />
              Online
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <span className="h-2 w-2 rounded-full bg-warning" />
              Away
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive" />
              Offline
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <span className="h-2 w-2 rounded-full bg-muted-foreground" />
              Unknown
            </Badge>
          </div>
        </div>

        {/* Removable Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Removable Tags</h3>
          <div className="flex flex-wrap gap-3">
            <Badge className="gap-1 pr-1">
              Enterprise
              <button className="ml-1 rounded-full p-0.5 hover:bg-primary-foreground/20">
                <X className="h-3 w-3" />
              </button>
            </Badge>
            <Badge variant="secondary" className="gap-1 pr-1">
              VIP Customer
              <button className="ml-1 rounded-full p-0.5 hover:bg-secondary-foreground/20">
                <X className="h-3 w-3" />
              </button>
            </Badge>
            <Badge variant="outline" className="gap-1 pr-1">
              Partner
              <button className="ml-1 rounded-full p-0.5 hover:bg-foreground/10">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        </div>

        {/* Count Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Count/Notification Badges</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="relative">
              <span className="text-sm">Messages</span>
              <Badge className="absolute -right-5 -top-2 h-5 min-w-5 rounded-full p-0 text-xs flex items-center justify-center">
                3
              </Badge>
            </div>
            <div className="relative">
              <span className="text-sm">Notifications</span>
              <Badge className="absolute -right-6 -top-2 h-5 min-w-5 rounded-full p-0 text-xs flex items-center justify-center bg-destructive">
                12
              </Badge>
            </div>
            <div className="relative">
              <span className="text-sm">Tasks</span>
              <Badge className="absolute -right-7 -top-2 h-5 min-w-5 rounded-full p-0 text-xs flex items-center justify-center bg-success">
                99+
              </Badge>
            </div>
          </div>
        </div>

        {/* Badge Sizes */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="text-xs px-2 py-0">Extra Small</Badge>
            <Badge className="text-xs">Small</Badge>
            <Badge>Default</Badge>
            <Badge className="text-sm px-3 py-1">Large</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
