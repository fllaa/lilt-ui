import registry from "@/registry.json";

export interface DocEntry {
  name: string;
  title: string;
  description: string;
  pack: string;
}

const packByName: Record<string, string> = {
  button: "Core",
  card: "Core",
  dialog: "Core",
  field: "Core",
  "segmented-nav": "Core",
  label: "Form",
  input: "Form",
  textarea: "Form",
  checkbox: "Form",
  "radio-group": "Form",
  switch: "Form",
  select: "Form",
  tooltip: "Overlay",
  popover: "Overlay",
  "dropdown-menu": "Overlay",
  toast: "Overlay",
  badge: "Display",
  avatar: "Display",
  alert: "Display",
  skeleton: "Display",
  separator: "Display",
  icons: "Display",
  tabs: "Structure",
  accordion: "Structure",
  table: "Structure",
  breadcrumb: "Structure",
};

const packOrder = ["Core", "Form", "Overlay", "Display", "Structure"];

export const docEntries: DocEntry[] = registry.items
  .filter((item) => packByName[item.name])
  .map((item) => ({
    name: item.name,
    title: item.title,
    description: item.description,
    pack: packByName[item.name],
  }));

export const docsByPack = packOrder.map((pack) => ({
  pack,
  entries: docEntries.filter((entry) => entry.pack === pack),
}));

export function getDocEntry(name: string) {
  return docEntries.find((entry) => entry.name === name);
}
