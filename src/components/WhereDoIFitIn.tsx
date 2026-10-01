import React, { useState } from 'react';
import { MARATHON_DATA, ProfileCategory } from '../data/marathonData';
import { Compass, CheckCircle2, XCircle, Search, Filter, Globe } from 'lucide-react';

export const WhereDoIFitIn: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filteredProfiles = MARATHON_DATA.profilesTable.filter((item: ProfileCategory) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'geral' && item.profile.includes('Público')) ||
      (filter === 'pcd' && item.profile.includes('PCD')) ||
      (filter === 'coach' && item.profile.includes('Assessoria')) ||
      (filter === 'foreign' && (item.profile.includes('Foreigner') || item.profile.includes('fora')));

    const matchesSearch =
      search === '' ||
      item.profile.toLowerCase().includes(search.toLowerCase()) ||
      item.race.toLowerCase().includes(search.toLowerCase()) ||
      item.notes.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="onde-eu-me-encaixo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header with photo banner */}
      <div className="relative rounded-3xl overflow-hidden border border-neutral-800 mb-10 shadow-2xl">
        <div className="absolute inset-0">
          <img 
            src={MARATHON_DATA.images.corcovadoRunners} 
            alt="Corredores com Cristo Redentor" 
            className="w-full h-full object-cover object-top opacity-35 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/60" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Capítulo 05 do Manual Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Onde Eu Me Encaixo? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Where Do I Fit In?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
            Consulte o mapa visual oficial abaixo para encontrar a forma ideal de inscrição de acordo com o seu perfil de corredor (Público Geral, PCD, Aluno Buzzini ou Estrangeiro).
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-[#ee5e2d] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Todos os Perfis
          </button>
          <button
            onClick={() => setFilter('geral')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'geral'
                ? 'bg-[#ee5e2d] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Público Geral
          </button>
          <button
            onClick={() => setFilter('coach')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'coach'
                ? 'bg-[#ee5e2d] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Alunos Buzzini
          </button>
          <button
            onClick={() => setFilter('pcd')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'pcd'
                ? 'bg-[#ee5e2d] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            PCDs
          </button>
          <button
            onClick={() => setFilter('foreign')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'foreign'
                ? 'bg-[#ee5e2d] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Estrangeiros
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar prova ou perfil..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ee5e2d]"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-neutral-950 text-neutral-400 uppercase text-[10px] tracking-wider border-b border-neutral-800 font-bold">
              <tr>
                <th className="py-4 px-4 sm:px-6">Perfil do Corredor</th>
                <th className="py-4 px-3 sm:px-4">Distância</th>
                <th className="py-4 px-3 sm:px-4">Onde Entro</th>
                <th className="py-4 px-3 sm:px-4 text-center">Sorteio?</th>
                <th className="py-4 px-3 sm:px-4 text-center">Camisa</th>
                <th className="py-4 px-3 sm:px-4">Quando Abre</th>
                <th className="py-4 px-4 sm:px-6">Regras & Observações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {filteredProfiles.map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-800/40 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {item.profile}
                  </td>
                  <td className="py-4 px-3 sm:px-4">
                    <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[#ee5e2d] font-black text-xs">
                      {item.race}
                    </span>
                  </td>
                  <td className="py-4 px-3 sm:px-4 text-neutral-300 font-semibold">
                    {item.entryMethod}
                  </td>
                  <td className="py-4 px-3 sm:px-4 text-center">
                    {item.lottery === 'Sim' ? (
                      <span className="inline-flex items-center gap-1 text-amber-400 font-bold text-xs bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <CheckCircle2 className="w-3 h-3" /> Sim
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-neutral-400 font-semibold text-xs bg-neutral-800/80 px-2 py-0.5 rounded">
                        <XCircle className="w-3 h-3 text-neutral-500" /> Não
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-3 sm:px-4 text-center">
                    <span className="text-xs text-neutral-300 font-mono">
                      {item.shirt}
                    </span>
                  </td>
                  <td className="py-4 px-3 sm:px-4 font-bold text-white whitespace-nowrap">
                    {item.openDate}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-neutral-400 text-xs">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
