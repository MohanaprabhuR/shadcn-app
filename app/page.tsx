import Link from "next/link"
import {
  MousePointerClick,
  FormInput,
  Navigation,
  LayoutGrid,
  Layers,
  BarChart2,
  MessageSquare,
  PanelLeft,
} from "lucide-react"

const categories = [
  {
    id: "buttons",
    title: "Buttons & Actions",
    description: "Button variants, sizes, icon buttons, toggle, and button groups",
    icon: MousePointerClick,
    count: 5,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "forms",
    title: "Form Inputs",
    description: "Input, Textarea, Select, Checkbox, Radio, Switch, Slider, OTP",
    icon: FormInput,
    count: 10,
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar",
    icon: Navigation,
    count: 5,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    id: "data-display",
    title: "Data Display",
    description: "Table, Avatar, Badge, Card, Skeleton, Progress, Spinner, Kbd",
    icon: LayoutGrid,
    count: 9,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    id: "overlay",
    title: "Overlay & Dialogs",
    description: "Dialog, Sheet, Drawer, Popover, Tooltip, Dropdown, Context Menu",
    icon: Layers,
    count: 8,
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    id: "layout",
    title: "Layout",
    description: "Accordion, Collapsible, Resizable Panels, Scroll Area, Separator",
    icon: PanelLeft,
    count: 5,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "charts",
    title: "Charts & Media",
    description: "Bar, Line, Pie charts, Calendar, Carousel",
    icon: BarChart2,
    count: 5,
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Alert, Toast/Sonner, Progress indicators, Empty states",
    icon: MessageSquare,
    count: 5,
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Beautifully designed components built with Radix UI and Tailwind CSS.
          Open source, accessible, and customizable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.id}
              href={`/components/${cat.id}`}
              className="group rounded-xl border bg-card p-5 text-card-foreground ring-1 ring-foreground/5 transition-all hover:shadow-md hover:ring-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`rounded-lg p-2.5 ${cat.color}`}>
                  <Icon className="size-5" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {cat.count} components
                </span>
              </div>
              <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {cat.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {cat.description}
              </p>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 rounded-xl border bg-muted/30 p-6">
        <h2 className="text-xl font-semibold">Theme Generator</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Customize colors, radius, and fonts. Preview live changes and export your theme.
        </p>
        <Link
          href="/theme-generator"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Open Theme Generator
        </Link>
      </div>
    </div>
  )
}
