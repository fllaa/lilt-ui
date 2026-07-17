"use client";

import type {
  Column,
  ColumnDef,
  RowSelectionState,
  SortDirection,
  SortingState,
  Table as TanstackTable,
  TableOptions,
  VisibilityState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { Button } from "@/registry/lilt/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/lilt/ui/dropdown-menu";
import { ChevronIcon, ChevronsUpDownIcon } from "@/registry/lilt/ui/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/lilt/ui/table";

const ariaSort = (
  sorted: SortDirection | false
): "ascending" | "descending" | undefined => {
  if (sorted === "asc") {
    return "ascending";
  }
  if (sorted === "desc") {
    return "descending";
  }
  return undefined;
};

const sortIcon = (sorted: SortDirection | false) => {
  if (sorted === "asc") {
    return <ChevronIcon className="rotate-180" size={14} />;
  }
  if (sorted === "desc") {
    return <ChevronIcon size={14} />;
  }
  return <ChevronsUpDownIcon size={14} />;
};

export interface DataTableColumnHeaderProps<TData, TValue> {
  className?: string;
  column: Column<TData, TValue>;
  title: string;
}

export const DataTableColumnHeader = <TData, TValue>({
  className,
  column,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <span className={className}>{title}</span>;
  }
  const sorted = column.getIsSorted();
  return (
    <button
      className={cn(
        "-ml-2 inline-flex min-h-8 items-center gap-1.5 rounded-full px-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]",
        className
      )}
      onClick={() => column.toggleSorting(sorted === "asc")}
      type="button"
    >
      {title}
      {sortIcon(sorted)}
    </button>
  );
};

export interface DataTableViewOptionsProps<TData> {
  table: TanstackTable<TData>;
}

export const DataTableViewOptions = <TData,>({
  table,
}: DataTableViewOptionsProps<TData>) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      render={
        <Button icon={<ChevronIcon size={16} />} size="sm" variant="secondary">
          Columns
        </Button>
      }
    />
    <DropdownMenuContent align="end">
      {table
        .getAllColumns()
        .filter((column) => column.getCanHide())
        .map((column) => (
          <DropdownMenuCheckboxItem
            checked={column.getIsVisible()}
            className="capitalize"
            key={column.id}
            onCheckedChange={(checked) => column.toggleVisibility(checked)}
          >
            {column.id}
          </DropdownMenuCheckboxItem>
        ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export interface DataTablePaginationProps<TData> {
  className?: string;
  table: TanstackTable<TData>;
}

export const DataTablePagination = <TData,>({
  className,
  table,
}: DataTablePaginationProps<TData>) => (
  <div
    className={cn(
      "flex flex-wrap items-center justify-between gap-3 pt-3",
      className
    )}
  >
    <p className="text-sm text-[var(--lilt-text-muted)]">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected
    </p>
    <div className="flex items-center gap-2">
      <span className="pr-1 text-sm text-[var(--lilt-text-muted)]">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {Math.max(table.getPageCount(), 1)}
      </span>
      <Button
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
        size="sm"
        variant="secondary"
      >
        Previous
      </Button>
      <Button
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
        size="sm"
        variant="secondary"
      >
        Next
      </Button>
    </div>
  </div>
);

const NO_INITIAL_SORTING: SortingState = [];

export interface DataTableProps<TData, TValue> {
  className?: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  emptyMessage?: string;
  getRowId?: TableOptions<TData>["getRowId"];
  initialSorting?: SortingState;
  pageSize?: number;
  toolbar?: (table: TanstackTable<TData>) => ReactNode;
}

// oxlint-disable-next-line react/react-compiler -- TanStack Table's instance is deliberately unmemoizable; the compiler skips this component, matching upstream shadcn usage
export const DataTable = <TData, TValue>({
  className,
  columns,
  data,
  emptyMessage = "Nothing here yet.",
  getRowId,
  initialSorting = NO_INITIAL_SORTING,
  pageSize = 10,
  toolbar,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId,
    getSortedRowModel: getSortedRowModel(),
    initialState: { pagination: { pageSize } },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: { columnVisibility, rowSelection, sorting },
  });

  const { rows } = table.getRowModel();

  return (
    <div className={cn("w-full", className)}>
      {toolbar ? (
        <div className="flex items-center justify-end gap-2 pb-3">
          {toolbar(table)}
        </div>
      ) : null}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="hover:bg-transparent" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  aria-sort={ariaSort(header.column.getIsSorted())}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                className="data-[state=selected]:bg-[var(--lilt-primary-soft)]"
                data-state={row.getIsSelected() ? "selected" : undefined}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell
                className="h-24 text-center text-[var(--lilt-text-muted)]"
                colSpan={columns.length}
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
};
