import type { ComponentType } from "react";

import AccordionDemo from "./accordion";
import AlertDemo from "./alert";
import AlertDialogDemo from "./alert-dialog";
import AvatarDemo from "./avatar";
import BadgeDemo from "./badge";
import BreadcrumbDemo from "./breadcrumb";
import ButtonDemo from "./button";
import CardDemo from "./card";
import CheckboxDemo from "./checkbox";
import CollapsibleDemo from "./collapsible";
import ComboboxDemo from "./combobox";
import ContextMenuDemo from "./context-menu";
import DialogDemo from "./dialog";
import DrawerDemo from "./drawer";
import DropdownMenuDemo from "./dropdown-menu";
import EmptyStateDemo from "./empty-state";
import FieldDemo from "./field";
import HoverCardDemo from "./hover-card";
import IconsDemo from "./icons";
import InputDemo from "./input";
import InputOtpDemo from "./input-otp";
import KbdDemo from "./kbd";
import LabelDemo from "./label";
import MenubarDemo from "./menubar";
import NumberFieldDemo from "./number-field";
import PaginationDemo from "./pagination";
import PopoverDemo from "./popover";
import ProgressDemo from "./progress";
import RadioGroupDemo from "./radio-group";
import ScrollAreaDemo from "./scroll-area";
import SelectDemo from "./select";
import SeparatorDemo from "./separator";
import SkeletonDemo from "./skeleton";
import SliderDemo from "./slider";
import SpinnerDemo from "./spinner";
import SwitchDemo from "./switch";
import TableDemo from "./table";
import TabsDemo from "./tabs";
import TextareaDemo from "./textarea";
import ToastDemo from "./toast";
import ToggleDemo from "./toggle";
import ToggleGroupDemo from "./toggle-group";
import TooltipDemo from "./tooltip";

export const demos: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  collapsible: CollapsibleDemo,
  combobox: ComboboxDemo,
  "context-menu": ContextMenuDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  "empty-state": EmptyStateDemo,
  field: FieldDemo,
  "hover-card": HoverCardDemo,
  icons: IconsDemo,
  input: InputDemo,
  "input-otp": InputOtpDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  menubar: MenubarDemo,
  "number-field": NumberFieldDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  toast: ToastDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  tooltip: TooltipDemo,
};
