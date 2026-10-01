import React from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { Zap, Check, AlertCircle, ShoppingBag } from 'lucide-react';

export const OtherDistances: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="rounded-2xl sm:rounded-3xl bg-neutral-900/60 border border-neutral-800 p-4 sm:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] sm:text-xs font-bold uppercase mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Sem Sorteio Prévio</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Distâncias de 5 KM e 10 KM
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              As provas menores não passam pelo sistema de sorteio geral de vagas.
            </p>
          </div>

          <div className="self-start md:self-auto px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#ee5e2d]" />
            <span>Combo opcional para sorteados de 21k e 42k</span>
          </div>
        </div>

        {/* Stack on mobile, 2 columns on md */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {MARATHON_DATA.additionalDistances.map((item: { distance: string; price: number; description: string; rule: string }) => (
            <div
              key={item.distance}
              className="w-full p-4 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-[#ee5e2d]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black text-white">{item.distance}</span>
                    <span className="px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-md bg-neutral-800 text-neutral-300">
                      Prova Rápida
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] sm:text-xs text-neutral-500 block uppercase">Valor Avulso</span>
                    <span className="text-xl sm:text-2xl font-black text-white">R$ {item.price}</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-amber-300 font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item.description}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.rule}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] sm:text-xs text-neutral-500">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" /> Adição direta no carrinho
                </span>
                <span>Sujeito a estoque</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
