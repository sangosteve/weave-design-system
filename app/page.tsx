"use client"

import { useState } from "react"
import { DesignSystemHeader } from "@/components/design-system/header"
import { ColorPaletteSection } from "@/components/design-system/color-palette"
import { TypographySection } from "@/components/design-system/typography"
import { ButtonsSection } from "@/components/design-system/buttons"
import { FormsSection } from "@/components/design-system/forms"
import { CardsSection } from "@/components/design-system/cards"
import { BadgesSection } from "@/components/design-system/badges"
import { TablesSection } from "@/components/design-system/tables"
import { DataDisplaySection } from "@/components/design-system/data-display"
import { FeedbackSection } from "@/components/design-system/feedback"
import { NavigationSection } from "@/components/design-system/navigation"
import { OverlaysSection } from "@/components/design-system/overlays"
import { CRMPatternsSection } from "@/components/design-system/crm-patterns"

const sections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Forms" },
  { id: "cards", label: "Cards" },
  { id: "badges", label: "Badges & Tags" },
  { id: "tables", label: "Tables" },
  { id: "data-display", label: "Data Display" },
  { id: "feedback", label: "Feedback" },
  { id: "navigation", label: "Navigation" },
  { id: "overlays", label: "Overlays" },
  { id: "crm-patterns", label: "CRM Patterns" },
]

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("colors")
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-background ${isDark ? "dark" : ""}`}>
      <DesignSystemHeader 
        isDark={isDark} 
        onToggleTheme={toggleTheme}
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-16">
          <section id="colors">
            <ColorPaletteSection />
          </section>
          
          <section id="typography">
            <TypographySection />
          </section>
          
          <section id="buttons">
            <ButtonsSection />
          </section>
          
          <section id="forms">
            <FormsSection />
          </section>
          
          <section id="cards">
            <CardsSection />
          </section>
          
          <section id="badges">
            <BadgesSection />
          </section>
          
          <section id="tables">
            <TablesSection />
          </section>
          
          <section id="data-display">
            <DataDisplaySection />
          </section>
          
          <section id="feedback">
            <FeedbackSection />
          </section>
          
          <section id="navigation">
            <NavigationSection />
          </section>
          
          <section id="overlays">
            <OverlaysSection />
          </section>
          
          <section id="crm-patterns">
            <CRMPatternsSection />
          </section>
        </div>
      </main>
    </div>
  )
}
