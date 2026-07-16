"use client";

import { Button } from "@/registry/lilt/ui/button";
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/registry/lilt/ui/empty-state";
import { SparkIcon } from "@/registry/lilt/ui/icons";

export default function EmptyStateDemo() {
  return (
    <EmptyState className="w-full max-w-md">
      <EmptyStateIcon>
        <SparkIcon size={24} />
      </EmptyStateIcon>
      <EmptyStateTitle>Nothing here yet. Lovely, actually.</EmptyStateTitle>
      <EmptyStateDescription>
        A blank page is just a project that hasn&apos;t happened yet. Start your
        first one and watch this space fill up.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button variant="soft">Start a project</Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
