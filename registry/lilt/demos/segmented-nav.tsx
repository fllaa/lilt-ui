"use client";

import { useState } from "react";

import { SegmentedNav } from "@/registry/lilt/ui/segmented-nav";

const items = [
  { id: "overview", label: "Overview" },
  { id: "activity", label: "Activity" },
  { id: "settings", label: "Settings" },
];

export default function SegmentedNavDemo() {
  const [selected, setSelected] = useState("overview");
  return (
    <SegmentedNav items={items} onSelect={setSelected} selected={selected} />
  );
}
