import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown() {
  // Target date: 27 de Junho
  const targetDate = new Date(`June 27, ${new Date().getFullYear()} 00:00:00`).getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: 'Dias', value: timeLeft.days, color: 'from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]' },
    { label: 'Horas', value: timeLeft.hours, color: 'from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]' },
    { label: 'Minutos', value: timeLeft.minutes, color: 'from-[var(--color-festival-gold)] to-[var(--color-festival-rose)]' },
    { label: 'Segundos', value: timeLeft.seconds, color: 'from-[var(--color-festival-rose)] to-[var(--color-festival-primary)]' },
  ];

  return (
    <section className="py-8 md:py-10 relative overflow-hidden">
      {/* Section gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-festival-primary)]/[0.03] to-transparent pointer-events-none z-0" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[var(--color-festival-primary)]/[0.08] rounded-full blur-[80px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-festival-primary)]/[0.05] rounded-full blur-[80px] z-0" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center md:text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/60 block mb-4">Contagem Regressiva</span>
            <h2 className="font-serif text-5xl md:text-7xl font-medium mb-3 tracking-wide text-[var(--color-festival-text)]">Próximo <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-festival-gold)] to-[var(--color-festival-rose)]">Evento</span></h2>
            <p className="text-[var(--color-festival-text)]/60 tracking-[0.2em] uppercase text-xs lg:text-sm font-bold mb-10 md:mb-12"><span className="font-roman text-[var(--color-festival-gold)] pr-0.5 select-none">X</span> Festival de Dança • Campus Barbacena</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto text-center">
                {items.map((item) => (
                   <div key={item.label} className="glow-border group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/18 backdrop-blur-2xl border border-white/35 shadow-[0_18px_50px_rgba(44,26,59,0.12),inset_0_1px_0_rgba(255,255,255,0.38)] ring-1 ring-[var(--color-festival-primary)]/10 hover:bg-white/26 hover:border-white/50 transition-all duration-500">
                      <div className="p-6 md:p-8 relative z-10">
                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-[0.04] group-hover:opacity-[0.10] transition-opacity duration-700`} />
                        
                        <div className={`text-6xl md:text-7xl font-serif font-black italic mb-2 text-transparent bg-clip-text bg-gradient-to-br ${item.color} drop-shadow-[0_2px_20px_rgba(124,58,237,0.3)] relative z-10`}>
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[var(--color-festival-text)]/60 font-bold group-hover:text-[var(--color-festival-text)]/60 transition-colors relative z-10">
                          {item.label}
                        </div>
                      </div>
                   </div>
                ))}
            </div>
        </motion.div>
      </div>

      {/* Gradient divider line */}
      <div className="section-divider max-w-4xl mx-auto mt-16 md:mt-20" />
    </section>
  );
}
