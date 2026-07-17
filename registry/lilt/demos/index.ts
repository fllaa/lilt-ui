import type { ComponentType } from "react";

import AccordionDemo from "./accordion";
import AlertDemo from "./alert";
import AlertDialogDemo from "./alert-dialog";
import AutocompleteDemo from "./autocomplete";
import AvatarDemo from "./avatar";
import BadgeDemo from "./badge";
import BreadcrumbDemo from "./breadcrumb";
import ButtonDemo from "./button";
import CalendarDemo from "./calendar";
import CardDemo from "./card";
import CarouselDemo from "./carousel";
import ChartDemo from "./chart";
import CheckboxDemo from "./checkbox";
import CheckboxGroupDemo from "./checkbox-group";
import CollapsibleDemo from "./collapsible";
import ComboboxDemo from "./combobox";
import CommandDemo from "./command";
import ContextMenuDemo from "./context-menu";
import DataTableDemo from "./data-table";
import DatePickerDemo from "./date-picker";
import DialogDemo from "./dialog";
import DrawerDemo from "./drawer";
import DropdownMenuDemo from "./dropdown-menu";
import EmptyStateDemo from "./empty-state";
import FieldDemo from "./field";
import FieldsetDemo from "./fieldset";
import FileUploadDemo from "./file-upload";
import FormDemo from "./form";
import HoverCardDemo from "./hover-card";
import IconsDemo from "./icons";
import InputDemo from "./input";
import InputOtpDemo from "./input-otp";
import KbdDemo from "./kbd";
import LabelDemo from "./label";
import MenubarDemo from "./menubar";
import MeterDemo from "./meter";
import NavigationMenuDemo from "./navigation-menu";
import NumberFieldDemo from "./number-field";
import PaginationDemo from "./pagination";
import PopoverDemo from "./popover";
import ProgressDemo from "./progress";
import RadioGroupDemo from "./radio-group";
import RatingDemo from "./rating";
import ResizableDemo from "./resizable";
import ScrollAreaDemo from "./scroll-area";
import SelectDemo from "./select";
import SeparatorDemo from "./separator";
import SidebarDemo from "./sidebar";
import SkeletonDemo from "./skeleton";
import SliderDemo from "./slider";
import SpinnerDemo from "./spinner";
import StepperDemo from "./stepper";
import SwitchDemo from "./switch";
import TableDemo from "./table";
import TabsDemo from "./tabs";
import TagsInputDemo from "./tags-input";
import TextareaDemo from "./textarea";
import TimelineDemo from "./timeline";
import ToastDemo from "./toast";
import ToggleDemo from "./toggle";
import ToggleGroupDemo from "./toggle-group";
import ToolbarDemo from "./toolbar";
import TooltipDemo from "./tooltip";

export const demos: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  autocomplete: AutocompleteDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  calendar: CalendarDemo,
  card: CardDemo,
  carousel: CarouselDemo,
  chart: ChartDemo,
  checkbox: CheckboxDemo,
  "checkbox-group": CheckboxGroupDemo,
  collapsible: CollapsibleDemo,
  combobox: ComboboxDemo,
  command: CommandDemo,
  "context-menu": ContextMenuDemo,
  "data-table": DataTableDemo,
  "date-picker": DatePickerDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  "empty-state": EmptyStateDemo,
  field: FieldDemo,
  fieldset: FieldsetDemo,
  "file-upload": FileUploadDemo,
  form: FormDemo,
  "hover-card": HoverCardDemo,
  icons: IconsDemo,
  input: InputDemo,
  "input-otp": InputOtpDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  menubar: MenubarDemo,
  meter: MeterDemo,
  "navigation-menu": NavigationMenuDemo,
  "number-field": NumberFieldDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  rating: RatingDemo,
  resizable: ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sidebar: SidebarDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  stepper: StepperDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  "tags-input": TagsInputDemo,
  textarea: TextareaDemo,
  timeline: TimelineDemo,
  toast: ToastDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  toolbar: ToolbarDemo,
  tooltip: TooltipDemo,
};
