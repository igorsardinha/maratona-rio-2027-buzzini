import React, { useState } from 'react';
import { MARATHON_DATA, FaqItem } from '../data/marathonData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircleQuestion, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="duvidas-frequentes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-neutral-800/80">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left Column: Heading and Photo from Manual */}
        <div className="lg:w-1/3 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ee5e2d]/10 border border-[#ee5e2d]/20 text-[#ee5e2d] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Capítulo 06 do Manual Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Coisas Que Achamos Que <span className="text-[#ee5e2d]">Você Vai Perguntar</span>
          </h2>

          <p className="text-sm text-neutral-400 leading-relaxed">
            Respostas oficiais da organização da Maratona do Rio 2027 compiladas pela assessoria Buzzini para sanar todas as suas dúvidas.
          </p>

          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl relative group">
            <img 
              src={MARATHON_DATA.images.sunsetBeach} 
              alt="Corredores no pôr do sol" 
              className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs font-bold text-white">
              Orla de Ipanema • Maratona do Rio
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:w-2/3 space-y-3 w-full">
          {MARATHON_DATA.faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-neutral-900 border-[#ee5e2d]/50 shadow-lg shadow-[#ee5e2d]/5'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#ee5e2d] bg-[#ee5e2d]/10 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-neutral-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#ee5e2d]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
