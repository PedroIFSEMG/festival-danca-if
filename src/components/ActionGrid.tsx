import { useState, useEffect } from 'react';
import { ArrowUpRight, Heart, Landmark, Sparkles, Users, X } from 'lucide-react';
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
    details:
      'O X Festival de Dança celebra 10 anos em movimento, valorizando a dança como expressão artística, cultural e educativa.\n\nO encontro acontece nos dias 27 e 28 de junho de 2026, no Auditório Brigadeiro Eduardo Gomes, na EPCAR, reunindo estudantes, artistas e comunidade regional.\n\nA programação destaca criatividade, presença cênica e diversidade de linguagens, com premiações ao final das sessões.',
    icon: Landmark,
    img: img1,
    accent: 'from-[var(--color-festival-gold)] via-[var(--color-festival-rose)] to-[var(--color-festival-primary)]',
  },
  {
    id: 'equipe',
    title: 'Nossa Equipe',
    description: 'Pessoas que fazem acontecer.',
    fullTitle: 'Os Criadores por Trás das Cortinas',
    details:
      'O festival é construído por uma equipe técnica, artística e voluntária que cuida dos bastidores com atenção.\n\nDa organização das inscrições ao acolhimento no palco, cada detalhe existe para que os participantes possam dançar com segurança e presença.',
    icon: Users,
    img: img2,
    accent: 'from-[var(--color-festival-gold)] via-[var(--color-festival-lilac)] to-[var(--color-festival-primary)]',
  },
  {
    id: 'motivacao',
    title: 'O Pulsar',
    description: 'A energia que nos move.',
    fullTitle: 'O Ritmo Invisível que nos Une',
    details:
      'O Pulsar representa a paixão que conecta corpos, ritmos e histórias no palco.\n\nÉ a energia dos aplausos, do camarim e da criação coletiva que mantém o festival vivo há uma década.',
    icon: Heart,
    img: img3,
    accent: 'from-[var(--color-festival-gold)] via-[var(--color-festival-rose)] to-[var(--color-festival-primary)]',
  },
];

export default function ActionGrid() {
  const [activeAction, setActiveAction] = useState<typeof actions[number] | null>(null);

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
    <section
      className={`relative mx-auto max-w-[90rem] px-4 py-8 sm:px-6 md:py-12 lg:px-8 ${activeAction ? 'z-[100]' : 'z-10'}`}
      id="historia"
    >
      <div className="absolute inset-x-0 top-6 -z-10 mx-auto h-[72%] max-w-[82rem] rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(184,138,74,0.16),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(94,54,106,0.18),transparent_34%),linear-gradient(180deg,rgba(180,63,98,0.05),transparent)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center md:mb-12 md:text-left"
      >
        <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-festival-lilac)]/70">
          Conheça mais
        </span>
        <h2 className="font-serif text-4xl font-medium tracking-tight text-[var(--color-festival-text)] sm:text-5xl md:text-7xl">
          Nossa <span className="italic text-[var(--color-festival-primary)] drop-shadow-sm">Essência</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-festival-text)]/68 sm:text-base md:mx-0">
          Três forças sustentam o festival: memória, bastidor e presença coletiva no palco.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {actions.map((action, index) => (
          <motion.article
            onClick={() => setActiveAction(action)}
            key={action.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.12, duration: 0.8 }}
            className="group glow-border relative flex min-h-[390px] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-[var(--color-festival-gold)]/20 bg-[linear-gradient(145deg,rgba(251,248,252,0.72),rgba(230,216,232,0.58))] shadow-[0_18px_50px_rgba(44,26,59,0.10)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-festival-primary)]/45 hover:shadow-[0_22px_58px_rgba(94,54,106,0.16)]"
            role="button"
            aria-label={`Ver detalhes sobre ${action.title}`}
          >
            <div className="relative h-44 shrink-0 overflow-hidden">
              <img
                src={action.img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${action.accent} opacity-45 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-58`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a3b]/82 via-[#2c1a3b]/24 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-[var(--color-festival-gold)]/35 bg-[#140a20]/64 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f6dfad] shadow-[0_8px_22px_rgba(0,0,0,0.25)]">
                0{index + 1}
              </div>
              <div
                className={`absolute bottom-5 right-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${action.accent} text-white shadow-[0_14px_34px_rgba(20,10,32,0.34)] ring-1 ring-white/35 transition-transform duration-300 group-hover:scale-110`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 ring-1 ring-white/20">
                  <action.icon size={20} strokeWidth={2.15} />
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="font-serif text-3xl font-medium leading-tight tracking-wide text-[var(--color-festival-text)]">
                  {action.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-[var(--color-festival-text)]/72 sm:text-[15px]">
                  {action.description}
                </p>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-[var(--color-festival-gold)]/18 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-festival-lilac)] transition-colors duration-300 group-hover:text-[var(--color-festival-primary)]">
                  Conheça
                </span>
                <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${action.accent} text-white shadow-[0_10px_24px_rgba(94,54,106,0.18)] transition-all duration-300 group-hover:scale-105`}>
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeAction && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveAction(null)}
              className="absolute inset-0 cursor-pointer bg-[var(--color-festival-dark)]/72 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.25rem] border border-[var(--color-festival-lilac-light)]/30 bg-[var(--color-festival-dark-surface)] shadow-[0_25px_90px_rgba(12,5,20,0.42)] sm:rounded-[1.75rem]"
            >
              <button
                onClick={() => setActiveAction(null)}
                className="absolute right-3 top-3 z-30 cursor-pointer rounded-full border border-[var(--color-festival-dark)]/10 bg-[var(--color-festival-text-light)] p-3 text-[var(--color-festival-dark)] shadow-[0_8px_24px_rgba(44,26,59,0.28)] transition-colors hover:bg-white sm:right-4 sm:top-4"
                aria-label="Fechar detalhes"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-72 md:h-80">
                  <img src={activeAction.img} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-dark-surface)] via-[var(--color-festival-dark-surface)]/50 to-transparent" />
                </div>

                <div className="flex flex-grow flex-col justify-start p-6 pt-4 sm:p-8 md:p-10">
                  <div className="mb-4 flex items-center space-x-3 pr-12">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${activeAction.accent} text-[var(--color-festival-text-light)]`}
                    >
                      <activeAction.icon size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-festival-lilac-light)]">
                      {activeAction.title}
                    </span>
                  </div>

                  <h3 className="mb-6 font-serif text-2xl font-medium leading-tight text-[var(--color-festival-text-light)] sm:text-4xl">
                    {activeAction.fullTitle}
                  </h3>

                  <div className="max-w-none space-y-4 text-sm font-light leading-relaxed text-[var(--color-festival-text-light)]/90 sm:text-base">
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
