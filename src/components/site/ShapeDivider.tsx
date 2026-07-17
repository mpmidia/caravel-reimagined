type ShapeDividerProps = {
  className?: string;
  flip?: boolean;
};

/**
 * Layered organic wave divider, placed right below the Nav on
 * every page except /espetaculos. Two overlapping paths in accent + primary
 * give it visual depth without stealing the show from the hero below.
 */
export function ShapeDivider({ className = "", flip = false }: ShapeDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden leading-[0] bg-secondary/40 ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[70px] w-full md:h-[110px]"
      >
        {/* back wave — accent, low opacity */}
        <path
          d="M0,70 C220,120 420,20 720,50 C1000,78 1200,110 1440,60 L1440,120 L0,120 Z"
          fill="hsl(var(--accent) / 0.18)"
        />
        {/* mid wave — primary, low opacity */}
        <path
          d="M0,88 C260,60 500,120 780,88 C1040,58 1240,100 1440,82 L1440,120 L0,120 Z"
          fill="hsl(var(--primary) / 0.18)"
        />
        {/* foreground — matches page background */}
        <path
          d="M0,100 C220,130 500,70 780,96 C1060,120 1240,110 1440,96 L1440,120 L0,120 Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  );
}