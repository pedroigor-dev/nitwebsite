type NiteLogoMarkProps = {
  size?: "sm" | "lg";
};

export function NiteLogoMark({ size = "lg" }: NiteLogoMarkProps) {
  const dimension = size === "lg" ? "h-56 w-56 sm:h-72 sm:w-72" : "h-9 w-9";

  return (
    <svg
      aria-label="NITE"
      viewBox="0 0 220 220"
      className={dimension}
      role="img"
    >
      <defs>
        <linearGradient id="silver" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#c8c8c8" />
          <stop offset="100%" stopColor="#777777" />
        </linearGradient>
        <filter id="cyan-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M82 27c-15 0-27 10-30 24-14 1-25 12-26 27-13 5-22 17-22 31 0 12 6 23 15 29-3 18 11 35 30 35h51V39A28 28 0 0 0 82 27Z"
        fill="#050607"
        stroke="#19c6ff"
        strokeWidth="7"
        filter="url(#cyan-glow)"
      />
      {[
        "M28 103h42l18-18h20",
        "M35 132h50l18 18",
        "M44 76h24l20 20h20",
        "M55 166v-22h25",
        "M72 49v54",
        "M92 56v92",
      ].map((path) => (
        <path
          key={path}
          d={path}
          fill="none"
          stroke="#1789ff"
          strokeLinecap="round"
          strokeWidth="4"
        />
      ))}
      {[28, 35, 44, 55, 72, 92, 108].map((x, index) => (
        <circle
          key={x}
          cx={x}
          cy={[103, 132, 76, 166, 49, 56, 85][index]}
          r="5"
          fill="#050607"
          stroke="#4bdcff"
          strokeWidth="3"
        />
      ))}
      <g fill="url(#silver)">
        <path d="M132 43h43v28h-18v16h18v28h-43V87h18V71h-18Z" />
        <path d="M126 126h52v20h-52Z" />
        <path d="M132 158h57v21h-34l34 33h-42l-32-31v-23Z" />
        <path d="M82 190h62v10H82zM90 204h46v9H90zM101 216h24v4h-24z" />
      </g>
    </svg>
  );
}
