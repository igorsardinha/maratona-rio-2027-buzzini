import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AlertBanner } from './components/AlertBanner';
import { StepFlow } from './components/StepFlow';
import { DistanceTimeline } from './components/DistanceTimeline';
import { OtherDistances } from './components/OtherDistances';
import { RaspaDoTacho } from './components/RaspaDoTacho';
import { CoachAdvice } from './components/CoachAdvice';
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
        {/* Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Critical Alert Banner */}
        <AlertBanner />

        {/* 6-Step Infographic Journey */}
        <StepFlow />

        {/* Detailed Distances & Wave Timelines (21k & 42k) */}
        <DistanceTimeline />

        {/* Other Distances (5k and 10k) */}
        <OtherDistances />

        {/* 'Raspa do Tacho' Section */}
        <RaspaDoTacho />

        {/* Buzzini Coach Guidance & Interactive Runner Checklist */}
        <CoachAdvice />
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
