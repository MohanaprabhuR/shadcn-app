"use client"

import { Bold, ChevronRight, Mail, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="rounded-xl border bg-card p-6">{children}</div>
    </section>
  )
}

export default function ButtonsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold">Buttons & Actions</h1>
        <p className="mt-1 text-muted-foreground">
          Interactive button components with multiple variants and sizes.
        </p>
      </div>

      <Section
        title="Button Variants"
        description="Different visual styles for various use cases."
      >
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Link</Button>
          <Button variant="shadow">Shadow</Button>
        </div>
      </Section>

      <Section
        title="Button Sizes"
        description="Available size options from xs to lg."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Extra Small</Button>
          <Button size="md">Small</Button>
          <Button size="lg">Default</Button>
          <Button size="xl">Large</Button>
          <Button size="2xl">Extra Large</Button>
        </div>
      </Section>

      <Section title="Icon Buttons" description="Compact icon-only buttons.">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm" iconOnly>
            <Plus />
          </Button>
          <Button size="md" iconOnly variant="secondary">
            <Plus />
          </Button>

          <Button size="lg" iconOnly variant="outline">
            <Plus />
          </Button>
          <Button size="xl" iconOnly variant="ghost">
            <Trash2 />
          </Button>
          <Button size="2xl" iconOnly variant="shadow">
            <Mail />
          </Button>
        </div>
      </Section>

      <Section
        title="Buttons with Icons"
        description="Buttons with leading or trailing icons."
      >
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail />
            Send Email
          </Button>
          <Button variant="outline">
            Continue
            <ChevronRight />
          </Button>
          <Button variant="secondary">
            <Plus />
            New Item
          </Button>
          <Button variant="destructive">
            <Trash2 />
            Delete
          </Button>
        </div>
      </Section>

      <Section
        title="Button States"
        description="Disabled state for all variants."
      >
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section title="Button Group" description="A group of related buttons.">
        <div className="flex flex-col gap-4">
          <ButtonGroup destructive>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="outline">Save</Button>
            <Button variant="outline">Preview</Button>
            <Button variant="outline">Discard</Button>
          </ButtonGroup>
        </div>
      </Section>

      <Section
        title="Toggle"
        description="A two-state button that can be either on or off."
      >
        <div className="flex flex-wrap gap-3">
          <Toggle aria-label="Bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle aria-label="Bold" defaultPressed>
            <Bold className="size-4" />
          </Toggle>
          <Toggle>On / Off</Toggle>
          <Toggle variant="outline">Outline Toggle</Toggle>
        </div>
      </Section>

      <Section
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled on or off."
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-xs text-muted-foreground">
              Single selection
            </p>
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left">Left</ToggleGroupItem>
              <ToggleGroupItem value="center">Center</ToggleGroupItem>
              <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground">
              Multiple selection
            </p>
            <ToggleGroup type="multiple" defaultValue={["bold"]}>
              <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
              <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
              <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </Section>
    </div>
  )
}
