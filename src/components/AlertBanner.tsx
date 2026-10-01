import React from 'react';
import { ShieldAlert, CheckCircle2, Clock } from 'lucide-react';

export const AlertBanner: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 relative z-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/70 via-neutral-900 to-amber-950/60 border-2 border-red-500/50 p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-md">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-60 sm:w-80 h-40 bg-red-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
            <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          <div className="flex-1 space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-500 text-white">
                Alerta Crítico da Buzzini
              </span>
              <span className="text-[10px] sm:text-xs text-neutral-400">Leia com muita atenção</span>
            </div>

            <h2 className="text-base sm:text-2xl font-black text-white tracking-tight uppercase leading-snug">
              Ser Sorteado NÃO Significa Inscrição Garantida!
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Fazer o cadastro para o sorteio apenas concede uma chance de convocação. Se contemplado, você receberá uma janela curta de <strong className="text-white underline decoration-red-400">48 horas para comprar e pagar na GO DREAM</strong>. Perdeu a onda? Sua vaga é repassada para o próximo da fila!
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 flex flex-col gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
              <span>Janelas curtas de ~48 horas</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span>Compra liberada apenas na sua onda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
