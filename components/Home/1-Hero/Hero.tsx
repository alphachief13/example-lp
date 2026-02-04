"use client";

import clsx from "clsx";
import { ArrowDown } from "lucide-react";
import ButtonCTA from "@/components/global/ButtonCTA";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";
import FadeInWhenVisible from "../../animations/FadeInWhenVisible";
import HeroCardSwap from "./HeroCardSwap";

export default function Hero() {
  const isMobile = useIsMobile(BREAKPOINTS.mobile);
  const isTablet = useIsMobile(BREAKPOINTS.tablet);
  return (
    <FadeInWhenVisible className="mt-32 flex w-full">
      <div
        className={clsx(
          "flex w-full",
          isTablet ? "flex-col items-center" : "flex-row items-center gap-10"
        )}
        id="hero"
      >
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-2",
            isTablet ? "w-full" : "w-full"
          )}
        >
          <h1
            className={clsx(
              "text-center font-extrabold font-sans",
              isMobile ? "text-3xl" : "text-5xl"
            )}
          >
            Frontend development that{" "}
            <span className="font-mono text-primary">delivers value</span> and
            great user experience
          </h1>

          <p className={"mt-2 text-center font-sans text-muted"}>
            React, TypeScript and a focus on accessible, performant interfaces.
            From layout to deploy, clean and maintainable code.
          </p>

          <div
            className={clsx(
              isMobile ? "my-5 flex flex-col gap-5" : "my-5 flex flex-row gap-5"
            )}
          >
            <div className={clsx("", isMobile ? "w-76" : "w-sm")}>
              <ButtonCTA title="Let's talk" />
              <div className="mt-7 flex flex-col items-center justify-center gap-2 text-primary">
                <p className="text-lg">Learn more</p>
                <ArrowDown className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        <HeroCardSwap />
      </div>
    </FadeInWhenVisible>
  );
}
