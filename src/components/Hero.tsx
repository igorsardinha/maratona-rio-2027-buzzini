import React from 'react';
import { Flame, Clock, Award, CheckCircle, ExternalLink, ArrowDown, Sparkles, BookOpen } from 'lucide-react';
import { MARATHON_DATA } from '../data/marathonData';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-800/80 bg-neutral-950">
      {/* Background Image from Official Manual with dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={MARATHON_DATA.images.aterroFlamengo} 
          alt="Aterro do Flamengo Maratona do Rio" 
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform motion-safe:animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/90 to-[#0c0d12]" />
      </div>

      {/* Decorative Glow elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#ee5e2d]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-amber-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Manual de Inscrição Oficial • Edição Especial 25 Anos</span>
        </div>

        {/* Big Title with 25 Years Branding */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans">
            Maratona do Rio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee5e2d] via-orange-400 to-amber-300">2027</span>
          </h1>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400">
            <span>Última atualização oficial: {MARATHON_DATA.lastManualUpdate}</span>
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-200 max-w-3xl mx-auto mb-4">
          GUIA COMPLETO DE INSCRIÇÕES BUZZINI
        </p>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Todas as novidades, cronogramas por distância (21K, 42K, Desafio 21K+42K, 10K e 5K), regras de ondas de 48h e orientações exclusivas da nossa comissão técnica.
        </p>

        {/* Quick Metric Cards with Real Manual Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md hover:border-[#ee5e2d]/60 transition-all text-left group">
            <div className="flex items-center justify-between text-[#ee5e2d] mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">Distâncias c/ Sorteio</span>
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">21K & 42K</div>
            <div className="text-[11px] text-neutral-400 mt-1">Loteria Federal • Ondas de 48h</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md hover:border-amber-500/60 transition-all text-left group">
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">Desafio 21K + 42K</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">Venda Direta</div>
            <div className="text-[11px] text-neutral-400 mt-1">Sem sorteio • 3 Medalhas!</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md hover:border-emerald-500/60 transition-all text-left group">
            <div className="flex items-center justify-between text-emerald-400 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">21K Cadastro</span>
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">09/11 a 18/11</div>
            <div className="text-[11px] text-neutral-400 mt-1">Gratuito na GO DREAM</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md hover:border-sky-500/60 transition-all text-left group">
            <div className="flex items-center justify-between text-sky-400 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">Ticketeira Oficial</span>
              <ExternalLink className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">GO DREAM</div>
            <div className="text-[11px] text-neutral-400 mt-1">Portal oficial da prova</div>
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          <button
            onClick={() => onScrollTo('distancias-geral')}
            className="px-5 py-3 rounded-xl bg-[#ee5e2d] hover:bg-[#d94f20] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#ee5e2d]/30 transition-all flex items-center gap-2 group active:scale-95"
          >
            <Flame className="w-4 h-4" />
            <span>Ver Todas as Provas (21k, 42k, Desafio)</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onScrollTo('onde-eu-me-encaixo')}
            className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Onde Eu Me Encaixo? (Guia Visual)</span>
          </button>

          <button
            onClick={() => onScrollTo('o-que-mudou')}
            className="px-4 py-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800/80 text-neutral-300 border border-neutral-800 font-semibold text-xs sm:text-sm transition-all"
          >
            <span>O Que Mudou?</span>
          </button>

          <button
            onClick={() => onScrollTo('duvidas-frequentes')}
            className="px-4 py-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800/80 text-neutral-300 border border-neutral-800 font-semibold text-xs sm:text-sm transition-all"
          >
            <span>Dúvidas Frequentes</span>
          </button>
        </div>

        {/* Motto badge */}
        <div className="mt-10 inline-block px-6 py-2 rounded-full bg-neutral-900/90 border border-[#ee5e2d]/40 text-white font-black text-sm tracking-wide shadow-lg">
          RIO 2027 JÁ COMEÇOU! 🧡
        </div>
      </div>
    </section>
  );
};
