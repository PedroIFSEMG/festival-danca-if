import { motion } from 'motion/react';

const ribbons = [
  {
    id: "ribbon1",
    strokeWidth: 3,
    gradientId: "satinGrad1",
    duration: 20,
    dInitial: "M -20 40 C 40 10, 80 45, 120 15 S 160 40, 220 30",
    dAnimate: "M -20 30 C 50 45, 70 15, 110 35 S 170 10, 220 25",
  },
  {
    id: "ribbon2",
    strokeWidth: 2,
    gradientId: "satinGrad2",
    duration: 28,
    dInitial: "M 220 35 C 160 15, 120 45, 80 15 S 40 35, -20 25",
    dAnimate: "M 220 25 C 170 35, 130 10, 90 40 S 30 20, -20 30",
  },
];

export default function FloatingRibbons() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[250px] pointer-events-none overflow-hidden opacity-30 mix-blend-multiply z-0">
      <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="satinGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2c1a3b" stopOpacity="0" />
            <stop offset="25%" stopColor="#5e366a" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#a372a8" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#5e366a" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#2c1a3b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="satinGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5e366a" stopOpacity="0" />
            <stop offset="30%" stopColor="#5e366a" stopOpacity="0.75" />
            <stop offset="65%" stopColor="#a372a8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#e6d8e8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {ribbons.map((ribbon) => (
          <g key={ribbon.id}>
            <motion.path
              fill="none"
              stroke={`url(#${ribbon.gradientId})`}
              strokeWidth={ribbon.strokeWidth}
              strokeLinecap="round"
              style={{ willChange: 'transform' }}
              initial={{ d: ribbon.dInitial }}
              animate={{ d: [ribbon.dInitial, ribbon.dAnimate, ribbon.dInitial] }}
              transition={{ duration: ribbon.duration, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
