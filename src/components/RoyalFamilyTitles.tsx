import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  Shield, 
  Award, 
  Gem, 
  Compass, 
  Sun, 
  PlusCircle, 
  Trash2 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { ElegantLineCard } from './ui/ElegantLineCard';
import { SectionHeading } from './ui/SectionHeading';
import { RoyalTitle } from '../types';

export const RoyalFamilyTitles: React.FC = () => {
  const { data, updateRoyalTitle, addRoyalTitle, deleteRoyalTitle, isEditMode } = useKingdom();
  const [expandedId, setExpandedId] = useState<string | null>('title-01');

  const getRankIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-[#FFFFFF]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#CBD5E1]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#5B8AC4]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#CBD5E1]" />;
      case 'Gem': return <Gem className="w-5 h-5 text-[#5B8AC4]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#D9DEE5]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#FFFFFF]" />;
      default: return <Crown className="w-5 h-5 text-[#CBD5E1]" />;
    }
  };

  const handleAddNewTitle = () => {
    const nextNum = String(data.royalTitles.length + 1).padStart(2, '0');
    const newTitle: RoyalTitle = {
      id: `title-${Date.now()}`,
      number: nextNum,
      mongolianTitle: 'Шинэ Хаан Угсааны Хэргэм',
      englishTitle: 'New Royal Dynasty Title',
      description: 'Хаан угсааны шинэ хэргэмийн тодорхойлолт энд бичигдэнэ.',
      rankCategory: 'prince',
      holder: 'Хаан угсааны дээд хэргэм'
    };
    addRoyalTitle(newTitle);
    setExpandedId(newTitle.id);
  };

  return (
    <section id="royal-titles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE II"
        titleMongolian="ХААН УГСААНЫ ХЭРГЭМ"
        titleEnglish="ROYAL FAMILY TITLES"
        subtitle="Саффир улсын төрийн тэргүүн, хаан, хатан хаан болон хаан ширээний албан ёсны өв залгамжлагчдын дээд хэргэмийн эрэмбэ (Зөвхөн цол хэргэмийн албан ёсны зэрэг дэв)."
      />

      {/* Admin Action Button */}
      {isEditMode && (
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={handleAddNewTitle}
            className="flex items-center gap-2 px-4 py-2 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFFFFF] border border-[#CBD5E1] rounded font-royal text-xs tracking-wider shadow-lg transition-all transform hover:scale-105"
          >
            <PlusCircle className="w-4 h-4 text-[#CBD5E1]" />
            <span>+ Шинэ Хэргэм Нэмэх (Add Royal Title)</span>
          </button>
        </div>
      )}

      {/* Grid of Royal Titles with Elegant Architectural Lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.royalTitles.map((title) => {
          const isExpanded = expandedId === title.id;

          return (
            <div key={title.id} className="flex flex-col">
              <ElegantLineCard
                accentColor={title.number === '01' || title.number === '02' || title.number === '03' ? 'platinum' : 'sapphire'}
                glow={isExpanded}
                className="h-full flex flex-col justify-between transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedId(title.id)}
              >
                <div>
                  {/* Top Bar: Number and Actions */}
                  <div className="flex items-center justify-between border-b border-[#CBD5E1]/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#CBD5E1] px-2 py-0.5 rounded bg-[#0C1421]/90 border border-[#CBD5E1]/30">
                        <EditableText
                          value={title.number}
                          onSave={(val) => updateRoyalTitle(title.id, { number: val })}
                          label="№"
                        />
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#CBD5E1]/70 font-serif">
                        ROYAL TITLE
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isEditMode && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`"${title.mongolianTitle}" хэргэмийг устгах уу?`)) {
                              deleteRoyalTitle(title.id);
                            }
                          }}
                          className="p-1 hover:bg-red-950 text-red-400 hover:text-red-200 rounded border border-transparent hover:border-red-500/40 transition-colors"
                          title="Хэргэм устгах"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <div className="p-1.5 rounded-full bg-[#142B4A]/80 border border-[#CBD5E1]/30">
                        {getRankIcon(title.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-[26px] font-royal font-semibold tracking-wide text-[#FFFFFF] mb-1.5 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      <EditableText
                        value={title.mongolianTitle}
                        onSave={(val) => updateRoyalTitle(title.id, { mongolianTitle: val })}
                        label="Хэргэмийн монгол нэр"
                        className="text-2xl sm:text-[26px] font-royal font-semibold tracking-wide text-[#FFFFFF]"
                      />
                    </h3>
                    <div className="text-xs font-serif italic text-[#CBD5E1]/80 tracking-wide mb-2.5">
                      <EditableText
                        value={title.englishTitle}
                        onSave={(val) => updateRoyalTitle(title.id, { englishTitle: val })}
                        label="English Title"
                        className="text-xs font-serif italic text-[#CBD5E1]/80"
                      />
                    </div>
                    {/* Delicate horizontal line under title */}
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[#CBD5E1]/50 to-transparent" />
                  </div>

                  {/* Description with Clean Left Accent Line */}
                  <div className="pl-3.5 border-l border-[#CBD5E1]/25 py-1 mb-4 text-xs text-[#D9DEE5]/80 leading-relaxed font-sans">
                    <EditableText
                      value={title.description}
                      onSave={(val) => updateRoyalTitle(title.id, { description: val })}
                      multiline
                      label="Хэргэмийн тодорхойлолт"
                      className="text-xs text-[#D9DEE5]/80 leading-relaxed font-sans"
                    />
                  </div>
                </div>

                {/* Lower Right Section: Title Dignity & Classification */}
                <div className="pt-3 border-t border-[#CBD5E1]/15 flex items-center justify-between text-xs">
                  <span className="text-[#CBD5E1] font-serif uppercase tracking-wider text-[10px]">
                    Хэргэмийн Зэрэг:
                  </span>
                  <div className="font-royal text-[#FFFFFF] text-right font-medium">
                    <EditableText
                      value={title.holder || 'Хаан ширээний дээд хэргэм'}
                      onSave={(val) => updateRoyalTitle(title.id, { holder: val })}
                      label="Хэргэмийн зэрэг / Төлөв"
                      className="font-royal text-[#FFFFFF] text-right font-medium text-xs"
                    />
                  </div>
                </div>
              </ElegantLineCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};
