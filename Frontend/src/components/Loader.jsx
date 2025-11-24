
export default function Loader({
  size = 48,
  label = "Loading...",
  className = "",
}) {
  const px = typeof size === "number" ? `${size}px` : size;
  const svgSize = { width: px, height: px };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {/* Dual-ring spinner */}
      <svg
        {...svgSize}
        viewBox="0 0 50 50"
        className="animate-spin"
        aria-hidden="true"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeOpacity="0.15"
          fill="none"
          className="text-blue-600"
        />
        <path
          d="M45 25c0-11.046-8.954-20-20-20"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-blue-600"
        />
      </svg>

      {/* subtle pulsing dot to add modern touch */}
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="sr-only">{label}</span>
      </span>
    </div>
  );
}
