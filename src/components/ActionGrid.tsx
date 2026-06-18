import { useState, useEffect } from 'react';
import { History, Users, Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import img1 from '../assets/gallery/foto-02.jpg';
import img2 from '../assets/gallery/foto-03.jpg';
import img3 from '../assets/gallery/foto-06.jpg';

const actions = [
  {
    id: 'festival',
    title: 'O Festival',
    description: '10 anos em movimento.',
    fullTitle: 'Sobre o Evento e Edital',
    details: 'O X Festival de Dança celebra 10 anos em movimento, valorizando a dança como expressão artística, cultural e educativa.\n\nO encontro acontece nos dias 27 e 28 de junho de 2026, no Auditório Brigadeiro Eduardo Gomes, na EPCAR, reunindo estudantes, artistas e comunidade regional.\n\nA programação destaca criatividade, presença cênica e diversidade de linguagens, com premiações ao final das sessões.',
    icon: History,
    img: img1,
    colSpan: 'md:col-span-2',
    accent: 'from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]',
  },
  {
    id: 'equipe',
    title: 'Nossa Equipe',
    description: 'Pessoas que fazem acontecer.',
    fullTitle: 'Os Criadores por Trás das Cortinas',
    details: 'O festival é construído por uma equipe técnica, artística e voluntária que cuida dos bastidores com atenção.\n\nDa organização das inscrições ao acolhimento no palco, cada detalhe existe para que os participantes possam dançar com segurança e presença.',
    icon: Users,
    img: img2,
    colSpan: 'md:col-span-1',
    accent: 'from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]',
  },
  {
    id: 'motivacao',
    title: 'O Pulsar',
    description: 'A energia que nos move.',
    fullTitle: 'O Ritmo Invisível que nos Une',
    details: 'O Pulsar representa a paixão que conecta corpos, ritmos e histórias no palco.\n\nÉ a energia dos aplausos, do camarim e da criação coletiva que mantém o festival vivo há uma década.',
    icon: Heart,
    img: img3,
    colSpan: 'md:col-span-3',
    accent: 'from-[var(--color-festival-rose)] to-[var(--color-festival-gold)]',
  },
];

export default function ActionGrid() {
  const [activeAction, setActiveAction] = useState<typeof actions[number] | null>(null);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (activeAction) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveAction(null);
      }
    };

    if (activeAction) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeAction]);

  return (
    <section className="py-8 md:py-10 relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto" id="historia">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/70 mb-4 block">Conheça mais</span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-[var(--color-festival-text)] tracking-tight">
          Nossa <span className="italic text-[var(--color-festival-primary)] drop-shadow-sm">Essência</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {actions.map((action, index) => (
          <motion.div
            onClick={() => setActiveAction(action)}
            key={action.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.12, duration: 0.8 }}
            className={`group glow-border flex flex-col relative overflow-hidden rounded-[1.5rem] bg-[var(--color-festival-dark)]/10 backdrop-blur-xl min-h-[250px] md:min-h-[280px] border border-[var(--color-festival-primary)]/24 hover:border-[var(--color-festival-primary)]/55 shadow-[0_16px_44px_rgba(44,26,59,0.09)] transition-all duration-300 cursor-pointer ${action.colSpan}`}
            role="button"
            aria-label={`Ver detalhes sobre ${action.title}`}
          >
            {/* Background Image */}
            <img 
               src={action.img} 
               alt="" 
               className="absolute inset-0 w-full h-full object-cover opacity-24 group-hover:opacity-36 transition-all duration-500 ease-out"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-bg)]/88 via-[var(--color-festival-bg)]/62 to-transparent" />
            
            {/* Hover glow from bottom */}
            <div className={`absolute inset-0 bg-gradient-to-t ${action.accent} opacity-0 group-hover:opacity-[0.15] transition-opacity duration-300`} />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 lg:p-8 w-full flex-grow">
              <div className={`self-end w-12 h-12 rounded-2xl bg-gradient-to-br ${action.accent} shadow-lg flex items-center justify-center text-[var(--color-festival-text-light)] border border-white/20 transition-all duration-300`}>
                <action.icon size={20} strokeWidth={2} />
              </div>
              
              <div>
                 <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-2 text-[var(--color-festival-text)] tracking-wide">{action.title}</h3>
                 <p className="text-[var(--color-festival-text)]/72 font-normal leading-relaxed max-w-sm text-sm sm:text-[15px]">{action.description}</p>
                 
                 <div className="mt-5 flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-festival-lilac)] group-hover:text-[var(--color-festival-primary)] transition-colors duration-300">
                    <span>Conheça</span>
                    <div className="w-8 h-px bg-gradient-to-r from-[var(--color-festival-lilac)] to-[var(--color-festival-primary)] group-hover:w-16 transition-all duration-300" />
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Detail Modal */}
      <AnimatePresence>
        {activeAction && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveAction(null)}
              className="absolute inset-0 bg-[var(--color-festival-dark)]/72 backdrop-blur-2xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[var(--color-festival-dark-surface)] rounded-[1.25rem] sm:rounded-[1.75rem] border border-[var(--color-festival-lilac-light)]/30 shadow-[0_25px_90px_rgba(12,5,20,0.42)] w-full max-w-5xl max-h-[94vh] overflow-hidden z-10 flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveAction(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 text-[var(--color-festival-dark)] bg-[var(--color-festival-text-light)] hover:bg-white p-3 rounded-full transition-colors border border-[var(--color-festival-dark)]/10 shadow-[0_8px_24px_rgba(44,26,59,0.28)] cursor-pointer"
                aria-label="Fechar detalhes"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Banner Image */}
                <div className="relative h-48 sm:h-72 md:h-80 w-full shrink-0 overflow-hidden">
                  <img
                    src={activeAction.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-dark-surface)] via-[var(--color-festival-dark-surface)]/50 to-transparent" />
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 md:p-10 pt-4 flex-grow flex flex-col justify-start">
                  <div className="flex items-center space-x-3 mb-4 pr-12">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeAction.accent} flex items-center justify-center text-[var(--color-festival-text-light)]`}>
                      <activeAction.icon size={18} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-festival-lilac-light)]">{activeAction.title}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl font-medium text-[var(--color-festival-text-light)] mb-6 leading-tight">
                    {activeAction.fullTitle}
                  </h3>

                  {/* Content paragraphs */}
                  <div className="space-y-4 text-[var(--color-festival-text-light)]/90 font-light text-sm sm:text-base leading-relaxed max-w-none">
                    {activeAction.details.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
