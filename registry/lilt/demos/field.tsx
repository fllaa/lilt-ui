"use client";

import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/lilt/ui/field";
import { Textarea } from "@/registry/lilt/ui/textarea";

export default function FieldDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Field>
        <FieldLabel optional>Display name</FieldLabel>
        <FieldControl placeholder="How should we call you?" />
        <FieldDescription>Shown next to your comments.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldControl placeholder="you@example.com" required type="email" />
        <FieldError match="valueMissing">
          An email is required — we only use it to sign you in.
        </FieldError>
        <FieldError match="typeMismatch">
          That does not look like an email address.
        </FieldError>
      </Field>
      <Field>
        <FieldLabel optional>Notes</FieldLabel>
        <FieldControl render={<Textarea placeholder="Anything else?" />} />
      </Field>
    </div>
  );
}
