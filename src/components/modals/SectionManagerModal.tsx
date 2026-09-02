import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Layers, 
  Trash2, 
  Eye, 
  EyeOff, 
  Check 
} from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';
import { OrnateFrame } from '../ui/OrnateFrame';
import { CustomSection } from '../../types';

export const SectionManagerModal: React.FC = () => {
  const { activeModal, closeModal, data, addCustomSection, deleteCustomSection, updateCustomSection } = useKingdom();
  
  const [titleMongolian, setTitleMongolian] = useState('');
  const [titleEnglish, setTitleEnglish] = useState('');
  const [description, setDescription] = useState('');

  if (activeModal.type !== 'section' && activeModal.type !== 'section_manager') return null;

  const handleCreateSection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleMongolian.trim()) return;

    const newSec: CustomSection = {
      id: `custom-sec-${Date.now()}`,
      titleMongolian: titleMongolian.trim(),
      titleEnglish: titleEnglish.trim() || 'Custom Realm Archive',
      description: description.trim() || 'Саффир улсын нэмэлт түүх, хууль тогтоомж, соёлын тэмдэглэл.',
      sectionType: 'chronicle',
      isVisible: true,
      items: [
        {
          id: `item-${Date.now()}`,
          title: 'Шинэ бичвэрийн гарчиг',
          subtitle: 'Subtitle',
          content: 'Энэхүү бүлгийн эхний тэмдэглэл, зарлигийн тайлбар.',
          tag: 'Official',
          dateOrEra: 'Эрин Үе'
        }
      ]
    };

    addCustomSection(newSec);
    setTitleMongolian('');
    setTitleEnglish('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl">
        <OrnateFrame variant="gold" glow padding="p-6 sm:p-8" className="max-h-[90vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#C9A85C]/30 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[#C9A85C]" />
              <h3 className="font-royal text-lg font-bold text-[#FFF0CA]">
                БҮЛЭГ & СЕКШН УДИРДЛАГА (MANAGE SECTIONS)
              </h3>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="p-1 text-[#D9DEE5]/60 hover:text-[#FFF0CA] rounded-full hover:bg-[#142B4A]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 text-xs">
            
            {/* Create New Section Form */}
            <form onSubmit={handleCreateSection} className="p-4 rounded-lg bg-[#0C1421]/90 border border-[#C9A85C]/40 space-y-3">
              <span className="font-royal text-sm font-bold text-[#FFF0CA] block">
                + Шинэ Бүлэг Нэмэх (Add Custom Section)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-serif text-[#C9A85C] mb-1">
                    Бүлгийн Монгол Нэршил:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Жнь: ХААНЫ ЗАРЛИГ, СОЁЛЫН ӨВ"
                    value={titleMongolian}
                    onChange={(e) => setTitleMongolian(e.target.value)}
                    className="w-full bg-[#142B4A]/50 text-[#FFF0CA] border border-[#C9A85C]/40 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C9A85C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-serif text-[#C9A85C] mb-1">
                    English Title:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IMPERIAL DECREES & LAWS"
                    value={titleEnglish}
                    onChange={(e) => setTitleEnglish(e.target.value)}
                    className="w-full bg-[#142B4A]/50 text-[#FFF0CA] border border-[#C9A85C]/40 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C9A85C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-serif text-[#C9A85C] mb-1">
                  Тайлбар / Дэд өгүүлбэр:
                </label>
                <input
                  type="text"
                  placeholder="Бүлгийн товч тайлбар"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#142B4A]/50 text-[#FFF0CA] border border-[#C9A85C]/40 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C9A85C]"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C9A85C] hover:bg-[#E8C87A] text-[#0C1421] font-bold font-royal rounded flex items-center gap-1.5 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Бүлэг Үүсгэх (Create)</span>
                </button>
              </div>
            </form>

            {/* List of current custom sections */}
            <div>
              <span className="font-royal text-sm font-bold text-[#FFF0CA] block mb-3">
                Одоо байгаа бүлгүүд ({data.customSections.length}):
              </span>

              <div className="space-y-2">
                {data.customSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="flex items-center justify-between p-3 bg-[#142B4A]/30 border border-[#1F4E79]/40 rounded"
                  >
                    <div>
                      <div className="font-royal font-bold text-[#FFF0CA]">{sec.titleMongolian}</div>
                      <div className="text-xs text-[#D9DEE5]/60 font-serif italic">{sec.titleEnglish}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`"${sec.titleMongolian}" бүлгийг устгах уу?`)) {
                          deleteCustomSection(sec.id);
                        }
                      }}
                      className="p-1.5 text-red-400 hover:text-red-200 hover:bg-red-950 rounded transition-colors"
                      title="Устгах"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-[#C9A85C]/30 flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-[#142B4A] text-[#D9DEE5] rounded text-xs font-royal border border-[#C9A85C]/30"
            >
              Болсон (Done)
            </button>
          </div>

        </OrnateFrame>
      </div>
    </div>
  );
};
