"use client";

import type { ClipboardEvent, ComponentProps, KeyboardEvent } from "react";
import { useRef, useState } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { CloseIcon } from "@/registry/lilt/ui/icons";

export type TagsInputProps = Omit<
  ComponentProps<"div">,
  "defaultValue" | "onChange"
> & {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  max?: number;
};

export const TagsInput = ({
  className,
  defaultValue,
  disabled = false,
  id,
  max,
  onClick,
  onValueChange,
  placeholder,
  value,
  ...props
}: TagsInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalTags, setInternalTags] = useState<string[]>(
    defaultValue ?? []
  );
  const [draft, setDraft] = useState("");
  const [message, setMessage] = useState("");

  const tags = value ?? internalTags;

  const setTags = (next: string[]) => {
    if (value === undefined) {
      setInternalTags(next);
    }
    onValueChange?.(next);
  };

  const addTags = (pieces: string[]) => {
    const next = [...tags];
    const added: string[] = [];
    for (const piece of pieces) {
      const trimmed = piece.trim();
      if (!trimmed) {
        continue;
      }
      if (max !== undefined && next.length >= max) {
        break;
      }
      if (next.some((tag) => tag.toLowerCase() === trimmed.toLowerCase())) {
        continue;
      }
      next.push(trimmed);
      added.push(trimmed);
    }
    if (added.length === 0) {
      return;
    }
    setTags(next);
    setMessage(`${added.join(", ")} added`);
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((existing) => existing !== tag));
    setMessage(`${tag} removed`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTags([draft]);
      setDraft("");
      return;
    }
    if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      removeTag(tags.at(-1) as string);
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    addTags(event.clipboardData.getData("text").split(/[,\n]/u));
    setDraft("");
  };

  return (
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click only forwards focus to the inner input, which is the real keyboard-interactive element
    <div
      className={cn(
        "flex min-h-12 w-full cursor-text flex-wrap items-center gap-1.5 rounded-[var(--radius-control)] border border-[var(--lilt-border)] bg-[var(--lilt-field)] px-2 py-1.5 text-base text-[var(--lilt-text)] transition-[border-color,background-color] hover:border-[var(--lilt-border-strong)] focus-within:border-[var(--lilt-focus)] focus-within:ring-2 focus-within:ring-[color-mix(in_oklab,var(--lilt-focus)_25%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        className
      )}
      data-disabled={disabled ? "" : undefined}
      onClick={(event) => {
        onClick?.(event);
        inputRef.current?.focus();
      }}
      {...props}
    >
      {tags.map((tag) => (
        <span
          className="inline-flex items-center gap-1 rounded-full bg-[var(--lilt-primary-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--lilt-primary-text)]"
          key={tag}
        >
          {tag}
          <button
            aria-label={`Remove ${tag}`}
            className="-mr-0.5 flex size-4 items-center justify-center rounded-full outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-primary-tint)] hover:text-[var(--lilt-selection-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
            disabled={disabled}
            onClick={() => removeTag(tag)}
            type="button"
          >
            <CloseIcon size={12} />
          </button>
        </span>
      ))}
      <input
        className="min-w-16 flex-1 bg-transparent py-1 text-base outline-none placeholder:text-[var(--lilt-text-subtle)]"
        disabled={disabled}
        id={id}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={placeholder}
        ref={inputRef}
        value={draft}
      />
      <span aria-live="polite" className="sr-only">
        {message}
      </span>
    </div>
  );
};
