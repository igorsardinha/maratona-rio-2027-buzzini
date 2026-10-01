import React from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { 
  UserPlus, 
  Ticket, 
  ListOrdered, 
  SearchCheck, 
  Waves, 
  CreditCard,
  ArrowRight
} from 'lucide-react';

const STEP_ICONS = [
  UserPlus,
  Ticket,
  ListOrdered,
  SearchCheck,
  Waves,
  CreditCard,
];

export const StepFlow: React.FC = () => {
  return (
    <section id="passo-a-passo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ee5e2d]/10 border border-[#ee5e2d]/20 text-[#ee5e2d] text-xs font-bold uppercase tracking-wider mb-3">
          Infográfico Explicativo
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
          Como Funciona o Processo em <span className="text-[#ee5e2d]">6 Etapas</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-4">
          O caminho do atleta desde a intenção de vaga até a confirmação da inscrição oficial. Não pule nenhuma etapa!
        </p>
      </div>

      {/* Grid of 6 interactive infographic cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {MARATHON_DATA.steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const isFinal = index === 5;

          return (
            <div
              key={step.number}
              className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between group ${
                isFinal
                  ? 'bg-gradient-to-br from-[#ee5e2d]/20 via-neutral-900 to-neutral-900 border-[#ee5e2d]/60 shadow-xl shadow-[#ee5e2d]/10'
                  : 'bg-neutral-900/60 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Header with step number and badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 text-white font-black text-base group-hover:bg-[#ee5e2d] group-hover:border-[#ee5e2d] transition-all">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-800/80 text-neutral-300 border border-neutral-700/60">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center text-[#ee5e2d] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#ee5e2d] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom footer bar of card */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-medium">
                <span>Fase {step.number} de 6</span>
                {index < 5 ? (
                  <span className="flex items-center gap-1 text-neutral-400 group-hover:text-[#ee5e2d] transition-colors">
                    Próximo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    🎉 Vaga Garantida!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
