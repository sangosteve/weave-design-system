import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"
import { Plus, Download, Trash2, Send, Check, Loader2, ChevronRight } from "lucide-react"

export function ButtonsSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Buttons"
        description="Buttons are used to trigger actions. They come in different variants and sizes to accommodate various use cases throughout the application."
      />
      
      <div className="space-y-10">
        {/* Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Variants</h3>
          <div className="flex flex-wrap items-center gap-4">
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
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Plus className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* With Icons */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
            <Button variant="secondary">
              Send
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <Button>
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* States */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">States</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
            <Button className="bg-success text-success-foreground hover:bg-success/90">
              <Check className="mr-2 h-4 w-4" />
              Success
            </Button>
          </div>
        </div>

        {/* CRM Specific */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">CRM Actions</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Lead
            </Button>
            <Button variant="outline">Schedule Call</Button>
            <Button variant="outline">Send Email</Button>
            <Button variant="secondary">
              <Check className="mr-2 h-4 w-4" />
              Mark Complete
            </Button>
            <Button variant="ghost" size="sm">View Details</Button>
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
      </div>
    </div>
  )
}
