import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Calendar, Share2 } from 'lucide-react';
import { downloadMarathonCalendar } from '../utils/calendar';
import confetti from 'canvas-confetti';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.6 },
      colors: ['#ee5e2d', '#ffffff'],
    });
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyText = () => {
    const text = `🚨 *MARATONA DO RIO 2027 - GUIA DE INSCRIÇÕES BUZZINI* 🚨

Atenção corredores! Confira o resumo das inscrições por sorteio (21km e 42km):

🏃‍♂️ *MEIA MARATONA (21 KM)*:
📅 *09/11 a 18/11/2026* - Cadastro gratuito no sorteio (GO DREAM)
🎟️ *25/11* - Divulgação do número da sorte
✅ *27/11* - Divulgação dos sorteados
🏁 *30/11 a 01/12* - Início da 1ª onda de compra (R$ 359 c/ camiseta)

⚠️ Importante: Ser sorteado NÃO garante vaga automática! O atleta precisa acessar a GO DREAM na sua onda e efetuar o pagamento.

Confira o infográfico completo da assessoria:
${currentUrl}

*RIO 2027 JÁ COMEÇOU! 🧡*`;

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#ee5e2d', '#22c55e'],
    });
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`🚨 Maratona do Rio 2027 - Guia de Inscrições Buzzini! Veja as datas do sorteio dos 21km e 42km e as ondas de compra: ${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-neutral-900 border border-neutral-700 p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-[#ee5e2d]/15 text-[#ee5e2d] mb-1">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white uppercase">
            Compartilhar com a Equipe
          </h3>
          <p className="text-xs text-neutral-400">
            Envie para seus parceiros de treino e grupos da Buzzini no WhatsApp
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleWhatsAppShare}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/30 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enviar direto no WhatsApp</span>
          </button>

          <button
            onClick={handleCopyText}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-bold text-sm border border-neutral-700 transition-all active:scale-95"
          >
            {copiedText ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto copiado para a área de transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#ee5e2d]" />
                <span>Copiar texto formatado com datas</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800/80 text-neutral-400 hover:text-neutral-200 text-xs font-semibold border border-neutral-800 transition-all"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Link copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar link da página</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              downloadMarathonCalendar();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-neutral-400 hover:text-neutral-200 text-xs font-medium transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#ee5e2d]" />
            <span>Baixar arquivo de agenda (.ics)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
