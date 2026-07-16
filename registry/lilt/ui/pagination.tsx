import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
} from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { ArrowIcon } from "@/registry/lilt/ui/icons";

export const Pagination = (props: HTMLAttributes<HTMLElement>) => (
  <nav aria-label="Pagination" {...props} />
);

export const PaginationList = ({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={cn("flex flex-wrap items-center gap-1", className)}
    {...props}
  />
);

export const PaginationItem = (props: LiHTMLAttributes<HTMLLIElement>) => (
  <li {...props} />
);

export interface PaginationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks this link as the current page via `aria-current="page"`. */
  isActive?: boolean;
}

export const PaginationLink = ({
  children,
  className,
  isActive = false,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-1 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] aria-disabled:pointer-events-none aria-disabled:opacity-45 aria-[current=page]:bg-[var(--lilt-button)] aria-[current=page]:text-[var(--lilt-button-text)]",
      className
    )}
    {...props}
  >
    {children}
  </a>
);

export const PaginationPrevious = ({
  className,
  ...props
}: PaginationLinkProps) => (
  <PaginationLink className={cn("gap-2 px-4", className)} {...props}>
    <ArrowIcon className="rotate-180" size={16} />
    Previous
  </PaginationLink>
);

export const PaginationNext = ({
  className,
  ...props
}: PaginationLinkProps) => (
  <PaginationLink className={cn("gap-2 px-4", className)} {...props}>
    Next
    <ArrowIcon size={16} />
  </PaginationLink>
);

export const PaginationEllipsis = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden="true"
    className={cn(
      "flex min-h-11 min-w-11 items-center justify-center text-[var(--lilt-text-subtle)]",
      className
    )}
    {...props}
  >
    &#8230;
    <span className="sr-only">More pages</span>
  </span>
);
