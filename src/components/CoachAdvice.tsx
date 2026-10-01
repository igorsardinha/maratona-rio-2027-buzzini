import React, { useState, useEffect } from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { 
  BellRing, 
  CalendarCheck, 
  CheckSquare, 
  Square, 
  MessageCircle, 
  Flame, 
  Copy, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadMarathonCalendar } from '../utils/calendar';

const CHECKLIST_ITEMS = [
  'Acessar a GO DREAM e criar conta prévia',
  'Realizar cadastro gratuito do sorteio (09/11 a 18/11)',
  'Anotar o Número da Sorte (a partir de 25/11)',
  'Conferir a Classificação Oficial (em 27/11)',
  'Identificar a data exata da minha Onda de Compra',
  'Configurar alarme no celular para o dia da onda',
  'Garantir limite no cartão/Pix para efetuar os R$349 da inscrição',
];

export const CoachAdvice: React.FC = () => {
  const { coachOrientation } = MARATHON_DATA;
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('buzzini_rio2027_checklist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('buzzini_rio2027_checklist', JSON.stringify(checkedItems));
    } catch {
      // storage unavailable
    }
  }, [checkedItems]);

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => {
      const exists = prev.includes(idx);
      const next = exists ? prev.filter((i) => i !== idx) : [...prev, idx];
      if (!exists && next.length === CHECKLIST_ITEMS.length) {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ee5e2d', '#22c55e', '#ffffff'],
        });
      }
      return next;
    });
  };

  const handleCopySummary = () => {
    const text = `🚨 *MARATONA DO RIO 2027 - INSCRIÇÕES BUZZINI* 🚨
    
Para quem vai correr os *21 KM (Meia Maratona)*, marque as datas críticas no calendário:

📅 *09/11* - Abertura do cadastro gratuito no sorteio (GO DREAM)
📅 *18/11* - Encerramento impreterível do cadastro
🎟️ *25/11* - Divulgação do número da sorte de cada atleta
✅ *27/11* - Divulgação da classificação dos sorteados
🏁 *30/11 a 01/12* - Início da 1ª onda de compra da vaga (R$ 349 c/ camiseta)

⚠️ *LEMBRE-SE:* Ser sorteado NÃO garante vaga automática! Você precisa entrar na plataforma dentro da sua onda de 48h para comprar e pagar.

Nós da Buzzini estamos juntos com você nessa! 
*RIO 2027 JÁ COMEÇOU! 🧡*`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#ee5e2d', '#ffa07a'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const progressPercentage = Math.round((checkedItems.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="rounded-2xl sm:rounded-3xl bg-neutral-900 border-2 border-[#ee5e2d]/40 p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Background highlight */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ee5e2d]/10 blur-[130px] pointer-events-none" />

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ee5e2d]/15 text-[#ee5e2d] border border-[#ee5e2d]/30 text-[11px] sm:text-xs font-bold uppercase mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Buzzini Running Team</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            {coachOrientation.title}
          </h2>
          <p className="text-xs sm:text-lg text-neutral-300 mt-2 font-medium">
            {coachOrientation.subtitle}
          </p>
        </div>

        {/* 2-Column layout: Key Dates on left, Checklist on right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column: Key Dates Card */}
          <div className="w-full p-4 sm:p-6 lg:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-neutral-800">
              <h3 className="text-base sm:text-xl font-black text-white uppercase flex items-center gap-2">
                <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee5e2d]" />
                <span>Datas Críticas para os 21 KM</span>
              </h3>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#ee5e2d]/20 text-[#ee5e2d]">
                Obrigatórias
              </span>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {coachOrientation.keyDates21k.map((item: { date: string; label: string; icon: string; critical: boolean }, idx: number) => (
                <div
                  key={idx}
                  className={`p-3 sm:p-3.5 rounded-xl border flex items-center justify-between gap-2.5 transition-colors ${
                    item.critical
                      ? 'bg-neutral-900 border-[#ee5e2d]/40 hover:border-[#ee5e2d]'
                      : 'bg-neutral-900/60 border-neutral-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-950 flex items-center justify-center font-mono font-black text-white text-xs sm:text-sm border border-neutral-800 flex-shrink-0">
                      {item.date.split('/')[0]}/{item.date.split('/')[1]}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-white truncate">{item.label}</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-400">Data oficial do processo</div>
                    </div>
                  </div>

                  {item.critical && (
                    <span className="text-[9px] sm:text-[10px] font-black uppercase text-[#ee5e2d] bg-[#ee5e2d]/10 px-2 py-0.5 rounded border border-[#ee5e2d]/30 flex-shrink-0">
                      Crítica
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Coaches Advice points */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 space-y-1.5 text-xs text-neutral-300">
              <div className="font-bold text-white uppercase text-[10px] sm:text-[11px] flex items-center gap-1.5 text-[#ee5e2d]">
                <ShieldCheck className="w-4 h-4" />
                <span>Mensagem da Assessoria:</span>
              </div>
              <p className="leading-relaxed">
                "Nós vamos acompanhar todas essas etapas e avisar vocês pelo grupo do WhatsApp, mas cada atleta precisa ficar atento aos prazos das ondas de 48 horas!"
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={handleCopySummary}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-neutral-700 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#ee5e2d]" />
                    <span>Copiar Resumo p/ Zap</span>
                  </>
                )}
              </button>

              <button
                onClick={downloadMarathonCalendar}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ee5e2d] hover:bg-[#d94f20] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#ee5e2d]/30 active:scale-95"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Salvar Datas (.ICS)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Checklist */}
          <div className="w-full p-4 sm:p-6 lg:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-neutral-800">
              <div>
                <h3 className="text-base sm:text-xl font-black text-white uppercase flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <span>Checklist do Corredor</span>
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                  Marque cada passo conforme for concluindo
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase">Progresso</span>
                <div className="text-base sm:text-lg font-black text-emerald-400">{progressPercentage}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-neutral-900 rounded-full h-2.5 overflow-hidden border border-neutral-800">
              <div
                className="bg-gradient-to-r from-[#ee5e2d] to-emerald-400 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Items */}
            <div className="space-y-2 sm:space-y-2.5">
              {CHECKLIST_ITEMS.map((task, idx) => {
                const isChecked = checkedItems.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`w-full p-3 sm:p-3.5 rounded-xl border text-left flex items-start gap-2.5 sm:gap-3 transition-all ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-neutral-200'
                        : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    <span className="mt-0.5 flex-shrink-0 text-[#ee5e2d]">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" />
                      )}
                    </span>
                    <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-neutral-400' : ''}`}>
                      {task}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Community message */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-900/60 border border-neutral-800 flex items-center gap-3">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ee5e2d] flex-shrink-0" />
              <div className="text-xs text-neutral-300">
                <strong className="text-white block mb-0.5">Dúvida sobre sua inscrição?</strong>
                Fale diretamente com os treinadores no grupo da Buzzini!
              </div>
            </div>
          </div>
        </div>

        {/* Big Energy Banner at the bottom */}
        <div className="mt-8 sm:mt-12 text-center pt-6 sm:pt-8 border-t border-neutral-800">
          <p className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-wide uppercase">
            RIO 2027 JÁ COMEÇOU! <span className="text-[#ee5e2d]">🧡</span>
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Assessoria Esportiva Buzzini • Vamos juntos rumo ao Aterro do Flamengo!
          </p>
        </div>
      </div>
    </section>
  );
};
