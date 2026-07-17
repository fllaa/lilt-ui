"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import { createContext, useContext, useMemo } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { CheckIcon } from "@/registry/lilt/ui/icons";

type StepperOrientation = "horizontal" | "vertical";
type StepState = "completed" | "current" | "upcoming";

interface StepperContextValue {
  onValueChange?: (value: number) => void;
  orientation: StepperOrientation;
  value: number;
}

interface StepperItemContextValue {
  state: StepState;
  step: number;
}

const StepperContext = createContext<StepperContextValue | null>(null);

const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("Stepper parts must be used within a Stepper");
  }
  return context;
};

const StepperItemContext = createContext<StepperItemContextValue | null>(null);

const useStepperItem = () => {
  const context = useContext(StepperItemContext);
  if (!context) {
    throw new Error("Stepper parts must be used within a StepperItem");
  }
  return context;
};

const getStepState = (step: number, value: number): StepState => {
  if (step < value) {
    return "completed";
  }
  if (step === value) {
    return "current";
  }
  return "upcoming";
};

export type StepperProps = Omit<ComponentProps<"ol">, "onChange"> & {
  /** Called with the clicked step; omit for a display-only stepper. */
  onValueChange?: (value: number) => void;
  orientation?: StepperOrientation;
  /** The current step, 1-based. */
  value: number;
};

export const Stepper = ({
  className,
  onValueChange,
  orientation = "horizontal",
  value,
  ...props
}: StepperProps) => {
  const contextValue = useMemo(
    () => ({ onValueChange, orientation, value }),
    [onValueChange, orientation, value]
  );
  return (
    <StepperContext.Provider value={contextValue}>
      <ol
        className={cn(
          "flex gap-2",
          orientation === "vertical" && "flex-col",
          className
        )}
        data-orientation={orientation}
        {...props}
      />
    </StepperContext.Provider>
  );
};

export type StepperItemProps = ComponentProps<"li"> & {
  /** This item's step number, 1-based. */
  step: number;
};

export const StepperItem = ({
  className,
  step,
  ...props
}: StepperItemProps) => {
  const { orientation, value } = useStepper();
  const state = getStepState(step, value);
  const contextValue = useMemo(() => ({ state, step }), [state, step]);
  return (
    <StepperItemContext.Provider value={contextValue}>
      <li
        className={cn(
          "group/step flex items-start gap-2",
          orientation === "vertical" ? "flex-none flex-col" : "flex-1",
          className
        )}
        data-state={state}
        {...props}
      />
    </StepperItemContext.Provider>
  );
};

const stepperTriggerClasses =
  "flex items-center gap-3 rounded-[var(--radius-control-sm)] p-1 text-left";

// Typed over HTMLElement (breadcrumb.tsx precedent) because it renders a
// button in interactive mode and a plain div in display mode.
export const StepperTrigger = ({
  className,
  onClick,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  const { onValueChange } = useStepper();
  const { state, step } = useStepperItem();
  const ariaCurrent = state === "current" ? ("step" as const) : undefined;

  if (!onValueChange) {
    return (
      <div
        aria-current={ariaCurrent}
        className={cn(stepperTriggerClasses, className)}
        {...props}
      />
    );
  }

  return (
    <button
      aria-current={ariaCurrent}
      className={cn(
        stepperTriggerClasses,
        "outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] disabled:pointer-events-none disabled:opacity-45",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
        onValueChange(step);
      }}
      type="button"
      {...props}
    />
  );
};

const stepperIndicatorStateClasses: Record<StepState, string> = {
  completed:
    "border-transparent bg-[var(--lilt-primary)] text-[var(--lilt-selection-text)]",
  current: "border-2 border-[var(--lilt-focus)] bg-[var(--lilt-surface)]",
  upcoming:
    "border-[var(--lilt-border)] bg-[var(--lilt-surface-2)] text-[var(--lilt-text-subtle)]",
};

export const StepperIndicator = ({
  children,
  className,
  ...props
}: ComponentProps<"span">) => {
  const { state } = useStepperItem();
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)]",
        stepperIndicatorStateClasses[state],
        className
      )}
      {...props}
    >
      {state === "completed" ? <CheckIcon size={16} /> : children}
    </span>
  );
};

export const StepperTitle = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    className={cn(
      "block text-sm font-semibold group-data-[state=upcoming]/step:text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const StepperDescription = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    className={cn("block text-xs text-[var(--lilt-text-muted)]", className)}
    {...props}
  />
);

export const StepperSeparator = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  const { orientation } = useStepper();
  return (
    <span
      aria-hidden="true"
      className={cn(
        "bg-[var(--lilt-border)] transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] group-data-[state=completed]/step:bg-[var(--lilt-primary)]",
        orientation === "vertical" ? "ml-4 min-h-6 w-px" : "mt-4 h-px flex-1",
        className
      )}
      {...props}
    />
  );
};
