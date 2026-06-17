export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full h-full" aria-hidden="true">
      <div className="absolute top-[8%] left-[8%] w-[26rem] h-[26rem] rounded-full bg-[var(--color-festival-primary)]/[0.10] blur-[80px]" />
      <div className="absolute top-[48%] right-[4%] w-[28rem] h-[28rem] rounded-full bg-[var(--color-festival-rose)]/[0.08] blur-[90px]" />
      <div className="absolute top-[30%] left-[36%] w-[24rem] h-[24rem] rounded-full bg-[var(--color-festival-lilac)]/[0.05] blur-[80px]" />

      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20256%20256%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
    </div>
  );
}
