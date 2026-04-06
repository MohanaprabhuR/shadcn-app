"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Copy,
  Ellipsis,
  FileText,
  LoaderCircle,
  Minus,
  Moon,
  Palette,
  Plus,
  RotateCcw,
  Search,
  SearchIcon,
  Settings,
  SettingsIcon,
  ShoppingBag,
  Sliders,
  Sun,
  Trash,
  Upload,
  User,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import {
  hexToOklch,
  oklchToHex,
  oklchString,
  deriveForeground,
} from "@/lib/color-utils"
import { PRESETS, type ThemePreset } from "@/lib/theme-presets"

// ─── Types ────────────────────────────────────────────────────────────────────

type PreviewTab = "components" | "palette"

type DensityKey = "compact" | "default" | "comfortable"

const DENSITY_STEPS: { label: DensityKey; value: string; px: string }[] = [
  { label: "compact", value: "0.2rem", px: "3.2px" },
  { label: "default", value: "0.25rem", px: "4px" },
  { label: "comfortable", value: "0.3rem", px: "4.8px" },
]
const LINE_HEIGHT_STEPS = [
  { label: "tight", value: 1.15 },
  { label: "normal", value: 1.5 },
] as const

const FONT_SIZE_STEPS = [
  { label: "2xs", rem: "0.6875rem", px: 11 },
  { label: "xs", rem: "0.75rem", px: 12 },
  { label: "sm", rem: "0.8125rem", px: 13 },
  { label: "base", rem: "0.875rem", px: 14 },
  { label: "lg", rem: "1rem", px: 16 },
  { label: "xl", rem: "1.125rem", px: 18 },
  { label: "2xl", rem: "1.25rem", px: 20 },
  { label: "3xl", rem: "1.5rem", px: 24 },
  { label: "4xl", rem: "1.625rem", px: 26 },
  { label: "5xl", rem: "1.75rem", px: 28 },
  { label: "6xl", rem: "2rem", px: 32 },
  { label: "7xl", rem: "2.5rem", px: 40 },
  { label: "8xl", rem: "2.75rem", px: 44 },
  { label: "9xl", rem: "3rem", px: 48 },
  { label: "10xl", rem: "3.25rem", px: 52 },
  { label: "11xl", rem: "3.5rem", px: 56 },
  { label: "12xl", rem: "4rem", px: 64 },
  { label: "13xl", rem: "4.5rem", px: 72 },
  { label: "14xl", rem: "5rem", px: 80 },
  { label: "15xl", rem: "5.5rem", px: 88 },
] as const

// ─── Font options ─────────────────────────────────────────────────────────────

const FONT_OPTIONS = [
  { name: "Inter", cssVar: "--font-sans" },
  { name: "DM Sans", cssVar: "--font-dm-sans" },
  { name: "Manrope", cssVar: "--font-manrope" },
  { name: "Nunito", cssVar: "--font-nunito" },
  { name: "Poppins", cssVar: "--font-poppins" },
  { name: "Plus Jakarta", cssVar: "--font-plus-jakarta" },
  { name: "Outfit", cssVar: "--font-outfit" },
] as const

// ─── CSS var helpers ──────────────────────────────────────────────────────────

function buildCSSVars(
  preset: ThemePreset,
  mode: "light" | "dark",
  radius: number,
  customPrimary?: string,
  customColors?: Record<string, string>
) {
  const colors = mode === "dark" ? preset.dark : preset.light
  const primaryOklch = hexToOklch(customPrimary ?? "#000000")
  const primaryFg = primaryOklch
    ? deriveForeground(primaryOklch.l)
    : colors.primaryForeground

  const base: Record<string, string> = {
    "--background": colors.background,
    "--foreground": colors.foreground,
    "--card": colors.card,
    "--card-foreground": colors.cardForeground,
    "--popover": colors.popover,
    "--popover-foreground": colors.popoverForeground,
    "--primary": customPrimary
      ? oklchString(primaryOklch!.l, primaryOklch!.c, primaryOklch!.h)
      : colors.primary,
    "--primary-foreground": customPrimary
      ? primaryFg
      : colors.primaryForeground,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.secondaryForeground,
    "--muted": colors.muted,
    "--muted-foreground": colors.mutedForeground,
    "--accent": colors.accent,
    "--accent-foreground": colors.accentForeground,
    "--destructive": colors.destructive,
    "--border": colors.border,
    "--input": colors.input,
    "--ring": customPrimary
      ? oklchString(primaryOklch!.l, primaryOklch!.c, primaryOklch!.h)
      : colors.ring,
    "--chart-1": colors.chart1,
    "--chart-2": colors.chart2,
    "--chart-3": colors.chart3,
    "--chart-4": colors.chart4,
    "--chart-5": colors.chart5,
    "--radius": `${radius}rem`,
    // Sidebar — mirrors base tokens so changes propagate automatically
    "--sidebar": colors.card,
    "--sidebar-foreground": colors.foreground,
    "--sidebar-primary": customPrimary
      ? oklchString(primaryOklch!.l, primaryOklch!.c, primaryOklch!.h)
      : colors.primary,
    "--sidebar-primary-foreground": customPrimary
      ? primaryFg
      : colors.primaryForeground,
    "--sidebar-accent": colors.accent,
    "--sidebar-accent-foreground": colors.accentForeground,
    "--sidebar-border": colors.border,
    "--sidebar-ring": customPrimary
      ? oklchString(primaryOklch!.l, primaryOklch!.c, primaryOklch!.h)
      : colors.ring,
  }

  if (customColors) Object.assign(base, customColors)
  return base as React.CSSProperties
}

function generateCSSOutput(
  preset: ThemePreset,
  radius: number,
  customPrimary?: string,
  customColors?: Record<string, string>
): string {
  const lv = buildCSSVars(preset, "light", radius, customPrimary, customColors)
  const dv = buildCSSVars(preset, "dark", radius, customPrimary, customColors)
  const fmt = (vars: React.CSSProperties) =>
    Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join("\n")
  return `:root {\n${fmt(lv)}\n}\n\n.dark {\n${fmt(dv)}\n}`
}

// ─── Chart data ───────────────────────────────────────────────────────────────

const chartConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  users: { label: "Users", color: "var(--chart-2)" },
}

const chartData = [
  { month: "Jan", revenue: 4200, users: 2400 },
  { month: "Feb", revenue: 3800, users: 1398 },
  { month: "Mar", revenue: 5200, users: 3800 },
  { month: "Apr", revenue: 4700, users: 3200 },
  { month: "May", revenue: 6100, users: 4100 },
  { month: "Jun", revenue: 5400, users: 3700 },
]

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Unpaid", method: "Transfer", amount: "$350.00" },
]

const scrollItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)

/** Shared “moodboard” tile chrome (Components + Palette previews). */
const MOODBOARD_TILE =
  "group relative h-fit max-h-none w-full overflow-hidden rounded-2xl border border-border/60 bg-card/90 p-5 shadow-sm transition-shadow hover:border-border hover:shadow-md"
const MOODBOARD_GRID =
  "grid auto-rows-min grid-cols-1 items-start gap-3 sm:gap-4 lg:grid-cols-12"

function ComponentsPreview() {
  const [sliderVal, setSliderVal] = React.useState([40])
  const [switchOn, setSwitchOn] = React.useState(false)
  const [calDate, setCalDate] = React.useState<Date | undefined>(new Date())
  const [collOpen, setCollOpen] = React.useState(false)

  return (
    <>
      <div className="flex min-h-full w-full overflow-hidden bg-background">
        <div className="flex-1 overflow-auto bg-muted/20 p-4 md:p-6">
          <div className="mx-auto max-w-6xl space-y-4">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Contribution History
                  </CardTitle>
                  <CardDescription>Last 6 months of activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-48 w-full">
                    <BarChart data={chartData}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 11 }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 11 }}
                        width={32}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="revenue"
                        fill="var(--chart-1)"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="users"
                        fill="var(--chart-2)"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ChartContainer>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>+12% vs last month</span>
                    <Button size="sm" variant="outline">
                      View Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-sm">
                        Payout Threshold
                      </CardTitle>
                      <CardDescription>
                        Set the minimum balance required
                      </CardDescription>
                    </div>
                    <Button size="sm" variant="ghost" iconOnly>
                      <Trash className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <Label>Preferred currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">
                          USD — United States Dollar
                        </SelectItem>
                        <SelectItem value="eur">EUR — Euro</SelectItem>
                        <SelectItem value="inr">INR — Indian Rupee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Minimum payout amount</Label>
                    <Input defaultValue="2500.00" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Notes</Label>
                    <Textarea
                      placeholder="Add any notes…"
                      className="min-h-20"
                    />
                  </div>
                  <Button className="w-full">Save Threshold</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-sm">Savings Targets</CardTitle>
                      <CardDescription>
                        Active milestones for 2024
                      </CardDescription>
                    </div>
                    <Button size="sm" variant="outline">
                      New Goal
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                          Retirement
                        </p>
                        <p className="text-2xl font-bold">$420,000</p>
                      </div>
                      <p className="text-xs text-muted-foreground">$273,000</p>
                    </div>
                    <Progress value={65} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                          Real estate
                        </p>
                        <p className="text-2xl font-bold">$85,000</p>
                      </div>
                      <p className="text-xs text-muted-foreground">$27,200</p>
                    </div>
                    <Progress value={32} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You have not met your targets for this year.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Distribute Track</CardTitle>
                  <CardDescription>
                    Release a new track to your listeners
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex h-28 items-center justify-center rounded-xl border bg-muted/30">
                    <Plus className="size-5 text-muted-foreground" />
                  </div>
                  <Button className="w-full">Create Release</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Claimable Balance</CardTitle>
                  <CardDescription>Net royalties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-3xl font-bold">$0.00</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Processing fee</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total ready to claim</span>
                      <span className="font-medium text-foreground">$0.00</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Request payout
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Recent Transactions</CardTitle>
                  <CardDescription>
                    Your latest account activity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {invoices.map((inv) => (
                    <div
                      key={inv.id}
                      className="flex items-center justify-between rounded-xl border bg-background p-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{inv.id}</p>
                        <p className="text-xs text-muted-foreground">
                          {inv.method}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{inv.status}</Badge>
                        <p className="mt-1 text-sm font-semibold">
                          {inv.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Calendar &amp; Media
                  </CardTitle>
                  <CardDescription>Calendar + carousel</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <Calendar
                    mode="single"
                    selected={calDate}
                    onSelect={setCalDate}
                    className="w-fit rounded-md border"
                  />
                  <Carousel className="max-w-xs">
                    <CarouselContent>
                      {Array.from({ length: 5 }, (_, i) => (
                        <CarouselItem key={i}>
                          <div className="flex h-24 items-center justify-center rounded-xl border bg-muted/30 text-sm font-medium text-muted-foreground">
                            Slide {i + 1}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Layout</CardTitle>
                  <CardDescription>
                    Accordion, collapsible, resizable
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="acc-1"
                    className="w-full"
                  >
                    <AccordionItem value="acc-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="acc-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="space-y-3">
                    <Collapsible open={collOpen} onOpenChange={setCollOpen}>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Starred</p>
                        <CollapsibleTrigger asChild>
                          <Button size="sm" variant="ghost" iconOnly>
                            <ChevronDown
                              className={cn(
                                "size-4 transition-transform",
                                collOpen && "rotate-180"
                              )}
                            />
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="mt-2 space-y-2">
                        <div className="rounded-xl border bg-background p-3 text-sm">
                          @radix-ui/primitives
                        </div>
                        <div className="rounded-xl border bg-background p-3 text-sm">
                          @radix-ui/colors
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                    <div className="h-24 overflow-hidden rounded-xl border">
                      <ResizablePanelGroup orientation="horizontal">
                        <ResizablePanel defaultSize={30} minSize={20}>
                          <div className="flex h-full items-center justify-center bg-muted/30 text-sm text-muted-foreground">
                            Sidebar
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={70}>
                          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                            Main
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Previous moodboard preview removed */}
      {false && (
        <>
          {/* Icons */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-5")}>
            <p className="mb-3 text-sm font-semibold">Icons</p>
            <div className="flex flex-wrap gap-2">
              <Button iconOnly variant="outline">
                <Copy />
              </Button>
              <Button iconOnly variant="outline">
                <CircleAlert />
              </Button>
              <Button iconOnly variant="outline">
                <Trash />
              </Button>
              <Button iconOnly variant="outline">
                <Upload />
              </Button>
              <Button iconOnly variant="outline">
                <ShoppingBag />
              </Button>
              <Button iconOnly variant="outline">
                <Ellipsis />
              </Button>
              <Button iconOnly variant="outline">
                <LoaderCircle />
              </Button>
              <Button iconOnly variant="outline">
                <Plus />
              </Button>
              <Button iconOnly variant="outline">
                <Minus />
              </Button>
              <Button iconOnly variant="outline">
                <ArrowLeft />
              </Button>
              <Button iconOnly variant="outline">
                <ArrowRight />
              </Button>
              <Button iconOnly variant="outline">
                <Check />
              </Button>
              <Button iconOnly variant="outline">
                <ChevronLeft />
              </Button>
              <Button iconOnly variant="outline">
                <ChevronRight />
              </Button>
              <Button iconOnly variant="outline">
                <SearchIcon />
              </Button>
              <Button iconOnly variant="outline">
                <SettingsIcon />
              </Button>
            </div>
          </div>

          {/* Button variants */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-5")}>
            <p className="mb-3 text-sm font-semibold">Buttons &amp; actions</p>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="shadow">Shadow</Button>
            </div>
          </div>
          {/* Chart colors */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-5")}>
            <p className="mb-3 text-sm font-semibold">Chart Colors</p>
            <div className="flex flex-wrap gap-2">
              <div
                className="size-12 rounded-(--radius) border border-border/40"
                style={{ background: "var(--chart-1)" }}
              />
              <div
                className="size-12 rounded-(--radius) border border-border/40"
                style={{ background: "var(--chart-2)" }}
              />
              <div
                className="size-12 rounded-(--radius) border border-border/40"
                style={{ background: "var(--chart-3)" }}
              />
              <div
                className="size-12 rounded-(--radius) border border-border/40"
                style={{ background: "var(--chart-4)" }}
              />
              <div
                className="size-12 rounded-(--radius) border border-border/40"
                style={{ background: "var(--chart-5)" }}
              />
            </div>
          </div>

          {/* Form controls */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Form controls</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Text input</Label>
                <Input placeholder="Enter value..." />
              </div>
              <div className="space-y-1.5">
                <Label>Select</Label>
                <Select defaultValue="b">
                  <SelectTrigger>
                    <SelectValue placeholder="Pick one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Option A</SelectItem>
                    <SelectItem value="b">Option B</SelectItem>
                    <SelectItem value="c">Option C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Textarea</Label>
                <Textarea
                  placeholder="Write something..."
                  className="min-h-20"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="ck1" defaultChecked />
                  <Label htmlFor="ck1">Checkbox</Label>
                </div>
                <RadioGroup defaultValue="r1" className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="r1" id="r1" />
                    <Label htmlFor="r1">Radio A</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="r2" id="r2" />
                    <Label htmlFor="r2">Radio B</Label>
                  </div>
                </RadioGroup>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={switchOn}
                    onCheckedChange={setSwitchOn}
                    id="sw1"
                  />
                  <Label htmlFor="sw1">Switch {switchOn ? "on" : "off"}</Label>
                </div>
                <div className="space-y-1.5">
                  <Label>Slider — {sliderVal[0]}%</Label>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={sliderVal}
                    onValueChange={setSliderVal}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Data display */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Data display</p>
            <Table>
              <TableCaption>Recent invoices</TableCaption>
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
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium">{inv.id}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          inv.status === "Paid"
                            ? "default"
                            : inv.status === "Pending"
                              ? "secondary"
                              : "outline"
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
          </div>

          {/* Navigation */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-7")}>
            <p className="mb-3 text-sm font-semibold">Navigation</p>
            <div className="space-y-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Theme Generator</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Overview content goes here.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Analytics content goes here.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Settings content goes here.
                  </p>
                </TabsContent>
              </Tabs>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New File</MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Exit</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          {/* Overlay & dialogs */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-5")}>
            <p className="mb-3 text-sm font-semibold">Overlay &amp; dialogs</p>
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Tooltip
                  </Button>
                </TooltipTrigger>
                <TooltipContent>This is a tooltip</TooltipContent>
              </Tooltip>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56">
                  <p className="text-sm">Popover content goes here.</p>
                </PopoverContent>
              </Popover>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Dropdown <ChevronDown className="ml-1 size-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 size-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 size-4" />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 py-2">
                    <div className="space-y-1.5">
                      <Label>Name</Label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Email</Label>
                      <Input placeholder="john@example.com" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Alert Dialog
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Panel</SheetTitle>
                    <SheetDescription>
                      A side panel for additional content.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 space-y-3">
                    <div className="space-y-1.5">
                      <Label>Name</Label>
                      <Input placeholder="Enter name" />
                    </div>
                    <Button className="w-full">Save</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Layout */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-12")}>
            <p className="mb-3 text-sm font-semibold">Layout</p>
            <div className="grid gap-4 lg:grid-cols-3">
              <Accordion
                type="single"
                collapsible
                defaultValue="acc-1"
                className="max-w-md"
              >
                <AccordionItem value="acc-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="acc-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Collapsible
                open={collOpen}
                onOpenChange={setCollOpen}
                className="max-w-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Starred Repositories</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" iconOnly>
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform",
                          collOpen ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="mt-2 rounded-md border px-4 py-2.5 text-sm">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className="mt-2 space-y-2">
                  <div className="rounded-md border px-4 py-2.5 text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2.5 text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <div className="space-y-3">
                <div className="h-28 overflow-hidden rounded-lg border">
                  <ResizablePanelGroup orientation="horizontal">
                    <ResizablePanel defaultSize={30} minSize={20}>
                      <div className="flex h-full items-center justify-center bg-muted/30 text-sm text-muted-foreground">
                        Sidebar
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={70}>
                      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                        Main Content
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
                <ScrollArea className="h-28 w-full rounded-md border p-3">
                  <div className="space-y-2">
                    {scrollItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between text-sm"
                      >
                        <span>{item}</span>
                        <span className="text-xs text-muted-foreground">
                          #{Math.floor(item.length * 37)}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Charts & media */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-12")}>
            <p className="mb-3 text-sm font-semibold">Charts &amp; media</p>
            <div className="grid gap-4 md:grid-cols-2">
              <ChartContainer config={chartConfig} className="h-48 w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                    width={32}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="revenue"
                    fill="var(--chart-1)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="users"
                    fill="var(--chart-2)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
              <div className="space-y-3">
                <Calendar
                  mode="single"
                  selected={calDate}
                  onSelect={setCalDate}
                  className="w-fit rounded-md border"
                />
                <Carousel className="max-w-xs">
                  <CarouselContent>
                    {Array.from({ length: 5 }, (_, i) => (
                      <CarouselItem key={i}>
                        <div className="flex h-24 items-center justify-center rounded-lg border bg-muted/30 text-sm font-medium text-muted-foreground">
                          Slide {i + 1}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

// ─── Color Palette Preview ────────────────────────────────────────────────────

function AllComponentsPreview({ cssVars }: { cssVars: React.CSSProperties }) {
  const vars = cssVars as Record<string, string>

  const toolbarIcons = [
    Copy,
    CircleAlert,
    Trash,
    Upload,
    ShoppingBag,
    Ellipsis,
    RotateCcw,
    Plus,
    Minus,
    ArrowLeft,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Search,
    Settings,
  ]

  const chartColors = [
    { label: "Chart 1", key: "--chart-1" },
    { label: "Chart 2", key: "--chart-2" },
    { label: "Chart 3", key: "--chart-3" },
    { label: "Chart 4", key: "--chart-4" },
    { label: "Chart 5", key: "--chart-5" },
  ]

  const swatches: { label: string; bg: string }[] = [
    { label: "--background", bg: "bg-background" },
    { label: "--foreground", bg: "bg-foreground" },
    { label: "--primary", bg: "bg-primary" },
    { label: "--primary-foreground", bg: "bg-primary-foreground" },
    { label: "--secondary", bg: "bg-secondary" },
    { label: "--secondary-foreground", bg: "bg-secondary-foreground" },
    { label: "--muted", bg: "bg-muted" },
    { label: "--muted-foreground", bg: "bg-muted-foreground" },
    { label: "--accent", bg: "bg-accent" },
    { label: "--accent-foreground", bg: "bg-accent-foreground" },
    { label: "--destructive", bg: "bg-destructive" },
    { label: "--destructive-foreground", bg: "bg-destructive-foreground" },
    { label: "--border", bg: "bg-border" },
    { label: "--input", bg: "bg-input" },
    { label: "--card", bg: "bg-card" },
    { label: "--card-foreground", bg: "bg-card-foreground" },
    { label: "--popover", bg: "bg-popover" },
    { label: "--popover-foreground", bg: "bg-popover-foreground" },
    { label: "--ring", bg: "bg-ring" },
    { label: "--sidebar", bg: "bg-sidebar" },
    { label: "--sidebar-foreground", bg: "bg-sidebar-foreground" },
    { label: "--sidebar-primary", bg: "bg-sidebar-primary" },
    {
      label: "--sidebar-primary-foreground",
      bg: "bg-sidebar-primary-foreground",
    },
    { label: "--sidebar-accent", bg: "bg-sidebar-accent" },
    {
      label: "--sidebar-accent-foreground",
      bg: "bg-sidebar-accent-foreground",
    },
    { label: "--sidebar-border", bg: "bg-sidebar-border" },
    { label: "--sidebar-ring", bg: "bg-sidebar-ring" },
  ]

  return (
    <div className="w-fit max-w-full min-w-0 bg-muted/15 p-4 md:p-6">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <div className={MOODBOARD_GRID}>
          {/* Colors */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-5 lg:row-span-2")}>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-60" />
            <p className="relative mb-1 text-sm font-semibold">Colors</p>
            <p className="relative mb-4 text-xs text-muted-foreground">
              Core palette tokens
            </p>
            <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-6">
              {swatches.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      "size-14 shrink-0 rounded-(--radius) border border-border/30",
                      s.bg
                    )}
                  />
                  <span className="max-w-27 truncate text-[11px] text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-7")}>
            <p className="mb-3 text-sm font-semibold">Buttons</p>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="shadow">Shadow</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
                <Button size="sm" variant="destructive">
                  Destructive
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="lg">Large</Button>
                <Button size="lg" variant="secondary">
                  Secondary
                </Button>
                <Button size="lg" variant="outline">
                  Outline
                </Button>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-7")}>
            <p className="mb-3 text-sm font-semibold">Icons</p>
            <div className="flex flex-wrap gap-2">
              {toolbarIcons.map((Icon, i) => (
                <Button key={i} size="sm" variant="outline" iconOnly>
                  <Icon />
                </Button>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Badges</p>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge size="md">Medium</Badge>
                <Badge size="md" variant="secondary">
                  Secondary
                </Badge>
                <Badge size="md" variant="outline">
                  Outline
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge size="lg">Large</Badge>
                <Badge size="lg" variant="secondary">
                  Secondary
                </Badge>
                <Badge size="lg" variant="outline">
                  Outline
                </Badge>
              </div>
            </div>
          </div>

          {/* Form Controls */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Form Controls</p>
            <div className="space-y-3">
              <Input placeholder="Enter text…" />
              <Textarea placeholder="Enter longer text…" rows={2} />
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox defaultChecked /> Checked
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox /> Unchecked
                </label>
              </div>
              <RadioGroup defaultValue="a" className="flex gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem id="r-a" value="a" /> Option A
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem id="r-b" value="b" /> Option B
                </label>
              </RadioGroup>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <span className="text-sm text-muted-foreground">Toggle</span>
                <Switch />
                <span className="text-sm text-muted-foreground">Off</span>
              </div>
            </div>
          </div>

          {/* Select & Sliders */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Select &amp; Sliders</p>
            <div className="space-y-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select option…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Option A</SelectItem>
                  <SelectItem value="b">Option B</SelectItem>
                  <SelectItem value="c">Option C</SelectItem>
                </SelectContent>
              </Select>
              <Slider defaultValue={[40]} min={0} max={100} step={1} knob />
              <Slider defaultValue={[20, 70]} min={0} max={100} step={1} knob />
            </div>
          </div>

          {/* Progress */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Progress</p>
            <div className="space-y-3">
              <Progress value={30} size="xs" />
              <Progress value={55} size="sm" />
              <Progress value={75} size="md" />
              <Progress value={90} size="lg" />
              <Progress value={60} size="md" intervals={5} />
              <Progress value={80} size="sm" showLabel labelName="Storage" />
            </div>
          </div>

          {/* Alerts */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-8")}>
            <p className="mb-3 text-sm font-semibold">Alerts</p>
            <div className="space-y-2">
              <Alert>
                <CircleAlert />
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>
                  This is a default alert message.
                </AlertDescription>
              </Alert>
              <Alert variant="information">
                <CircleAlert />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>An informational notice.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <Check />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Action completed successfully.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <CircleAlert />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review before proceeding.
                </AlertDescription>
              </Alert>
              <Alert variant="error">
                <CircleAlert />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong.</AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Tabs */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Tabs</p>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Analytics</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent
                value="tab1"
                className="mt-3 text-sm text-muted-foreground"
              >
                Overview content goes here.
              </TabsContent>
              <TabsContent
                value="tab2"
                className="mt-3 text-sm text-muted-foreground"
              >
                Analytics data goes here.
              </TabsContent>
              <TabsContent
                value="tab3"
                className="mt-3 text-sm text-muted-foreground"
              >
                Settings panel goes here.
              </TabsContent>
            </Tabs>
          </div>

          {/* Accordion */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Accordion</p>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                <AccordionContent>
                  A collection of re-usable components built with Radix UI and
                  Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. All components follow WAI-ARIA guidelines.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize it?</AccordionTrigger>
                <AccordionContent>
                  Absolutely — every token is a CSS variable.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Avatar */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Avatars</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>CK</AvatarFallback>
                </Avatar>
              </div>
              <AvatarGroup>
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </div>
          </div>

          {/* Skeleton & Spinner */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Loading States</p>
            <div className="space-y-3">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="flex items-center gap-3">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
                <Spinner size="md" variant="blue" track />
                <Spinner size="md" variant="green" track />
                <Spinner size="md" variant="red" track />
              </div>
            </div>
          </div>

          {/* Kbd */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Keyboard Shortcuts</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Copy{" "}
                <span className="ml-auto flex gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>C</Kbd>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Paste{" "}
                <span className="ml-auto flex gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>V</Kbd>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Search{" "}
                <span className="ml-auto flex gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Save{" "}
                <span className="ml-auto flex gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>S</Kbd>
                </span>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-5")}>
            <p className="mb-3 text-sm font-semibold">Card</p>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>January – June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$48,295</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  +12.4% from last period
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm">View Report</Button>
                <Button size="sm" variant="outline">
                  Export
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Typography */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-7")}>
            <p className="mb-3 text-sm font-semibold">Typography</p>
            <div className="space-y-1.5">
              {(
                [
                  "text-3xl",
                  "text-2xl",
                  "text-xl",
                  "text-lg",
                  "text-base",
                  "text-sm",
                  "text-xs",
                ] as const
              ).map((size) => (
                <p key={size} className={`${size} leading-tight font-medium`}>
                  The quick brown fox jumps over the lazy dog
                </p>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Pagination</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Breadcrumb */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Breadcrumb</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* OTP Input */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">OTP Input</p>
            <InputOTP maxLength={6} value="123456">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Input Group */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-6")}>
            <p className="mb-3 text-sm font-semibold">Input Group</p>
            <div className="space-y-2">
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>
                    <Search className="size-4" />
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="Search…" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="example.com" />
              </InputGroup>
            </div>
          </div>

          {/* Table */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-8")}>
            <p className="mb-3 text-sm font-semibold">Table</p>
            <Table>
              <TableCaption>Recent transactions</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Alice Johnson</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell>$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Smith</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell>$1,200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Carol White</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Overdue</Badge>
                  </TableCell>
                  <TableCell>$89.50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Chart colors */}
          <div className={cn(MOODBOARD_TILE, "lg:col-span-4")}>
            <p className="mb-3 text-sm font-semibold">Chart Colors</p>
            <div className="space-y-2">
              {chartColors.map((token) => (
                <div key={token.key} className="flex items-center gap-2">
                  <div
                    className="size-7 shrink-0 rounded-(--radius)"
                    style={{ background: vars[token.key] ?? "transparent" }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {token.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ColorPalettePreview({ cssVars }: { cssVars: React.CSSProperties }) {
  const vars = cssVars as Record<string, string>

  const tokens: { key: string }[] = [
    { key: "--background" },
    { key: "--foreground" },
    { key: "--primary" },
    { key: "--primary-foreground" },
    { key: "--secondary" },
    { key: "--secondary-foreground" },
    { key: "--muted" },
    { key: "--muted-foreground" },
    { key: "--accent" },
    { key: "--accent-foreground" },
    { key: "--destructive" },
    { key: "--destructive-foreground" },
    { key: "--border" },
    { key: "--input" },
    { key: "--card" },
    { key: "--card-foreground" },
    { key: "--popover" },
    { key: "--popover-foreground" },
    { key: "--ring" },
    { key: "--sidebar" },
    { key: "--sidebar-foreground" },
    { key: "--sidebar-primary" },
    { key: "--sidebar-primary-foreground" },
    { key: "--sidebar-accent" },
    { key: "--sidebar-accent-foreground" },
    { key: "--sidebar-border" },
    { key: "--sidebar-ring" },
    { key: "--chart-1" },
    { key: "--chart-2" },
    { key: "--chart-3" },
    { key: "--chart-4" },
    { key: "--chart-5" },
  ]

  return (
    <div className="w-fit max-w-full min-w-0 bg-muted/15 p-4 md:p-6">
      <div className="mx-auto w-full max-w-6xl min-w-0 space-y-4">
        <div className={cn(MOODBOARD_TILE, "p-5")}>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {tokens.map((t) => (
              <div key={t.key} className="flex flex-col items-center gap-2">
                <div
                  className="size-14 rounded-(--radius) border border-border/40"
                  style={{ background: vars[t.key] ?? "transparent" }}
                />
                <span className="max-w-27 truncate text-[11px] text-muted-foreground">
                  {t.key}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Color picker row ─────────────────────────────────────────────────────────

function ColorPickerRow({
  label,
  hex,
  onChange,
}: {
  label: string
  hex: string
  onChange: (hex: string) => void
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative size-7 shrink-0 cursor-pointer overflow-hidden rounded-md border">
        <input
          type="color"
          value={hex}
          onChange={(e) => onChange(e.target.value)}
          className="absolute -inset-1 size-[calc(100%+8px)] cursor-pointer opacity-0"
        />
        <div
          className="size-full rounded-md"
          style={{ backgroundColor: hex }}
        />
      </div>
      <span className="flex-1 text-xs text-muted-foreground">{label}</span>
      <span className="font-mono text-[10px] text-muted-foreground/60">
        {hex}
      </span>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ThemeGeneratorPage() {
  const { resolvedTheme, setTheme } = useTheme()
  const [selectedPreset] = React.useState("zinc")
  const [mode, setMode] = React.useState<"light" | "dark">("light")
  const RADIUS_PRESETS = React.useMemo(
    () =>
      [
        { id: "xs", label: "xs", rem: 0.25 },
        { id: "sm", label: "sm", rem: 0.375 },
        { id: "md", label: "md", rem: 0.5 },
        { id: "lg", label: "lg", rem: 0.625 },
        { id: "xl", label: "xl", rem: 0.75 },
        { id: "2xl", label: "2xl", rem: 1 },
        { id: "3xl", label: "3xl", rem: 1.25 },
        // Matches fixed tokens in `app/tokens/base-colors.css`
        { id: "4xl", label: "4xl", rem: 1 },
        { id: "5xl", label: "5xl", rem: 1.25 },
        { id: "6xl", label: "6xl", rem: 6.25 },
      ] as const,
    []
  )

  const [radiusPreset, setRadiusPreset] =
    React.useState<(typeof RADIUS_PRESETS)[number]["id"]>("md")
  const [radius, setRadius] = React.useState(0.5)
  const [customPrimaryHex, setCustomPrimaryHex] = React.useState<
    string | undefined
  >(undefined)
  const [customColors, setCustomColors] = React.useState<
    Record<string, string>
  >({})
  const [copied, setCopied] = React.useState(false)
  const [showCSS, setShowCSS] = React.useState(false)
  const [previewTab, setPreviewTab] = React.useState<PreviewTab>("components")

  // Typography
  const [selectedFont, setSelectedFont] = React.useState("--font-sans")
  const [fontSizeIndex, setFontSizeIndex] = React.useState(3)
  const [lineHeightIndex, setLineHeightIndex] = React.useState(1)
  const [letterSpacing, setLetterSpacing] = React.useState(0)

  // Spacing
  const [densityIndex, setDensityIndex] = React.useState(1)

  React.useEffect(() => {
    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      setMode(resolvedTheme)
    }
  }, [resolvedTheme])

  const setAppMode = React.useCallback(
    (nextMode: "light" | "dark") => {
      setMode(nextMode)
      setTheme(nextMode)
    },
    [setTheme]
  )

  const currentPreset =
    PRESETS.find((p) => p.id === selectedPreset) ?? PRESETS[0]

  const cssVars = React.useMemo(
    () =>
      buildCSSVars(currentPreset, mode, radius, customPrimaryHex, customColors),
    [currentPreset, mode, radius, customPrimaryHex, customColors]
  )

  React.useEffect(() => {
    const preset = RADIUS_PRESETS.find((p) => p.id === radiusPreset)
    if (preset) setRadius(preset.rem)
  }, [RADIUS_PRESETS, radiusPreset])

  const previewFont = `var(${selectedFont})`
  const fontStack = `${previewFont}, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"`

  const previewStyle = React.useMemo(
    () =>
      ({
        ...cssVars,
        // Make Tailwind's `font-sans` follow the selected font.
        "--font-sans": previewFont,
        fontFamily: fontStack,
        "--tg-font-size": FONT_SIZE_STEPS[fontSizeIndex].rem,
        "--tg-line-height": String(LINE_HEIGHT_STEPS[lineHeightIndex].value),
        "--tg-letter-spacing": `${letterSpacing}em`,
        fontSize: "var(--tg-font-size)",
        lineHeight: "var(--tg-line-height)",
        letterSpacing: "var(--tg-letter-spacing)",
        "--spacing": DENSITY_STEPS[densityIndex].value,
      }) as React.CSSProperties,
    [
      cssVars,
      fontStack,
      previewFont,
      fontSizeIndex,
      lineHeightIndex,
      letterSpacing,
      densityIndex,
    ]
  )

  const cssOutput = React.useMemo(
    () =>
      generateCSSOutput(currentPreset, radius, customPrimaryHex, customColors),
    [currentPreset, radius, customPrimaryHex, customColors]
  )

  function getHexForVar(varName: string): string {
    if (customColors[varName]) return customColors[varName]
    const colors = mode === "dark" ? currentPreset.dark : currentPreset.light
    const map: Record<string, string> = {
      "--foreground": colors.foreground,
      "--secondary": colors.secondary,
      "--secondary-foreground": colors.secondaryForeground,
      "--muted": colors.muted,
      "--muted-foreground": colors.mutedForeground,
      "--accent": colors.accent,
      "--accent-foreground": colors.accentForeground,
      "--background": colors.background,
      "--destructive": colors.destructive,
      "--border": colors.border,
      "--sidebar": colors.card,
      "--sidebar-foreground": colors.foreground,
      "--sidebar-primary": colors.primary,
      "--sidebar-primary-foreground": colors.primaryForeground,
      "--sidebar-accent": colors.accent,
      "--sidebar-accent-foreground": colors.accentForeground,
      "--sidebar-border": colors.border,
      "--sidebar-ring": colors.ring,
      "--chart-1": colors.chart1,
      "--chart-2": colors.chart2,
      "--chart-3": colors.chart3,
      "--chart-4": colors.chart4,
      "--chart-5": colors.chart5,
    }
    const val = map[varName] ?? "oklch(0 0 0)"
    const m = val.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
    if (!m) return "#000000"
    return oklchToHex(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]))
  }

  function handleColorChange(varName: string, hex: string) {
    setCustomColors((prev) => ({ ...prev, [varName]: hex }))
  }

  function handleReset() {
    const preset = PRESETS.find((p) => p.id === selectedPreset)
    if (preset) {
      setRadius(preset.radius)
      setCustomPrimaryHex(undefined)
      setCustomColors({})
      setSelectedFont("--font-sans")
      setFontSizeIndex(3)
      setLineHeightIndex(1)
      setLetterSpacing(0)
      setDensityIndex(1)
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(cssOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const displayPrimaryHex = React.useMemo(() => {
    if (customPrimaryHex) return customPrimaryHex
    const colors = mode === "dark" ? currentPreset.dark : currentPreset.light
    const match = colors.primary.match(
      /oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/
    )
    if (!match) return "#000000"
    return oklchToHex(
      parseFloat(match[1]),
      parseFloat(match[2]),
      parseFloat(match[3])
    )
  }, [customPrimaryHex, currentPreset, mode])

  const colorPickers = [
    { label: "Foreground", varName: "--foreground" },
    { label: "Background", varName: "--background" },
    { label: "Secondary", varName: "--secondary" },
    { label: "Secondary FG", varName: "--secondary-foreground" },
    { label: "Muted", varName: "--muted" },
    { label: "Muted FG", varName: "--muted-foreground" },
    { label: "Accent", varName: "--accent" },
    { label: "Accent FG", varName: "--accent-foreground" },
    { label: "Destructive", varName: "--destructive" },
    { label: "Border", varName: "--border" },
    { label: "Sidebar", varName: "--sidebar" },
    { label: "Sidebar FG", varName: "--sidebar-foreground" },
    { label: "Sidebar Primary", varName: "--sidebar-primary" },
    { label: "Sidebar Primary FG", varName: "--sidebar-primary-foreground" },
    { label: "Sidebar Accent", varName: "--sidebar-accent" },
    { label: "Sidebar Accent FG", varName: "--sidebar-accent-foreground" },
    { label: "Sidebar Border", varName: "--sidebar-border" },
    { label: "Sidebar Ring", varName: "--sidebar-ring" },
    { label: "Chart 1", varName: "--chart-1" },
    { label: "Chart 2", varName: "--chart-2" },
    { label: "Chart 3", varName: "--chart-3" },
    { label: "Chart 4", varName: "--chart-4" },
    { label: "Chart 5", varName: "--chart-5" },
  ]

  const previewTabs: {
    id: PreviewTab
    label: string
    icon: React.ElementType
  }[] = [
    { id: "components", label: "Components", icon: Sliders },
    { id: "palette", label: "Palette", icon: Palette },
  ]

  return (
    <SidebarProvider
      persistState={false}
      className="h-[calc(100vh-3.5rem)] overflow-hidden"
    >
      <Sidebar collapsible="none" className="h-full border-r bg-background">
        <SidebarContent className="min-h-0 space-y-5 px-4 py-4">
          {/* Mode Toggle */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Appearance
            </p>
            <div className="flex gap-1 rounded-lg border p-1">
              <button
                onClick={() => setAppMode("light")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  mode === "light"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Sun className="size-3.5" /> Light
              </button>
              <button
                onClick={() => setAppMode("dark")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  mode === "dark"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Moon className="size-3.5" /> Dark
              </button>
            </div>
          </div>

          <SidebarSeparator />

          {/* Primary Color */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Primary Color
            </p>
            <div className="flex items-center gap-2">
              <div className="relative size-9 shrink-0 cursor-pointer overflow-hidden rounded-lg border">
                <input
                  type="color"
                  value={displayPrimaryHex}
                  onChange={(e) => setCustomPrimaryHex(e.target.value)}
                  className="absolute -inset-1 size-[calc(100%+8px)] cursor-pointer opacity-0"
                />
                <div
                  className="size-full rounded-lg"
                  style={{ backgroundColor: displayPrimaryHex }}
                />
              </div>
              <Input
                value={displayPrimaryHex}
                onChange={(e) => {
                  if (/^#[0-9a-fA-F]{6}$/.test(e.target.value)) {
                    setCustomPrimaryHex(e.target.value)
                  }
                }}
                className="h-9 font-mono text-xs"
                maxLength={7}
              />
            </div>
          </div>

          <SidebarSeparator />

          {/* Color Token Pickers */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Colors
            </p>
            <div className="space-y-1.5">
              {colorPickers.map(({ label, varName }) => (
                <ColorPickerRow
                  key={varName}
                  label={label}
                  hex={getHexForVar(varName)}
                  onChange={(hex) => handleColorChange(varName, hex)}
                />
              ))}
            </div>
          </div>

          <SidebarSeparator />

          {/* Border Radius */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-semibold tracking-widest text-primary uppercase">
                Border Radius
              </p>

              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  min={0}
                  max={1.5}
                  step={0.125}
                  value={radius}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value)
                    if (!isNaN(v)) {
                      setRadiusPreset("md")
                      setRadius(Math.min(1.5, Math.max(0, v)))
                    }
                  }}
                  className="h-6 w-16 text-center font-mono text-[10px]"
                />
                <span className="text-[10px] text-muted-foreground">rem</span>
              </div>
            </div>
            <Slider
              knob
              min={0}
              max={1.5}
              step={0.125}
              value={[radius]}
              onValueChange={([v]) => {
                setRadiusPreset("md")
                setRadius(v)
              }}
            />
          </div>

          <SidebarSeparator />

          {/* Typography */}
          <div className="space-y-3">
            <p className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Typography
            </p>

            {/* Font family */}
            <div className="space-y-1.5">
              <p className="text-[10px] text-muted-foreground">Font Family</p>
              <Select value={selectedFont} onValueChange={setSelectedFont}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {FONT_OPTIONS.map((f) => (
                    <SelectItem key={f.cssVar} value={f.cssVar}>
                      <span
                        style={{ fontFamily: `var(${f.cssVar}), sans-serif` }}
                      >
                        {f.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Base font size */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] text-muted-foreground">Base Size</p>
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {FONT_SIZE_STEPS[fontSizeIndex].label}
                  </span>
                  <span className="text-[10px] text-muted-foreground">·</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {FONT_SIZE_STEPS[fontSizeIndex].px}px
                  </span>
                </div>
              </div>
              <Slider
                min={0}
                max={FONT_SIZE_STEPS.length - 1}
                step={1}
                value={[fontSizeIndex]}
                onValueChange={([v]) => setFontSizeIndex(v)}
                knob
              />
            </div>

            {/* Line height */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] text-muted-foreground">Line Height</p>
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {LINE_HEIGHT_STEPS[lineHeightIndex].label}
                  </span>
                  <span className="text-[10px] text-muted-foreground">·</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {LINE_HEIGHT_STEPS[lineHeightIndex].value}
                  </span>
                </div>
              </div>
              <Slider
                knob
                min={0}
                max={LINE_HEIGHT_STEPS.length - 1}
                step={1}
                value={[lineHeightIndex]}
                onValueChange={([v]) => setLineHeightIndex(v)}
              />
            </div>

            {/* Letter spacing */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] text-muted-foreground">
                  Letter Spacing
                </p>
                <div className="flex items-center gap-1">
                  <Input
                    type="number"
                    min={-0.05}
                    max={0.1}
                    step={0.01}
                    value={letterSpacing}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value)
                      if (!isNaN(v))
                        setLetterSpacing(Math.min(0.1, Math.max(-0.05, v)))
                    }}
                    className="h-6 w-16 text-center font-mono text-[10px]"
                  />
                  <span className="text-[10px] text-muted-foreground">em</span>
                </div>
              </div>
              <Slider
                knob
                min={-0.05}
                max={0.1}
                step={0.01}
                value={[letterSpacing]}
                onValueChange={([v]) => setLetterSpacing(v)}
              />
            </div>
          </div>

          <SidebarSeparator />

          {/* Spacing / Density */}
          <div className="space-y-3">
            <p className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Spacing
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[10px] text-muted-foreground capitalize">
                    {DENSITY_STEPS[densityIndex].label}
                  </span>
                  <span className="text-[10px] text-muted-foreground">·</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {DENSITY_STEPS[densityIndex].px}
                  </span>
                </div>
              </div>
              <Slider
                knob
                min={0}
                max={DENSITY_STEPS.length - 1}
                step={1}
                value={[densityIndex]}
                onValueChange={([v]) => setDensityIndex(v)}
              />
            </div>
          </div>
        </SidebarContent>

        <SidebarFooter className="space-y-2 border-t p-4">
          <Button
            className="w-full"
            variant="outline"
            size="sm"
            onClick={() => setShowCSS(!showCSS)}
          >
            <FileText className="size-3.5" />
            {showCSS ? "Hide CSS" : "Show CSS"}
          </Button>
          <Button className="w-full" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="size-3.5" /> Copied!
              </>
            ) : (
              <>
                <Copy className="size-3.5" /> Copy CSS
              </>
            )}
          </Button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-h-0 overflow-hidden">
        {/* ── Preview Area ── */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Browser chrome + tab switcher */}
          <div className="flex items-center justify-between gap-4 border-b bg-background px-4 py-2">
            <div className="flex min-w-0 items-center gap-2">
              <h2 className="truncate text-sm font-semibold">Theme Generator</h2>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconOnly
                    onClick={handleReset}
                  >
                    <RotateCcw className="size-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reset to defaults</TooltipContent>
              </Tooltip>
            </div>

            {/* Browser dots */}
            <div className="flex shrink-0 items-center gap-1.5">
              <div className="size-3 rounded-full bg-red-400/70" />
              <div className="size-3 rounded-full bg-yellow-400/70" />
              <div className="size-3 rounded-full bg-green-400/70" />
            </div>

            {/* Preview tab switcher */}
            <div className="flex items-center gap-1 rounded-lg border bg-muted/50 p-1">
              {previewTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPreviewTab(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                    previewTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <tab.icon className="size-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="font-mono text-[10px] text-muted-foreground">
                {currentPreset.name} · r={radius}rem
              </span>
              <Badge variant="secondary" className="text-[9px]">
                {mode}
              </Badge>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Live preview */}
            <div className="flex-1 overflow-auto bg-muted/20">
              <div
                className={cn(
                  "text-foreground",
                  "theme-gen-preview w-fit max-w-full min-w-0",
                  isDark(mode) && "dark"
                )}
                style={previewStyle}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                  .theme-gen-preview * {
                    font-size: inherit !important;
                    line-height: inherit !important;
                    letter-spacing: inherit !important;
                  }
                `,
                  }}
                />
                {previewTab === "components" && (
                  <div className="h-fit min-h-full w-fit max-w-full min-w-0 bg-background">
                    <AllComponentsPreview cssVars={previewStyle} />
                    {false && <ComponentsPreview />}
                  </div>
                )}
                {previewTab === "palette" && (
                  <div className="h-fit min-h-full w-fit max-w-full min-w-0 bg-background">
                    <ColorPalettePreview cssVars={previewStyle} />
                  </div>
                )}
              </div>
            </div>

            {/* CSS panel */}
            {showCSS && (
              <div className="flex w-80 shrink-0 flex-col border-l bg-background">
                <div className="flex items-center justify-between border-b px-4 py-2.5">
                  <span className="text-sm font-medium">CSS Output</span>
                  <Button
                    size="sm"
                    iconOnly
                    variant="ghost"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <Check className="size-3.5" />
                    ) : (
                      <Copy className="size-3.5" />
                    )}
                  </Button>
                </div>
                <div className="flex-1 overflow-auto p-4">
                  <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground">
                    {cssOutput}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function isDark(mode: "light" | "dark") {
  return mode === "dark"
}
