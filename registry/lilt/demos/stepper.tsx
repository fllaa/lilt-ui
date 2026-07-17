"use client";

import { useState } from "react";

import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/registry/lilt/ui/stepper";

const sowingSteps = [
  { step: 1, title: "Plant" },
  { step: 2, title: "Water" },
  { step: 3, title: "Wait" },
];

const pressingSteps = [
  {
    description: "Pick petals at their showiest. No wilting volunteers.",
    step: 1,
    title: "Gather",
  },
  {
    description: "Tuck them between pages of a suitably heavy book.",
    step: 2,
    title: "Press",
  },
  {
    description: "Frame them, gift them, or start a tiny museum.",
    step: 3,
    title: "Admire",
  },
];

export default function StepperDemo() {
  const [step, setStep] = useState(2);
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Stepper onValueChange={setStep} value={step}>
          {sowingSteps.map((item, index) => (
            <StepperItem key={item.step} step={item.step}>
              <StepperTrigger>
                <StepperIndicator>{item.step}</StepperIndicator>
                <StepperTitle>{item.title}</StepperTitle>
              </StepperTrigger>
              {index < sowingSteps.length - 1 && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
        <p className="text-xs text-[var(--lilt-text-muted)]">
          Tap a step — gardens forgive time travel.
        </p>
      </div>
      <Stepper orientation="vertical" value={2}>
        {pressingSteps.map((item, index) => (
          <StepperItem key={item.step} step={item.step}>
            <StepperTrigger>
              <StepperIndicator>{item.step}</StepperIndicator>
              <span className="flex flex-col gap-0.5">
                <StepperTitle>{item.title}</StepperTitle>
                <StepperDescription>{item.description}</StepperDescription>
              </span>
            </StepperTrigger>
            {index < pressingSteps.length - 1 && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
}
