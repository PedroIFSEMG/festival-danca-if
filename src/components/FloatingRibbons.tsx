const ribbons = [
  {
    id: 'ribbon1',
    className: 'ribbon-one',
    gradientId: 'ribbonGrad1',
    stroke: 24,
    glow: 48,
    y: 92,
  },
  {
    id: 'ribbon2',
    className: 'ribbon-two',
    gradientId: 'ribbonGrad2',
    stroke: 20,
    glow: 40,
    y: 148,
  },
  {
    id: 'ribbon3',
    className: 'ribbon-three',
    gradientId: 'ribbonGrad3',
    stroke: 16,
    glow: 32,
    y: 208,
  },
];

export default function FloatingRibbons() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[260px] pointer-events-none overflow-hidden z-0 ribbon-veil" aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbonGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#2c1a3b" stopOpacity="0" />
            <stop offset="25%" stopColor="#5e366a" stopOpacity="0.88" />
            <stop offset="50%" stopColor="#a372a8" stopOpacity="0.96" />
            <stop offset="75%" stopColor="#5e366a" stopOpacity="0.86" />
            <stop offset="100%" stopColor="#2c1a3b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbonGrad2" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#2c1a3b" stopOpacity="0" />
            <stop offset="28%" stopColor="#b43f62" stopOpacity="0.82" />
            <stop offset="56%" stopColor="#e6d8e8" stopOpacity="0.95" />
            <stop offset="82%" stopColor="#a372a8" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#2c1a3b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbonGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#2c1a3b" stopOpacity="0" />
            <stop offset="28%" stopColor="#b88a4a" stopOpacity="0.78" />
            <stop offset="52%" stopColor="#f4eef5" stopOpacity="0.9" />
            <stop offset="78%" stopColor="#a372a8" stopOpacity="0.84" />
            <stop offset="100%" stopColor="#2c1a3b" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g>
          {ribbons.map((ribbon) => {
            const path = `M -140 ${ribbon.y} H 1580`;

            return (
              <g key={ribbon.id} className={`ribbon-band ${ribbon.className}`}>
                <path
                  className="ribbon-band-glow"
                  d={path}
                  fill="none"
                  stroke={`url(#${ribbon.gradientId})`}
                  strokeWidth={ribbon.glow}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  opacity="0.16"
                />
                <path
                  className="ribbon-band-core"
                  d={path}
                  fill="none"
                  stroke={`url(#${ribbon.gradientId})`}
                  strokeWidth={ribbon.stroke}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
