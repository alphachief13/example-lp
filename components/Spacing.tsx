import clsx from "clsx";

type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface SpacingProps {
  vertical?: SpacingSize;
  horizontal?: SpacingSize;
  asMargin?: boolean;
  className?: string;
}

export default function Spacing({
  vertical,
  horizontal,
  asMargin = false,
  className = "",
}: SpacingProps) {
  const classes = clsx(
    vertical &&
      (asMargin
        ? {
            xs: "mt-2",
            sm: "mt-4",
            md: "mt-6",
            lg: "mt-8",
            xl: "mt-12",
            "2xl": "mt-16",
          }[vertical]
        : {
            xs: "h-2",
            sm: "h-4",
            md: "h-6",
            lg: "h-8",
            xl: "h-12",
            "2xl": "h-16",
          }[vertical]),
    horizontal &&
      {
        xs: "w-2",
        sm: "w-4",
        md: "w-6",
        lg: "w-8",
        xl: "w-12",
        "2xl": "w-16",
      }[horizontal],
    className
  );

  return <div className={classes} />;
}
