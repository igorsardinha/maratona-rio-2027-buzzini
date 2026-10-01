import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AlertBanner } from './components/AlertBanner';
import { WhatChanged } from './components/WhatChanged';
import { StepFlow } from './components/StepFlow';
import { DistanceTimeline } from './components/DistanceTimeline';
import { WhereDoIFitIn } from './components/WhereDoIFitIn';
import { OtherDistances } from './components/OtherDistances';
import { RaspaDoTacho } from './components/RaspaDoTacho';
import { CoachAdvice } from './components/CoachAdvice';
import { FaqSection } from './components/FaqSection';
import { OfficialChannels } from './components/OfficialChannels';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';

export const App: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-neutral-100 flex flex-col selection:bg-[#ee5e2d] selection:text-white">
      {/* Navigation Header */}
      <Header onShare={() => setIsShareOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Official Manual Background */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Critical Alert Banner: Ser sorteado não garante vaga */}
        <AlertBanner />

        {/* Chapter 01: What Changed in 25th Edition */}
        <WhatChanged />

        {/* 6-Step Infographic Journey */}
        <StepFlow />

        {/* Chapter 04: Detailed Races & Wave Timelines (21K, Desafio, 42K, 10K, 5K) */}
        <DistanceTimeline />

        {/* Chapter 05: Where Do I Fit In? (Interactive Matrix Table) */}
        <WhereDoIFitIn />

        {/* Combos 5K and 10K */}
        <OtherDistances />

        {/* 'Raspa do Tacho' Section (December & March) */}
        <RaspaDoTacho />

        {/* Buzzini Coach Guidance & Interactive Runner Checklist */}
        <CoachAdvice />

        {/* Chapter 06: Frequently Asked Questions */}
        <FaqSection />

        {/* Chapter 07: Official Channels & Anti-Scam Security Notice */}
        <OfficialChannels />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp / Social Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
};

export default App;
