"use client";

import { Badge } from "@/registry/lilt/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/lilt/ui/table";

const projects = [
  { name: "Meadow", status: "Fresh", updated: "2 hours ago" },
  { name: "Harbor", status: "Needs review", updated: "Yesterday" },
  { name: "Quilt", status: "Draft", updated: "3 days ago" },
];

export default function TableDemo() {
  return (
    <div className="w-full max-w-lg">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell className="font-semibold">{project.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === "Needs review"
                      ? "warning"
                      : project.status === "Draft"
                        ? "outline"
                        : "default"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell className="text-[var(--lilt-text-muted)]">
                {project.updated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
