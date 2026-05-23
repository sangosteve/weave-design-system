"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { 
  MoreHorizontalIcon, Add01Icon, Edit01Icon, Delete01Icon, Copy01Icon, Mail01Icon, Call02Icon, 
  User03Icon, Building03Icon, Calendar01Icon, Search01Icon, Tick01Icon
} from "@hugeicons/react"

const contacts = [
  { value: "john-smith", label: "John Smith", email: "john@acme.com" },
  { value: "emily-davis", label: "Emily Davis", email: "emily@techcorp.com" },
  { value: "mike-chen", label: "Mike Chen", email: "mike@startup.io" },
  { value: "sarah-johnson", label: "Sarah Johnson", email: "sarah@enterprise.com" },
]

export function OverlaysSection() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Overlays"
        description="Overlay components display content above the main interface. They include dialogs, sheets, dropdowns, popovers, and command palettes."
      />
      
      <div className="space-y-10">
        {/* Dialogs */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Dialogs</h3>
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Contact</DialogTitle>
                  <DialogDescription>
                    Enter the contact details below to add them to your CRM.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Contact</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Contact</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this contact? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Sheets */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Sheets (Slide-overs)</h3>
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Right Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Contact Details</SheetTitle>
                  <SheetDescription>
                    View and edit contact information.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-6">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input defaultValue="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="john@acme.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input defaultValue="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Left Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Apply filters to refine your search results.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-6">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" defaultChecked /> Active
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" /> Pending
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" /> Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Dropdown Menus */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Dropdown Menus</h3>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Actions
                  <MoreHorizontalIcon size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Edit01Icon size={16} className="mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy01Icon size={16} className="mr-2" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail01Icon size={16} className="mr-2" />
                  Send Email
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Call02Icon size={16} className="mr-2" />
                  Call
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Delete01Icon size={16} className="mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <Add01Icon size={16} className="mr-2" />
                  Create New
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User03Icon size={16} className="mr-2" />
                  Contact
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Building03Icon size={16} className="mr-2" />
                  Company
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar01Icon size={16} className="mr-2" />
                  Meeting
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontalIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Popovers */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Popovers</h3>
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Quick Add</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Quick Add Contact</h4>
                  <div className="space-y-2">
                    <Label htmlFor="quick-name">Name</Label>
                    <Input id="quick-name" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quick-email">Email</Label>
                    <Input id="quick-email" type="email" placeholder="Enter email" />
                  </div>
                  <Button className="w-full">Add Contact</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Command Palette / Combobox */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Command Palette / Combobox</h3>
          <div className="flex flex-wrap gap-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[300px] justify-between"
                >
                  {value
                    ? contacts.find((contact) => contact.value === value)?.label
                    : "Select contact..."}
                  <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Search contacts..." />
                  <CommandList>
                    <CommandEmpty>No contact found.</CommandEmpty>
                    <CommandGroup>
                      {contacts.map((contact) => (
                        <CommandItem
                          key={contact.value}
                          value={contact.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={`mr-2 h-4 w-4 ${
                              value === contact.value ? "opacity-100" : "opacity-0"
                            }`}
                          />
                          <div>
                            <p className="font-medium">{contact.label}</p>
                            <p className="text-xs text-muted-foreground">{contact.email}</p>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Standalone Command */}
            <div className="rounded-lg border border-border w-[300px]">
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Plus className="mr-2 h-4 w-4" />
                      Create Contact
                    </CommandItem>
                    <CommandItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </CommandItem>
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
