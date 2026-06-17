import { motion } from 'motion/react';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      {/* Aurora Blob 1: Deep Violet */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-[var(--color-festival-primary)]/20 blur-[120px] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />

      {/* Aurora Blob 2: Magenta / Rose */}
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -90, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[50%] right-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-festival-rose)]/12 blur-[140px] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />

      {/* Aurora Blob 3: Lilac */}
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[35%] w-[500px] h-[500px] rounded-full bg-[var(--color-festival-lilac)]/6 blur-[150px] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />

      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20256%20256%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
    </div>
  );
}
