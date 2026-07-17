"use client";

import { createContext, useContext, useId, useMemo } from "react";
import type {
  ComponentProps,
  ComponentType,
  CSSProperties,
  ReactNode,
} from "react";
import * as RechartsPrimitive from "recharts";
import type { TooltipValueType } from "recharts";

import { cn } from "@/registry/lilt/lib/utils";

/**
 * Per-theme CSS selectors for the generated chart color variables.
 * Dark honors both the `.dark` class and `[data-theme="dark"]` markup,
 * matching the widened dark variant in theme/lilt.css.
 */
const THEME_SELECTORS = {
  dark: (id: string) =>
    `.dark [data-chart=${id}], [data-theme="dark"] [data-chart=${id}]`,
  light: (id: string) => `[data-chart=${id}]`,
} as const;

const INITIAL_DIMENSION = { height: 200, width: 320 } as const;

type TooltipNameType = number | string;

export type ChartConfig = Record<
  string,
  {
    label?: ReactNode;
    icon?: ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEME_SELECTORS, string> }
  )
>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

const useChart = () => {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
};

/** Helper to extract an item's config entry from a tooltip/legend payload. */
const getPayloadConfigFromPayload = (
  config: ChartConfig,
  payload: unknown,
  key: string
) => {
  if (typeof payload !== "object" || payload === null) {
    return;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
};

export const ChartStyle = ({
  config,
  id,
}: {
  id: string;
  config: ChartConfig;
}) => {
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme ?? itemConfig.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      // oxlint-disable-next-line react/no-danger -- the generated CSS is built entirely from ChartConfig color values; no user markup is injected
      dangerouslySetInnerHTML={{
        __html: (
          Object.keys(THEME_SELECTORS) as (keyof typeof THEME_SELECTORS)[]
        )
          .map(
            (theme) => `
${THEME_SELECTORS[theme](id)} {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme] ?? itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

export const ChartContainer = ({
  children,
  className,
  config,
  id,
  initialDimension = INITIAL_DIMENSION,
  ...props
}: ComponentProps<"div"> & {
  config: ChartConfig;
  children: ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
  initialDimension?: {
    width: number;
    height: number;
  };
}) => {
  const uniqueId = useId();
  const chartId = `chart-${id ?? uniqueId.replaceAll(":", "")}`;
  const contextValue = useMemo(() => ({ config }), [config]);

  return (
    <ChartContext.Provider value={contextValue}>
      <div
        className={cn(
          "flex aspect-video justify-center text-xs text-[var(--lilt-text)] [&_.recharts-cartesian-axis-tick_text]:fill-[var(--lilt-text-subtle)] [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[var(--lilt-border)] [&_.recharts-curve.recharts-tooltip-cursor]:stroke-[var(--lilt-border)] [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-[var(--lilt-border)] [&_.recharts-radial-bar-background-sector]:fill-[var(--lilt-surface-2)] [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-[var(--lilt-surface-2)] [&_.recharts-reference-line_[stroke='#ccc']]:stroke-[var(--lilt-border)] [&_.recharts-sector]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-none [&_.recharts-surface:focus-visible]:ring-2 [&_.recharts-surface:focus-visible]:ring-[var(--lilt-focus)]",
          className
        )}
        data-chart={chartId}
        data-slot="chart"
        {...props}
      >
        <ChartStyle config={config} id={chartId} />
        <RechartsPrimitive.ResponsiveContainer
          initialDimension={initialDimension}
        >
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
};

export const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipItemValue = ({ value }: { value: unknown }) => {
  if (value === null || value === undefined) {
    return null;
  }
  return (
    <span className="font-medium tabular-nums text-[var(--lilt-text)]">
      {typeof value === "number" ? value.toLocaleString() : String(value)}
    </span>
  );
};

const ChartTooltipIndicator = ({
  color,
  indicator,
  nestLabel,
}: {
  color?: string;
  indicator: "dashed" | "dot" | "line";
  nestLabel: boolean;
}) => (
  <div
    className={cn(
      "shrink-0 rounded-full border-[var(--color-border)] bg-[var(--color-bg)]",
      {
        "my-0.5": nestLabel && indicator === "dashed",
        "size-2.5": indicator === "dot",
        "w-0 border-[1.5px] border-dashed bg-transparent":
          indicator === "dashed",
        "w-1": indicator === "line",
      }
    )}
    style={
      {
        "--color-bg": color,
        "--color-border": color,
      } as CSSProperties
    }
  />
);

export const ChartTooltipContent = ({
  active,
  className,
  color,
  formatter,
  hideIndicator = false,
  hideLabel = false,
  indicator = "dot",
  label,
  labelClassName,
  labelFormatter,
  labelKey,
  nameKey,
  payload,
}: ComponentProps<typeof RechartsPrimitive.Tooltip> &
  ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  } & Omit<
    RechartsPrimitive.DefaultTooltipContentProps<
      TooltipValueType,
      TooltipNameType
    >,
    "accessibilityLayer"
  >) => {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? (config[label]?.label ?? label)
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-display font-semibold", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return (
      <div className={cn("font-display font-semibold", labelClassName)}>
        {value}
      </div>
    );
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!(active && payload?.length)) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "grid min-w-32 items-start gap-1.5 rounded-[var(--radius-control-sm)] border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] px-3 py-2 text-xs text-[var(--lilt-text)]",
        className
      )}
    >
      {nestLabel ? null : tooltipLabel}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color ?? item.payload?.fill ?? item.color;

            return (
              <div
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:size-2.5 [&>svg]:text-[var(--lilt-text-subtle)]",
                  indicator === "dot" && "items-center"
                )}
                key={index}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <ChartTooltipIndicator
                          color={indicatorColor}
                          indicator={indicator}
                          nestLabel={nestLabel}
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between gap-3 leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-[var(--lilt-text-muted)]">
                          {itemConfig?.label ?? item.name}
                        </span>
                      </div>
                      <ChartTooltipItemValue value={item.value} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const ChartLegend = RechartsPrimitive.Legend;

export const ChartLegendContent = ({
  className,
  hideIcon = false,
  nameKey,
  payload,
  verticalAlign = "bottom",
}: ComponentProps<"div"> & {
  hideIcon?: boolean;
  nameKey?: string;
} & RechartsPrimitive.DefaultLegendContentProps) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 text-sm text-[var(--lilt-text-muted)]",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item, index) => {
          const key = `${nameKey ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              className="flex items-center gap-1.5 [&>svg]:size-3 [&>svg]:text-[var(--lilt-text-subtle)]"
              key={index}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="size-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
};
