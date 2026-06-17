import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/gallery/foto-01.jpg';
import img2 from '../assets/gallery/foto-02.jpg';
import img3 from '../assets/gallery/foto-03.jpg';
import img4 from '../assets/gallery/foto-04.jpg';
import img5 from '../assets/gallery/foto-05.jpg';
import img6 from '../assets/gallery/foto-06.jpg';

const images = [
  { id: 1, url: img1, span: 'md:col-span-2 md:row-span-2', title: 'Abertura do Evento', category: 'Abertura' },
  { id: 2, url: img2, span: 'md:col-span-1 md:row-span-1', title: 'Performance', category: 'Apresentação' },
  { id: 3, url: img3, span: 'md:col-span-1 md:row-span-1', title: 'Grupo', category: 'Dança' },
  { id: 4, url: img4, span: 'md:col-span-2 md:row-span-1', title: 'Destaque', category: 'Solo' },
  { id: 5, url: img5, span: 'md:col-span-1 md:row-span-1', title: 'Emoção', category: 'Contemporânea' },
  { id: 6, url: img6, span: 'md:col-span-1 md:row-span-1', title: 'Movimento', category: 'Urbana' },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex]);

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-10 relative z-10" id="galeria">
      {/* Section ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-festival-primary)]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-[var(--color-festival-text)]/[0.06]">
            <div className="max-w-2xl relative">
                <Sparkles className="absolute -top-10 -left-6 text-[var(--color-festival-gold)]/20 w-12 h-12 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/60 mb-4 block">Momentos Eternizados</span>
                <h2 className="font-serif text-5xl md:text-7xl font-medium text-[var(--color-festival-text)] mb-4 tracking-tight">
                  Memórias em<br/><span className="italic text-[var(--color-festival-primary)] drop-shadow-sm">Foco</span>
                </h2>
                <p className="text-lg md:text-xl text-[var(--color-festival-text)]/70 font-light max-w-lg mt-6">Os momentos mais marcantes capturados na última década e suas coreografias inesquecíveis.</p>
            </div>
            <button 
              onClick={() => setSelectedImageIndex(0)}
              className="mt-8 md:mt-0 group flex items-center space-x-3 text-[var(--color-festival-text)]/70 text-xs uppercase tracking-widest font-bold hover:text-[var(--color-festival-text)] transition-all duration-300 bg-[var(--color-festival-text)]/[0.04] backdrop-blur-xl px-8 py-4 rounded-full border border-[var(--color-festival-text)]/[0.08] hover:border-[var(--color-festival-lilac)]/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)] cursor-pointer"
            >
                <span>Explorar Acervo</span>
                <ArrowRight size={16} className="transform transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              onClick={() => setSelectedImageIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className={`glow-border relative rounded-[1.5rem] overflow-hidden group h-[300px] md:h-auto ${img.span} border border-[var(--color-festival-text)]/[0.08] hover:border-[var(--color-festival-lilac)]/35 transition-all duration-300 cursor-pointer`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              {/* Dark overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-festival-bg)] via-[var(--color-festival-bg)]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                 <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-[var(--color-festival-primary)] backdrop-blur-md text-[var(--color-festival-text-light)] text-[9px] font-bold uppercase tracking-widest rounded-full shadow-md">
                      {img.category}
                    </span>
                 </div>
                 <h3 className="text-[var(--color-festival-text)] font-serif text-2xl sm:text-3xl font-medium tracking-wide mb-1 leading-tight">{img.title}</h3>
                 
                 <div className="mt-5 flex items-center text-[var(--color-festival-text)]/65 group-hover:text-[var(--color-festival-text)] transition-colors duration-300 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-festival-text)]/[0.08] backdrop-blur-md flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[var(--color-festival-primary)] group-hover:to-[var(--color-festival-lilac)] transition-all duration-300 border border-[var(--color-festival-text)]/10 group-hover:border-transparent group-hover:text-white">
                       <Eye size={16} />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute inset-0 bg-[var(--color-festival-bg)]/90 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center z-10"
            >
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-0 md:-right-12 z-20 text-[var(--color-festival-text-light)]/60 hover:text-[var(--color-festival-text-light)] bg-[var(--color-festival-text-light)]/[0.06] hover:bg-[var(--color-festival-text-light)]/10 p-3 rounded-full transition-all border border-[var(--color-festival-text-light)]/10 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(124,58,237,0.2)]">
                <img
                  src={images[selectedImageIndex].url}
                  alt={images[selectedImageIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain bg-[var(--color-festival-dark)]/5"
                />
              </div>

              <div className="mt-6 flex items-center justify-between w-full px-4 md:px-0">
                <div className="text-left">
                  <h3 className="font-serif text-2xl font-medium text-[var(--color-festival-text)]">{images[selectedImageIndex].title}</h3>
                  <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-festival-lilac)]">{images[selectedImageIndex].category}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={prevImage}
                    className="p-3 rounded-full bg-[var(--color-festival-text)]/[0.04] border border-[var(--color-festival-text)]/10 text-[var(--color-festival-text)]/80 hover:text-[var(--color-festival-text)] hover:bg-[var(--color-festival-text)]/10 transition-all cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="p-3 rounded-full bg-[var(--color-festival-text)]/[0.04] border border-[var(--color-festival-text)]/10 text-[var(--color-festival-text)]/80 hover:text-[var(--color-festival-text)] hover:bg-[var(--color-festival-text)]/10 transition-all cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
