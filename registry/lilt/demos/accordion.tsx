"use client";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/lilt/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion className="w-full max-w-md" multiple={false}>
      <AccordionItem>
        <AccordionTrigger>Can I swap the pine accent?</AccordionTrigger>
        <AccordionPanel>
          Yes. Pine and mint are defaults, not a commitment. Replace the
          semantic primary tokens and every component follows.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Why are there no shadows?</AccordionTrigger>
        <AccordionPanel>
          Lilt separates surfaces with 1px borders and color shifts. It keeps
          the interface calm and print-like.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Does it respect reduced motion?</AccordionTrigger>
        <AccordionPanel>
          Always. With reduced motion on, every lift and slide becomes an
          instant state change.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
