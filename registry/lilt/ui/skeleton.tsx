import type { HTMLAttributes } from "react";
import { cn } from "@/registry/lilt/lib/utils";

export function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-control-sm)] bg-[var(--lilt-surface-2)]",
        className,
      )}
      {...props}
    />
  );
}
