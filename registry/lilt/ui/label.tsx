import type { LabelHTMLAttributes } from "react";
import { cn } from "@/registry/lilt/lib/utils";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-semibold text-[var(--lilt-text)]", className)}
      {...props}
    />
  );
}
