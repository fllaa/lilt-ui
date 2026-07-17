"use client";

import { useState } from "react";

import { Button } from "@/registry/lilt/ui/button";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/lilt/ui/field";
import { Form } from "@/registry/lilt/ui/form";

// Pretend server: checks whether a garden handle is still up for grabs.
const claimPlot = async (handle: string) => {
  // oxlint-disable-next-line promise/avoid-new -- wraps the timer-based setTimeout API, no async alternative exists
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 900);
  });
  if (handle.trim().toLowerCase() === "lilt") {
    return { error: "That one is ours, sorry. Try another?" };
  }
  return { error: null };
};

export default function FormDemo() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  return (
    <Form
      className="w-full max-w-sm"
      errors={errors}
      onFormSubmit={async (values) => {
        setLoading(true);
        const response = await claimPlot(String(values.handle ?? ""));
        setErrors(response.error ? { handle: response.error } : {});
        setLoading(false);
      }}
      validationMode="onBlur"
    >
      <Field name="handle">
        <FieldLabel>Garden handle</FieldLabel>
        <FieldControl placeholder="e.g. quietfern" required />
        <FieldDescription>
          Painted on the little wooden sign by your plot. Psst: “lilt” is taken.
        </FieldDescription>
        <FieldError match="valueMissing">
          Every plot needs a name on its sign.
        </FieldError>
        {errors.handle ? <FieldError /> : null}
      </Field>
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <FieldControl placeholder="you@example.com" required type="email" />
        <FieldError match="valueMissing">
          We need somewhere to send the seed swap invites.
        </FieldError>
        <FieldError match="typeMismatch">
          Hmm, that does not quite look like an email address.
        </FieldError>
      </Field>
      <Button disabled={loading} type="submit">
        {loading ? "Checking the ledger…" : "Join the garden"}
      </Button>
    </Form>
  );
}
