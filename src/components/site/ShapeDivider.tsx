type ShapeDividerProps = {
  /** background color of the section above (matches the container bg) */
  fromColor?: string;
  /** solid color that will be drawn as the divider fill */
  toColor?: string;
  className?: string;
  flip?: boolean;
};

/**
 * Subtle organic wave used at the top of pages, right below the Nav.
 * Renders an inline SVG so it inherits crisp scaling and works in any theme.
 */
export function ShapeDivider({
  fromColor = "hsl(var(--cream) / 0.6)",
  toColor = "var(--background)",
  className = "",
  flip = false,
}: ShapeDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: fromColor }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,96 1440,48 L1440,90 L0,90 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}