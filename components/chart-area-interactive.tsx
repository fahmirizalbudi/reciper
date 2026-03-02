"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", views: 222, saved: 150 },
  { date: "2024-04-02", views: 97, saved: 180 },
  { date: "2024-04-03", views: 167, saved: 120 },
  { date: "2024-04-04", views: 242, saved: 260 },
  { date: "2024-04-05", views: 373, saved: 290 },
  { date: "2024-04-06", views: 301, saved: 340 },
  { date: "2024-04-07", views: 245, saved: 180 },
  { date: "2024-04-08", views: 409, saved: 320 },
  { date: "2024-04-09", views: 59, saved: 110 },
  { date: "2024-04-10", views: 261, saved: 190 },
  { date: "2024-04-11", views: 327, saved: 350 },
  { date: "2024-04-12", views: 292, saved: 210 },
  { date: "2024-04-13", views: 342, saved: 380 },
  { date: "2024-04-14", views: 137, saved: 220 },
  { date: "2024-04-15", views: 120, saved: 170 },
  { date: "2024-04-16", views: 138, saved: 190 },
  { date: "2024-04-17", views: 446, saved: 360 },
  { date: "2024-04-18", views: 364, saved: 410 },
  { date: "2024-04-19", views: 243, saved: 180 },
  { date: "2024-04-20", views: 89, saved: 150 },
  { date: "2024-04-21", views: 137, saved: 200 },
  { date: "2024-04-22", views: 224, saved: 170 },
  { date: "2024-04-23", views: 138, saved: 230 },
  { date: "2024-04-24", views: 387, saved: 290 },
  { date: "2024-04-25", views: 215, saved: 250 },
  { date: "2024-04-26", views: 75, saved: 130 },
  { date: "2024-04-27", views: 383, saved: 420 },
  { date: "2024-04-28", views: 122, saved: 180 },
  { date: "2024-04-29", views: 315, saved: 240 },
  { date: "2024-04-30", views: 454, saved: 380 },
  { date: "2024-05-01", views: 165, saved: 220 },
  { date: "2024-05-02", views: 293, saved: 310 },
  { date: "2024-05-03", views: 247, saved: 190 },
  { date: "2024-05-04", views: 385, saved: 420 },
  { date: "2024-05-05", views: 481, saved: 390 },
  { date: "2024-05-06", views: 498, saved: 520 },
  { date: "2024-05-07", views: 388, saved: 300 },
  { date: "2024-05-08", views: 149, saved: 210 },
  { date: "2024-05-09", views: 227, saved: 180 },
  { date: "2024-05-10", views: 293, saved: 330 },
  { date: "2024-05-11", views: 335, saved: 270 },
  { date: "2024-05-12", views: 197, saved: 240 },
  { date: "2024-05-13", views: 197, saved: 160 },
  { date: "2024-05-14", views: 448, saved: 490 },
  { date: "2024-05-15", views: 473, saved: 380 },
  { date: "2024-05-16", views: 338, saved: 400 },
  { date: "2024-05-17", views: 499, saved: 420 },
  { date: "2024-05-18", views: 315, saved: 350 },
  { date: "2024-05-19", views: 235, saved: 180 },
  { date: "2024-05-20", views: 177, saved: 230 },
  { date: "2024-05-21", views: 82, saved: 140 },
  { date: "2024-05-22", views: 81, saved: 120 },
  { date: "2024-05-23", views: 252, saved: 290 },
  { date: "2024-05-24", views: 294, saved: 220 },
  { date: "2024-05-25", views: 201, saved: 250 },
  { date: "2024-05-26", views: 213, saved: 170 },
  { date: "2024-05-27", views: 420, saved: 460 },
  { date: "2024-05-28", views: 233, saved: 190 },
  { date: "2024-05-29", views: 78, saved: 130 },
  { date: "2024-05-30", views: 340, saved: 280 },
  { date: "2024-05-31", views: 178, saved: 230 },
  { date: "2024-06-01", views: 178, saved: 200 },
  { date: "2024-06-02", views: 470, saved: 410 },
  { date: "2024-06-03", views: 103, saved: 160 },
  { date: "2024-06-04", views: 439, saved: 380 },
  { date: "2024-06-05", views: 88, saved: 140 },
  { date: "2024-06-06", views: 294, saved: 250 },
  { date: "2024-06-07", views: 323, saved: 370 },
  { date: "2024-06-08", views: 385, saved: 320 },
  { date: "2024-06-09", views: 438, saved: 480 },
  { date: "2024-06-10", views: 155, saved: 200 },
  { date: "2024-06-11", views: 92, saved: 150 },
  { date: "2024-06-12", views: 492, saved: 420 },
  { date: "2024-06-13", views: 81, saved: 130 },
  { date: "2024-06-14", views: 426, saved: 380 },
  { date: "2024-06-15", views: 307, saved: 350 },
  { date: "2024-06-16", views: 371, saved: 310 },
  { date: "2024-06-17", views: 475, saved: 520 },
  { date: "2024-06-18", views: 107, saved: 170 },
  { date: "2024-06-19", views: 341, saved: 290 },
  { date: "2024-06-20", views: 408, saved: 450 },
  { date: "2024-06-21", views: 169, saved: 210 },
  { date: "2024-06-22", views: 317, saved: 270 },
  { date: "2024-06-23", views: 480, saved: 530 },
  { date: "2024-06-24", views: 132, saved: 180 },
  { date: "2024-06-25", views: 141, saved: 190 },
  { date: "2024-06-26", views: 434, saved: 380 },
  { date: "2024-06-27", views: 448, saved: 490 },
  { date: "2024-06-28", views: 149, saved: 200 },
  { date: "2024-06-29", views: 103, saved: 160 },
  { date: "2024-06-30", views: 446, saved: 400 },
]

const chartConfig = {
  interact: {
    label: "Interactions",
  },
  views: {
    label: "Views",
    color: "var(--primary)",
  },
  saved: {
    label: "Saved",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Recipe Interactions</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-views)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-views)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSaved" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-saved)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-saved)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="saved"
              type="natural"
              fill="url(#fillSaved)"
              stroke="var(--color-saved)"
              stackId="a"
            />
            <Area
              dataKey="views"
              type="natural"
              fill="url(#fillViews)"
              stroke="var(--color-views)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
