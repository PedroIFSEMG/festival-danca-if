import { HandHeart, Images, Landmark, MapPin, Menu, Newspaper, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#historia', icon: Landmark, label: 'História' },
    { href: '#galeria', icon: Images, label: 'Galeria' },
    { href: '#noticias', icon: Newspaper, label: 'Notícias' },
    { href: '#sponsors', icon: HandHeart, label: 'Apoio' },
  ];

  return (
    <div className="fixed top-3 inset-x-0 z-50 flex flex-col items-center px-4">

      {/* ── Pill bar ─────────────────────────────────────────────────── */}
      <nav className="
        w-[90%] md:w-fit md:max-w-[calc(100vw-2rem)]
        rounded-full
        bg-white/50 backdrop-blur-[20px] backdrop-brightness-900
        border border-white/55
        px-4 py-2
      ">
        <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-3 relative">

          {/* Logos */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logoImg} alt="Logo do festival" className="h-7 sm:h-8 w-auto drop-shadow-[0_0_6px_rgba(192,132,252,0.3)]" />
            <img
              src="https://www.ifsudestemg.edu.br/comunicacao-social/logos/if-sudeste-mg/logo_horizontal_ifsudestemg%282%29.png"
              alt="IF Sudeste MG"
              className="h-5 sm:h-6 w-auto object-contain hidden sm:block"
            />
          </div>

          {/* Mobile: title absolutely centered */}
          <span className="md:hidden absolute left-1/2 -translate-x-1/2 font-serif text-sm tracking-tight text-[var(--color-festival-primary)] font-bold whitespace-nowrap pointer-events-none">
            X Festival
          </span>

          {/* Desktop: divider + title + divider + links */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <div className="w-px h-5 bg-[var(--color-festival-primary)]/20" />
            <span className="font-serif text-base lg:text-lg leading-none tracking-tight text-[var(--color-festival-primary)] font-bold whitespace-nowrap">
              <span className="text-[var(--color-festival-primary)] font-bold">X</span> Festival de Dança
            </span>
            <div className="w-px h-5 bg-[var(--color-festival-primary)]/20" />
          </div>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[var(--color-festival-text)]/72 hover:text-[var(--color-festival-text)] hover:bg-white/48 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_8px_18px_rgba(94,54,106,0.10)] transition-all duration-200 text-[11px] font-semibold uppercase tracking-[0.08em] group whitespace-nowrap"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-festival-primary)]/8 text-[var(--color-festival-primary)] transition-all duration-200 group-hover:bg-[var(--color-festival-primary)]/14">
                  <item.icon size={15} strokeWidth={3} />
                </span>
                <span className="hidden lg:inline">{item.label}</span>
              </a>
            ))}
            <a
              href="#local"
              className="flex items-center gap-1.5 ml-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] backdrop-blur-xl border border-white/25 shadow-[0_10px_24px_rgba(94,54,106,0.26)] text-[var(--color-festival-text-light)] text-[11px] font-bold uppercase tracking-[0.08em] whitespace-nowrap"
            >
              <span className="flex items-center"><MapPin size={15} strokeWidth={3} /></span>
              <span className="hidden lg:inline">Local</span>
            </a>
          </div>

          {/* Mobile right: hamburger */}
          <div className="flex md:hidden items-center flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-festival-primary)] hover:text-[var(--color-festival-text)] bg-white/44 backdrop-blur-2xl p-2 rounded-full border border-white/45 hover:border-[var(--color-festival-primary)]/35 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
              aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
            >
              {isOpen ? <X size={16} strokeWidth={3} /> : <Menu size={16} strokeWidth={3} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile dropdown ──────────────────────────────────────────── */}
      {isOpen && (
        <div className="md:hidden mt-2 w-[90%] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(251,248,252,0.82),rgba(230,216,232,0.62))] backdrop-blur-[28px] backdrop-saturate-150 border border-white/55 shadow-[0_18px_50px_rgba(44,26,59,0.20),inset_0_1px_0_rgba(255,255,255,0.62)] overflow-hidden pointer-events-auto">
          <div className="px-5 py-5 flex flex-col items-stretch gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-[var(--color-festival-text)]/74 font-semibold uppercase tracking-widest text-xs hover:text-[var(--color-festival-text)] hover:bg-white/42 rounded-full transition-all duration-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-festival-primary)]/10 text-[var(--color-festival-primary)]">
                  <item.icon size={17} strokeWidth={3} />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="#local"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] text-[var(--color-festival-text-light)] font-bold uppercase tracking-widest text-xs shadow-[0_10px_24px_rgba(94,54,106,0.22)]"
            >
              <span className="flex items-center"><MapPin size={16} strokeWidth={3} /></span>
              <span>Local</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
