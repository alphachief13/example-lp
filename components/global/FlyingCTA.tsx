"use client";

import clsx from "clsx";
import { BsWhatsapp } from "react-icons/bs";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";
import { useGlobal } from "@/store/global";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { ButtonFlyingCTA } from "./ButtonCTA";

export default function FlyingCTA() {
  const isTablet = useIsMobile(BREAKPOINTS.tablet);

  const { isHeaderOnScreen } = useGlobal();

  return (
    <FadeInWhenVisible
      className={clsx(
        "fixed bottom-10 left-1/2 z-40 flex -translate-x-1/2 items-center rounded-xl bg-neutral-500/60 text-foreground backdrop-blur-xl",
        isTablet
          ? "h-20 w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] px-3"
          : "h-24 w-xl max-w-[calc(100vw-2rem)] px-5 py-2"
      )}
      fadeOut={isHeaderOnScreen}
    >
      <div
        className={clsx(
          "flex flex-1 flex-row items-center",
          isTablet ? "gap-2" : "gap-5"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center rounded-full bg-white",
            isTablet ? "h-12 w-12" : "h-16 w-16"
          )}
        >
          <BsWhatsapp className="text-(--success) text-lg md:text-2xl" />
        </div>

        <div
          className={clsx("flex flex-col", isTablet ? "text-xs" : "text-base")}
        >
          <p className="font-bold">Let's talk?</p>
          <div className="flex items-center gap-1 font-medium">
            <div className="h-2 w-2 animate-pulse rounded-full bg-(--success)" />
            <p>Available</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <ButtonFlyingCTA title="Chat on WhatsApp" />
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
