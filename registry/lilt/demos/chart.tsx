"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/registry/lilt/ui/chart';
import type { ChartConfig } from '@/registry/lilt/ui/chart';

const chartData = [
  { drafted: 14, month: "January", published: 6 },
  { drafted: 11, month: "February", published: 8 },
  { drafted: 18, month: "March", published: 12 },
  { drafted: 9, month: "April", published: 7 },
  { drafted: 16, month: "May", published: 11 },
  { drafted: 21, month: "June", published: 15 },
];

const chartConfig = {
  drafted: {
    color: "var(--lilt-chart-1)",
    label: "Drafted",
  },
  published: {
    color: "var(--lilt-chart-2)",
    label: "Published",
  },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <ChartContainer
      aria-label="Bar chart of garden notes drafted and published each month, January through June"
      className="min-h-64 w-full max-w-lg"
      config={chartConfig}
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value: string) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="drafted"
          fill="var(--color-drafted)"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="published"
          fill="var(--color-published)"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
