import React, { useState } from 'react';
import { MARATHON_DATA, DistanceInfo, Wave } from '../data/marathonData';
import { 
  Calendar, 
  Waves, 
  Shirt, 
  ExternalLink, 
  Flame, 
  Clock, 
  Sparkles, 
  Trophy, 
  Package,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export const DistanceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'21k' | 'desafio' | '42k' | '10k' | '5k'>('21k');

  const currentDistance: DistanceInfo = MARATHON_DATA.distances[activeTab];

  return (
    <section id="distancias-geral" className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ee5e2d]/10 border border-[#ee5e2d]/20 text-[#ee5e2d] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
          Capítulo 04 do Manual Oficial
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
          Provas & <span className="text-[#ee5e2d]">Cronogramas Detalhados</span>
        </h2>
        <p className="text-xs sm:text-base text-neutral-400 mt-2 leading-relaxed">
          Selecione a distância para conferir valores, datas de lotes, ondas de compra de 48h e regras específicas.
        </p>
      </div>

      {/* Distance Selector Pills: Mobile Horizontal Scroller */}
      <div className="w-full mb-6 sm:mb-8">
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-x-auto scrollbar-none w-full sm:w-max sm:mx-auto">
          {/* 21K */}
          <button
            onClick={() => setActiveTab('21k')}
            className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
              activeTab === '21k'
                ? 'bg-[#ee5e2d] text-white shadow-lg shadow-[#ee5e2d]/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>21 KM (Meia)</span>
            <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] uppercase font-black bg-white/20 rounded">
              Sorteio
            </span>
          </button>

          {/* Desafio 21k+42k */}
          <button
            onClick={() => setActiveTab('desafio')}
            className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
              activeTab === 'desafio'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
            <span>Desafio 21K+42K</span>
            <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] uppercase font-black bg-amber-400/20 text-amber-200 rounded">
              Direto
            </span>
          </button>

          {/* 42K */}
          <button
            onClick={() => setActiveTab('42k')}
            className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
              activeTab === '42k'
                ? 'bg-[#ee5e2d] text-white shadow-lg shadow-[#ee5e2d]/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <span>42 KM</span>
            <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] uppercase font-black bg-white/20 rounded">
              Sorteio
            </span>
          </button>

          {/* 10K */}
          <button
            onClick={() => setActiveTab('10k')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
              activeTab === '10k'
                ? 'bg-[#ee5e2d] text-white shadow-lg shadow-[#ee5e2d]/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <span>10 KM</span>
          </button>

          {/* 5K */}
          <button
            onClick={() => setActiveTab('5k')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
              activeTab === '5k'
                ? 'bg-[#ee5e2d] text-white shadow-lg shadow-[#ee5e2d]/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <span>5 KM</span>
          </button>
        </div>
      </div>

      {/* Main Infographic Box for Selected Distance */}
      <div 
        id={`distancia-${activeTab}`}
        className="w-full rounded-2xl sm:rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl overflow-hidden backdrop-blur-md"
      >
        {/* Banner Image: Fluid height that never clips content */}
        <div className="relative w-full h-32 sm:h-56 lg:h-64 overflow-hidden border-b border-neutral-800">
          <img 
            src={currentDistance.bannerImage} 
            alt={currentDistance.name}
            className="w-full h-full object-cover object-center filter brightness-75 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          
          <div className="absolute bottom-3 left-3 sm:left-6 flex items-center gap-2">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#ee5e2d] text-white shadow-md">
              {currentDistance.distance}
            </span>
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30">
              {currentDistance.hasLottery ? 'Sorteio Loteria Federal' : 'Inscrição Direta'}
            </span>
          </div>
        </div>

        {/* Header Text & CTA in Natural Flow (Prevents Mobile Overlap) */}
        <div className="p-4 sm:p-6 lg:p-8 border-b border-neutral-800/80 bg-neutral-950/60 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {currentDistance.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">
              {currentDistance.highlight}
            </p>
          </div>

          <a
            href="https://godream.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#ee5e2d] hover:bg-[#d94f20] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#ee5e2d]/30 transition-all flex-shrink-0 active:scale-95"
          >
            <span>Acessar GO DREAM</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Body Section */}
        <div className="p-3.5 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* Prices Section: Mobile Stacked View & Desktop Grid */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
              <Shirt className="w-4 h-4 text-[#ee5e2d]" />
              <span>Valores & Lotes Oficiais do Manual</span>
            </h4>

            {/* Mobile View: Clean horizontal items (< sm) */}
            <div className="flex flex-col gap-2 sm:hidden w-full">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 font-bold block uppercase">Público Geral</span>
                  <span className="text-[10px] text-neutral-400 leading-tight">{currentDistance.shirtRule}</span>
                </div>
                <span className="text-lg font-black text-white ml-2">R$ {currentDistance.prices.standard}</span>
              </div>

              {currentDistance.prices.withoutShirt && (
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold block uppercase">Sem Camisa</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">Opção econômica</span>
                  </div>
                  <span className="text-lg font-black text-neutral-200 ml-2">R$ {currentDistance.prices.withoutShirt}</span>
                </div>
              )}

              {currentDistance.prices.sponsorPreSale && (
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold block uppercase">Patrocinador (-20%)</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">Pré-venda limitada</span>
                  </div>
                  <span className="text-lg font-black text-amber-300 ml-2">R$ {currentDistance.prices.sponsorPreSale.toFixed(2)}</span>
                </div>
              )}

              {currentDistance.prices.pcdWithShirt && (
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold block uppercase">PCD (50% Off)</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">Com laudo médico</span>
                  </div>
                  <span className="text-lg font-black text-emerald-300 ml-2">R$ {currentDistance.prices.pcdWithShirt.toFixed(2)}</span>
                </div>
              )}

              {currentDistance.prices.foreignersUSD && (
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-sky-400 font-bold block uppercase">Estrangeiros</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">Inscrição direta</span>
                  </div>
                  <span className="text-lg font-black text-sky-300 ml-2">$ {currentDistance.prices.foreignersUSD} USD</span>
                </div>
              )}
            </div>

            {/* Desktop View: Grid (>= sm) */}
            <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[11px] text-neutral-400 font-bold block uppercase">Público Geral</span>
                <span className="text-xl font-black text-white">R$ {currentDistance.prices.standard}</span>
                <span className="text-[10px] text-neutral-400 block mt-1">{currentDistance.shirtRule}</span>
              </div>

              {currentDistance.prices.withoutShirt && (
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-[11px] text-neutral-400 font-bold block uppercase">Sem Camisa</span>
                  <span className="text-xl font-black text-neutral-200">R$ {currentDistance.prices.withoutShirt}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Opção econômica</span>
                </div>
              )}

              {currentDistance.prices.sponsorPreSale && (
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-[11px] text-amber-400 font-bold block uppercase">Patrocinador (-20%)</span>
                  <span className="text-xl font-black text-amber-300">R$ {currentDistance.prices.sponsorPreSale.toFixed(2)}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Pré-venda limitada</span>
                </div>
              )}

              {currentDistance.prices.pcdWithShirt && (
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-[11px] text-emerald-400 font-bold block uppercase">PCD (50% Off)</span>
                  <span className="text-xl font-black text-emerald-300">R$ {currentDistance.prices.pcdWithShirt.toFixed(2)}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Com laudo médico</span>
                </div>
              )}

              {currentDistance.prices.foreignersUSD && (
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-[11px] text-sky-400 font-bold block uppercase">Estrangeiros</span>
                  <span className="text-xl font-black text-sky-300">$ {currentDistance.prices.foreignersUSD} USD</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Sem sorteio</span>
                </div>
              )}
            </div>
          </div>

          {/* Desafio Kit Details Showcase */}
          {currentDistance.kitDetails && (
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-neutral-950 to-neutral-950 border-2 border-amber-500/40">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <h4 className="text-xs sm:text-base font-black text-white uppercase">
                  O Kit Mais Completo da Edição 25 Anos (Desafio 21K + 42K)
                </h4>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {currentDistance.kitDetails.map((kitItem, kIdx) => (
                  <div key={kIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-200 font-semibold">
                    <Package className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{kitItem}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Waves of Purchase for 21K & 42K */}
          {currentDistance.waves && currentDistance.waves.length > 0 ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-sm sm:text-lg font-black text-white uppercase flex items-center gap-2">
                    <Waves className="w-4 h-4 text-[#ee5e2d]" />
                    <span>Ondas de Compra dos Sorteados (Média 48h)</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                    Ordem da Loteria Federal. Janelas abrem às 12h e fecham às 23h59!
                  </p>
                </div>

                <div className="self-start sm:self-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] sm:text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Janela de 48h</span>
                </div>
              </div>

              {/* Stacked waves on mobile */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                {currentDistance.waves.map((wave: Wave, wIdx: number) => (
                  <div
                    key={wave.waveNumber}
                    className="w-full p-3.5 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#ee5e2d]/60 transition-all flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded bg-[#ee5e2d]/20 text-[#ee5e2d] border border-[#ee5e2d]/30">
                          {wave.waveNumber}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">Fase 0{wIdx + 1}</span>
                      </div>

                      <div className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-[#ee5e2d] transition-colors">
                        {wave.name}
                      </div>

                      <div className="text-xs sm:text-sm font-black text-amber-400 bg-amber-950/40 px-2 py-1 rounded-lg border border-amber-800/40 inline-block mb-1">
                        📅 {wave.dateRange}
                      </div>

                      <div className="text-[10px] sm:text-[11px] text-neutral-400 font-mono">
                        ⏰ {wave.hours}
                      </div>

                      <p className="text-[11px] sm:text-xs text-neutral-400 mt-2 leading-relaxed">
                        {wave.note}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-neutral-800/70 text-[10px] sm:text-[11px] text-neutral-500 flex items-center justify-between">
                      <span>Plataforma GO DREAM</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ee5e2d]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Direct entry race dates (10K, 5K, Desafio) */
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h4 className="text-xs sm:text-base font-black text-white uppercase flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Datas Críticas de Abertura dos Lotes</span>
              </h4>

              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {currentDistance.keyDates.sponsorDate && (
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] text-amber-400 font-bold block uppercase">Pré-venda Patrocinador</span>
                    <span className="text-xs sm:text-sm font-black text-white">{currentDistance.keyDates.sponsorDate}</span>
                  </div>
                )}
                {currentDistance.keyDates.coachDate && (
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] text-[#ee5e2d] font-bold block uppercase">Assessorias Esportivas</span>
                    <span className="text-xs sm:text-sm font-black text-white">{currentDistance.keyDates.coachDate}</span>
                  </div>
                )}
                {currentDistance.keyDates.generalPublicDate && (
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] text-emerald-400 font-bold block uppercase">Público Geral</span>
                    <span className="text-xs sm:text-sm font-black text-white">{currentDistance.keyDates.generalPublicDate}</span>
                  </div>
                )}
                {currentDistance.keyDates.pcdDate && (
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] text-sky-400 font-bold block uppercase">PCDs & Estrangeiros</span>
                    <span className="text-xs sm:text-sm font-black text-white">{currentDistance.keyDates.pcdDate}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Important distance notes */}
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-[11px] sm:text-xs text-neutral-300 space-y-1">
            <strong className="text-white block uppercase text-[10px] sm:text-[11px] text-[#ee5e2d]">
              Orientações do Manual Oficial:
            </strong>
            {currentDistance.importantNotes.map((note, nIdx) => (
              <div key={nIdx} className="flex items-start gap-1.5">
                <span className="text-[#ee5e2d] flex-shrink-0">•</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
