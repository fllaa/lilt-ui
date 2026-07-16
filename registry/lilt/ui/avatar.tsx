"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Avatar = ({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Root>) => (
  <BaseAvatar.Root
    className={cn(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full border border-[var(--lilt-border)]",
      className
    )}
    {...props}
  />
);

export const AvatarImage = ({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Image>) => (
  <BaseAvatar.Image
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
);

export const AvatarFallback = ({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Fallback>) => (
  <BaseAvatar.Fallback
    className={cn(
      "flex h-full w-full items-center justify-center bg-[var(--lilt-primary-soft)] font-display text-sm font-semibold text-[var(--lilt-primary-text)]",
      className
    )}
    {...props}
  />
);
