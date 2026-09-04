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
import { InteractiveSapphireGem } from './components/InteractiveSapphireGem';
import { RoyalFooter } from './components/RoyalFooter';
import { RoyalDynamicBackground } from './components/ui/RoyalDynamicBackground';
import { VictorianScreenFrame } from './components/ui/VictorianOrnaments';

const KingdomAppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C1421] text-[#D9DEE5] selection:bg-[#CBD5E1]/30 selection:text-[#FFFFFF] font-serif antialiased relative overflow-x-hidden">
      {/* Dynamic Animated Royal Celestial & Shimmering Platinum Background */}
      <RoyalDynamicBackground />

      {/* Grand Victorian Palace Outer Frame with Authentic Baroque Filigree */}
      <VictorianScreenFrame />

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

        {/* 10. Interactive Sacred Sapphire Gem & Crystal Shimmer Relic */}
        <InteractiveSapphireGem />
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
