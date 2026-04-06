"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Cell,
} from "recharts"
import type { ChartConfig } from "@/components/ui/chart"

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

const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const lineData = [
  { month: "Jan", revenue: 1200, expenses: 800 },
  { month: "Feb", revenue: 1900, expenses: 1200 },
  { month: "Mar", revenue: 1500, expenses: 900 },
  { month: "Apr", revenue: 2400, expenses: 1400 },
  { month: "May", revenue: 2100, expenses: 1600 },
  { month: "Jun", revenue: 3200, expenses: 1800 },
]

const pieData = [
  { name: "Desktop", value: 1260 },
  { name: "Mobile", value: 860 },
  { name: "Tablet", value: 320 },
  { name: "Other", value: 140 },
]

const barChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

const lineChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
} satisfies ChartConfig

const pieChartConfig = {
  Desktop: { label: "Desktop", color: "var(--chart-1)" },
  Mobile: { label: "Mobile", color: "var(--chart-2)" },
  Tablet: { label: "Tablet", color: "var(--chart-3)" },
  Other: { label: "Other", color: "var(--chart-4)" },
} satisfies ChartConfig

const PIE_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)"]

export default function ChartsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Charts & Media</h1>
        <p className="mt-1 text-muted-foreground">Data visualization and media display components.</p>
      </div>

      <Section title="Bar Chart" description="Compare values across categories.">
        <Card>
          <CardHeader>
            <CardTitle>Website Traffic</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={barChartConfig} className="h-56 w-full">
              <BarChart data={barData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="mobile" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Section>

      <Section title="Line Chart" description="Track changes over time.">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
            <CardDescription>Financial overview for the first half of 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={lineChartConfig} className="h-56 w-full">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Section>

      <Section title="Pie Chart" description="Show proportional data.">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Device breakdown for June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <ChartContainer config={pieChartConfig} className="h-48 w-48 shrink-0">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="space-y-2">
              {pieData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div
                    className="size-3 rounded-sm"
                    style={{ backgroundColor: PIE_COLORS[index % PIE_COLORS.length] }}
                  />
                  <span>{item.name}</span>
                  <span className="ml-auto text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section title="Calendar" description="A date picker and calendar component.">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Single date selection</p>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-xl border"
            />
          </div>
        </div>
      </Section>

      <Section title="Carousel" description="A scrollable carousel for cycling through content.">
        <div className="px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }, (_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-muted-foreground/30">{i + 1}</div>
                        <p className="text-sm text-muted-foreground mt-2">Slide {i + 1}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Section>
    </div>
  )
}
