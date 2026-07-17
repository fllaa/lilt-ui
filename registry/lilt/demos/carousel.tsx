"use client";

import { Card, CardContent } from "@/registry/lilt/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/lilt/ui/carousel";

const gardenBeds = ["1", "2", "3", "4", "5"];

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {gardenBeds.map((numeral) => (
          <CarouselItem key={numeral}>
            <Card className="p-1">
              <CardContent className="flex aspect-square flex-col items-center justify-center gap-2 p-6">
                <span className="font-display text-6xl font-semibold tracking-[-0.02em]">
                  {numeral}
                </span>
                <span className="text-xs text-[var(--lilt-text-muted)]">
                  garden bed {numeral} of 5
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
