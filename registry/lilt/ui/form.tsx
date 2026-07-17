"use client";

import { Form as BaseForm } from "@base-ui/react/form";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Form = ({
  className,
  ...props
}: ComponentProps<typeof BaseForm>) => (
  <BaseForm className={cn("grid gap-6", className)} {...props} />
);
