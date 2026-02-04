"use client";

import clsx from "clsx";
import EmblaCarousel from "@/components/carousel/embla-carousel";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";

export default function HeroCardSwap() {
  const isMobile = useIsMobile(BREAKPOINTS.mobile);
  const isTablet = useIsMobile(BREAKPOINTS.tablet);

  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center px-4 sm:px-6",
        isTablet ? "mt-10" : ""
      )}
    >
      {/* Slider largo e responsivo: mobile quase full, tablet/desktop com max maior para “tela de PC” */}
      <div className="w-full max-w-[960px]">
        <EmblaCarousel
          slides={[
            {
              src: "/img-2.png",
              alt: "Project 2",
              href: "https://ricknrory.vercel.app",
            },
            {
              src: "/img-1.png",
              alt: "Project 1",
              href: "https://valentim-fitness.vercel.app",
            },
            {
              src: "/img-3.png",
              alt: "Project 3",
              href: "https://cafitgoat.vercel.app",
            },
            {
              src: "/img-4.png",
              alt: "Project 4",
              href: "https://agenciaprontodigital.vercel.app",
            },
          ]}
          options={{
            align: "center",
            loop: true,
          }}
          showArrows={!isMobile}
          showDots
        />
      </div>
    </div>
  );
}
