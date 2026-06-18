import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapSection() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden" id="local">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-festival-lilac)]/[0.035] rounded-full blur-[80px] transform -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-festival-primary)]/[0.03] rounded-full blur-[80px] transform translate-y-1/2 -translate-x-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:col-span-1 space-y-6 text-center"
          >
             <div>
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-festival-lilac)]/60 block mb-4">Localização</span>
               <h2 className="font-serif text-5xl md:text-7xl font-medium text-[var(--color-festival-text)] leading-[1.1] tracking-tight">
                  Como <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)]">Chegar</span>
               </h2>
             </div>
             
             <div className="glow-border bg-[var(--color-festival-bg)]/60 backdrop-blur-xl p-6 sm:p-8 rounded-[1.5rem] border border-[var(--color-festival-text)]/[0.06] space-y-6 text-left">
                <div className="flex items-start space-x-4 sm:space-x-5">
                   <div className="bg-gradient-to-br from-[var(--color-festival-primary)] to-[var(--color-festival-lilac)] p-4 rounded-2xl text-[var(--color-festival-text-light)] shrink-0 shadow-[0_8px_25px_rgba(124,58,237,0.3)]">
                      <MapPin size={22} strokeWidth={2} />
                   </div>
                   <div>
                      <h4 className="font-serif text-2xl font-medium text-[var(--color-festival-text)] mb-2">Auditório EPCAr</h4>
                      <p className="text-[var(--color-festival-text)]/70 font-light text-sm leading-relaxed font-sans">
                        Escola Preparatória de Cadetes do Ar<br/>
                        R. Santos Dumont, 149<br/>
                        São José, Barbacena - MG<br/>
                        36205-024
                      </p>
                   </div>
                </div>
                
                <div className="pt-6 border-t border-[var(--color-festival-text)]/[0.06]">
                   <p className="text-[var(--color-festival-text)]/60 font-light text-sm leading-relaxed font-sans">
                      Um espaço histórico que receberá mais uma vez o brilho e a magia da dança. Tem estacionamento no local para os participantes do evento.
                   </p>
                </div>
             </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-span-2 h-[400px] md:h-[500px] glow-border rounded-[2rem] overflow-hidden relative"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.530372297126!2d-43.784568800000005!3d-21.206755499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98305c43d2c0b7%3A0xe536d7a4cb2d4e68!2sIF%20Sudeste%20MG%20-%20Campus%20Barbacena!5e0!3m2!1spt-BR!2sbr!4v1714490123456!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             />
             {/* Inner ring */}
             <div className="absolute inset-0 pointer-events-none rounded-[2rem] ring-inset ring-1 ring-white/[0.06]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
