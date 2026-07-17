"use client";

import {
  FileUpload,
  FileUploadDropzone,
  FileUploadList,
} from "@/registry/lilt/ui/file-upload";
import { PlusIcon } from "@/registry/lilt/ui/icons";

export default function FileUploadDemo() {
  return (
    <FileUpload accept="image/*" className="max-w-md" maxFiles={4} multiple>
      <FileUploadDropzone>
        <span
          aria-hidden="true"
          className="mb-2 flex size-12 items-center justify-center rounded-full bg-[var(--lilt-primary-soft)] text-[var(--lilt-primary-text)]"
        >
          <PlusIcon size={20} />
        </span>
        <span className="font-medium text-[var(--lilt-text)]">
          Drag sketches here, or browse
        </span>
        <span className="text-xs text-[var(--lilt-text-muted)]">
          Up to four images. Pressed flowers welcome.
        </span>
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
  );
}
