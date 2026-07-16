import type { ComponentType } from "react";

import AccordionDemo from "./accordion";
import AlertDemo from "./alert";
import AvatarDemo from "./avatar";
import BadgeDemo from "./badge";
import BreadcrumbDemo from "./breadcrumb";
import ButtonDemo from "./button";
import CardDemo from "./card";
import CheckboxDemo from "./checkbox";
import DialogDemo from "./dialog";
import DropdownMenuDemo from "./dropdown-menu";
import FieldDemo from "./field";
import IconsDemo from "./icons";
import InputDemo from "./input";
import LabelDemo from "./label";
import PopoverDemo from "./popover";
import RadioGroupDemo from "./radio-group";
import SelectDemo from "./select";
import SeparatorDemo from "./separator";
import SkeletonDemo from "./skeleton";
import SwitchDemo from "./switch";
import TableDemo from "./table";
import TabsDemo from "./tabs";
import TextareaDemo from "./textarea";
import ToastDemo from "./toast";
import TooltipDemo from "./tooltip";

export const demos: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  dialog: DialogDemo,
  "dropdown-menu": DropdownMenuDemo,
  field: FieldDemo,
  icons: IconsDemo,
  input: InputDemo,
  label: LabelDemo,
  popover: PopoverDemo,
  "radio-group": RadioGroupDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  skeleton: SkeletonDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  toast: ToastDemo,
  tooltip: TooltipDemo,
};
