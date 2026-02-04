import { useEffect, useState } from "react";

export const BREAKPOINTS = {
  mobile: 767,
  tablet: 1023,
  desktop: 1024,
};

export default function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}
