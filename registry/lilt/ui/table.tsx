import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Table = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableElement>) => (
  <div className="w-full overflow-x-auto rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)]">
    <table
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
);

export const TableHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead
    className={cn("border-b border-[var(--lilt-border)]", className)}
    {...props}
  />
);

export const TableBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);

export const TableFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <tfoot
    className={cn(
      "border-t border-[var(--lilt-border)] bg-[var(--lilt-surface-2)] font-medium",
      className
    )}
    {...props}
  />
);

export const TableRow = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    className={cn(
      "border-b border-[var(--lilt-border)] transition-colors hover:bg-[var(--lilt-surface-2)]",
      className
    )}
    {...props}
  />
);

export const TableHead = ({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={cn(
      "h-12 px-4 text-left align-middle font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const TableCell = ({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn("px-4 py-3 align-middle", className)} {...props} />
);

export const TableCaption = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableCaptionElement>) => (
  <caption
    className={cn("mt-3 mb-3 text-sm text-[var(--lilt-text-muted)]", className)}
    {...props}
  />
);
