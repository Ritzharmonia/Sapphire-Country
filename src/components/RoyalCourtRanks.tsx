import React, { useState } from 'react';
import { 
  Scroll, 
  BookOpen, 
  Megaphone, 
  ShieldCheck, 
  PlusCircle, 
  Trash2, 
  CheckCircle, 
  Plus, 
  X 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { CourtRank } from '../types';

export const RoyalCourtRanks: React.FC = () => {
  const { data, updateCourtRank, addCourtRank, deleteCourtRank, isEditMode } = useKingdom();

  const getBadgeIcon = (symbol?: string) => {
    switch (symbol) {
      case 'Scroll': return <Scroll className="w-5 h-5 text-[#C9A85C]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#5B8AC4]" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-[#E8C87A]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#C9A85C]" />;
    }
  };

  const handleAddDuty = (rankId: string) => {
    const rank = data.courtRanks.find(r => r.id === rankId);
    if (!rank) return;
    const newDuties = [...rank.duties, 'Шинэ үүрэг хариуцлагын тодорхойлолт'];
    updateCourtRank(rankId, { duties: newDuties });
  };

  const handleUpdateDuty = (rankId: string, index: number, value: string) => {
    const rank = data.courtRanks.find(r => r.id === rankId);
    if (!rank) return;
    const newDuties = [...rank.duties];
    newDuties[index] = value;
    updateCourtRank(rankId, { duties: newDuties });
  };

  const handleDeleteDuty = (rankId: string, index: number) => {
    const rank = data.courtRanks.find(r => r.id === rankId);
    if (!rank) return;
    const newDuties = rank.duties.filter((_, i) => i !== index);
    updateCourtRank(rankId, { duties: newDuties });
  };

  const handleAddNewRank = () => {
    const nextNum = String(data.courtRanks.length + 8).padStart(2, '0');
    const newRank: CourtRank = {
      id: `court-${Date.now()}`,
      number: nextNum,
      mongolianTitle: 'Шинэ Ордны Албан Тушаал',
      englishTitle: 'New High Court Officer',
      informalTitle: 'Хааны Итгэмжит Төлөөлөгч',
      summary: 'Ордны шинэ албан тушаалын үндсэн чиг үүргийн хураангуй.',
      duties: [
        'Төрийн үйл хэрэг, ордны хурал зөвлөгөөнийг зохион байгуулах.',
        'Хааны зарлиг, тушаалын хэрэгжилтийг хянах.'
      ],
      currentHolder: 'Томилогдсон эрхэм'
    };
    addCourtRank(newRank);
  };

  return (
    <section id="court-ranks" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE III"
        titleMongolian="ХААНЫ ДЭРГЭДЭХ ДЭЭД АЛБАН ТУШААЛ"
        titleEnglish="ROYAL COURT & HIGH CHANCELLERY"
        subtitle="Эзэнт гүрний төрийн өдөр тутмын үйл ажиллагаа, бодлого, зарлиг шийдвэрийг хэрэгжүүлэгч ордны дээд албан тушаалтнууд."
      />

      {/* Admin Action Button */}
      {isEditMode && (
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={handleAddNewRank}
            className="flex items-center gap-2 px-4 py-2 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C] rounded font-royal text-xs tracking-wider shadow-lg transition-all transform hover:scale-105"
          >
            <PlusCircle className="w-4 h-4 text-[#C9A85C]" />
            <span>+ Ордны Тушаал Нэмэх (Add Court Officer)</span>
          </button>
        </div>
      )}

      {/* Cards Grid for Court Ranks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.courtRanks.map((rank) => (
          <OrnateFrame
            key={rank.id}
            variant="gold"
            className="flex flex-col justify-between h-full"
            glow={rank.number === '08'}
          >
            <div>
              {/* Header Number & Badge */}
              <div className="flex items-center justify-between border-b border-[#C9A85C]/30 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#E8C87A] px-2 py-0.5 rounded bg-[#0C1421] border border-[#C9A85C]/60">
                    <EditableText
                      value={rank.number}
                      onSave={(val) => updateCourtRank(rank.id, { number: val })}
                      label="№"
                    />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#D9DEE5]/60 font-serif">
                    HIGH COURT RANK
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {isEditMode && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`"${rank.mongolianTitle}" албан тушаалыг устгах уу?`)) {
                          deleteCourtRank(rank.id);
                        }
                      }}
                      className="p-1 hover:bg-red-950 text-red-400 hover:text-red-200 rounded transition-colors"
                      title="Устгах"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <div className="p-2 rounded bg-[#142B4A] border border-[#C9A85C]/50">
                    {getBadgeIcon(rank.badgeSymbol)}
                  </div>
                </div>
              </div>

              {/* Title & Informal Title */}
              <div className="mb-4">
                <h3 className="text-xl font-royal font-bold text-[#FFF0CA] mb-1">
                  <EditableText
                    value={rank.mongolianTitle}
                    onSave={(val) => updateCourtRank(rank.id, { mongolianTitle: val })}
                    label="Монгол нэршил"
                    className="text-xl font-royal font-bold text-[#FFF0CA]"
                  />
                </h3>
                <div className="text-xs font-serif italic text-[#D9DEE5]/80 mb-2">
                  <EditableText
                    value={rank.englishTitle}
                    onSave={(val) => updateCourtRank(rank.id, { englishTitle: val })}
                    label="English Title"
                    className="text-xs font-serif italic text-[#D9DEE5]/80"
                  />
                </div>
                {rank.informalTitle && (
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#1F4E79]/40 border border-[#C9A85C]/30 text-[11px] text-[#C9A85C] font-mono">
                    «
                    <EditableText
                      value={rank.informalTitle}
                      onSave={(val) => updateCourtRank(rank.id, { informalTitle: val })}
                      label="Албан бус нэршил"
                      className="text-[11px] text-[#C9A85C] font-mono"
                    />
                    »
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="p-3 bg-[#0C1421]/60 rounded border border-[#1F4E79]/40 mb-4 text-xs text-[#D9DEE5]/80 leading-relaxed font-sans">
                <EditableText
                  value={rank.summary}
                  onSave={(val) => updateCourtRank(rank.id, { summary: val })}
                  multiline
                  label="Товч тодорхойлолт"
                  className="text-xs text-[#D9DEE5]/80 leading-relaxed font-sans"
                />
              </div>

              {/* Duties List */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] uppercase font-serif tracking-wider text-[#C9A85C] flex items-center justify-between">
                  <span>ҮНДСЭН ҮҮРЭГ, БҮРЭН ЭРХ:</span>
                  {isEditMode && (
                    <button
                      type="button"
                      onClick={() => handleAddDuty(rank.id)}
                      className="text-[10px] text-[#E8C87A] hover:underline flex items-center gap-1 font-mono"
                    >
                      <Plus className="w-3 h-3" /> Үүрэг нэмэх
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {rank.duties.map((duty, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#D9DEE5]/90 bg-[#142B4A]/25 p-2 rounded border border-[#1F4E79]/30"
                    >
                      <span className="text-[#C9A85C] text-xs mt-0.5">❖</span>
                      <div className="flex-1">
                        <EditableText
                          value={duty}
                          onSave={(newVal) => handleUpdateDuty(rank.id, idx, newVal)}
                          multiline
                          className="text-xs text-[#D9DEE5]/90 leading-relaxed font-sans"
                        />
                      </div>
                      {isEditMode && (
                        <button
                          type="button"
                          onClick={() => handleDeleteDuty(rank.id, idx)}
                          className="text-red-400 hover:text-red-200 p-0.5"
                          title="Устгах"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Rank Designation (Pure Title Names) */}
            <div className="pt-3 border-t border-[#C9A85C]/20 flex items-center justify-between text-xs mt-4">
              <span className="text-[#C9A85C] font-serif uppercase tracking-wider text-[10px]">
                Хэргэмийн Зэрэг:
              </span>
              <div className="font-royal text-[#FFF0CA] font-medium text-right">
                <EditableText
                  value={rank.currentHolder || 'Төрийн Дээд Зэрэг'}
                  onSave={(val) => updateCourtRank(rank.id, { currentHolder: val })}
                  label="Хэргэмийн зэрэг / Албан тушаал"
                  className="font-royal text-[#FFF0CA] font-medium text-xs"
                />
              </div>
            </div>
          </OrnateFrame>
        ))}
      </div>
    </section>
  );
};
