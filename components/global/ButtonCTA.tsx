import clsx from "clsx";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";
import launchConfetti from "@/utils/launch-confetti";
import linkToWhats from "@/utils/linkToWhats";

interface ButtonCTAProps {
  title: string;
  href?: string;
}

export default function ButtonCTA({ title, href, ...rest }: ButtonCTAProps) {
  const isMobile = useIsMobile(BREAKPOINTS.mobile);

  const defaultHref = linkToWhats(
    "Hi! I came from your portfolio and would like to chat."
  );

  return (
    <Link
      className={clsx(
        "btn-pulse gradient-primary flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg text-center font-bold text-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:brightness-110",
        isMobile ? "px-5 py-4 text-xl" : "px-7 py-4 text-2xl"
      )}
      href={linkToWhats(href) ?? defaultHref}
      onClick={() => {
        launchConfetti();
      }}
      {...rest}
    >
      {title} <MessageCircle />
    </Link>
  );
}

export function ButtonWhatWeDoCTA({ title, href, ...rest }: ButtonCTAProps) {
  const isMobile = useIsMobile(BREAKPOINTS.mobile);

  const defaultHref = linkToWhats(
    "Hi! I came from your portfolio and would like to chat."
  );

  return (
    <Link
      className={clsx(
        "btn-pulse gradient-primary flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg text-center font-bold text-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:brightness-110",
        isMobile ? "px-2 py-2 text-sm" : "px-5 py-2 text-lg"
      )}
      href={linkToWhats(href) ?? defaultHref}
      onClick={() => {
        launchConfetti();
      }}
      {...rest}
    >
      {title} <ArrowUpRight />
    </Link>
  );
}

export function ButtonFlyingCTA({ title, href, ...rest }: ButtonCTAProps) {
  const isMobile = useIsMobile(BREAKPOINTS.tablet);
  const isTablet = useIsMobile(BREAKPOINTS.tablet);

  const defaultHref = linkToWhats(
    "Hi! I came from your portfolio and would like to chat."
  );

  return (
    <Link
      className={clsx(
        "btn-pulse gradient-primary flex cursor-pointer items-center justify-center gap-3 rounded-lg text-center font-bold text-background shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:brightness-110",
        isMobile && "px-0 py-0 text-sm",
        isTablet && "px-3 py-3 text-sm",
        !(isMobile || isTablet) && "px-5 py-2 text-xl"
      )}
      href={linkToWhats(href) ?? defaultHref}
      onClick={() => {
        launchConfetti();
      }}
      {...rest}
    >
      {title}
    </Link>
  );
}

export function ButtonCTAOutline({ title, href, ...rest }: ButtonCTAProps) {
  const isMobile = useIsMobile(BREAKPOINTS.mobile);

  const defaultHref = linkToWhats(
    "Hi! I came from your portfolio and would like to chat."
  );

  return (
    <Link
      className={clsx(
        "flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-primary text-center font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:brightness-110",
        isMobile ? "px-5 py-4 text-lg" : "px-7 py-4 text-lg"
      )}
      href={linkToWhats(href) ?? defaultHref}
      onClick={() => {
        launchConfetti();
      }}
      {...rest}
    >
      {title}
    </Link>
  );
}
