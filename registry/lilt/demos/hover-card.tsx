"use client";

import { Avatar, AvatarFallback } from "@/registry/lilt/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/lilt/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <p className="max-w-[44ch] leading-7 text-[var(--lilt-text-muted)]">
        Every component here was tuned by{" "}
        <HoverCardTrigger className="text-[var(--lilt-text)]" href="#">
          @lilt
        </HoverCardTrigger>{" "}
        — hover the handle to say hello.
      </p>
      <HoverCardContent>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>LT</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-display text-base font-semibold tracking-[-0.02em]">
              Lilt
            </p>
            <p className="text-sm text-[var(--lilt-text-subtle)]">@lilt</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--lilt-text-muted)]">
          A design language with a spring in its step. Warm paper, one pine
          accent, borders over shadows — always.
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}
