"use client";

import { useEffect, useRef } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  onChange?: (entry: IntersectionObserverEntry) => void;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options?: UseIntersectionObserverOptions
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      options?.onChange?.(entry);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
