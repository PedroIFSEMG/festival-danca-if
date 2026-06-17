import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';
import { RiGalleryFill, RiMapPinFill, RiHistoryFill } from 'react-icons/ri';
import { FaNewspaper, FaHandshake } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#historia', icon: <RiHistoryFill />, label: 'História' },
    { href: '#galeria', icon: <RiGalleryFill />, label: 'Galeria' },
    { href: '#noticias', icon: <FaNewspaper />, label: 'Notícias' },
    { href: '#sponsors', icon: <FaHandshake />, label: 'Apoio' },
  ];

  return (
    <div className="fixed top-3 inset-x-0 z-50 flex flex-col items-center px-4">

      {/* ── Pill bar ─────────────────────────────────────────────────── */}
      <nav className="
        w-[90%] md:w-fit md:max-w-[calc(100vw-2rem)]
        rounded-full
        bg-[var(--color-festival-bg)]/85 backdrop-blur-2xl
        border border-[var(--color-festival-lilac)]/20
        px-3 py-2
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[var(--color-festival-text)]/65 hover:text-[var(--color-festival-text)] hover:bg-[var(--color-festival-primary)]/[0.08] transition-all duration-200 text-[11px] font-semibold uppercase tracking-[0.08em] group whitespace-nowrap"
              >
                <span className="text-xs text-[var(--color-festival-lilac)]/70 group-hover:text-[var(--color-festival-primary)] transition-colors duration-200 flex items-center">{item.icon}</span>
                <span className="hidden lg:inline">{item.label}</span>
              </a>
            ))}
            <a
              href="#local"
              className="flex items-center gap-1.5 ml-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] text-[var(--color-festival-text-light)] text-[11px] font-bold uppercase tracking-[0.08em] whitespace-nowrap"
            >
              <span className="text-xs flex items-center"><RiMapPinFill /></span>
              <span className="hidden lg:inline">Local</span>
            </a>
          </div>

          {/* Mobile right: hamburger */}
          <div className="flex md:hidden items-center flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-festival-text)]/80 hover:text-[var(--color-festival-text)] bg-[var(--color-festival-primary)]/[0.08] p-2 rounded-full border border-[var(--color-festival-primary)]/15 hover:border-[var(--color-festival-primary)]/30 transition-all"
              aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile dropdown ──────────────────────────────────────────── */}
      {isOpen && (
        <div className="md:hidden mt-2 w-[90%] rounded-[1.5rem] bg-[var(--color-festival-bg)]/95 backdrop-blur-2xl border border-[var(--color-festival-lilac)]/20 overflow-hidden">
          <div className="px-5 py-5 flex flex-col items-stretch gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-[var(--color-festival-text)]/70 font-semibold uppercase tracking-widest text-xs hover:text-[var(--color-festival-text)] hover:bg-[var(--color-festival-primary)]/[0.07] rounded-full transition-all duration-200"
              >
                <span className="text-base text-[var(--color-festival-lilac)] flex items-center">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="#local"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] text-[var(--color-festival-text-light)] font-bold uppercase tracking-widest text-xs"
            >
              <span className="flex items-center"><RiMapPinFill /></span>
              <span>Local</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
