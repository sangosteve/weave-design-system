"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface DesignSystemHeaderProps {
  isDark: boolean
  onToggleTheme: () => void
  sections: { id: string; label: string }[]
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DesignSystemHeader({
  isDark,
  onToggleTheme,
  sections,
  activeSection,
  onSectionChange,
}: DesignSystemHeaderProps) {
  const scrollToSection = (id: string) => {
    onSectionChange(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">W</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Weave Design System</h1>
              <p className="text-xs text-muted-foreground">CRM Component Library</p>
            </div>
          </div>
          
          <Button variant="outline" size="icon" onClick={onToggleTheme}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
        
        <nav className="flex gap-1 overflow-x-auto pb-3 scrollbar-thin">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
