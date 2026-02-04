type GlowingTextProps = {
  children: React.ReactNode;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  className?: string;
};

export default function GlowingText({
  children,
  fromColor = "#00ff88",
  viaColor = "#39d353",
  toColor = "#00d4aa",
  className = "",
}: GlowingTextProps) {
  return (
    <span
      className={`animate-glow-text bg-clip-text font-bold text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(270deg, ${fromColor}, ${viaColor}, ${toColor})`,
        backgroundSize: "300% 300%",
      }}
    >
      {children}
    </span>
  );
}
