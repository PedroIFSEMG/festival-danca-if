import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-festival-dark text-[var(--color-festival-text-light)] pt-16 pb-8 border-t border-[var(--color-festival-primary)]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Logo do festival" className="h-10 w-auto" />
            </div>
            <div className="font-serif text-xl tracking-[0.15em] font-medium text-[var(--color-festival-primary)] uppercase leading-tight">
              <span className="font-roman text-[var(--color-festival-text-light)] pr-0.5 select-none">X</span> Festival<br />de Dança
            </div>
            <p className="text-[var(--color-festival-text-light)]/50 font-light text-sm leading-relaxed max-w-xs">
              Há 10 anos celebrando a arte e o movimento.<br />
              Realização <span className="text-[var(--color-festival-primary)]/80">IF Sudeste MG</span> – Campus Barbacena.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-festival-primary)]/10 border border-[var(--color-festival-primary)]/20 flex items-center justify-center hover:bg-[var(--color-festival-primary)]/25 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-festival-primary)]/10 border border-[var(--color-festival-primary)]/20 flex items-center justify-center hover:bg-[var(--color-festival-primary)]/25 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-serif text-base mb-5 text-[var(--color-festival-primary)] uppercase tracking-widest">Links Rápidos</h4>
            <ul className="space-y-3 text-[var(--color-festival-text-light)]/55 font-light text-sm">
              {[
                { href: '#historia', label: 'Nossa História' },
                { href: '#galeria',  label: 'Galeria' },
                { href: '#noticias', label: 'Notícias' },
                { href: '#sponsors', label: 'Patrocinadores' },
                { href: '#local',    label: 'Local' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[var(--color-festival-primary)] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-serif text-base mb-5 text-[var(--color-festival-primary)] uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4 text-[var(--color-festival-text-light)]/55 font-light text-sm">
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <Mail className="shrink-0 mt-0.5 text-[var(--color-festival-lilac)]" size={16} />
                <span>festivaldedanca@<br />ifsudestemg.edu.br</span>
              </li>
              <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                <Phone className="shrink-0 text-[var(--color-festival-lilac)]" size={16} />
                <span>(32) 3693-0000</span>
              </li>
            </ul>
          </div>

          {/* IF site */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="bg-[var(--color-festival-primary)]/[0.06] rounded-2xl p-5 border border-[var(--color-festival-primary)]/15 w-full">
              <p className="text-sm text-[var(--color-festival-text-light)]/55 mb-4 leading-relaxed text-center sm:text-left">
                Acesse o site institucional do IF Sudeste MG – Campus Barbacena para mais informações.
              </p>
              <a
                href="https://www.ifsudestemg.edu.br/barbacena"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] text-[var(--color-festival-text-light)] hover:opacity-90 transition-opacity"
              >
                Acessar Site
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-festival-primary)]/10 pt-6 flex flex-col items-center gap-3 md:flex-row md:justify-between text-xs text-[var(--color-festival-text-light)]/40">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-roman text-[var(--color-festival-text-light)]/60 select-none">X</span> Festival de Dança IF Sudeste MG. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--color-festival-primary)] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[var(--color-festival-primary)] transition-colors">Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
