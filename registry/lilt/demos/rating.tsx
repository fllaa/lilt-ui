"use client";

import { useState } from "react";

import { Rating } from "@/registry/lilt/ui/rating";

export default function RatingDemo() {
  const [stars, setStars] = useState(3);

  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <Rating
          label="Rate this seed packet"
          onValueChange={setStars}
          value={stars}
        />
        <p className="text-sm text-[var(--lilt-text-muted)]">
          You gave it {stars} of 5. The marigolds are flattered.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]">
          Garden club average
        </span>
        <Rating readOnly value={4} />
      </div>
    </div>
  );
}
