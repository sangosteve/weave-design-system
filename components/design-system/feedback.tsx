"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { 
  AlertCircleIcon, 
  CheckmarkCircle02Icon, 
  InformationCircleIcon, 
  Alert02Icon, 
  Cancel01Icon, 
  Notification01Icon, 
  Loading01Icon 
} from "@hugeicons/react"

export function FeedbackSection() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Feedback"
        description="Feedback components communicate status, validation, and important information to users through alerts, toasts, and loading states."
      />
      
      <Toaster />
      
      <div className="space-y-10">
        {/* Alerts */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Alerts</h3>
          <div className="space-y-4 max-w-2xl">
            <Alert>
              <InformationCircleIcon className="size-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert. It provides helpful context without requiring action.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-success bg-success/10">
              <CheckmarkCircle02Icon className="size-4 text-success" />
              <AlertTitle className="text-success">Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully. The contact has been updated.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-warning bg-warning/10">
              <Alert02Icon className="size-4 text-warning" />
              <AlertTitle className="text-warning">Warning</AlertTitle>
              <AlertDescription>
                This deal is approaching its close date. Consider following up with the contact.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertCircleIcon className="size-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Failed to save changes. Please check your connection and try again.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Dismissible Alerts */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Dismissible Alerts</h3>
          <div className="space-y-4 max-w-2xl">
            <Alert className="relative">
              <Bell className="h-4 w-4" />
              <AlertTitle>New Feature Available</AlertTitle>
              <AlertDescription>
                Check out our new pipeline automation tools to streamline your workflow.
              </AlertDescription>
              <button className="absolute top-3 right-3 rounded-full p-1 hover:bg-muted">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </Alert>
          </div>
        </div>

        {/* Toasts */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Toasts</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Contact saved",
                  description: "John Smith has been added to your contacts.",
                })
              }}
            >
              Default Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Success!",
                  description: "Deal marked as won. Congratulations!",
                  className: "border-success bg-success/10",
                })
              }}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Error",
                  description: "Failed to delete contact. Please try again.",
                })
              }}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Email sent",
                  description: "Your message has been delivered.",
                  action: (
                    <Button variant="outline" size="sm">
                      Undo
                    </Button>
                  ),
                })
              }}
            >
              Toast with Action
            </Button>
          </div>
        </div>

        {/* Loading States */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Loading States</h3>
          <div className="space-y-6">
            {/* Spinner */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground">Large</span>
              </div>
            </div>

            {/* Button Loading */}
            <div className="flex items-center gap-4">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </Button>
              <Button onClick={handleLoading} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Click to Load"
                )}
              </Button>
            </div>

            {/* Skeleton Loading */}
            <div className="space-y-3 max-w-md">
              <p className="text-sm text-muted-foreground mb-2">Skeleton Loading</p>
              <div className="space-y-3 rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-1/3 rounded bg-muted animate-pulse" />
                    <div className="h-3 w-1/2 rounded bg-muted animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-muted animate-pulse" />
                  <div className="h-3 w-4/5 rounded bg-muted animate-pulse" />
                  <div className="h-3 w-2/3 rounded bg-muted animate-pulse" />
                </div>
              </div>
            </div>

            {/* Progress Loading */}
            <div className="space-y-2 max-w-md">
              <p className="text-sm text-muted-foreground">Importing contacts...</p>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div 
                  className="h-2 rounded-full bg-primary animate-pulse" 
                  style={{ width: "65%", animation: "pulse 1.5s ease-in-out infinite" }} 
                />
              </div>
              <p className="text-xs text-muted-foreground">65% complete - 350 of 538 contacts</p>
            </div>
          </div>
        </div>

        {/* Empty States */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Empty States</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border border-dashed p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Info className="h-6 w-6 text-muted-foreground" />
              </div>
              <h4 className="text-lg font-medium mb-2">No contacts yet</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get started by adding your first contact to the CRM.
              </p>
              <Button>Add Contact</Button>
            </div>
            <div className="rounded-lg border border-border border-dashed p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-muted-foreground" />
              </div>
              <h4 className="text-lg font-medium mb-2">No results found</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
              <Button variant="outline">Clear Filters</Button>
            </div>
          </div>
        </div>

        {/* Validation States */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Inline Validation</h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl">
            <div className="space-y-2">
              <label className="text-sm font-medium">Success</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="john@example.com" 
                  readOnly
                  className="w-full rounded-md border border-success bg-success/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-success" 
                />
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-success" />
              </div>
              <p className="text-xs text-success">Email is valid</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Error</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="invalid-email" 
                  readOnly
                  className="w-full rounded-md border border-destructive bg-destructive/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-destructive" 
                />
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
              </div>
              <p className="text-xs text-destructive">Please enter a valid email</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Warning</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="john@old-domain.com" 
                  readOnly
                  className="w-full rounded-md border border-warning bg-warning/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-warning" 
                />
                <AlertTriangle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warning" />
              </div>
              <p className="text-xs text-warning">This email may be outdated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
