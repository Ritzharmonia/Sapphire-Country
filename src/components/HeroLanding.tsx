import React from 'react';
import { Crown, Compass, ChevronDown } from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { RoyalHeraldicCrest } from './ui/RoyalHeraldicCrest';

export const HeroLanding: React.FC = () => {
  const { data, updateField } = useKingdom();

  const scrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-10 pb-16">
      {/* Refined Deep Midnight Background Gradients & Vignette - Softened Blue */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#142B4A]/25 via-[#0F1E33]/35 to-[#0C1421] z-0" />
      
      {/* Subtle Platinum Starlight Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Soft Ambient Glowing Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] rounded-full bg-[#142B4A]/15 blur-3xl pointer-events-none animate-royal-shimmer" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Era Tag in Authentic Victorian Small Caps Cartouche with Fleur-de-lis */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-sm border border-[#CBD5E1]/60 bg-gradient-to-b from-[#142B4A]/90 to-[#0C1421] backdrop-blur shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          <span className="text-[#CBD5E1] text-xs">⚜</span>
          <span className="text-[11px] sm:text-xs font-royal tracking-[0.28em] uppercase text-[#FFFFFF] font-medium">
            <EditableText
              value={data.overview.foundingEra || 'ANCIENT IMPERIAL REALM'}
              onSave={(val) => updateField('overview.foundingEra', val)}
              className="text-[11px] sm:text-xs font-royal tracking-[0.28em] uppercase text-[#FFFFFF] font-medium"
            />
          </span>
          <span className="text-[#CBD5E1] text-xs">⚜</span>
        </div>

        {/* Central National Crest Emblem */}
        <RoyalHeraldicCrest
          imageUrl={data.crest.imageUrl}
          scale={data.crest.scale}
          offsetX={data.crest.offsetX}
          offsetY={data.crest.offsetY}
          size="lg"
        />

        {/* Refined Royal Country Name: Ornate & Unique Regal Font (Cinzel Decorative) */}
        <div className="mt-4 mb-1.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-cinzel-decorative tracking-[0.12em] sm:tracking-[0.16em] text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(203,213,225,0.3)]">
            <EditableText
              value={data.crest.customTitle || 'SAPPHIRE COUNTRY'}
              onSave={(val) => updateField('crest.customTitle', val)}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-cinzel-decorative tracking-[0.12em] sm:tracking-[0.16em] text-[#FFFFFF]"
            />
          </h1>
        </div>

        {/* Supporting Royal Text: COUNTRY OF SAPPHIRE in Platinum */}
        <div className="text-xs sm:text-sm md:text-base font-cormorant italic tracking-[0.3em] uppercase text-[#E2E8F0]/90 mb-3 font-semibold">
          {data.crest.customSubtitle || 'COUNTRY OF SAPPHIRE'}
        </div>

        {/* Symmetrical Victorian Heraldic Fleur-de-lis Ornament */}
        <div className="flex items-center gap-4 my-2.5 w-full max-w-md justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1]/70 to-[#CBD5E1]" />
          <span className="text-[#CBD5E1] text-xs">❖</span>
          <span className="text-[#FFFFFF] text-base drop-shadow-[0_0_8px_rgba(226,232,240,0.6)]">⚜</span>
          <span className="text-[#CBD5E1] text-xs">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#CBD5E1]/70 to-[#CBD5E1]" />
        </div>

        {/* Imperial Motto in Victorian Italic Serif */}
        <div className="text-xs sm:text-sm font-serif font-cormorant italic tracking-[0.24em] text-[#E2E8F0] uppercase max-w-xl mx-auto my-2.5 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <EditableText
            value={data.heroMotto || 'СҮР ЖАВХЛАН · ИТГЭЛ ҮНЭМШИЛ · МӨНХИЙН ИНДРАНИЛ'}
            onSave={(val) => updateField('heroMotto', val)}
            className="text-xs sm:text-sm font-serif font-cormorant italic tracking-[0.24em] text-[#E2E8F0] uppercase font-semibold"
          />
        </div>

        {/* Quick Action Navigation Buttons in Royal Platinum */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7">
          <button
            type="button"
            onClick={scrollToOverview}
            className="px-6 py-2.5 bg-gradient-to-r from-[#142B4A] via-[#1B385D] to-[#142B4A] hover:from-[#1B385D] hover:to-[#224A7A] text-[#FFFFFF] border border-[#CBD5E1] rounded font-royal tracking-widest text-xs uppercase shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Crown className="w-4 h-4 text-[#CBD5E1]" />
            <span>Архив Нээх (Explore Archive)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('regions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-[#0C1421]/90 hover:bg-[#142B4A] text-[#D9DEE5] border border-[#CBD5E1]/40 hover:border-[#FFFFFF]/80 rounded font-serif tracking-wider text-xs uppercase shadow transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#CBD5E1]" />
            <span>Бүс Нутаг (Regions of Sapphire)</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToOverview}
          className="mt-10 text-[#CBD5E1]/80 hover:text-[#FFFFFF] flex flex-col items-center gap-1 transition-colors animate-bounce cursor-pointer"
          aria-label="Scroll to kingdom overview"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Доош гүйлгэх (Scroll)</span>
          <ChevronDown className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
