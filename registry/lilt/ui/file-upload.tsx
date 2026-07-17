"use client";

import type { ChangeEvent, ComponentProps, DragEvent, RefObject } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { CloseIcon, FileIcon } from "@/registry/lilt/ui/icons";

interface FileUploadContextValue {
  accept?: string;
  addFiles: (incoming: FileList | File[] | null) => void;
  disabled: boolean;
  dragging: boolean;
  files: File[];
  inputId: string;
  inputRef: RefObject<HTMLInputElement | null>;
  multiple: boolean;
  removeFile: (index: number) => void;
  setDragging: (dragging: boolean) => void;
}

const FileUploadContext = createContext<FileUploadContextValue | null>(null);

const useFileUpload = () => {
  const context = useContext(FileUploadContext);
  if (!context) {
    throw new Error("FileUpload parts must be used within FileUpload");
  }
  return context;
};

const formatBytes = (bytes: number) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export type FileUploadProps = Omit<ComponentProps<"div">, "onChange"> & {
  accept?: string;
  disabled?: boolean;
  maxFiles?: number;
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
};

export const FileUpload = ({
  accept,
  children,
  className,
  disabled = false,
  maxFiles,
  multiple = false,
  onFilesChange,
  ...props
}: FileUploadProps) => {
  // Files live in React state only — the native input is just a picker; the
  // dropzone resets it after each pick so re-selecting the same file re-fires.
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (incoming: FileList | File[] | null) => {
      if (disabled || !incoming) {
        return;
      }
      const picked = [...incoming];
      if (picked.length === 0) {
        return;
      }
      let next = multiple ? [...files, ...picked] : picked.slice(0, 1);
      if (typeof maxFiles === "number") {
        next = next.slice(0, maxFiles);
      }
      setFiles(next);
      setAnnouncement(
        picked.length === 1
          ? `Added ${picked[0].name}.`
          : `Added ${picked.length} files.`
      );
      onFilesChange?.(next);
    },
    [disabled, files, maxFiles, multiple, onFilesChange]
  );

  const removeFile = useCallback(
    (index: number) => {
      const removed = files[index];
      if (!removed) {
        return;
      }
      const next = files.filter((_, position) => position !== index);
      setFiles(next);
      setAnnouncement(`Removed ${removed.name}.`);
      onFilesChange?.(next);
    },
    [files, onFilesChange]
  );

  const value = useMemo(
    () => ({
      accept,
      addFiles,
      disabled,
      dragging,
      files,
      inputId,
      inputRef,
      multiple,
      removeFile,
      setDragging,
    }),
    [accept, addFiles, disabled, dragging, files, inputId, multiple, removeFile]
  );

  return (
    <FileUploadContext.Provider value={value}>
      <div className={cn("flex w-full flex-col gap-3", className)} {...props}>
        {children}
        <span aria-live="polite" className="sr-only">
          {announcement}
        </span>
      </div>
    </FileUploadContext.Provider>
  );
};

export const FileUploadDropzone = ({
  children,
  className,
  ...props
}: ComponentProps<"label">) => {
  const {
    accept,
    addFiles,
    disabled,
    dragging,
    inputId,
    inputRef,
    multiple,
    setDragging,
  } = useFileUpload();

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    addFiles(event.dataTransfer.files);
    setDragging(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    addFiles(event.target.files);
    // Reset so picking the same file again still fires onChange.
    event.target.value = "";
  };

  return (
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- drag-and-drop target: the label only listens for drag events; keyboard interaction stays on the file input it wraps
    <label
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-[var(--radius-card)] border border-dashed border-[var(--lilt-border)] bg-[var(--lilt-surface)] px-6 py-10 text-center text-sm text-[var(--lilt-text-muted)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)]",
        "data-[dragging]:border-[var(--lilt-focus)] data-[dragging]:bg-[var(--lilt-primary-soft)]",
        "has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-[var(--lilt-focus)] has-[input:focus-visible]:ring-offset-2 has-[input:focus-visible]:ring-offset-[var(--lilt-canvas)]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        className
      )}
      data-disabled={disabled ? "" : undefined}
      data-dragging={dragging ? "" : undefined}
      htmlFor={inputId}
      onDragLeave={() => setDragging(false)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      {...props}
    >
      <input
        accept={accept}
        className="sr-only"
        disabled={disabled}
        id={inputId}
        multiple={multiple}
        onChange={handleChange}
        ref={inputRef}
        type="file"
      />
      {children}
    </label>
  );
};

export const FileUploadList = ({
  className,
  ...props
}: ComponentProps<"ul">) => {
  const { disabled, files, removeFile } = useFileUpload();

  if (files.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-col gap-2", className)} {...props}>
      {files.map((file, index) => (
        <li
          className="flex items-center gap-3 rounded-[var(--radius-control-sm)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)] px-3 py-2 text-sm"
          key={`${file.name}-${file.lastModified}-${index}`}
        >
          <FileIcon
            className="shrink-0 text-[var(--lilt-text-subtle)]"
            size={18}
          />
          <span className="min-w-0 flex-1 truncate text-[var(--lilt-text)]">
            {file.name}
          </span>
          <span className="shrink-0 text-xs text-[var(--lilt-text-muted)]">
            {formatBytes(file.size)}
          </span>
          <button
            aria-label={`Remove ${file.name}`}
            className="flex size-7 shrink-0 items-center justify-center rounded-[var(--radius-control-sm)] text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] disabled:opacity-45"
            disabled={disabled}
            onClick={() => removeFile(index)}
            type="button"
          >
            <CloseIcon size={14} />
          </button>
        </li>
      ))}
    </ul>
  );
};
