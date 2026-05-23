import { SectionHeader } from "./section-header"

const coreColors = [
  { name: "Primary", variable: "--primary", hex: "#4263EB", description: "Main brand color, CTAs" },
  { name: "Primary Hover", variable: "--primary-hover", hex: "#3B5BDB", description: "Hover state" },
  { name: "Secondary", variable: "--secondary", hex: "#F4F4F5", description: "Secondary actions" },
  { name: "Destructive", variable: "--destructive", hex: "#DC2626", description: "Errors, delete actions" },
  { name: "Muted", variable: "--muted", hex: "#F4F4F5", description: "Subtle backgrounds" },
  { name: "Accent", variable: "--accent", hex: "#F4F4F5", description: "Highlights" },
]

const semanticColors = [
  { name: "Success", variable: "--success", hex: "#16A34A", description: "Positive feedback" },
  { name: "Warning", variable: "--warning", hex: "#CA8A04", description: "Caution states" },
  { name: "Error", variable: "--error", hex: "#DC2626", description: "Error states" },
  { name: "Info", variable: "--info", hex: "#2563EB", description: "Informational" },
]

const surfaceColors = [
  { name: "Background", variable: "--background", hex: "#FFFFFF", description: "Page background" },
  { name: "Card", variable: "--card", hex: "#FFFFFF", description: "Card backgrounds" },
  { name: "Surface", variable: "--surface", hex: "#FAFAFA", description: "Elevated surfaces" },
  { name: "Popover", variable: "--popover", hex: "#FFFFFF", description: "Popover backgrounds" },
]

const borderColors = [
  { name: "Border", variable: "--border", hex: "#E4E4E7", description: "Default borders" },
  { name: "Border Subtle", variable: "--border-subtle", hex: "#F4F4F5", description: "Subtle dividers" },
  { name: "Input", variable: "--input", hex: "#E4E4E7", description: "Input borders" },
  { name: "Ring", variable: "--ring", hex: "#4263EB", description: "Focus rings" },
]

const stageColors = [
  { name: "New", variable: "--stage-new", hex: "#4263EB", description: "New leads" },
  { name: "Contacted", variable: "--stage-contacted", hex: "#7C3AED", description: "Contacted stage" },
  { name: "Qualified", variable: "--stage-qualified", hex: "#CA8A04", description: "Qualified leads" },
  { name: "Proposal", variable: "--stage-proposal", hex: "#0891B2", description: "Proposal sent" },
  { name: "Won", variable: "--stage-won", hex: "#16A34A", description: "Deal won" },
  { name: "Lost", variable: "--stage-lost", hex: "#DC2626", description: "Deal lost" },
]

const priorityColors = [
  { name: "Low", variable: "--priority-low", hex: "#16A34A", description: "Low priority" },
  { name: "Medium", variable: "--priority-medium", hex: "#CA8A04", description: "Medium priority" },
  { name: "High", variable: "--priority-high", hex: "#EA580C", description: "High priority" },
  { name: "Urgent", variable: "--priority-urgent", hex: "#DC2626", description: "Urgent priority" },
]

const chartColors = [
  { name: "Chart 1", variable: "--chart-1", hex: "#4263EB" },
  { name: "Chart 2", variable: "--chart-2", hex: "#16A34A" },
  { name: "Chart 3", variable: "--chart-3", hex: "#CA8A04" },
  { name: "Chart 4", variable: "--chart-4", hex: "#7C3AED" },
  { name: "Chart 5", variable: "--chart-5", hex: "#0891B2" },
]

function ColorSwatch({ name, variable, hex, description }: { name: string; variable: string; hex?: string; description?: string }) {
  return (
    <div className="group flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-lg border border-border shadow-sm transition-transform group-hover:scale-105"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        {hex && <p className="font-mono text-xs text-muted-foreground">{hex}</p>}
        <p className="font-mono text-xs text-muted-foreground">{variable}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
    </div>
  )
}

function ColorRow({ title, colors }: { title: string; colors: { name: string; variable: string; hex?: string; description?: string }[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {colors.map((color) => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </div>
    </div>
  )
}

export function ColorPaletteSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Color Palette"
        description="The Weave color system follows Vercel/Atlassian principles with a refined primary blue (#4263EB), neutral grays, and purposeful accent colors for data visualization and status indicators."
      />
      
      <div className="space-y-10">
        <ColorRow title="Core Colors" colors={coreColors} />
        <ColorRow title="Semantic Colors" colors={semanticColors} />
        <ColorRow title="Surface Colors" colors={surfaceColors} />
        <ColorRow title="Border Colors" colors={borderColors} />
        <ColorRow title="Pipeline Stage Colors" colors={stageColors} />
        <ColorRow title="Priority Colors" colors={priorityColors} />
        <ColorRow title="Chart Colors" colors={chartColors} />
      </div>
    </div>
  )
}
