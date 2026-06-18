import { SPONSORS } from '../constants';

export default function Sponsors() {
  if (!SPONSORS || SPONSORS.length === 0) {
    return null;
  }

  return (
    <section id="sponsors" className="py-8 md:py-10 relative overflow-hidden">
      {/* Gradient line top */}
      <div className="section-divider max-w-4xl mx-auto mb-10 md:mb-12" />

      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-10 text-center md:text-left relative z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/60 block mb-4">Parceiros de Destaque</span>
        <h3 className="font-serif text-3xl md:text-5xl font-medium text-[var(--color-festival-text)]">
          Apoiadores &amp; <span className="italic text-[var(--color-festival-primary)]">Patrocinadores</span>
        </h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-festival-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-festival-bg)] to-transparent z-10 pointer-events-none" />

        <div className="sponsor-marquee flex items-center whitespace-nowrap w-max py-4">
          {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
            <div key={`${sponsor.id}-${index}`} className="mx-5 flex-none w-52 bg-[var(--color-festival-bg)]/60 backdrop-blur-xl px-6 py-5 rounded-2xl border border-[var(--color-festival-primary)]/20 hover:border-[var(--color-festival-primary)]/50 transition-all duration-500 flex items-center justify-center group cursor-pointer">
               {sponsor.img ? (
                 sponsor.link ? (
                   <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                     <img src={sponsor.img} alt={sponsor.name} className="w-full h-auto rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                   </a>
                 ) : (
                   <img src={sponsor.img} alt={sponsor.name} className="w-full h-auto rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                 )
               ) : (
                 <span className="text-center text-sm font-semibold text-[var(--color-festival-text)]/60 group-hover:text-[var(--color-festival-primary)] transition-colors duration-300 whitespace-normal leading-tight">
                   {sponsor.name}
                 </span>
               )}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient line bottom */}
      <div className="section-divider max-w-4xl mx-auto mt-10 md:mt-12" />
    </section>
  );
}
