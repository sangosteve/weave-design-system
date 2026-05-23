import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"
import { 
  Add01Icon, 
  Download01Icon, 
  Delete01Icon, 
  SentIcon, 
  Tick01Icon, 
  Loading01Icon, 
  ArrowRight01Icon,
  Calendar01Icon,
  Mail01Icon,
  Call02Icon,
  Settings01Icon
} from "@hugeicons/react"

export function ButtonsSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Buttons"
        description="Buttons follow Vercel/Atlassian proportions with 36px default height, rounded-lg corners, and subtle shadows. Icons use HugeIcons."
      />
      
      <div className="space-y-10">
        {/* Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Variants</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small (32px)</Button>
            <Button size="default">Default (36px)</Button>
            <Button size="lg">Large (40px)</Button>
            <Button size="xl">Extra Large (44px)</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="icon-xs"><Add01Icon className="size-4" /></Button>
            <Button size="icon-sm"><Add01Icon className="size-4" /></Button>
            <Button size="icon"><Add01Icon className="size-4" /></Button>
            <Button size="icon-lg"><Add01Icon className="size-4" /></Button>
          </div>
        </div>

        {/* With Icons */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              <Add01Icon className="size-4" />
              Add Contact
            </Button>
            <Button variant="outline">
              <Download01Icon className="size-4" />
              Export
            </Button>
            <Button variant="destructive">
              <Delete01Icon className="size-4" />
              Delete
            </Button>
            <Button variant="secondary">
              Send
              <SentIcon className="size-4" />
            </Button>
            <Button>
              Continue
              <ArrowRight01Icon className="size-4" />
            </Button>
          </div>
        </div>

        {/* States */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">States</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loading01Icon className="size-4 animate-spin" />
              Loading
            </Button>
            <Button className="bg-[var(--success)] text-white hover:bg-[var(--success)]/90">
              <Tick01Icon className="size-4" />
              Success
            </Button>
          </div>
        </div>

        {/* CRM Specific */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">CRM Actions</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              <Add01Icon className="size-4" />
              New Lead
            </Button>
            <Button variant="outline">
              <Calendar01Icon className="size-4" />
              Schedule Call
            </Button>
            <Button variant="outline">
              <Mail01Icon className="size-4" />
              Send Email
            </Button>
            <Button variant="outline">
              <Call02Icon className="size-4" />
              Log Call
            </Button>
            <Button variant="secondary">
              <Tick01Icon className="size-4" />
              Mark Complete
            </Button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Icon Buttons</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="icon">
              <Settings01Icon className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail01Icon className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Call02Icon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings01Icon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <Add01Icon className="size-4" />
            </Button>
          </div>
        </div>

        {/* Button Group */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Button Groups</h3>
          <div className="flex items-center">
            <Button variant="outline" className="rounded-r-none border-r-0">Day</Button>
            <Button variant="outline" className="rounded-none border-r-0">Week</Button>
            <Button variant="default" className="rounded-none border-r-0">Month</Button>
            <Button variant="outline" className="rounded-l-none">Year</Button>
          </div>
        </div>

        {/* Best Practices */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Best Practices</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <p className="font-medium text-sm mb-2">Compact Density (Default)</p>
              <p className="text-sm text-muted-foreground">Use size sm/default for tables, toolbars, and compact interfaces.</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="font-medium text-sm mb-2">CRM High-Interaction Areas</p>
              <p className="text-sm text-muted-foreground">Use size lg/xl in chat, forms, and mobile for better touch targets (44px recommended).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
