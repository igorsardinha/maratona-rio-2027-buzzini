import React from 'react';
import { Calendar, Share2, Sparkles } from 'lucide-react';
import { downloadMarathonCalendar } from '../utils/calendar';
import confetti from 'canvas-confetti';

interface HeaderProps {
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare }) => {
  const handleCalendar = () => {
    downloadMarathonCalendar();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#ee5e2d', '#ffffff', '#ffa07a'],
    });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-700/60 shadow-lg p-2 group hover:border-[#ee5e2d] transition-colors">
            <img 
              src="/logo_buzzini.svg" 
              alt="Buzzini Assessoria" 
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-white text-base sm:text-lg uppercase font-sans">
                Buzzini
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-[#ee5e2d]/20 text-[#ee5e2d] border border-[#ee5e2d]/30">
                Guia Oficial
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-medium hidden sm:block">
              Maratona do Rio 2027 • Guia de Inscrições
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCalendar}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-all shadow-sm active:scale-95"
            title="Baixar datas no calendário (.ics)"
          >
            <Calendar className="w-4 h-4 text-[#ee5e2d]" />
            <span className="hidden md:inline">Salvar Datas na Agenda</span>
            <span className="md:hidden">Agenda</span>
          </button>

          <button
            onClick={onShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#ee5e2d] hover:bg-[#d94f20] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ee5e2d]/25 transition-all active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span>Compartilhar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
