"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { 
  Search01Icon, 
  Mail01Icon, 
  Call02Icon, 
  User03Icon, 
  Calendar03Icon, 
  DollarCircleIcon, 
  Building03Icon 
} from "@hugeicons/react"

export function FormsSection() {
  const [switchValue, setSwitchValue] = useState(false)

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Forms"
        description="Form elements are essential for data collection in CRM applications. All inputs are designed for accessibility and include proper focus states."
      />
      
      <div className="space-y-10">
        {/* Text Inputs */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Text Inputs</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="default">Default Input</Label>
              <Input id="default" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" placeholder="Disabled" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error">Error State</Label>
              <Input id="error" placeholder="Invalid input" aria-invalid="true" />
              <p className="text-xs text-destructive">This field is required</p>
            </div>
          </div>
        </div>

        {/* Input with Icons */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Inputs with Icons</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Search</Label>
              <div className="relative">
                <Search01Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search contacts..." className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <div className="relative">
                <Mail01Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="email" placeholder="john@example.com" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <div className="relative">
                <Call02Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-9" />
              </div>
            </div>
          </div>
        </div>

        {/* CRM Specific Inputs */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">CRM Field Types</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Contact Name</Label>
              <div className="relative">
                <User03Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="John Smith" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Company</Label>
              <div className="relative">
                <Building03Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Acme Inc." className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Deal Value</Label>
              <div className="relative">
                <DollarCircleIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="number" placeholder="10,000" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Close Date</Label>
              <div className="relative">
                <Calendar03Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="date" className="pl-9" />
              </div>
            </div>
          </div>
        </div>

        {/* Select */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Select</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Pipeline Stage</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="won">Won</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Assigned To</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="mike">Mike Chen</SelectItem>
                  <SelectItem value="emily">Emily Davis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Textarea</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea placeholder="Add notes about this contact..." rows={4} />
            </div>
            <div className="space-y-2">
              <Label>Message Template</Label>
              <Textarea placeholder="Write your message template..." rows={4} />
            </div>
          </div>
        </div>

        {/* Checkboxes & Radio */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Checkboxes & Radio Buttons</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border border-border p-4">
              <Label className="text-sm font-medium">Contact Preferences</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="email-pref" defaultChecked />
                  <label htmlFor="email-pref" className="text-sm">Email notifications</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sms-pref" />
                  <label htmlFor="sms-pref" className="text-sm">SMS notifications</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <label htmlFor="newsletter" className="text-sm">Newsletter subscription</label>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-border p-4">
              <Label className="text-sm font-medium">Lead Source</Label>
              <RadioGroup defaultValue="website">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="website" id="website" />
                  <label htmlFor="website" className="text-sm">Website</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="referral" id="referral" />
                  <label htmlFor="referral" className="text-sm">Referral</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="social" id="social" />
                  <label htmlFor="social" className="text-sm">Social Media</label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Switch */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Switches</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <Label>Auto-assign leads</Label>
                <p className="text-xs text-muted-foreground">Automatically assign new leads</p>
              </div>
              <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <Label>Email tracking</Label>
                <p className="text-xs text-muted-foreground">Track email opens</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <Label>Notifications</Label>
                <p className="text-xs text-muted-foreground">Push notifications</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Form Example */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Complete Form Example</h3>
          <div className="rounded-lg border border-border p-6 max-w-xl">
            <h4 className="text-lg font-semibold mb-4">Add New Contact</h4>
            <form className="crm-form-spacing">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email</Label>
                <Input id="contactEmail" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage">Pipeline Stage</Label>
                <Select>
                  <SelectTrigger id="stage">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any additional notes..." rows={3} />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button">Save Contact</Button>
                <Button type="button" variant="outline">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
