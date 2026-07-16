"use client";

import { Textarea } from "@/registry/lilt/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea placeholder="What's on your mind? Take your time." />
    </div>
  );
}
