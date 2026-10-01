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
    <section id="passo-a-passo" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ee5e2d]/10 border border-[#ee5e2d]/20 text-[#ee5e2d] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
          Infográfico Explicativo
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
          Como Funciona o Processo em <br className="hidden sm:inline" />
          <span className="text-[#ee5e2d]">6 Etapas</span>
        </h2>
        <p className="text-neutral-400 text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed">
          O caminho do atleta desde a intenção de vaga até a confirmação da inscrição oficial. Não pule nenhuma etapa!
        </p>
      </div>

      {/* Explicit vertical stack on mobile (flex-col), 2 cols on tablet, 3 on desktop */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {MARATHON_DATA.steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const isFinal = index === 5;

          return (
            <div
              key={step.number}
              className={`w-full rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between group shadow-md ${
                isFinal
                  ? 'bg-gradient-to-br from-[#ee5e2d]/20 via-neutral-900 to-neutral-900 border-[#ee5e2d]/60 shadow-xl shadow-[#ee5e2d]/10'
                  : 'bg-neutral-900/70 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-800 border border-neutral-700 text-white font-black text-sm sm:text-base group-hover:bg-[#ee5e2d] group-hover:border-[#ee5e2d] transition-all flex-shrink-0">
                      {step.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-md bg-neutral-800/80 text-neutral-300 border border-neutral-700/60">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center text-[#ee5e2d] group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white mb-2 group-hover:text-[#ee5e2d] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom footer bar of card */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] sm:text-xs text-neutral-500 font-medium">
                <span>Fase {step.number} de 6</span>
                {index < 5 ? (
                  <span className="flex items-center gap-1 text-neutral-400 group-hover:text-[#ee5e2d] transition-colors">
                    Próximo <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
