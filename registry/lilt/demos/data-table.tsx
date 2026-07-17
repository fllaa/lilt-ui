"use client";

import type { ColumnDef, Table } from "@tanstack/react-table";

import { Badge } from "@/registry/lilt/ui/badge";
import type { BadgeVariant } from "@/registry/lilt/ui/badge";
import { Checkbox } from "@/registry/lilt/ui/checkbox";
import {
  DataTable,
  DataTableColumnHeader,
  DataTableViewOptions,
} from "@/registry/lilt/ui/data-table";

interface WritingProject {
  id: string;
  status: "Draft" | "Fresh" | "Needs review";
  title: string;
  updated: string;
  words: number;
}

const projects: WritingProject[] = [
  {
    id: "meadow",
    status: "Fresh",
    title: "Meadow field notes",
    updated: "2 hours ago",
    words: 1240,
  },
  {
    id: "seed-catalog",
    status: "Needs review",
    title: "Seed catalog captions",
    updated: "Yesterday",
    words: 860,
  },
  {
    id: "pressed-flowers",
    status: "Draft",
    title: "Pressed-flower how-to",
    updated: "3 days ago",
    words: 430,
  },
  {
    id: "greenhouse",
    status: "Fresh",
    title: "Greenhouse tour script",
    updated: "This morning",
    words: 1975,
  },
  {
    id: "letterpress",
    status: "Draft",
    title: "Letterpress love letter",
    updated: "Last week",
    words: 320,
  },
  {
    id: "herb-spiral",
    status: "Needs review",
    title: "Herb spiral labels",
    updated: "4 days ago",
    words: 540,
  },
  {
    id: "rain-journal",
    status: "Fresh",
    title: "Rain journal, April",
    updated: "Tuesday",
    words: 2210,
  },
  {
    id: "wax-seals",
    status: "Draft",
    title: "Wax seal starter guide",
    updated: "2 weeks ago",
    words: 780,
  },
  {
    id: "compost",
    status: "Needs review",
    title: "Compost pep talk",
    updated: "5 days ago",
    words: 615,
  },
  {
    id: "ink-swatches",
    status: "Fresh",
    title: "Ink swatch notes",
    updated: "Just now",
    words: 1150,
  },
];

const statusVariant = (status: WritingProject["status"]): BadgeVariant => {
  if (status === "Needs review") {
    return "warning";
  }
  if (status === "Draft") {
    return "outline";
  }
  return "default";
};

const columns: ColumnDef<WritingProject>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(checked)}
      />
    ),
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked)}
      />
    ),
    id: "select",
  },
  {
    accessorKey: "title",
    cell: ({ row }) => (
      <span className="font-semibold">{row.original.title}</span>
    ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge variant={statusVariant(row.original.status)}>
        {row.original.status}
      </Badge>
    ),
    header: "Status",
  },
  {
    accessorKey: "words",
    cell: ({ row }) => (
      <div className="text-right tabular-nums">
        {row.original.words.toLocaleString()}
      </div>
    ),
    header: ({ column }) => (
      <div className="flex justify-end">
        <DataTableColumnHeader
          className="-mr-2 ml-0"
          column={column}
          title="Words"
        />
      </div>
    ),
  },
  {
    accessorKey: "updated",
    cell: ({ row }) => (
      <span className="text-[var(--lilt-text-muted)]">
        {row.original.updated}
      </span>
    ),
    header: "Updated",
  },
];

const renderToolbar = (table: Table<WritingProject>) => (
  <DataTableViewOptions table={table} />
);

export default function DataTableDemo() {
  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={columns}
        data={projects}
        getRowId={(project) => project.id}
        pageSize={5}
        toolbar={renderToolbar}
      />
    </div>
  );
}
