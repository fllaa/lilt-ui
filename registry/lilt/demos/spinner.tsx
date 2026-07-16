"use client";

import { Button } from "@/registry/lilt/ui/button";
import { Spinner } from "@/registry/lilt/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <Button disabled>
        <Spinner className="text-current" label={null} size={18} />
        Saving…
      </Button>
      <Spinner />
    </div>
  );
}
