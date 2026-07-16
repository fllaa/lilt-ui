import type { HTMLAttributes } from "react";
import { InfoIcon, SparkIcon, WarningIcon } from "@/registry/lilt/ui/icons";
import { cn } from "@/registry/lilt/lib/utils";

const alertVariants = {
  info: {
    className: "bg-[var(--lilt-primary-soft)]",
    iconClassName: "text-[var(--lilt-primary-text)]",
    icon: InfoIcon,
    role: "status" as const,
  },
  success: {
    className: "bg-[var(--lilt-primary-soft)]",
    iconClassName: "text-[var(--lilt-primary-text)]",
    icon: SparkIcon,
    role: "status" as const,
  },
  warning: {
    className: "bg-[var(--lilt-warning)]",
    iconClassName: "text-[var(--lilt-text)]",
    icon: WarningIcon,
    role: "status" as const,
  },
  danger: {
    className: "bg-[var(--lilt-danger-soft)]",
    iconClassName: "text-[var(--lilt-danger-text)]",
    icon: WarningIcon,
    role: "alert" as const,
  },
};

export type AlertVariant = keyof typeof alertVariants;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

export function Alert({
  children,
  className,
  variant = "info",
  ...props
}: AlertProps) {
  const { className: variantClassName, icon: Icon, iconClassName, role } =
    alertVariants[variant];
  return (
    <div
      className={cn(
        "flex gap-3 rounded-[var(--radius-card)] p-4 text-[var(--lilt-text)]",
        variantClassName,
        className,
      )}
      role={role}
      {...props}
    >
      <Icon className={cn("mt-0.5 shrink-0", iconClassName)} size={20} />
      <div className="grid gap-1">{children}</div>
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm font-semibold tracking-[-0.01em]", className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm leading-relaxed", className)} {...props} />
  );
}
