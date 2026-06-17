import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import newsItemsData from '../data/posts.json';

interface Post {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  img?: string;
  category: string;
}

const newsItems = newsItemsData as Post[];

function PostImage({
  src,
  title,
  category,
  className,
}: {
  src?: string;
  title: string;
  category: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);
  const hasImage = Boolean(src?.trim()) && !hasError;

  if (hasImage) {
    return (
      <img
        src={src}
        alt={title}
        onError={() => setHasError(true)}
        className={className}
      />
    );
  }

  return (
    <div className={`${className ?? ''} relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,var(--color-festival-lilac-light)_0%,transparent_34%),linear-gradient(135deg,var(--color-festival-primary)_0%,var(--color-festival-rose)_54%,var(--color-festival-gold)_100%)]`}>
      <div className="absolute inset-0 bg-[var(--color-festival-dark)]/18" />
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[var(--color-festival-text-light)]/20" />
      <div className="absolute -left-8 bottom-4 h-24 w-24 rounded-full border border-[var(--color-festival-text-light)]/15" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center text-[var(--color-festival-text-light)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-festival-text-light)]/16 backdrop-blur-md border border-[var(--color-festival-text-light)]/25">
          <Calendar size={24} strokeWidth={1.8} />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-85">{category}</span>
      </div>
    </div>
  );
}

export default function News() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePost]);

  return (
    <section className="py-10 relative z-10" id="noticias">
      {/* Section ambient */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[var(--color-festival-rose)]/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/60 block mb-4">Fique por dentro</span>
          <h2 className="font-serif text-5xl md:text-7xl font-medium text-[var(--color-festival-text)] tracking-tight">
            Últimas <span className="italic text-[var(--color-festival-primary)] drop-shadow-sm">Atualizações</span>
          </h2>
          <p className="text-[var(--color-festival-text)]/60 text-sm tracking-[0.2em] uppercase font-bold mt-4">Notícias & Novidades</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() => setActivePost(item)}
              className="group glow-border flex flex-col rounded-[1.5rem] overflow-hidden bg-[var(--color-festival-bg)]/60 backdrop-blur-xl border border-[var(--color-festival-text)]/[0.08] hover:border-[var(--color-festival-lilac)]/35   transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                 <PostImage
                    src={item.img}
                    title={item.title}
                    category={item.category}
                    className="w-full h-full object-cover transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-bg)] via-[var(--color-festival-bg)]/30 to-transparent" />
                 
                 {/* Category badge on image */}
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1.5 bg-[var(--color-festival-primary)] backdrop-blur-md text-[var(--color-festival-text-light)] text-[9px] font-bold uppercase tracking-widest rounded-full shadow-md">
                     {item.category}
                   </span>
                 </div>
              </div>
              
              <div className="flex flex-col flex-grow p-7">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-festival-lilac)]">{item.date}</span>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--color-festival-text)] mb-4 leading-snug group-hover:text-[var(--color-festival-primary)] transition-colors cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-[var(--color-festival-text)]/80 font-light text-sm leading-relaxed mb-6 flex-grow">{item.excerpt}</p>
                
                <div className="mt-auto pt-4 border-t border-[var(--color-festival-text)]/[0.06]">
                   <button className="inline-flex items-center space-x-2 text-[var(--color-festival-lilac)] text-xs font-bold uppercase tracking-widest group-hover:text-[var(--color-festival-primary)] transition-colors bg-transparent border-0 cursor-pointer p-0">
                     <span>Ler Completo</span>
                     <ArrowRight size={14} className="transform transition-transform duration-300" />
                   </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Post Modal Portal/Overlay */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="absolute inset-0 bg-[var(--color-festival-bg)]/80 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[var(--color-festival-dark-surface)] rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--color-festival-lilac-light)]/30 shadow-[0_25px_80px_rgba(44,26,59,0.22)] w-full max-w-4xl max-h-[85vh] overflow-hidden z-10 flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 text-[var(--color-festival-dark)] bg-[var(--color-festival-text-light)] hover:bg-white p-3 rounded-full transition-colors border border-[var(--color-festival-dark)]/10 shadow-[0_8px_24px_rgba(44,26,59,0.28)] cursor-pointer"
                aria-label="Fechar post"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Banner Image */}
                <div className="relative h-64 sm:h-96 w-full shrink-0 overflow-hidden">
                  <PostImage
                    src={activePost.img}
                    title={activePost.title}
                    category={activePost.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-dark-surface)] via-[var(--color-festival-dark-surface)]/40 to-transparent" />
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-12 pt-4 flex-grow flex flex-col justify-start">
                  <div className="flex items-center space-x-3 mb-6 pr-12">
                    <span className="px-3 py-1 bg-[var(--color-festival-text-light)] text-[var(--color-festival-dark)] text-[9px] font-bold uppercase tracking-widest rounded-full">
                      {activePost.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-festival-lilac-light)]/60" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-festival-lilac-light)]">{activePost.date}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-festival-text-light)] mb-6 leading-tight">
                    {activePost.title}
                  </h3>

                  {/* Content paragraphs */}
                  <div className="space-y-6 text-[var(--color-festival-text-light)]/90 font-light text-sm sm:text-base leading-relaxed max-w-none">
                    {activePost.content.split('\n\n').map((paragraph, idx) => (
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
