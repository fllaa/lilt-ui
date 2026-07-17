"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type { ComponentProps, KeyboardEvent } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { Button } from "@/registry/lilt/ui/button";
import { ArrowIcon } from "@/registry/lilt/ui/icons";

export type CarouselApi = UseEmblaCarouselType[1];

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselOrientation = "horizontal" | "vertical";

interface CarouselContextValue {
  api: CarouselApi;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: UseEmblaCarouselType[0];
  opts?: CarouselOptions;
  orientation: CarouselOrientation;
  scrollNext: () => void;
  scrollPrev: () => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel");
  }
  return context;
};

export interface CarouselProps extends ComponentProps<"div"> {
  opts?: CarouselOptions;
  orientation?: CarouselOrientation;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
}

export const Carousel = ({
  children,
  className,
  opts,
  orientation = "horizontal",
  plugins,
  setApi,
  ...props
}: CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return;
    }
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (api && setApi) {
      setApi(api);
    }
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }
    // oxlint-disable-next-line react/react-compiler -- embla has already emitted "init" by the time this effect subscribes, so the initial scroll state must be read here once
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const value = useMemo(
    () => ({
      api,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      orientation,
      scrollNext,
      scrollPrev,
    }),
    [
      api,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      orientation,
      scrollNext,
      scrollPrev,
    ]
  );

  return (
    <CarouselContext.Provider value={value}>
      <div
        aria-roledescription="carousel"
        className={cn("relative", className)}
        onKeyDownCapture={handleKeyDown}
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- WAI-ARIA carousel pattern uses role="region" on a generic container; <section> only maps to region when it has an accessible name
        role="region"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

export const CarouselContent = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
};

export const CarouselItem = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  const { orientation } = useCarousel();
  return (
    <div
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- WAI-ARIA carousel pattern: a slide is role="group", and none of the suggested semantic tags (fieldset, details, ...) fit
      role="group"
      {...props}
    />
  );
};

export const CarouselPrevious = ({
  className,
  ...props
}: ComponentProps<typeof Button>) => {
  const { canScrollPrev, orientation, scrollPrev } = useCarousel();
  return (
    <Button
      aria-label="Previous slide"
      className={cn(
        "absolute size-10 rounded-full",
        // Button's hover lift sets -translate-y-0.5, which would clobber a
        // -translate-y-1/2 (or -translate-x-1/2) centering transform. Center
        // with explicit offsets (50% minus half the 2.5rem button) instead.
        orientation === "horizontal"
          ? "-left-12 top-[calc(50%-1.25rem)]"
          : "-top-12 left-[calc(50%-1.25rem)] rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      iconOnly
      onClick={scrollPrev}
      size="sm"
      variant="secondary"
      {...props}
    >
      <ArrowIcon className="rotate-180" size={16} />
    </Button>
  );
};

export const CarouselNext = ({
  className,
  ...props
}: ComponentProps<typeof Button>) => {
  const { canScrollNext, orientation, scrollNext } = useCarousel();
  return (
    <Button
      aria-label="Next slide"
      className={cn(
        "absolute size-10 rounded-full",
        // Same story as CarouselPrevious: explicit top/left offsets keep the
        // hover lift from fighting a translate-based centering transform.
        orientation === "horizontal"
          ? "-right-12 top-[calc(50%-1.25rem)]"
          : "-bottom-12 left-[calc(50%-1.25rem)] rotate-90",
        className
      )}
      disabled={!canScrollNext}
      iconOnly
      onClick={scrollNext}
      size="sm"
      variant="secondary"
      {...props}
    >
      <ArrowIcon size={16} />
    </Button>
  );
};
