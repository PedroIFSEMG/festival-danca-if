import { motion } from 'motion/react';
import { ArrowDown, Images, MapPinned } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-8 lg:pt-24">
      <div className="stage-spotlights" aria-hidden="true">
        <span className="stage-spotlight stage-spotlight-left" />
        <span className="stage-spotlight stage-spotlight-right" />
      </div>

      {/* Radial spotlight behind dancer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Mobile Only: Pill and Title */}
          <div className="lg:hidden flex flex-col items-center text-center order-1 mt-4">
            <div
              className="inline-flex items-center space-x-3 mb-6 bg-gradient-to-r from-[var(--color-festival-bg)]/90 to-[var(--color-festival-dark-surface)]/5 backdrop-blur-2xl px-5 py-3 rounded-full border border-[var(--color-festival-text)]/[0.08] shadow-[0_8px_30px_rgba(124,58,237,0.12)] relative overflow-hidden group"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute rounded-full bg-[var(--color-festival-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-festival-primary)] shadow-[0_0_12px_rgba(94,54,106,0.5)]"></span>
              </span>
              <span className="font-sans text-xs sm:text-sm text-[var(--color-festival-text)] tracking-[0.25em] uppercase font-bold drop-shadow-sm">
                10 anos em <span className="text-[var(--color-festival-primary)]">movimento</span>
              </span>
            </div>

            <motion.h1
              className="font-serif text-5xl sm:text-7xl leading-[0.95] text-[var(--color-festival-text)] font-bold tracking-tight mb-2 relative"
            >
              <span className="block text-[var(--color-festival-primary)]">X Festival</span>
              <span 
              className="font-serif italic text-6xl sm:text-5xl block -mt-2 pb-2 font-medium tracking-normal text-[var(--color-festival-text)/70]">
                de
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-festival-gold)] to-[var(--color-festival-rose)]">Dança</span></span>
            </motion.h1>
          </div>

          {/* Banner Image Side (Hero focus) */}
          <div className="lg:col-span-7 order-2 lg:order-2 w-full flex justify-center lg:justify-end relative mt-2 lg:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[450px] lg:max-w-none">
              <div
                className="dancer-stage relative w-full flex flex-col lg:flex-row justify-center items-center"
              >
                {/* Radial glow behind dancer */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(ellipse_at_center,rgba(192,132,252,0.12)_0%,rgba(124,58,237,0.06)_40%,transparent_70%)] z-0" />

                {/* The Image */}
                <img
                  src="https://i.postimg.cc/gjf1syBp/dancer.png"
                  alt="Dançarina - Banner Oficial do X Festival de Dança"
                  className="dancer-float relative w-full h-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)] cursor-pointer"
                />
              </div>
              <div className="absolute left-3 bottom-5 sm:left-6 sm:bottom-7 lg:left-10 lg:bottom-9 z-20 flex min-h-[5.1rem] w-[6.1rem] flex-col items-center justify-center rounded-xl border border-[var(--color-festival-primary)]/18 bg-transparent px-2.5 py-2 opacity-65 shadow-[0_10px_26px_rgba(44,26,59,0.10)]">
                <span className="text-[var(--color-festival-primary)] font-bold uppercase tracking-[0.2em] text-[8px]">Data</span>
                <span className="whitespace-nowrap font-serif text-[1.9rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]">27-28</span>
                <span className="mt-1.5 text-[var(--color-festival-primary)] uppercase tracking-[0.2em] text-[8px] font-bold">Junho</span>
              </div>
            </div>
          </div>

          {/* Typography / Content Side */}
          <div className="lg:col-span-5 order-3 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Desktop Only: Pill and Title */}
              <div className="hidden lg:inline-flex items-center gap-3 mb-7 bg-[var(--color-festival-bg)]/80 backdrop-blur-2xl px-5 py-3 rounded-full border border-[var(--color-festival-primary)]/14 shadow-[0_10px_30px_rgba(124,58,237,0.10)] relative overflow-hidden">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-festival-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-festival-primary)] shadow-[0_0_12px_rgba(94,54,106,0.5)]"></span>
                </span>
                <span className="font-sans text-[11px] text-[var(--color-festival-lilac)] uppercase font-bold tracking-[0.28em]">
                  10 anos em movimento
                </span>
              </div>

              <h1 className="hidden lg:block font-serif text-[5.8rem] xl:text-[6.6rem] leading-[0.92] text-[var(--color-festival-text)] font-bold tracking-tight mb-6 relative max-w-[11ch]">
                <span className="block text-[var(--color-festival-primary)]">X Festival</span>
                <span className="font-serif italic text-[6.4rem] xl:text-[7rem] block -mt-2 pb-2 font-medium tracking-normal text-[var(--color-festival-text)]">de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-festival-gold)] to-[var(--color-festival-rose)]">Dança</span></span>
              </h1>

              <div className="max-w-xl mx-auto lg:mx-0">
                <div className="mb-7">
                  <p className="max-w-[34rem] text-[var(--color-festival-text)] text-center lg:text-left font-medium text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed sm:leading-[1.7]">
                    Uma celebração da dança como linguagem artística, cultural e educativa, conectando o <strong>IF Sudeste MG - Campus Barbacena</strong> à comunidade regional.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a href="#galeria" className="group inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[var(--color-festival-gold)] via-[var(--color-festival-rose)] to-[var(--color-festival-primary)] text-[var(--color-festival-text-light)] rounded-full font-bold uppercase tracking-[0.16em] text-[11px] shadow-[0_10px_30px_rgba(184,138,74,0.26)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(94,54,106,0.32)]">
                    <Images size={15} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Ver galeria</span>
                  </a>
                  <a href="#local" className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--color-festival-bg)]/70 backdrop-blur-xl text-[var(--color-festival-text)] border border-[var(--color-festival-primary)]/18 rounded-full font-bold uppercase tracking-[0.16em] text-[11px] hover:bg-[var(--color-festival-bg)] hover:border-[var(--color-festival-primary)]/35 transition-all duration-300">
                    <MapPinned size={15} className="text-[var(--color-festival-primary)]" />
                    <span>Como chegar</span>
                  </a>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="mt-8 lg:mt-10 flex flex-col items-center lg:items-start text-[var(--color-festival-text)]/60"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Deslize</span>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDown size={20} strokeWidth={1} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
