"use client";

import { type Easing, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hiddenPosY?: number;
  hiddenPosX?: number;
  visiblePosY?: number;
  visiblePosX?: number;
  onVisible?: () => void;
  onFadeOut?: () => void;
  onClick?: () => void;
  speed?: number;
  acceleration?: Easing | Easing[] | undefined;
  fadeOut?: boolean;
  fadeOutSpeed?: number;
  fadeOutDelay?: number;
  id?: string;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  className,
  hiddenPosY = 40,
  hiddenPosX = 0,
  visiblePosX = 0,
  visiblePosY = 0,
  onVisible,
  onFadeOut,
  onClick,
  speed = 0.7,
  acceleration = "easeInOut",
  fadeOut = false,
  fadeOutSpeed = 0.3,
  fadeOutDelay = 0,
  id,
}: Props) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (fadeOut) {
      controls.start("hidden");
      onFadeOut?.();
    } else if (inView) {
      controls.start("visible");
      onVisible?.();
    }
  }, [fadeOut, inView, controls, onVisible, onFadeOut]);

  return (
    <motion.div
      id={id ?? ""}
      animate={controls}
      className={className}
      initial="hidden"
      onClick={onClick}
      ref={ref}
      transition={{
        duration: fadeOut ? fadeOutSpeed : speed,
        delay: fadeOut ? fadeOutDelay : delay,
        ease: acceleration,
      }}
      variants={{
        hidden: { opacity: 0, y: hiddenPosY, x: hiddenPosX },
        visible: { opacity: 1, y: visiblePosY, x: visiblePosX },
      }}
    >
      {children}
    </motion.div>
  );
}
