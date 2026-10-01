import React, { useState } from 'react';
import { MARATHON_DATA, DistanceInfo, Wave } from '../data/marathonData';
import { 
  Calendar, 
  Ticket, 
  CheckCircle2, 
  Waves, 
  AlertCircle, 
  Shirt, 
  ExternalLink,
  ChevronRight,
  Flame,
  Clock
} from 'lucide-react';

export const DistanceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'21k' | '42k'>('21k');

  const currentDistance: DistanceInfo = MARATHON_DATA.distances[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Distance Selector Tabs */}
      <div className="flex flex-col items-center mb-10">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
          <button
            onClick={() => setActiveTab('21k')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all ${
              activeTab === '21k'
                ? 'bg-[#ee5e2d] text-white shadow-lg shadow-[#ee5e2d]/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>21 KM - Meia Maratona</span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-black bg-white/20 rounded-md">
              Atenção Agora!
            </span>
          </button>

          <button
            onClick={() => setActiveTab('42k')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all ${
              activeTab === '42k'
                ? 'bg-[#ee5e2d] text-white shadow-lg shadow-[#ee5e2d]/30 scale-[1.02]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <span>42 KM - Maratona</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 mt-4 text-center">
          {activeTab === '21k' 
            ? '🔥 Principal foco da assessoria neste momento! Abertura das inscrições na GO DREAM.' 
            : 'Atletas que se cadastraram em setembro: fiquem atentos à chamada das ondas ativas!'}
        </p>
      </div>

      {/* Main Infographic Box for Selected Distance */}
      <div 
        id={activeTab === '21k' ? 'distancia-21k' : 'distancia-42k'}
        className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md"
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ee5e2d]/10 blur-[100px] pointer-events-none" />

        {/* Header of Distance Card */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                {currentDistance.distance}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#ee5e2d]/20 text-[#ee5e2d] border border-[#ee5e2d]/40">
                {currentDistance.name}
              </span>
            </div>
            <p className="text-base text-neutral-300 font-medium">
              {currentDistance.highlight}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="px-5 py-3 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <Shirt className="w-6 h-6 text-[#ee5e2d]" />
              <div>
                <div className="text-xs text-neutral-400 uppercase font-bold">Valor pelo Sorteio</div>
                <div className="text-2xl font-black text-white">
                  R$ {currentDistance.price}
                  <span className="text-xs text-emerald-400 font-semibold ml-1.5">(Camisa Inclusa)</span>
                </div>
              </div>
            </div>

            <a
              href="https://godream.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm border border-neutral-700 transition-all hover:border-[#ee5e2d]"
            >
              <span>Acessar GO DREAM</span>
              <ExternalLink className="w-4 h-4 text-[#ee5e2d]" />
            </a>
          </div>
        </div>

        {/* Timeline Sequence Steps */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-neutral-200 uppercase tracking-wider flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-[#ee5e2d]" />
            <span>Cronograma Oficial de Datas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Step 1: Cadastro */}
            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-[#ee5e2d]/40 transition-colors">
              <div className="text-xs font-bold text-[#ee5e2d] uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>1. Período de Cadastro</span>
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-white mb-2">
                {currentDistance.registrationPeriod.formatted}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Cadastro 100% gratuito pela plataforma GO DREAM. Não significa compra garantida.
              </p>
            </div>

            {/* Step 2: Número da Sorte */}
            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-amber-500/40 transition-colors">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>2. Número da Sorte</span>
                <Ticket className="w-4 h-4" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-white mb-2">
                {currentDistance.luckyNumberDate}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Divulgação do número de cada atleta na plataforma para acompanhamento do sorteio.
              </p>
            </div>

            {/* Step 3: Classificação */}
            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>3. Classificação Oficial</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-white mb-2">
                {currentDistance.resultsDate}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Publicação dos contemplados e início da convocação dividida por ondas de compra.
              </p>
            </div>
          </div>

          {/* Ondas de Compra */}
          <div className="rounded-2xl bg-neutral-950/90 border border-neutral-800 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h4 className="text-lg font-black text-white uppercase flex items-center gap-2">
                  <Waves className="w-5 h-5 text-[#ee5e2d]" />
                  <span>Ondas de Compra das Inscrições ({currentDistance.distance})</span>
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Os atletas começam a ser chamados seguindo rigorosamente a ordem do sorteio.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>Vagas limitadas por onda</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentDistance.waves.map((wave: Wave, wIdx: number) => (
                <div
                  key={wave.waveNumber}
                  className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#ee5e2d]/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase px-2 py-0.5 rounded bg-[#ee5e2d]/20 text-[#ee5e2d]">
                        {wave.waveNumber}
                      </span>
                      <span className="text-[11px] text-neutral-500 font-mono">Fase 0{wIdx + 1}</span>
                    </div>

                    <div className="text-base font-bold text-white mb-1 group-hover:text-[#ee5e2d] transition-colors">
                      {wave.name}
                    </div>

                    <div className="text-sm font-black text-amber-400 bg-amber-950/30 px-2.5 py-1.5 rounded-lg border border-amber-800/40 inline-block my-2">
                      📅 {wave.dateRange}
                    </div>

                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {wave.note}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/70 text-[11px] text-neutral-500 flex items-center justify-between">
                    <span>Janela oficial</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ee5e2d]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-200">Regra de ouro das ondas:</strong> As ondas seguintes só acontecem caso ainda existam vagas disponíveis após o encerramento da onda anterior. O atleta convocado precisa realizar a compra dentro do período da sua onda. Caso perca o prazo, <strong className="text-red-400">não existe garantia de uma nova oportunidade</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
