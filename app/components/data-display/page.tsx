"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Kbd } from "@/components/ui/kbd"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

const invoices = [
  { invoice: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV-003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV-005", status: "Pending", method: "Stripe", amount: "$550.00" },
]

export default function DataDisplayPage() {
  const [progress, setProgress] = React.useState(45)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 5))
    }, 800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Data Display</h1>
        <p className="mt-1 text-muted-foreground">Components for displaying data in various formats.</p>
      </div>

      <Section title="Badge" description="A small count or status indicator.">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Variants</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="ghost">Ghost</Badge>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Status badges</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Active</Badge>
              <Badge variant="secondary">Draft</Badge>
              <Badge variant="outline">Review</Badge>
              <Badge variant="destructive">Blocked</Badge>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Avatar" description="An image element representing the user.">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-3">Sizes</p>
            <div className="flex items-end gap-3">
              <Avatar size="sm"><AvatarFallback>JD</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
              <Avatar size="lg"><AvatarFallback>JD</AvatarFallback></Avatar>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">With image (fallback shown)</p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/invalid.jpg" alt="User" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">Avatar Group</p>
            <AvatarGroup max={4}>
              <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>MK</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>PL</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>RS</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>TW</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>UV</AvatarFallback></Avatar>
            </AvatarGroup>
          </div>
        </div>
      </Section>

      <Section title="Card" description="A container for grouping related content.">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>A description of the project goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Content area for the card.</p>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Updated 2 days ago
            </CardFooter>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Compact Card</CardTitle>
              <CardDescription>Smaller variant for dense layouts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={65} />
              <p className="text-xs text-muted-foreground mt-1">65% complete</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Table" description="Display tabular data with columns and rows.">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.invoice}>
                <TableCell className="font-medium">{inv.invoice}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      inv.status === "Paid" ? "default" :
                      inv.status === "Pending" ? "secondary" : "outline"
                    }
                  >
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section title="Progress" description="Displays an indicator showing the completion progress of a task.">
        <div className="max-w-sm space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Animated progress</span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Storage used</span>
              <span className="text-muted-foreground">72%</span>
            </div>
            <Progress value={72} />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Profile complete</span>
              <span className="text-muted-foreground">30%</span>
            </div>
            <Progress value={30} />
          </div>
        </div>
      </Section>

      <Section title="Separator" description="A visual divider between content.">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Horizontal</p>
            <p className="text-sm text-muted-foreground">Content above the separator</p>
            <Separator />
            <p className="text-sm text-muted-foreground">Content below the separator</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm">Middle</span>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm">Right</span>
          </div>
        </div>
      </Section>

      <Section title="Skeleton" description="A placeholder preview for content that is loading.">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </Section>

      <Section title="Spinner" description="A loading indicator for async operations.">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-3" />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
        </div>
      </Section>

      <Section title="Kbd" description="Keyboard shortcut display.">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 text-sm">
            <Kbd>⌘</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>K</Kbd>
            <span className="text-muted-foreground ml-2">Open command palette</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>S</Kbd>
            <span className="text-muted-foreground ml-2">Save</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Kbd>Esc</Kbd>
            <span className="text-muted-foreground ml-2">Close</span>
          </div>
        </div>
      </Section>
    </div>
  )
}
