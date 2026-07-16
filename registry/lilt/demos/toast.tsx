"use client";

import { Button } from "@/registry/lilt/ui/button";
import { toast, Toaster } from "@/registry/lilt/ui/toast";

export default function ToastDemo() {
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={() =>
            toast.add({
              description: "Your changes synced a moment ago.",
              title: "Nice. Everything is up to date.",
            })
          }
          variant="soft"
        >
          Show a toast
        </Button>
        <Button
          onClick={() =>
            toast.promise(
              // oxlint-disable-next-line promise/avoid-new -- wraps the timer-based setTimeout API, no async alternative exists
              new Promise<void>((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 1600);
              }),
              {
                error: { title: "Publishing failed. Try again." },
                loading: { title: "Publishing…" },
                success: { title: "Published. Go take a walk." },
              }
            )
          }
          variant="secondary"
        >
          Promise toast
        </Button>
      </div>
    </>
  );
}
