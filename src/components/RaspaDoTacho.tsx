import React from 'react';
import { Sparkles, HelpCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { MARATHON_DATA } from '../data/marathonData';

export const RaspaDoTacho: React.FC = () => {
  const { raspaDoTacho } = MARATHON_DATA;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border border-neutral-800 p-4 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-amber-500/10 blur-[90px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Janela Extraordinária</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {raspaDoTacho.title}
              </h3>
            </div>
          </div>

          <div className="self-start lg:self-auto px-3.5 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-amber-300 text-xs sm:text-sm font-bold flex items-center gap-2">
            <span>Previsão:</span>
            <span className="text-white bg-neutral-800 px-2 py-0.5 rounded text-xs">{raspaDoTacho.period}</span>
          </div>
        </div>

        {/* Stack on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
              <HelpCircle className="w-4 h-4 text-[#ee5e2d]" />
              <span>De onde surgem essas vagas?</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {raspaDoTacho.description}
            </p>
            <div className="text-[11px] text-neutral-500">
              Vagas de boletos não pagos ou pedidos de cancelamento formal.
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Atenção: Não conte como plano principal!</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {raspaDoTacho.warning}
            </p>
            <div className="text-[11px] text-amber-300/80 font-medium">
              Foque 100% no sorteio oficial de novembro para os 21km.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
