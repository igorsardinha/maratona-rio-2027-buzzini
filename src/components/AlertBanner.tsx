import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle2, Clock } from 'lucide-react';

export const AlertBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/60 via-neutral-900 to-amber-950/60 border-2 border-red-500/50 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-80 h-40 bg-red-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-red-500 text-white">
                Alerta Crítico da Buzzini
              </span>
              <span className="text-xs text-neutral-400">Leia com muita atenção</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Ser Sorteado NÃO Significa Inscrição Garantida!
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Fazer o cadastro para o sorteio apenas concede a você uma chance de ser convocado. Caso seja contemplado, você receberá uma data restrita para <strong className="text-white underline decoration-red-400">acessar a GO DREAM e efetuar a compra</strong>. Se você perder a janela da sua onda, sua vaga será repassada imediatamente e não há garantia de repescagem!
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 flex flex-col gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20">
              <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Janelas curtas de 2 a 4 dias</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Compra liberada apenas na sua onda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
