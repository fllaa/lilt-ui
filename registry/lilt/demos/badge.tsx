"use client";

import { Badge } from "@/registry/lilt/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>Fresh</Badge>
      <Badge variant="warning">Needs review</Badge>
      <Badge variant="highlight">Featured</Badge>
      <Badge variant="danger">Failing</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  );
}
