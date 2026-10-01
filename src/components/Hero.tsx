import React from 'react';
import { Flame, Clock, Award, CheckCircle, ExternalLink, ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-800/60 bg-gradient-to-b from-neutral-950 via-[#11131a] to-neutral-950">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#ee5e2d]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-40 right-10 w-72 h-72 bg-amber-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ee5e2d]/15 border border-[#ee5e2d]/30 text-[#ee5e2d] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 animate-pulse">
          <Flame className="w-4 h-4" />
          <span>Informação Oficial para Atletas Buzzini</span>
        </div>

        {/* Big Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans mb-4">
          Maratona do Rio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee5e2d] via-orange-400 to-amber-300">2027</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-300 max-w-3xl mx-auto mb-6">
          COMO FUNCIONARÃO AS INSCRIÇÕES?
        </p>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Entenda passo a passo as regras do sistema de sorteio de vagas, cronogramas das ondas de compra, prazos eliminatórios e as orientações da nossa equipe técnica.
        </p>

        {/* Quick Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm hover:border-[#ee5e2d]/50 transition-colors text-left">
            <div className="flex items-center justify-between text-[#ee5e2d] mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">Distâncias Sorteio</span>
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">21K & 42K</div>
            <div className="text-[11px] text-neutral-400 mt-1">Únicas com sorteio prévio</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm hover:border-[#ee5e2d]/50 transition-colors text-left">
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">21K Cadastro</span>
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">09/11 a 18/11</div>
            <div className="text-[11px] text-neutral-400 mt-1">Próxima abertura oficial</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm hover:border-[#ee5e2d]/50 transition-colors text-left">
            <div className="flex items-center justify-between text-emerald-400 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">Valor Sorteio</span>
              <CheckCircle className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">R$ 359</div>
            <div className="text-[11px] text-neutral-400 mt-1">Com camisa oficial inclusa</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm hover:border-[#ee5e2d]/50 transition-colors text-left">
            <div className="flex items-center justify-between text-sky-400 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">Plataforma</span>
              <ExternalLink className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">GO DREAM</div>
            <div className="text-[11px] text-neutral-400 mt-1">Portal oficial de inscrição</div>
          </div>
        </div>

        {/* Action quick buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onScrollTo('distancia-21k')}
            className="px-6 py-3 rounded-xl bg-[#ee5e2d] hover:bg-[#d94f20] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#ee5e2d]/30 hover:shadow-[#ee5e2d]/50 transition-all flex items-center gap-2 group"
          >
            <span>Ver Cronograma 21 KM (Meia)</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onScrollTo('passo-a-passo')}
            className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <span>Entenda o Fluxo do Sorteio</span>
          </button>

          <button
            onClick={() => onScrollTo('distancia-42k')}
            className="px-5 py-3 rounded-xl bg-neutral-900/50 hover:bg-neutral-800/80 text-neutral-300 border border-neutral-800 text-sm font-medium transition-all"
          >
            <span>Ver Status 42 KM</span>
          </button>
        </div>

        {/* Motto badge */}
        <div className="mt-12 inline-block px-5 py-2 rounded-full bg-neutral-900/80 border border-[#ee5e2d]/30 text-white font-bold text-sm tracking-wide">
          RIO 2027 JÁ COMEÇOU! 🧡
        </div>
      </div>
    </section>
  );
};
