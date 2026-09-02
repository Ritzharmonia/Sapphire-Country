import React, { useState } from 'react';
import { 
  Crown, 
  Shield, 
  Award, 
  Sparkles, 
  Filter 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { NobilityCategory } from '../types';

export const NobilityHierarchy: React.FC = () => {
  const { data } = useKingdom();
  const [activeCategory, setActiveCategory] = useState<NobilityCategory | 'all'>('all');

  const categories: { key: NobilityCategory | 'all'; labelMongolian: string; labelEnglish: string; count: number }[] = [
    { key: 'all', labelMongolian: 'БҮХ ЯЗГУУРТАН', labelEnglish: 'All Nobility Ranks', count: data.nobilityHierarchy.length },
    { key: 'high', labelMongolian: 'ДЭЭД ЯЗГУУРТАН', labelEnglish: 'High Nobility (11-16)', count: data.nobilityHierarchy.filter(n => n.category === 'high').length },
    { key: 'middle', labelMongolian: 'ДУНД ЯЗГУУРТАН', labelEnglish: 'Middle Nobility (17-24)', count: data.nobilityHierarchy.filter(n => n.category === 'middle').length },
    { key: 'noble', labelMongolian: 'ЯЗГУУРТАН ИРГЭД', labelEnglish: 'Nobles (25-27)', count: data.nobilityHierarchy.filter(n => n.category === 'noble').length },
    { key: 'title', labelMongolian: 'АЛБАН ТУШААЛ, ЦОЛ', labelEnglish: 'Titles & Knighthood (28-31)', count: data.nobilityHierarchy.filter(n => n.category === 'title').length },
  ];

  const filteredItems = activeCategory === 'all'
    ? data.nobilityHierarchy
    : data.nobilityHierarchy.filter((item) => item.category === activeCategory);

  const getCategoryBadge = (category: NobilityCategory) => {
    switch (category) {
      case 'high':
        return <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#C9A85C]/20 text-[#FFF0CA] border border-[#C9A85C]/50">HIGH NOBILITY</span>;
      case 'middle':
        return <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#1F4E79]/40 text-[#D9DEE5] border border-[#1F4E79]">MIDDLE NOBILITY</span>;
      case 'noble':
        return <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#142B4A]/60 text-[#D9DEE5]/90 border border-[#C9A85C]/30">NOBLE</span>;
      case 'title':
        return <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0C1421] text-[#C9A85C] border border-[#C9A85C]/30">TITLE / CIVIC</span>;
    }
  };

  return (
    <section id="court-nobility" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE IV"
        titleMongolian="ЯЗГУУРТНЫ ЭРЭМБЭ ДАРААЛАЛ"
        titleEnglish="NOBILITY HIERARCHY"
        subtitle="Саффир улсын их язгууртан, вант гүн, маркиз, гүн, виконт, бароноос эхлээд ордны цолтнуудын шаталсан бүтэц (Цол хэргэмийн нэршил)."
      />

      {/* Royal Progression Hierarchy Banner */}
      <div className="mb-10 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-[#0C1421] via-[#142B4A]/80 to-[#0C1421] border border-[#C9A85C]/40 shadow-xl">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#C9A85C] text-center mb-3">
          — ЭЗЭНТ ГҮРНИЙ ДЭЭД ЭРЭМБИЙН ШАТЛАЛ (IMPERIAL PRECEDENCE) —
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-royal text-[#FFF0CA]">
          <span className="px-3 py-1 rounded bg-[#C9A85C] text-[#0C1421] font-bold shadow">Хаан Угсаа (Royal Family)</span>
          <span className="text-[#C9A85C]">→</span>
          <span className="px-3 py-1 rounded bg-[#1F4E79] border border-[#C9A85C]/60 text-[#FFF0CA]">Хааны Ордны Канцлер (Royal Court)</span>
          <span className="text-[#C9A85C]">→</span>
          <span className="px-3 py-1 rounded bg-[#142B4A] border border-[#C9A85C]/40 text-[#D9DEE5]">Дээд Язгууртан (High Nobility)</span>
          <span className="text-[#C9A85C]">→</span>
          <span className="px-3 py-1 rounded bg-[#142B4A] border border-[#1F4E79] text-[#D9DEE5]">Дунд Язгууртан (Middle Nobility)</span>
          <span className="text-[#C9A85C]">→</span>
          <span className="px-3 py-1 rounded bg-[#0C1421] border border-[#C9A85C]/30 text-[#C9A85C]">Язгууртан & Цолтон (Noble & Titles)</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3 sm:px-4 py-2 rounded text-xs font-serif tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
              activeCategory === cat.key
                ? 'bg-[#C9A85C] text-[#0C1421] font-bold shadow-lg scale-105'
                : 'bg-[#142B4A]/60 hover:bg-[#1F4E79] text-[#D9DEE5] border border-[#C9A85C]/30'
            }`}
          >
            <span>{cat.labelMongolian}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${activeCategory === cat.key ? 'bg-[#0C1421] text-[#FFF0CA]' : 'bg-[#0C1421]/60 text-[#C9A85C]'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>



      {/* Nobility Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => {
          return (
            <OrnateFrame
              key={item.id}
              variant={item.category === 'high' ? 'gold' : 'sapphire'}
              padding="p-4 sm:p-5"
              className="flex flex-col justify-between hover:border-[#C9A85C] transition-all"
            >
              <div>
                {/* Header: Number & Category Badge */}
                <div className="flex items-center justify-between border-b border-[#C9A85C]/20 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E8C87A] px-2 py-0.5 rounded bg-[#0C1421] border border-[#C9A85C]/40">
                      {item.number}
                    </span>
                    {getCategoryBadge(item.category)}
                  </div>
                </div>

                {/* Title & Rank (Refined font size) */}
                <div className="mb-3">
                  <h4 className="font-royal text-sm sm:text-base font-bold text-[#FFF0CA] mb-0.5">
                    {item.mongolianTitle}
                  </h4>
                  <div className="font-serif italic text-xs text-[#D9DEE5]/80">
                    {item.englishTitle}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-xs text-[#D9DEE5]/75 leading-relaxed font-sans bg-[#0C1421]/50 p-2.5 rounded border border-[#1F4E79]/30">
                    {item.description}
                  </p>
                )}
              </div>
            </OrnateFrame>
          );
        })}
      </div>
    </section>
  );
};
