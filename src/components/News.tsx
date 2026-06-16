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
  img: string;
  category: string;
}

const newsItems = newsItemsData as Post[];

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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-festival-rose)]/[0.03] rounded-full blur-[150px] pointer-events-none" />

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
                 <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 "
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
              className="relative bg-[var(--color-festival-dark-surface)]/95 backdrop-blur-2xl rounded-[2rem] border border-[var(--color-festival-lilac)]/15 shadow-[0_25px_80px_rgba(124,58,237,0.25)] w-full max-w-4xl max-h-[85vh] overflow-y-auto z-10 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Close button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 z-20 text-[var(--color-festival-text-light)]/60 hover:text-[var(--color-festival-text-light)] bg-[var(--color-festival-text-light)]/[0.06] hover:bg-[var(--color-festival-text-light)]/10 p-3 rounded-full transition-all border border-[var(--color-festival-text-light)]/10  cursor-pointer"
                aria-label="Fechar post"
              >
                <X size={18} />
              </button>

              {/* Banner Image */}
              <div className="relative h-64 sm:h-96 w-full shrink-0 overflow-hidden">
                <img
                  src={activePost.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-dark-surface)] via-[var(--color-festival-dark-surface)]/40 to-transparent" />
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-12 pt-4 flex-grow flex flex-col justify-start">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="px-3 py-1 bg-[var(--color-festival-primary)] text-[var(--color-festival-text-light)] text-[9px] font-bold uppercase tracking-widest rounded-full">
                    {activePost.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-festival-lilac)]/30" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-festival-text-light)]/60">{activePost.date}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-festival-text-light)] mb-6 leading-tight">
                  {activePost.title}
                </h3>

                {/* Content paragraphs */}
                <div className="space-y-6 text-[var(--color-festival-text-light)]/80 font-light text-sm sm:text-base leading-relaxed max-w-none">
                  {activePost.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
