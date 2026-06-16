import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import FloatingRibbons from './FloatingRibbons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-24">
      {/* Radial spotlight behind dancer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Mobile Only: Pill and Title */}
          <div className="lg:hidden flex flex-col items-center text-center order-1 mt-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center space-x-3 mb-6 bg-gradient-to-r from-[var(--color-festival-bg)]/90 to-[var(--color-festival-dark-surface)]/5 backdrop-blur-2xl px-5 py-3 rounded-full border border-[var(--color-festival-text)]/[0.08] shadow-[0_8px_30px_rgba(124,58,237,0.12)] relative overflow-hidden group"
              >
                 <span className="relative flex h-2.5 w-2.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-festival-primary)] opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-festival-primary)] shadow-[0_0_12px_rgba(94,54,106,0.5)]"></span>
                 </span>
                 <span className="font-sans text-xs sm:text-sm text-[var(--color-festival-text)] tracking-[0.25em] uppercase font-bold drop-shadow-sm">
                   10 anos em <span className="text-[var(--color-festival-primary)]">movimento</span>
                 </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="font-serif text-5xl sm:text-7xl leading-[0.95] text-[var(--color-festival-text)] font-bold tracking-tight mb-2 relative"
              >
                <span className="block text-[var(--color-festival-primary)]">X Festival</span>
                <span className="font-serif italic text-6xl sm:text-8xl block -mt-2 pb-2 font-medium tracking-normal text-[var(--color-festival-text)]">de Dança</span>
              </motion.h1>
          </div>

          {/* Banner Image Side (Hero focus) */}
          <div className="lg:col-span-7 order-2 lg:order-2 w-full flex justify-center lg:justify-end relative mt-2 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative w-full max-w-[360px] sm:max-w-[450px] lg:max-w-none flex flex-col lg:flex-row justify-center items-center"
              >
                  {/* Radial glow behind dancer */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(ellipse_at_center,rgba(192,132,252,0.12)_0%,rgba(124,58,237,0.06)_40%,transparent_70%)] z-0" />
                  
                  {/* The Image */}
                  <motion.img 
                      src="https://i.postimg.cc/gjf1syBp/dancer.png" 
                      alt="Dançarina - Banner Oficial do X Festival de Dança" 
                      className="relative w-full h-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)] cursor-pointer"
                      animate={{
                        y: [0, -18, 8, -12, 0],
                        x: [0, 8, -6, 8, 0],
                        rotate: [0, 2.5, -2, 1.5, 0],
                      }}
                      transition={{
                        duration: 9,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.6, ease: "easeOut" }
                      }}
                  />
                  
                  {/* Floating Date Badge */}
                  <div 
                     className="mt-6 lg:mt-0 lg:absolute lg:bottom-12 lg:-left-6 p-4 rounded-2xl z-20 flex flex-col items-center bg-[var(--color-festival-bg)]/40 backdrop-blur-xl border border-[var(--color-festival-primary)]/20"
                  >
                     <span className="text-[var(--color-festival-primary)] font-bold uppercase tracking-widest text-[10px] lg:text-xs">Data</span>
                     <span className="font-serif text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]">27-28</span>
                     <span className="text-[var(--color-festival-lilac)] uppercase tracking-widest text-[9px] mt-2 lg:text-xs font-bold bg-[var(--color-festival-primary)] text-[var(--color-festival-text-light)] w-full py-1 rounded-2xl z-20 flex flex-col items-center">Junho</span>
                  </div>
              </motion.div>
          </div>

          {/* Typography / Content Side */}
          <div className="lg:col-span-5 order-3 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Desktop Only: Pill and Title */}
              <div className="hidden lg:inline-flex items-center space-x-4 mb-8 bg-gradient-to-r from-[var(--color-festival-bg)]/90 to-[var(--color-festival-dark-surface)]/5 backdrop-blur-2xl px-6 py-3.5 rounded-full border border-[var(--color-festival-text)]/[0.08] shadow-[0_8px_30px_rgba(124,58,237,0.12)] relative overflow-hidden group">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-festival-primary)] opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-festival-primary)] shadow-[0_0_12px_rgba(94,54,106,0.5)]"></span>
                 </span>
                 <span className="font-sans text-[15px] text-[var(--color-festival-text)] tracking-[0.3em] uppercase font-bold drop-shadow-sm">
                   10 anos em <span className="text-[var(--color-festival-primary)]">movimento</span>
                 </span>
              </div>
              
              <h1 className="hidden lg:block font-serif text-[6.5rem] leading-[0.95] text-[var(--color-festival-text)] font-bold tracking-tight mb-6 relative">
                <span className="block text-[var(--color-festival-primary)]">X Festival</span>
                <span className="font-serif italic text-[7rem] block -mt-2 pb-2 font-medium tracking-normal text-[var(--color-festival-text)]">de Dança</span>
              </h1>
              
              <p className="text-[var(--color-festival-text)]/80 font-medium text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                O evento tem como objetivo valorizar a dança como manifestação artística, cultural e educativa, além de fortalecer a integração entre o <strong>IF Sudeste MG - Campus Barbacena</strong> e a comunidade regional. 
                <br/><br/>
                O festival será realizado no <strong>Auditório Brigadeiro Eduardo Gomes (EPCAR)</strong>.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                 <a href="#galeria" className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] text-[var(--color-festival-text-light)] rounded-full font-bold uppercase tracking-widest text-xs shadow-[0_8px_30px_rgba(124,58,237,0.4)]  transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 text-[var(--color-festival-text-light)]">Ver Galeria</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </a>
                 <a href="#historia" className="px-8 py-4 bg-[var(--color-festival-text)]/[0.04] backdrop-blur-xl text-[var(--color-festival-text)]/90 border border-[var(--color-festival-text)]/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-festival-text)]/[0.08] hover:border-[var(--color-festival-lilac)]/30 transition-all duration-300 ">
                    Nossa História
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[var(--color-festival-text)]/60"
      >
         <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Deslize</span>
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
           <ArrowDown size={20} strokeWidth={1} />
         </motion.div>
      </motion.div>
      <FloatingRibbons />
    </section>
  );
}
