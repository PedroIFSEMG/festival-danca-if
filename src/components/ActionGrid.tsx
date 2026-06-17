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
    description: 'X Festival de Dança - 10 anos em movimento.',
    fullTitle: 'Sobre o Evento e Edital',
    details: 'O Instituto Federal do Sudeste de Minas Gerais – Campus Barbacena publicou o edital para o X Festival de Dança da instituição, que neste ano celebra o tema "10 anos em movimento". O evento tem como objetivo valorizar a dança como manifestação artística, cultural e educativa, além de fortalecer a integração entre a instituição e a comunidade regional.\n\nO festival será realizado nos dias 27 e 28 de junho de 2026, no Auditório Brigadeiro Eduardo Gomes, localizado na EPCAR, em Barbacena. A programação e os horários das apresentações serão definidos de acordo com o número de coreografias inscritas.\n\nAs inscrições estarão abertas no período de 04 de maio a 27 de maio de 2026, e devem ser feitas por meio do sistema próprio de inscrições, conforme orientações do edital. Os participantes poderão concorrer em diferentes categorias, incluindo modalidades escolares, conforme estabelecido no edital.\n\nA avaliação das apresentações será feita por uma comissão julgadora composta por profissionais da área de dança e artes, considerando critérios como criatividade e desempenho artístico. Ao final de cada sessão, haverá premiação para os participantes.\n\nO festival é uma das principais ações culturais do Campus Barbacena e busca ampliar o acesso à arte, incentivando a participação de estudantes e da comunidade. As informações completas, incluindo regras, categorias e documentação necessária, estão disponíveis no edital publicado no site institucional.',
    icon: History,
    img: img1,
    colSpan: 'md:col-span-2',
    accent: 'from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]',
  },
  {
    id: 'equipe',
    title: 'Nossa Equipe',
    description: 'Quem faz a magia.',
    fullTitle: 'Os Criadores por Trás das Cortinas',
    details: 'A magia que acontece sob os refletores só é possível graças ao esforço incansável de uma equipe técnica e artística multidisciplinar.\n\nNossa equipe é composta por coordenadores de palco, iluminadores cênicos, técnicos de som, curadores artísticos de dança e voluntários do IF Sudeste MG. Juntos, eles cuidam de cada detalhe: desde a gestão das inscrições e a ambientação acústica do Auditório EPCAr até a montagem cenográfica e os ensaios gerais, garantindo que cada bailarino encontre as condições ideais para expressar sua arte com excelência.',
    icon: Users,
    img: img2,
    colSpan: 'md:col-span-1',
    accent: 'from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]',
  },
  {
    id: 'motivacao',
    title: 'O Pulsar',
    description: 'O pulsar constante que nos move.',
    fullTitle: 'O Ritmo Invisível que nos Une',
    details: 'O Pulsar é a nossa força motriz, a batida cardíaca invisível que rege cada passo, cada salto e cada respiração compartilhada no palco.\n\nPara nós, a dança não é apenas movimento físico; é uma linguagem poética capaz de traduzir o indizível. O Pulsar representa a paixão que move o festival adiante há dez anos: o calor dos aplausos, a adrenalina do camarim, a vibração do palco de madeira e a união de diferentes corpos celebrando a existência através do ritmo. É a pulsação constante da arte que nos conecta e nos inspira a continuar dançando.',
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeAction]);

  return (
    <section className="py-2 relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto" id="historia">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/70 mb-4 block">Conheça mais</span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-[var(--color-festival-text)] tracking-tight">
          Nossa <span className="italic text-[var(--color-festival-primary)] drop-shadow-sm">Essência</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {actions.map((action, index) => (
          <motion.div
            onClick={() => setActiveAction(action)}
            key={action.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.12, duration: 0.8 }}
            className={`group glow-border flex flex-col relative overflow-hidden rounded-[2rem] bg-[var(--color-festival-bg)]/80 min-h-[320px] border border-[var(--color-festival-primary)]/40 hover:border-[var(--color-festival-primary)] transition-all duration-300 cursor-pointer ${action.colSpan}`}
            role="button"
            aria-label={`Ver detalhes sobre ${action.title}`}
          >
            {/* Background Image */}
            <img 
               src={action.img} 
               alt="" 
               className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35  transition-all duration-500 ease-out"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-bg)] via-[var(--color-festival-bg)]/85 to-transparent" />
            
            {/* Hover glow from bottom */}
            <div className={`absolute inset-0 bg-gradient-to-t ${action.accent} opacity-0 group-hover:opacity-[0.15] transition-opacity duration-300`} />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between p-8 sm:p-10 w-full flex-grow">
              <div className={`self-end w-14 h-14 rounded-2xl bg-gradient-to-br ${action.accent} shadow-lg flex items-center justify-center text-[var(--color-festival-text-light)] border border-white/20 transition-all duration-300`}>
                <action.icon size={22} strokeWidth={2} />
              </div>
              
              <div>
                 <h3 className="font-serif text-3xl sm:text-4xl font-medium mb-3 text-[var(--color-festival-text)] tracking-wide">{action.title}</h3>
                 <p className="text-[var(--color-festival-text)]/75 font-light leading-relaxed max-w-sm text-base sm:text-lg">{action.description}</p>
                 
                 <div className="mt-6 flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-festival-lilac)] group-hover:text-[var(--color-festival-primary)] transition-colors duration-300">
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveAction(null)}
              className="absolute inset-0 bg-[var(--color-festival-bg)]/80 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[var(--color-festival-dark-surface)] rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--color-festival-lilac-light)]/30 shadow-[0_25px_80px_rgba(44,26,59,0.22)] w-full max-w-2xl max-h-[82vh] overflow-hidden z-10 flex flex-col"
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
                <div className="relative h-48 sm:h-64 w-full shrink-0 overflow-hidden">
                  <img
                    src={activeAction.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-dark-surface)] via-[var(--color-festival-dark-surface)]/50 to-transparent" />
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-10 pt-4 flex-grow flex flex-col justify-start">
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
