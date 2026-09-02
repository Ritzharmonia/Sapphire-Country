import React from 'react';
import { KingdomProvider } from './context/KingdomContext';
import { HeaderNav } from './components/HeaderNav';
import { HeroLanding } from './components/HeroLanding';
import { CountryOverview } from './components/CountryOverview';
import { RoyalFamilyTitles } from './components/RoyalFamilyTitles';
import { RoyalCourtRanks } from './components/RoyalCourtRanks';
import { NobilityHierarchy } from './components/NobilityHierarchy';
import { RegionsSection } from './components/RegionsSection';
import { LandEconomySection } from './components/LandEconomySection';
import { RealmMap } from './components/RealmMap';
import { RoyalChronicles } from './components/RoyalChronicles';
import { RoyalFooter } from './components/RoyalFooter';
import { RoyalDynamicBackground } from './components/ui/RoyalDynamicBackground';

const KingdomAppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C1421] text-[#D9DEE5] selection:bg-[#C9A85C]/30 selection:text-[#FFF0CA] font-serif antialiased relative overflow-x-hidden">
      {/* Dynamic Animated Royal Celestial & Shimmering Gold Background */}
      <RoyalDynamicBackground />

      {/* Decorative Outer Imperial Filigree Corners */}
      <div className="fixed top-0 right-0 w-20 sm:w-28 h-20 sm:h-28 border-r-4 border-t-4 border-[#C9A85C] opacity-35 pointer-events-none z-30" />
      <div className="fixed bottom-0 left-0 w-20 sm:w-28 h-20 sm:h-28 border-l-4 border-b-4 border-[#C9A85C] opacity-35 pointer-events-none z-30" />
      <div className="fixed top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-[#C9A85C] opacity-20 pointer-events-none z-30" />
      <div className="fixed bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-b-2 border-[#C9A85C] opacity-20 pointer-events-none z-30" />

      {/* Main Royal Navigation */}
      <HeaderNav />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        {/* 1. Hero Landing & Official Crest */}
        <HeroLanding />

        {/* 2. Country Overview & 5 Core Properties */}
        <CountryOverview />

        {/* 3. Royal Family Titles (01-07) */}
        <RoyalFamilyTitles />

        {/* 4. Royal Court Ranks (08-10) */}
        <RoyalCourtRanks />

        {/* 5. Nobility Hierarchy (11-31) */}
        <NobilityHierarchy />

        {/* 6. Regions of Sapphire (Key Regions) */}
        <RegionsSection />

        {/* 7. Land Value & Imperial Economy Calculator */}
        <LandEconomySection />

        {/* 8. Realm Cartography Map */}
        <RealmMap />

        {/* 9. Royal Chronicles & Decrees */}
        <RoyalChronicles />
      </main>

      {/* Royal Footer */}
      <RoyalFooter />
    </div>
  );
};

export default function App() {
  return (
    <KingdomProvider>
      <KingdomAppContent />
    </KingdomProvider>
  );
}
