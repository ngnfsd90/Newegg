export default function EggIcon({ filled = false, className = "" }) {
  if (filled) {
    return (
      <svg
        className={className}
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="rotate(-18 10 12)">
          <ellipse cx="10" cy="12" rx="8" ry="10" fill="#FFBB00" stroke="#F39F41" strokeWidth="1.5" />
          <ellipse cx="10" cy="8" rx="5" ry="6" fill="#FFD700" opacity="0.6" />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        className={className}
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="rotate(-18 10 12)">
          <ellipse
            cx="10"
            cy="12"
            rx="8"
            ry="10"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    );
  }
}

