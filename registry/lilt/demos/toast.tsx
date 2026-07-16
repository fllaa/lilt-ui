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
              title: "Nice. Everything is up to date.",
              description: "Your changes synced a moment ago.",
            })
          }
          variant="soft"
        >
          Show a toast
        </Button>
        <Button
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 1600)),
              {
                loading: { title: "Publishing…" },
                success: { title: "Published. Go take a walk." },
                error: { title: "Publishing failed. Try again." },
              },
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
