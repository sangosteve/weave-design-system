import { SectionHeader } from "./section-header"

export function TypographySection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Typography"
        description="Inter is the primary typeface for Weave. It provides excellent readability at all sizes and supports a wide range of weights for creating clear visual hierarchy."
      />
      
      <div className="space-y-10">
        {/* Font Family */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Font Family</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm text-muted-foreground mb-2">Sans (Primary)</p>
              <p className="text-2xl font-medium">Inter</p>
              <p className="text-sm text-muted-foreground mt-2 font-mono">font-sans</p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm text-muted-foreground mb-2">Mono (Code)</p>
              <p className="text-2xl font-mono font-medium">Geist Mono</p>
              <p className="text-sm text-muted-foreground mt-2 font-mono">font-mono</p>
            </div>
          </div>
        </div>

        {/* Type Scale */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Type Scale</h3>
          <div className="space-y-4 rounded-lg border border-border p-6">
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-4xl font-bold tracking-tight">Display Large</span>
              <span className="font-mono text-sm text-muted-foreground">text-4xl font-bold</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-3xl font-semibold tracking-tight">Display</span>
              <span className="font-mono text-sm text-muted-foreground">text-3xl font-semibold</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-2xl font-semibold tracking-tight">Heading 1</span>
              <span className="font-mono text-sm text-muted-foreground">text-2xl font-semibold</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-xl font-semibold">Heading 2</span>
              <span className="font-mono text-sm text-muted-foreground">text-xl font-semibold</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-lg font-medium">Heading 3</span>
              <span className="font-mono text-sm text-muted-foreground">text-lg font-medium</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-base">Body</span>
              <span className="font-mono text-sm text-muted-foreground">text-base</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-sm">Small</span>
              <span className="font-mono text-sm text-muted-foreground">text-sm</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs">Extra Small</span>
              <span className="font-mono text-sm text-muted-foreground">text-xs</span>
            </div>
          </div>
        </div>

        {/* Font Weights */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Font Weights</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {[
              { weight: "Light", class: "font-light", value: "300" },
              { weight: "Regular", class: "font-normal", value: "400" },
              { weight: "Medium", class: "font-medium", value: "500" },
              { weight: "Semibold", class: "font-semibold", value: "600" },
              { weight: "Bold", class: "font-bold", value: "700" },
            ].map((item) => (
              <div key={item.weight} className="rounded-lg border border-border p-4">
                <p className={`text-xl ${item.class}`}>{item.weight}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{item.class} ({item.value})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Text Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Text Hierarchy</h3>
          <div className="space-y-3 rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <span style={{ color: "var(--text-primary)" }}>Primary text for headings and important content</span>
              <span className="font-mono text-xs text-muted-foreground">--text-primary</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: "var(--text-secondary)" }}>Secondary text for body content</span>
              <span className="font-mono text-xs text-muted-foreground">--text-secondary</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: "var(--text-tertiary)" }}>Tertiary text for supporting information</span>
              <span className="font-mono text-xs text-muted-foreground">--text-tertiary</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: "var(--text-muted)" }}>Muted text for placeholders and hints</span>
              <span className="font-mono text-xs text-muted-foreground">--text-muted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
