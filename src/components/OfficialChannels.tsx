import React from 'react';
import { MARATHON_DATA } from '../data/marathonData';
import { 
  MessageSquare, 
  Mail, 
  Globe, 
  ShieldAlert, 
  ExternalLink, 
  Radio, 
  CheckCircle2 
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const OfficialChannels: React.FC = () => {
  const { officialChannels } = MARATHON_DATA;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ee5e2d]/10 blur-[120px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ee5e2d]/15 text-[#ee5e2d] border border-[#ee5e2d]/30 text-xs font-bold uppercase mb-3">
              <Radio className="w-4 h-4" />
              <span>Capítulo 07 do Manual Oficial</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Canais Oficiais da Maratona do Rio
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 mt-1">
              Acompanhe apenas fontes verificadas e proteja seus dados de compras fraudulentas.
            </p>
          </div>

          <a
            href={officialChannels.ticketPlatform}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ee5e2d] to-orange-500 hover:from-orange-500 hover:to-[#ee5e2d] text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-[#ee5e2d]/25 transition-all flex-shrink-0"
          >
            <span>Ir para GO DREAM</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Instagram */}
          <a
            href={officialChannels.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-pink-500/50 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase text-neutral-400">Instagram Oficial</span>
              <InstagramIcon className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                {officialChannels.instagram}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Destaques e avisos de ondas</div>
            </div>
          </a>

          {/* WhatsApp Channel */}
          <a
            href={officialChannels.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase text-neutral-400">Canal WhatsApp</span>
              <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                Maratona do Rio Oficial
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Alertas no seu WhatsApp</div>
            </div>
          </a>

          {/* Official Email */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase text-neutral-400">Remetente Oficial</span>
              <Mail className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono break-all">
                {officialChannels.officialEmail}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Único remetente válido para sorteios</div>
            </div>
          </div>

          {/* Contact Email */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase text-neutral-400">Suporte & Dúvidas</span>
              <Mail className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono break-all">
                {officialChannels.contactEmail}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Dúvidas sobre laudos e provas</div>
            </div>
          </div>
        </div>

        {/* Anti-Scam Callout from Page 28 of Manual */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-neutral-950 to-neutral-950 border-2 border-red-500/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-tight">
              Aviso de Segurança Contra Golpes (Manual da Prova):
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {officialChannels.scamWarning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
