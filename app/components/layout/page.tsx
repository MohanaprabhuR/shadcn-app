"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="rounded-xl border bg-card p-6">
        {children}
      </div>
    </section>
  )
}

const tags = Array.from({ length: 30 }, (_, i) => `item-${i + 1}`)

export default function LayoutPage() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Layout</h1>
        <p className="mt-1 text-muted-foreground">Components for structuring and organizing page layouts.</p>
      </div>

      <Section title="Accordion" description="A vertically stacked set of interactive headings.">
        <div className="max-w-lg">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern and uses Radix UI primitives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it by setting the{" "}
                <code>collapsible</code> prop to <code>false</code>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6">
            <p className="text-xs text-muted-foreground mb-3">Multiple open at once</p>
            <Accordion type="multiple">
              <AccordionItem value="a">
                <AccordionTrigger>First item</AccordionTrigger>
                <AccordionContent>Content for the first item. Can be open simultaneously with others.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Second item</AccordionTrigger>
                <AccordionContent>Content for the second item.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>Third item</AccordionTrigger>
                <AccordionContent>Content for the third item.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      <Section title="Collapsible" description="An interactive component which expands/collapses content.">
        <div className="max-w-sm">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Starred Repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" iconOnly>
                  <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="mt-2 rounded-md border px-4 py-3 text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2 mt-2">
              <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/colors</div>
              <div className="rounded-md border px-4 py-3 text-sm">@stitches/react</div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </Section>

      <Section title="Resizable Panels" description="Drag to resize the panels.">
        <div className="h-48 rounded-lg overflow-hidden border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <p className="text-sm text-muted-foreground">Sidebar</p>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize={60}>
                  <div className="flex h-full items-center justify-center p-4 bg-background">
                    <p className="text-sm text-muted-foreground">Main Content</p>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="flex h-full items-center justify-center bg-muted/20 p-4">
                    <p className="text-sm text-muted-foreground">Bottom Panel</p>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Section>

      <Section title="Scroll Area" description="Augments native scroll functionality for custom cross-browser styling.">
        <div className="flex gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Vertical scroll</p>
            <ScrollArea className="h-48 w-52 rounded-md border p-3">
              <div className="space-y-2">
                {tags.map((tag) => (
                  <div key={tag} className="flex items-center justify-between text-sm">
                    <span>{tag}</span>
                    <span className="text-muted-foreground text-xs">#{Math.floor(Math.random() * 999)}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Horizontal scroll</p>
            <ScrollArea className="w-64 rounded-md border">
              <div className="flex gap-2 p-3" style={{ width: "600px" }}>
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="shrink-0 rounded-md bg-muted p-3 text-xs font-medium"
                    style={{ width: "80px" }}
                  >
                    Card {i + 1}
                  </div>
                ))}
              </div>
              <Separator />
            </ScrollArea>
          </div>
        </div>
      </Section>

      <Section title="Aspect Ratio" description="Displays content within a desired ratio.">
        <div className="grid grid-cols-3 gap-4">
          {[
            { ratio: 16 / 9, label: "16:9" },
            { ratio: 4 / 3, label: "4:3" },
            { ratio: 1, label: "1:1" },
          ].map(({ ratio, label }) => (
            <div key={label}>
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <AspectRatio ratio={ratio} className="bg-muted rounded-lg overflow-hidden">
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  {label}
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
