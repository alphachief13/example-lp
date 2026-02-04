"use client";

import clsx from "clsx";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export interface EmblaSlide {
  src: string;
  alt: string;
  /** URL para onde o clique no slide leva (ex.: site do projeto). */
  href?: string;
}

export interface EmblaCarouselProps {
  slides: EmblaSlide[];
  options?: EmblaOptionsType;
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  imagePriority?: boolean;
}

export default function EmblaCarousel({
  slides,
  options,
  className,
  showArrows = true,
  showDots = true,
  imagePriority = true,
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={clsx("w-full", className)}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, idx) => {
              const content = (
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-border/50 transition hover:ring-primary/50">
                  <Image
                    alt={slide.alt}
                    fill
                    priority={imagePriority && idx === 0}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 960px"
                    src={slide.src}
                    className="object-cover"
                  />
                </div>
              );
              return (
                <div
                  className="min-w-0 flex-[0_0_100%] pl-0"
                  key={`${slide.src}-${idx}`}
                >
                  {slide.href ? (
                    <a
                      href={slide.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      aria-label={`View project: ${slide.alt}`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {showArrows && (
          <>
            <button
              aria-label="Previous image"
              className={clsx(
                "absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground shadow backdrop-blur transition hover:bg-background",
                !canScrollPrev && "pointer-events-none opacity-40"
              )}
              onClick={scrollPrev}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Next image"
              className={clsx(
                "absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground shadow backdrop-blur transition hover:bg-background",
                !canScrollNext && "pointer-events-none opacity-40"
              )}
              onClick={scrollNext}
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, idx) => (
            <button
              aria-label={`Ir para imagem ${idx + 1}`}
              className={clsx(
                "h-2.5 w-2.5 rounded-full transition",
                idx === selectedIndex ? "bg-primary" : "bg-border"
              )}
              key={`dot-${idx}`}
              onClick={() => scrollTo(idx)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
