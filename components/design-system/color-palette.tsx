import { SectionHeader } from "./section-header"

const coreColors = [
  { name: "Primary", variable: "--primary", description: "Main brand color, CTAs" },
  { name: "Secondary", variable: "--secondary", description: "Secondary actions, success states" },
  { name: "Destructive", variable: "--destructive", description: "Errors, delete actions" },
  { name: "Muted", variable: "--muted", description: "Subtle backgrounds" },
  { name: "Accent", variable: "--accent", description: "Highlights, focus states" },
]

const semanticColors = [
  { name: "Success", variable: "--success", description: "Positive feedback" },
  { name: "Warning", variable: "--warning", description: "Caution states" },
  { name: "Error", variable: "--error", description: "Error states" },
  { name: "Info", variable: "--info", description: "Informational" },
]

const surfaceColors = [
  { name: "Background", variable: "--background", description: "Page background" },
  { name: "Card", variable: "--card", description: "Card backgrounds" },
  { name: "Surface", variable: "--surface", description: "Elevated surfaces" },
  { name: "Surface Elevated", variable: "--surface-elevated", description: "Higher elevation" },
  { name: "Popover", variable: "--popover", description: "Popover backgrounds" },
]

const borderColors = [
  { name: "Border", variable: "--border", description: "Default borders" },
  { name: "Border Subtle", variable: "--border-subtle", description: "Subtle dividers" },
  { name: "Input", variable: "--input", description: "Input borders" },
  { name: "Ring", variable: "--ring", description: "Focus rings" },
]

const stageColors = [
  { name: "New", variable: "--stage-new", description: "New leads" },
  { name: "Contacted", variable: "--stage-contacted", description: "Contacted stage" },
  { name: "Qualified", variable: "--stage-qualified", description: "Qualified leads" },
  { name: "Proposal", variable: "--stage-proposal", description: "Proposal sent" },
  { name: "Won", variable: "--stage-won", description: "Deal won" },
  { name: "Lost", variable: "--stage-lost", description: "Deal lost" },
]

const priorityColors = [
  { name: "Low", variable: "--priority-low", description: "Low priority" },
  { name: "Medium", variable: "--priority-medium", description: "Medium priority" },
  { name: "High", variable: "--priority-high", description: "High priority" },
  { name: "Urgent", variable: "--priority-urgent", description: "Urgent priority" },
]

const chartColors = [
  { name: "Chart 1", variable: "--chart-1" },
  { name: "Chart 2", variable: "--chart-2" },
  { name: "Chart 3", variable: "--chart-3" },
  { name: "Chart 4", variable: "--chart-4" },
  { name: "Chart 5", variable: "--chart-5" },
]

function ColorSwatch({ name, variable, description }: { name: string; variable: string; description?: string }) {
  return (
    <div className="group flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-lg border border-border shadow-sm transition-transform group-hover:scale-105"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{variable}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
    </div>
  )
}

function ColorRow({ title, colors }: { title: string; colors: { name: string; variable: string; description?: string }[] }) {
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
        description="The Weave color system is designed for clarity and accessibility. Colors are defined using OKLCH for perceptual uniformity across light and dark modes."
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
