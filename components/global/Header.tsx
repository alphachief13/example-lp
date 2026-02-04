"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";
import { useGlobal } from "@/store/global";
import { scrollWindow } from "@/utils/window-functions";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import GlowingText from "../animations/GlowingText";

export default function Header() {
  const isTablet = useIsMobile(BREAKPOINTS.tablet);
  const { isHeaderMenuOpen, setIsHeaderMenuOpen, setIsHeaderOnScreen } =
    useGlobal();

  const ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 0,
    onChange: (entry) => {
      setIsHeaderOnScreen(entry.isIntersecting);
    },
  });

  return (
    <FadeInWhenVisible>
      {/* Sentinel em fluxo normal: sai da viewport ao rolar, diferente do header fixed */}
      <div aria-hidden className="h-px w-full" ref={ref} />
      <header
        className={clsx(
          "fixed z-20 w-full border-primary/10 border-b transition-all duration-300",
          isHeaderMenuOpen
            ? "fixed z-50 bg-background"
            : "bg-background/60 backdrop-blur-sm"
        )}
      >
        <nav
          className={clsx(
            "flex h-20 items-center gap-10",
            isTablet ? "relative justify-center" : "justify-between"
          )}
        >
          {isTablet && (
            <button
              className="absolute left-5 flex cursor-pointer items-center justify-center p-2 transition-all duration-200 hover:bg-surface"
              onClick={() => {
                setIsHeaderMenuOpen(!isHeaderMenuOpen);
              }}
              type="button"
            >
              {isHeaderMenuOpen ? (
                <X className="text-foreground" />
              ) : (
                <Menu className="text-foreground" />
              )}
            </button>
          )}

          {!isTablet && (
            <div className="flex w-1/3 flex-row items-center justify-center gap-5">
              <button
                className="cursor-pointer rounded-sm px-2 py-1 text-sm duration-400 hover:bg-surface hover:text-primary"
                onClick={() => {
                  scrollWindow("bottom", "smooth", "sobre");
                }}
                type="button"
              >
                About
              </button>
              <button
                className="cursor-pointer rounded-sm px-2 py-1 text-sm duration-400 hover:bg-surface hover:text-primary"
                onClick={() => {
                  scrollWindow("bottom", "smooth", "projetos");
                }}
                type="button"
              >
                Projects
              </button>
            </div>
          )}

          <button
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg p-2"
            onClick={() => {
              scrollWindow("top", "smooth");
            }}
            type="button"
          >
            <p
              className={clsx(
                "font-mono font-semibold text-primary",
                isTablet ? "text-xl" : "text-xl"
              )}
            >
              <GlowingText>Victor Cordeiro</GlowingText>
            </p>
          </button>

          {!isTablet && (
            <div className="flex w-1/3 flex-row items-center justify-center gap-5">
              <button
                className="cursor-pointer rounded-sm px-2 py-1 text-sm duration-400 hover:bg-surface hover:text-primary"
                onClick={() => {
                  scrollWindow("bottom", "smooth", "projetos");
                }}
                type="button"
              >
                Projects
              </button>
              <button
                className="cursor-pointer rounded-sm px-2 py-1 text-sm duration-400 hover:bg-surface hover:text-primary"
                onClick={() => {
                  scrollWindow("bottom", "smooth", "contato");
                }}
                type="button"
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>
    </FadeInWhenVisible>
  );
}
