import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
} from "react";
import { ArrowIcon } from "@/registry/lilt/ui/icons";
import { cn } from "@/registry/lilt/lib/utils";

export function Breadcrumb(props: HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Breadcrumb" {...props} />;
}

export function BreadcrumbList({
  className,
  ...props
}: OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-2 text-sm text-[var(--lilt-text-muted)]",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({
  className,
  ...props
}: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    />
  );
}

export function BreadcrumbLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "rounded-[var(--radius-control-sm)] px-1 py-0.5 outline-none transition-colors hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbPage({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-current="page"
      className={cn("px-1 py-0.5 font-semibold text-[var(--lilt-text)]", className)}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({
  className,
  ...props
}: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      aria-hidden="true"
      className={cn("text-[var(--lilt-text-subtle)]", className)}
      role="presentation"
      {...props}
    >
      <ArrowIcon size={14} />
    </li>
  );
}
