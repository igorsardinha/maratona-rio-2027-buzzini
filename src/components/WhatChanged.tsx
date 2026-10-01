import React from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { Sparkles, Calendar, Shuffle, ShoppingCart, Shirt, Users, Timer } from 'lucide-react';

const ICONS = [Calendar, Shuffle, ShoppingCart, Shirt, Users, Timer];

export const WhatChanged: React.FC = () => {
  return (
    <section id="o-que-mudou" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-b border-neutral-800/80">
      {/* Header with image */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 mb-8 sm:mb-12">
        <div className="w-full flex-1 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Capítulo 01 do Manual Oficial</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            O Que Mudou na <br className="hidden sm:inline" />
            <span className="text-[#ee5e2d]">Edição 25 Anos?</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Para a celebração de 25 anos da maior maratona da América Latina, a organização reformulou a dinâmica de inscrições para garantir mais agilidade e oportunidades reais aos atletas.
          </p>
        </div>

        {/* Feature Visual Preview from Manual */}
        <div className="w-full lg:w-96 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative group flex-shrink-0">
          <img 
            src={MARATHON_DATA.images.copacabanaAerial} 
            alt="Corredores na orla do Rio" 
            className="w-full h-44 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-white flex items-center justify-between">
            <span>Orla da Maratona do Rio</span>
            <span className="text-[#ee5e2d] bg-black/70 px-2 py-0.5 rounded border border-[#ee5e2d]/30">25 Anos</span>
          </div>
        </div>
      </div>

      {/* Cards: Explicit single-column stack on mobile (flex-col), 2 columns on tablet, 3 on desktop */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {MARATHON_DATA.whatChanged.map((item, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div
              key={idx}
              className="w-full p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#ee5e2d]/60 transition-all flex flex-col justify-between group shadow-md hover:shadow-xl hover:shadow-[#ee5e2d]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#ee5e2d] group-hover:bg-[#ee5e2d] group-hover:text-white transition-all flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#ee5e2d] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[10px] sm:text-[11px] font-semibold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                <span>Regra Oficial 2027</span>
                <span className="text-[#ee5e2d] font-bold">Item {idx + 1}/6</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
