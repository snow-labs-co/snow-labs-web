export default function CloudVeil() {
  return (
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{ height: "110px", zIndex: 6 }}
      aria-hidden="true"
    >
      {/* Hard mask: matches hero's midnight bg, fully opaque at very top so particles never show there */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "28px",
          background: "#050D14",
        }}
      />

      {/* Soft cloud layer — blurred SVG puffs, fade out downward */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blur for cloud softness */}
          <filter id="cloud-blur" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" />
          </filter>

          {/* Vertical fade: fully visible at top, transparent at bottom */}
          <linearGradient id="veil-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="veil-mask">
            <rect width="1440" height="110" fill="url(#veil-fade)" />
          </mask>
        </defs>

        {/* All cloud puffs grouped under the fade mask */}
        <g mask="url(#veil-mask)" filter="url(#cloud-blur)">
          {/* Layer A — darkest/furthest, steel-teal sky tone */}
          <ellipse cx="-30"  cy="38" rx="160" ry="52" fill="#2C6D8C" opacity="0.55" />
          <ellipse cx="210"  cy="28" rx="140" ry="48" fill="#2C6D8C" opacity="0.50" />
          <ellipse cx="430"  cy="34" rx="150" ry="50" fill="#2C6D8C" opacity="0.48" />
          <ellipse cx="680"  cy="26" rx="170" ry="55" fill="#2C6D8C" opacity="0.52" />
          <ellipse cx="960"  cy="32" rx="155" ry="52" fill="#2C6D8C" opacity="0.50" />
          <ellipse cx="1210" cy="28" rx="145" ry="50" fill="#2C6D8C" opacity="0.48" />
          <ellipse cx="1470" cy="36" rx="160" ry="52" fill="#2C6D8C" opacity="0.50" />

          {/* Layer B — mid, lighter ice-teal */}
          <ellipse cx="60"   cy="22" rx="110" ry="40" fill="#4AB3CC" opacity="0.28" />
          <ellipse cx="290"  cy="16" rx="130" ry="44" fill="#7EC8DA" opacity="0.30" />
          <ellipse cx="550"  cy="20" rx="120" ry="42" fill="#4AB3CC" opacity="0.26" />
          <ellipse cx="800"  cy="14" rx="140" ry="46" fill="#7EC8DA" opacity="0.32" />
          <ellipse cx="1060" cy="18" rx="125" ry="42" fill="#4AB3CC" opacity="0.28" />
          <ellipse cx="1320" cy="16" rx="130" ry="44" fill="#7EC8DA" opacity="0.30" />

          {/* Layer C — wispy bright highlights, near-white */}
          <ellipse cx="150"  cy="10" rx="80"  ry="28" fill="#D4EEF5" opacity="0.22" />
          <ellipse cx="400"  cy="8"  rx="95"  ry="30" fill="#EEF8FB" opacity="0.20" />
          <ellipse cx="700"  cy="6"  rx="85"  ry="26" fill="#D4EEF5" opacity="0.24" />
          <ellipse cx="980"  cy="10" rx="90"  ry="28" fill="#EEF8FB" opacity="0.20" />
          <ellipse cx="1250" cy="8"  rx="80"  ry="26" fill="#D4EEF5" opacity="0.22" />
        </g>
      </svg>

      {/* Bottom feather — extra smooth fade from midnight to transparent */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "55px",
          background:
            "linear-gradient(to top, transparent 0%, #050D14 100%)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
