"use client";

import { useState } from "react";

import { insertChildren, moveNode } from "@/registry/lilt/lib/tree";
import type { TreeMoveDetail, TreeNode } from "@/registry/lilt/lib/tree";
import { FileIcon, FolderIcon } from "@/registry/lilt/ui/icons";
import {
  Tree,
  TreeItem,
  TreeItemGroup,
  TreeItemLabel,
  TreeView,
} from "@/registry/lilt/ui/tree";

const folder = <FolderIcon size={16} />;
const file = <FileIcon size={16} />;

const initialFiles: TreeNode[] = [
  {
    children: [
      { icon: file, label: "basil.md", value: "basil" },
      { icon: file, label: "coriander.md", value: "coriander" },
      {
        children: [
          { icon: file, label: "spearmint.md", value: "spearmint" },
          { icon: file, label: "peppermint.md", value: "peppermint" },
        ],
        icon: folder,
        label: "mint",
        value: "mint",
      },
    ],
    icon: folder,
    label: "herbs",
    value: "herbs",
  },
  {
    // No children yet — expanding it calls onLoadChildren.
    hasChildren: true,
    icon: folder,
    label: "last summer",
    value: "archive",
  },
  { icon: file, label: "watering-rota.md", value: "rota" },
];

const permissions = [
  {
    children: [
      { label: "Water the seedlings", value: "water" },
      { label: "Move trays around", value: "trays" },
      { label: "Adjust the thermostat", value: "thermostat" },
    ],
    label: "Greenhouse",
    value: "greenhouse",
  },
  {
    children: [
      { label: "Borrow the good trowel", value: "trowel" },
      { label: "Take the wheelbarrow home", value: "wheelbarrow" },
    ],
    label: "Shed",
    value: "shed",
  },
];

const renameNode = (
  nodes: TreeNode[],
  value: string,
  label: string
): TreeNode[] =>
  nodes.map((node) => {
    if (node.value === value) {
      return { ...node, label };
    }
    return node.children
      ? { ...node, children: renameNode(node.children, value, label) }
      : node;
  });

const sleep = (ms: number) =>
  // oxlint-disable-next-line promise/avoid-new -- the demo fakes network latency so the lazy branch actually shows its spinner
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export default function TreeDemo() {
  const [files, setFiles] = useState(initialFiles);
  const [selected, setSelected] = useState<string[]>(["basil"]);
  const [expanded, setExpanded] = useState<string[]>(["herbs"]);
  const [granted, setGranted] = useState<string[]>(["water", "trays"]);

  const handleMove = (detail: TreeMoveDetail) =>
    setFiles((current) => moveNode(current, detail));

  const handleRename = (value: string, label: string) =>
    setFiles((current) => renameNode(current, value, label));

  const handleLoad = async (value: string) => {
    await sleep(900);
    setFiles((current) =>
      insertChildren(current, value, [
        { icon: file, label: "tomatoes-that-failed.md", value: "tomatoes" },
        { icon: file, label: "one-good-courgette.md", value: "courgette" },
      ])
    );
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <div className="flex flex-col gap-2">
        <TreeView
          aria-label="Garden notes"
          expanded={expanded}
          guides
          items={files}
          onExpandedChange={setExpanded}
          onLoadChildren={handleLoad}
          onMove={handleMove}
          onRename={handleRename}
          onSelectedChange={setSelected}
          renamable
          reorderable
          selected={selected}
        />
        <p className="text-xs text-[var(--lilt-text-muted)]">
          Drag a note somewhere better, or press F2 to rename it.
          Alt+Shift+arrows move things without a mouse. &ldquo;last
          summer&rdquo; loads when asked.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Tree
          aria-label="Volunteer permissions"
          checkboxSelection
          defaultExpanded={["greenhouse", "shed"]}
          onSelectedChange={setGranted}
          selected={granted}
        >
          {permissions.map((group) => (
            <TreeItem key={group.value} value={group.value}>
              <TreeItemLabel>{group.label}</TreeItemLabel>
              <TreeItemGroup>
                {group.children.map((item) => (
                  <TreeItem key={item.value} value={item.value}>
                    <TreeItemLabel>{item.label}</TreeItemLabel>
                  </TreeItem>
                ))}
              </TreeItemGroup>
            </TreeItem>
          ))}
        </Tree>
        <p className="text-xs text-[var(--lilt-text-muted)]">
          Tick a heading and everything under it follows; untick one child and
          the heading goes half-lit.
        </p>
      </div>
    </div>
  );
}
