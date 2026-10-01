import React from 'react';
import { ArrowUp, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/60 p-2 flex items-center justify-center">
              <img src="/logo_buzzini.svg" alt="Buzzini" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-extrabold uppercase tracking-wider text-sm">
                Buzzini Assessoria Esportiva
              </div>
              <div className="text-xs text-neutral-500">
                Guia não-oficial de apoio aos alunos e atletas • Rio 2027
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="https://godream.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Portal GO DREAM</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#ee5e2d]" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Buzzini. Todas as informações sujeitas a confirmação nos canais oficiais da Maratona do Rio.
          </div>
          <div className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-[#ee5e2d] fill-[#ee5e2d]" /> para o time de corredores da Buzzini
          </div>
        </div>
      </div>
    </footer>
  );
};
