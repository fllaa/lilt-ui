import registry from "@/registry.json";

export interface DocEntry {
  name: string;
  title: string;
  description: string;
  pack: string;
}

const packByName: Record<string, string> = {
  accordion: "Structure",
  alert: "Display",
  avatar: "Display",
  badge: "Display",
  breadcrumb: "Structure",
  button: "Core",
  card: "Core",
  checkbox: "Form",
  dialog: "Core",
  "dropdown-menu": "Overlay",
  field: "Core",
  icons: "Display",
  input: "Form",
  "input-otp": "Form",
  label: "Form",
  "number-field": "Form",
  popover: "Overlay",
  "radio-group": "Form",
  select: "Form",
  separator: "Display",
  skeleton: "Display",
  slider: "Form",
  switch: "Form",
  table: "Structure",
  tabs: "Structure",
  textarea: "Form",
  toast: "Overlay",
  toggle: "Form",
  "toggle-group": "Form",
  tooltip: "Overlay",
};

const packOrder = ["Core", "Form", "Overlay", "Display", "Structure"];

export const docEntries: DocEntry[] = registry.items
  .filter((item) => packByName[item.name])
  .map((item) => ({
    description: item.description,
    name: item.name,
    pack: packByName[item.name],
    title: item.title,
  }));

export const docsByPack = packOrder.map((pack) => ({
  entries: docEntries.filter((entry) => entry.pack === pack),
  pack,
}));

export const getDocEntry = (name: string) =>
  docEntries.find((entry) => entry.name === name);
