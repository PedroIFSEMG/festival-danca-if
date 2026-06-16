import { motion } from 'motion/react';

export default function FloatingRibbons() {
  const ribbonsConfig = [
    {
      id: "ribbon1",
      strokeWidth: 3,
      strokeWidthShadow: 3.5,
      gradientId: "satinGrad1",
      duration: 18,
      delay: 0,
      dInitial: "M -20 40 C 40 10, 80 45, 120 15 S 160 40, 220 30",
      dAnimate1: "M -20 30 C 50 45, 70 15, 110 35 S 170 10, 220 25",
      shadowOpacity: 0.08,
    },
    {
      id: "ribbon2",
      strokeWidth: 2,
      strokeWidthShadow: 2.5,
      gradientId: "satinGrad2",
      duration: 25,
      delay: 1.5,
      dInitial: "M -20 20 C 50 40, 90 10, 130 30 S 170 15, 220 25",
      dAnimate1: "M -20 28 C 40 15, 100 35, 120 20 S 180 35, 220 15",
      shadowOpacity: 0.06,
    },
    {
      id: "ribbon3",
      strokeWidth: 2.5,
      strokeWidthShadow: 3,
      gradientId: "satinGrad3",
      duration: 21,
      delay: 3,
      dInitial: "M 220 35 C 160 15, 120 45, 80 15 S 40 35, -20 25",
      dAnimate1: "M 220 25 C 170 35, 130 10, 90 40 S 30 20, -20 30",
      shadowOpacity: 0.07,
    },
    {
      id: "ribbon4",
      strokeWidth: 1.5,
      strokeWidthShadow: 2,
      gradientId: "satinGrad4",
      duration: 30,
      delay: 4.5,
      dInitial: "M -20 30 C 30 10, 60 40, 100 20 S 140 45, 170 15 S 190 35, 220 25",
      dAnimate1: "M -20 20 C 40 35, 70 10, 90 30 S 130 15, 160 40 S 180 20, 220 30",
      shadowOpacity: 0.05,
    }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[250px] pointer-events-none overflow-hidden opacity-30 mix-blend-multiply z-0">
      <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
        <defs>
          {/* Gradient Definitions */}
          <linearGradient id="satinGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2c1a3b" stopOpacity="0" />
            <stop offset="25%" stopColor="#5e366a" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#a372a8" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#5e366a" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#2c1a3b" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="satinGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a372a8" stopOpacity="0" />
            <stop offset="30%" stopColor="#a372a8" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#5e366a" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#2c1a3b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="satinGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5e366a" stopOpacity="0" />
            <stop offset="30%" stopColor="#5e366a" stopOpacity="0.75" />
            <stop offset="65%" stopColor="#a372a8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#e6d8e8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="satinGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c1a3b" stopOpacity="0" />
            <stop offset="40%" stopColor="#e6d8e8" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#a372a8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5e366a" stopOpacity="0" />
          </linearGradient>

          <filter id="shadow3d" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#2c1a3b" floodOpacity="0.2" />
          </filter>
        </defs>

        {ribbonsConfig.map((ribbon) => (
          <g key={ribbon.id}>
            {/* Shadow Path */}
            <motion.path
              fill="none"
              stroke="#2c1a3b"
              strokeWidth={ribbon.strokeWidthShadow}
              strokeLinecap="round"
              opacity={ribbon.shadowOpacity}
              className="blur-sm"
              initial={{ d: ribbon.dInitial }}
              animate={{ 
                d: [
                  ribbon.dInitial,
                  ribbon.dAnimate1,
                  ribbon.dInitial
                ] 
              }}
              transition={{ 
                duration: ribbon.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: ribbon.delay 
              }}
            />

            {/* Ribbon Path */}
            <motion.path
              fill="none"
              stroke={`url(#${ribbon.gradientId})`}
              strokeWidth={ribbon.strokeWidth}
              strokeLinecap="round"
              filter="url(#shadow3d)"
              initial={{ d: ribbon.dInitial }}
              animate={{ 
                d: [
                  ribbon.dInitial,
                  ribbon.dAnimate1,
                  ribbon.dInitial
                ] 
              }}
              transition={{ 
                duration: ribbon.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: ribbon.delay 
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
