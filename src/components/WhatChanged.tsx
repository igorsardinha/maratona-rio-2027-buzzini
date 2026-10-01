import React from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { Sparkles, Calendar, Shuffle, ShoppingCart, Shirt, Users, Timer } from 'lucide-react';

const ICONS = [Calendar, Shuffle, ShoppingCart, Shirt, Users, Timer];

export const WhatChanged: React.FC = () => {
  return (
    <section id="o-que-mudou" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-neutral-800/80">
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Capítulo 01 do Manual Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            O Que Mudou na <span className="text-[#ee5e2d]">Edição 25 Anos?</span>
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Para a celebração de 25 anos da maior maratona da América Latina, a organização reformulou completamente a dinâmica de inscrições para garantir justiça, segurança e agilidade.
          </p>
        </div>

        {/* Feature Visual Preview from Manual */}
        <div className="w-full lg:w-96 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative group">
          <img 
            src={MARATHON_DATA.images.copacabanaAerial} 
            alt="Corredores na orla do Rio" 
            className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-white flex items-center justify-between">
            <span>Orla da Maratona do Rio</span>
            <span className="text-[#ee5e2d] bg-black/60 px-2 py-0.5 rounded">25 Anos</span>
          </div>
        </div>
      </div>

      {/* Grid of changes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MARATHON_DATA.whatChanged.map((item, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#ee5e2d]/60 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#ee5e2d]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#ee5e2d] group-hover:bg-[#ee5e2d] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-500">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ee5e2d] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                Regra Oficial 2027
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
