"use client";

import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/registry/lilt/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/lilt/ui/fieldset";

export default function FieldsetDemo() {
  return (
    <Fieldset className="w-full max-w-sm">
      <FieldsetLegend>Shipping details</FieldsetLegend>
      <Field>
        <FieldLabel>Street</FieldLabel>
        <FieldControl placeholder="12 Fern Hollow Lane" />
        <FieldDescription>Where the seed packets should land.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>City</FieldLabel>
        <FieldControl placeholder="Everbloom" />
      </Field>
    </Fieldset>
  );
}
