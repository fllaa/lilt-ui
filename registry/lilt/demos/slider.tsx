"use client";

import { Slider, SliderLabel, SliderValue } from "@/registry/lilt/ui/slider";

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <Slider defaultValue={65}>
        <div className="flex items-baseline justify-between">
          <SliderLabel>Volume</SliderLabel>
          <SliderValue />
        </div>
      </Slider>
      <Slider defaultValue={[20, 60]} thumbLabels={["Min", "Max"]}>
        <div className="flex items-baseline justify-between">
          <SliderLabel>Cozy range</SliderLabel>
          <SliderValue>
            {(formattedValues) => formattedValues.join(" – ")}
          </SliderValue>
        </div>
      </Slider>
    </div>
  );
}
