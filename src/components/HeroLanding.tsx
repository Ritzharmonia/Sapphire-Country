import React from 'react';
import { Crown, Sparkles, Compass, ChevronDown, UploadCloud } from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { RoyalHeraldicCrest } from './ui/RoyalHeraldicCrest';

export const HeroLanding: React.FC = () => {
  const { data, updateField, isEditMode } = useKingdom();

  const scrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-10 pb-16">
      {/* Refined Deep Midnight Background Gradients & Vignette - Softened Blue */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#142B4A]/25 via-[#0F1E33]/35 to-[#0C1421] z-0" />
      
      {/* Subtle Sapphire Starlight / Particle Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C9A85C_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Soft Ambient Glowing Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] rounded-full bg-[#142B4A]/15 blur-3xl pointer-events-none animate-royal-shimmer" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Top Heraldic Roman Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-[#C9A85C]/40 bg-[#0C1421]/90 backdrop-blur shadow-lg">
          <span className="text-[#C9A85C] text-xs">❖</span>
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#E8C87A]">
            <EditableText
              value={data.overview.foundingEra || 'ANCIENT IMPERIAL REALM'}
              onSave={(val) => updateField('overview.foundingEra', val)}
              className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#E8C87A]"
            />
          </span>
          <span className="text-[#C9A85C] text-xs">❖</span>
        </div>

        {/* Central National Crest Emblem with Ornate Royal Baroque Heraldic Frame */}
        <RoyalHeraldicCrest
          imageUrl={data.crest.imageUrl}
          scale={data.crest.scale}
          offsetX={data.crest.offsetX}
          offsetY={data.crest.offsetY}
          size="lg"
        />

        {/* Refined Royal Country Name: Elegant, Balanced & Noble with Canva Cyrillic Display Font */}
        <div className="mt-4 mb-1.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair tracking-[0.14em] sm:tracking-[0.18em] text-[#FFF5DF] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            {data.crest.customTitle || 'SAPPHIRE COUNTRY'}
          </h1>
        </div>

        {/* Supporting Royal Text: COUNTRY OF SAPPHIRE */}
        <div className="text-xs sm:text-sm md:text-base font-cormorant italic tracking-[0.3em] uppercase text-[#E8C87A]/90 mb-3 font-semibold">
          {data.crest.customSubtitle || 'COUNTRY OF SAPPHIRE'}
        </div>

        {/* Symmetrical Heraldic Ornament */}
        <div className="flex items-center gap-4 my-2.5 w-full max-w-md justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A85C]/60 to-[#C9A85C]" />
          <span className="text-[#C9A85C] text-sm">✦</span>
          <div className="w-2 h-2 rotate-45 border border-[#C9A85C] bg-[#1F4E79]" />
          <span className="text-[#C9A85C] text-sm">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A85C]/60 to-[#C9A85C]" />
        </div>

        {/* Imperial Motto */}
        <div className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#C9A85C] uppercase max-w-xl mx-auto my-2.5 font-medium">
          <EditableText
            value={data.heroMotto || 'СҮР ЖАВХЛАН · ИТГЭЛ ҮНЭМШИЛ · МӨНХИЙН ИНДРАНИЛ'}
            onSave={(val) => updateField('heroMotto', val)}
            className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#C9A85C] uppercase font-medium"
          />
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7">
          <button
            type="button"
            onClick={scrollToOverview}
            className="px-6 py-2.5 bg-gradient-to-r from-[#142B4A] via-[#1B385D] to-[#142B4A] hover:from-[#1B385D] hover:to-[#224A7A] text-[#FFF0CA] border border-[#C9A85C] rounded font-royal tracking-widest text-xs uppercase shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Crown className="w-4 h-4 text-[#C9A85C]" />
            <span>Архив Нээх (Explore Archive)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('regions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-[#0C1421]/90 hover:bg-[#142B4A] text-[#D9DEE5] border border-[#D9DEE5]/30 hover:border-[#C9A85C]/60 rounded font-serif tracking-wider text-xs uppercase shadow transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C9A85C]" />
            <span>Бүс Нутаг (Regions of Sapphire)</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToOverview}
          className="mt-10 text-[#C9A85C]/80 hover:text-[#FFF0CA] flex flex-col items-center gap-1 transition-colors animate-bounce cursor-pointer"
          aria-label="Scroll to kingdom overview"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Доош гүйлгэх (Scroll)</span>
          <ChevronDown className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
