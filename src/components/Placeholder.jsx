// Drop-in image slot. Replace with <img src="/images/..." alt="..." /> when assets are ready.
export default function Placeholder({ label, ratio = '16 / 9', className = '' }) {
  return (
    <div
      className={`placeholder ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9.5h.01"
        />
      </svg>
      <span>{label}</span>
    </div>
  );
}
