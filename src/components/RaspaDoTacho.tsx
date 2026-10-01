import React from 'react';
import { Sparkles, HelpCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { MARATHON_DATA } from '../data/marathonData';

export const RaspaDoTacho: React.FC = () => {
  const { raspaDoTacho } = MARATHON_DATA;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border border-neutral-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 blur-[90px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Janela Extraordinária</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {raspaDoTacho.title}
              </h3>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-amber-300 text-xs sm:text-sm font-bold flex items-center gap-2">
            <span>Previsão:</span>
            <span className="text-white bg-neutral-800 px-2 py-0.5 rounded">{raspaDoTacho.period}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <HelpCircle className="w-4 h-4 text-[#ee5e2d]" />
              <span>De onde surgem essas vagas?</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {raspaDoTacho.description}
            </p>
            <div className="text-xs text-neutral-500">
              São vagas de atletas convocados nas ondas que não concluíram o pagamento dentro do prazo limite ou pedidos formais de cancelamento.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Atenção: Não conte como plano principal!</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {raspaDoTacho.warning}
            </p>
            <div className="text-xs text-amber-300/80 font-medium">
              A assessoria recomenda focar 100% no sorteio oficial de novembro para os 21km.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
