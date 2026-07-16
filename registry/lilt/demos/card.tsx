"use client";

import { Button } from "@/registry/lilt/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/lilt/ui/card";

export default function CardDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Weekly digest</CardTitle>
          <CardDescription>
            A calm summary of what changed, every Friday.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-[var(--lilt-text-muted)]">
          Nothing urgent. Three drafts moved forward.
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="soft">
            Read it
          </Button>
        </CardFooter>
      </Card>
      <Card interactive>
        <CardHeader>
          <CardTitle>Interactive card</CardTitle>
          <CardDescription>
            Hover me — a 2px lift, nothing more dramatic.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
