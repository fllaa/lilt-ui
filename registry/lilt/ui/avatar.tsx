"use client";

import type { ComponentProps } from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "@/registry/lilt/lib/utils";

export function Avatar({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Root>) {
  return (
    <BaseAvatar.Root
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full border border-[var(--lilt-border)]",
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center bg-[var(--lilt-primary-soft)] font-display text-sm font-semibold text-[var(--lilt-primary-text)]",
        className,
      )}
      {...props}
    />
  );
}
