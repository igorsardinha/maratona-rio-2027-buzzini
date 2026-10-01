import React from "react";
import { Calendar, Share2 } from "lucide-react";
import { downloadMarathonCalendar } from "../utils/calendar";
import confetti from "canvas-confetti";
import { MARATHON_DATA } from "../data/marathonData";

interface HeaderProps {
	onShare: () => void;
	onOpenManualModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare }) => {
	const handleCalendar = () => {
		downloadMarathonCalendar();
		confetti({
			particleCount: 50,
			spread: 60,
			origin: { y: 0.2 },
			colors: ["#ee5e2d", "#ffffff", "#ffa07a", "#d4af37"],
		});
	};

	return (
		<header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800/80 transition-all">
			<div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
				{/* Brand / Logo Buzzini + Rio 25 Anos */}
				<div className="flex items-center gap-2 sm:gap-4 min-w-0">
					<div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-700/60 shadow-lg p-1.5 flex-shrink-0">
						<img
							src="/logo_buzzini.svg"
							alt="Buzzini Assessoria"
							className="w-full h-full object-contain filter drop-shadow"
						/>
					</div>

					<div className="h-6 w-px bg-neutral-800 hidden sm:block flex-shrink-0" />

					{/* Selo 25 Anos Rio */}
					<div className="flex items-center gap-2 min-w-0">
						<div className="h-8 sm:h-9 w-auto flex items-center flex-shrink-0">
							<img
								src={MARATHON_DATA.images.logo25Anos}
								alt="Maratona do Rio 25 Anos"
								className="h-7 sm:h-8 object-contain rounded bg-black/40 p-0.5 border border-amber-500/30"
							/>
						</div>
						<div className="min-w-0">
							<div className="flex items-center gap-1.5">
								<span className="font-extrabold tracking-wider text-white text-xs sm:text-base uppercase truncate">
									Buzzini
								</span>
							</div>
							<p className="text-[10px] text-neutral-400 font-medium hidden md:block truncate">
								Guia Oficial de Inscrições • Manual Oficial
							</p>
						</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
					<button
						onClick={handleCalendar}
						className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-all shadow-sm active:scale-95"
						title="Baixar datas no calendário (.ics)">
						<Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ee5e2d]" />
						<span className="hidden md:inline">Salvar Agenda</span>
						<span className="md:hidden text-[11px]">Agenda</span>
					</button>

					<button
						onClick={onShare}
						className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#ee5e2d] hover:bg-[#d94f20] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ee5e2d]/25 transition-all active:scale-95">
						<Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
						<span className="hidden sm:inline">Compartilhar</span>
					</button>
				</div>
			</div>
		</header>
	);
};
