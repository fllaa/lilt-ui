"use client";

import type { ComponentProps } from "react";
import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cn } from "@/registry/lilt/lib/utils";

export function Separator({
  className,
  ...props
}: ComponentProps<typeof BaseSeparator>) {
  return (
    <BaseSeparator
      className={cn(
        "shrink-0 bg-[var(--lilt-border)] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}
