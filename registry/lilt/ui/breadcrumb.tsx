import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
} from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { ArrowIcon } from "@/registry/lilt/ui/icons";

export const Breadcrumb = (props: HTMLAttributes<HTMLElement>) => (
  <nav aria-label="Breadcrumb" {...props} />
);

export const BreadcrumbList = ({
  className,
  ...props
}: OlHTMLAttributes<HTMLOListElement>) => (
  <ol
    className={cn(
      "flex flex-wrap items-center gap-2 text-sm text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const BreadcrumbItem = ({
  className,
  ...props
}: LiHTMLAttributes<HTMLLIElement>) => (
  <li className={cn("inline-flex items-center gap-2", className)} {...props} />
);

export const BreadcrumbLink = ({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={cn(
      "rounded-[var(--radius-control-sm)] px-1 py-0.5 outline-none transition-colors hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]",
      className
    )}
    {...props}
  >
    {children}
  </a>
);

export const BreadcrumbPage = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-current="page"
    className={cn(
      "px-1 py-0.5 font-semibold text-[var(--lilt-text)]",
      className
    )}
    {...props}
  />
);

export const BreadcrumbSeparator = ({
  className,
  ...props
}: LiHTMLAttributes<HTMLLIElement>) => (
  <li
    aria-hidden="true"
    className={cn("text-[var(--lilt-text-subtle)]", className)}
    role="presentation"
    {...props}
  >
    <ArrowIcon size={14} />
  </li>
);
