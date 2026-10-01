import React from 'react';
import { Calendar, Share2, Sparkles, BookOpen } from 'lucide-react';
import { downloadMarathonCalendar } from '../utils/calendar';
import confetti from 'canvas-confetti';
import { MARATHON_DATA } from '../data/marathonData';

interface HeaderProps {
  onShare: () => void;
  onOpenManualModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare, onOpenManualModal }) => {
  const handleCalendar = () => {
    downloadMarathonCalendar();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#ee5e2d', '#ffffff', '#ffa07a', '#d4af37'],
    });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/85 border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo Buzzini + Rio 25 Anos */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-700/60 shadow-lg p-2 group hover:border-[#ee5e2d] transition-colors">
            <img 
              src="/logo_buzzini.svg" 
              alt="Buzzini Assessoria" 
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform" 
            />
          </div>

          <div className="h-8 w-px bg-neutral-800 hidden sm:block" />

          {/* Selo 25 Anos Rio */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-auto flex items-center">
              <img 
                src={MARATHON_DATA.images.logo25Anos} 
                alt="Maratona do Rio 25 Anos" 
                className="h-9 object-contain rounded bg-black/40 p-0.5 border border-amber-500/30"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-white text-sm sm:text-base uppercase font-sans">
                  Buzzini
                </span>
                <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Edição 25 Anos
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium hidden md:block">
                Guia Oficial de Inscrições • Atualizado com o Manual Oficial
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCalendar}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-all shadow-sm active:scale-95"
            title="Baixar datas no calendário (.ics)"
          >
            <Calendar className="w-4 h-4 text-[#ee5e2d]" />
            <span className="hidden lg:inline">Salvar na Agenda</span>
            <span className="lg:hidden">Agenda</span>
          </button>

          <button
            onClick={onShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#ee5e2d] hover:bg-[#d94f20] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ee5e2d]/25 transition-all active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
