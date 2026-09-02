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
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { RoyalTitle } from '../types';

export const RoyalFamilyTitles: React.FC = () => {
  const { data, updateRoyalTitle, addRoyalTitle, deleteRoyalTitle, isEditMode } = useKingdom();
  const [expandedId, setExpandedId] = useState<string | null>('title-01');

  const getRankIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-[#E8C87A]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#C9A85C]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#2A75D3]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#C9A85C]" />;
      case 'Gem': return <Gem className="w-5 h-5 text-[#2A75D3]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#D9DEE5]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#E8C87A]" />;
      default: return <Crown className="w-5 h-5 text-[#C9A85C]" />;
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
            className="flex items-center gap-2 px-4 py-2 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C] rounded font-royal text-xs tracking-wider shadow-lg transition-all transform hover:scale-105"
          >
            <PlusCircle className="w-4 h-4 text-[#C9A85C]" />
            <span>+ Шинэ Хэргэм Нэмэх (Add Royal Title)</span>
          </button>
        </div>
      )}

      {/* Grid of Royal Titles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.royalTitles.map((title) => {
          const isExpanded = expandedId === title.id;

          return (
            <div key={title.id} className="flex flex-col">
              <OrnateFrame
                variant={title.number === '01' || title.number === '02' || title.number === '03' ? 'gold' : 'sapphire'}
                glow={isExpanded}
                className="h-full flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number and Actions */}
                  <div className="flex items-center justify-between border-b border-[#C9A85C]/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#C9A85C] px-2 py-0.5 rounded bg-[#0C1421] border border-[#C9A85C]/40">
                        <EditableText
                          value={title.number}
                          onSave={(val) => updateRoyalTitle(title.id, { number: val })}
                          label="№"
                        />
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#D9DEE5]/60 font-serif">
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
                      <div className="p-1.5 rounded-full bg-[#142B4A] border border-[#C9A85C]/40">
                        {getRankIcon(title.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mb-4">
                    <h3 className="text-lg font-royal font-bold text-[#FFF0CA] mb-1 leading-snug">
                      <EditableText
                        value={title.mongolianTitle}
                        onSave={(val) => updateRoyalTitle(title.id, { mongolianTitle: val })}
                        label="Хэргэмийн монгол нэр"
                        className="text-lg font-royal font-bold text-[#FFF0CA]"
                      />
                    </h3>
                    <div className="text-xs font-serif italic text-[#D9DEE5]/80 tracking-wide">
                      <EditableText
                        value={title.englishTitle}
                        onSave={(val) => updateRoyalTitle(title.id, { englishTitle: val })}
                        label="English Title"
                        className="text-xs font-serif italic text-[#D9DEE5]/80"
                      />
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="p-3 bg-[#0C1421]/70 rounded border border-[#1F4E79]/40 mb-4 text-xs text-[#D9DEE5]/80 leading-relaxed font-sans">
                    <EditableText
                      value={title.description}
                      onSave={(val) => updateRoyalTitle(title.id, { description: val })}
                      multiline
                      label="Хэргэмийн тодорхойлолт"
                      className="text-xs text-[#D9DEE5]/80 leading-relaxed font-sans"
                    />
                  </div>
                </div>

                {/* Lower Right Section: Title Dignity & Classification (Pure Title Names) */}
                <div className="pt-3 border-t border-[#C9A85C]/20 flex items-center justify-between text-xs">
                  <span className="text-[#C9A85C] font-serif uppercase tracking-wider text-[10px]">
                    Хэргэмийн Зэрэг:
                  </span>
                  <div className="font-royal text-[#FFF0CA] text-right font-medium">
                    <EditableText
                      value={title.holder || 'Хаан ширээний дээд хэргэм'}
                      onSave={(val) => updateRoyalTitle(title.id, { holder: val })}
                      label="Хэргэмийн зэрэг / Төлөв"
                      className="font-royal text-[#FFF0CA] text-right font-medium text-xs"
                    />
                  </div>
                </div>
              </OrnateFrame>
            </div>
          );
        })}
      </div>
    </section>
  );
};
