import React from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { Zap, Check, AlertCircle, ShoppingBag } from 'lucide-react';

export const OtherDistances: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Sem Sorteio Prévio</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Distâncias de 5 KM e 10 KM
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              As provas menores não passam pelo sistema de sorteio geral de vagas.
            </p>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#ee5e2d]" />
            <span>Opção de combo para sorteados de 21k e 42k</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MARATHON_DATA.additionalDistances.map((item: { distance: string; price: number; description: string; rule: string }) => (
            <div
              key={item.distance}
              className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-[#ee5e2d]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl font-black text-white">{item.distance}</span>
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-neutral-800 text-neutral-300">
                      Prova Rápida
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 block uppercase">Valor Avulso</span>
                    <span className="text-2xl font-black text-white">R$ {item.price}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-amber-300 font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item.description}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.rule}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
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
