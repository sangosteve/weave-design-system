import { SectionHeader } from "./section-header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontalIcon, ArrowUpDownIcon, ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/react"

const contacts = [
  { id: 1, name: "John Smith", email: "john@acme.com", company: "Acme Inc.", status: "Active", value: "$25,000", stage: "qualified" },
  { id: 2, name: "Emily Davis", email: "emily@techcorp.com", company: "TechCorp", status: "Active", value: "$50,000", stage: "won" },
  { id: 3, name: "Mike Chen", email: "mike@startup.io", company: "StartupXYZ", status: "Pending", value: "$15,000", stage: "new" },
  { id: 4, name: "Sarah Johnson", email: "sarah@enterprise.com", company: "Enterprise Co.", status: "Active", value: "$75,000", stage: "proposal" },
  { id: 5, name: "David Wilson", email: "david@global.net", company: "Global Networks", status: "Inactive", value: "$10,000", stage: "lost" },
]

const stageColors: Record<string, string> = {
  new: "var(--stage-new)",
  contacted: "var(--stage-contacted)",
  qualified: "var(--stage-qualified)",
  proposal: "var(--stage-proposal)",
  won: "var(--stage-won)",
  lost: "var(--stage-lost)",
}

const stageLabels: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal: "Proposal",
  won: "Won",
  lost: "Lost",
}

export function TablesSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Tables"
        description="Tables are used to display structured data. They support sorting, selection, and inline actions for efficient data management."
      />
      
      <div className="space-y-10">
        {/* Basic Table */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Basic Table</h3>
          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.slice(0, 3).map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>
                      <Badge variant={contact.status === "Active" ? "default" : "secondary"}>
                        {contact.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Table with Selection */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">With Selection & Actions</h3>
          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" size="sm" className="-ml-3 h-8">
                      Name
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>
                    <Button variant="ghost" size="sm" className="-ml-3 h-8">
                      Value
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                            {contact.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{contact.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{contact.email}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell className="font-medium">{contact.value}</TableCell>
                    <TableCell>
                      <Badge 
                        style={{ 
                          backgroundColor: stageColors[contact.stage], 
                          color: contact.stage === "qualified" ? "black" : "white" 
                        }}
                      >
                        {stageLabels[contact.stage]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between px-2">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">100</span> results
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Compact Table */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Compact Table</h3>
          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="h-10 text-xs">Contact</TableHead>
                  <TableHead className="h-10 text-xs">Company</TableHead>
                  <TableHead className="h-10 text-xs">Value</TableHead>
                  <TableHead className="h-10 text-xs">Stage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id} className="h-10">
                    <TableCell className="py-2 text-sm">{contact.name}</TableCell>
                    <TableCell className="py-2 text-sm text-muted-foreground">{contact.company}</TableCell>
                    <TableCell className="py-2 text-sm font-medium">{contact.value}</TableCell>
                    <TableCell className="py-2">
                      <Badge 
                        className="text-xs px-2 py-0"
                        style={{ 
                          backgroundColor: stageColors[contact.stage], 
                          color: contact.stage === "qualified" ? "black" : "white" 
                        }}
                      >
                        {stageLabels[contact.stage]}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Striped Table */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Striped Table</h3>
          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, index) => (
                  <TableRow key={contact.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell className="text-muted-foreground">{contact.email}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell className="text-right font-medium">{contact.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
