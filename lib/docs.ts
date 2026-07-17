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
  "alert-dialog": "Overlay",
  autocomplete: "Form",
  avatar: "Display",
  badge: "Display",
  breadcrumb: "Structure",
  button: "Core",
  calendar: "Data",
  card: "Core",
  carousel: "Display",
  chart: "Data",
  checkbox: "Form",
  "checkbox-group": "Form",
  collapsible: "Structure",
  combobox: "Form",
  "context-menu": "Overlay",
  "data-table": "Data",
  "date-picker": "Data",
  dialog: "Core",
  drawer: "Overlay",
  "dropdown-menu": "Overlay",
  "empty-state": "Display",
  field: "Core",
  fieldset: "Form",
  "file-upload": "Form",
  form: "Form",
  "hover-card": "Overlay",
  icons: "Display",
  input: "Form",
  "input-otp": "Form",
  kbd: "Display",
  label: "Form",
  menubar: "Overlay",
  "number-field": "Form",
  pagination: "Structure",
  popover: "Overlay",
  progress: "Display",
  "radio-group": "Form",
  rating: "Form",
  "scroll-area": "Structure",
  select: "Form",
  separator: "Display",
  skeleton: "Display",
  slider: "Form",
  spinner: "Display",
  switch: "Form",
  table: "Structure",
  tabs: "Structure",
  "tags-input": "Form",
  textarea: "Form",
  toast: "Overlay",
  toggle: "Form",
  "toggle-group": "Form",
  tooltip: "Overlay",
};

const packOrder = ["Core", "Form", "Overlay", "Display", "Structure", "Data"];

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
