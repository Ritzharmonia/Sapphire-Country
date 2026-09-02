import React, { useState } from 'react';
import { 
  Scroll, 
  BookOpen, 
  Calendar, 
  Tag, 
  PlusCircle, 
  Trash2, 
  Sparkles, 
  ChevronRight, 
  Plus, 
  X 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { CustomSection, CustomSectionItem } from '../types';

export const RoyalChronicles: React.FC = () => {
  const { 
    data, 
    updateCustomSection, 
    addCustomSection, 
    deleteCustomSection, 
    isEditMode, 
    openModal 
  } = useKingdom();

  const handleAddItem = (sectionId: string) => {
    const section = data.customSections.find(s => s.id === sectionId);
    if (!section) return;
    const newItem: CustomSectionItem = {
      id: `item-${Date.now()}`,
      title: 'Шинэ Түүхэн Зарлиг / Үйл Явдал',
      subtitle: 'New Historical Entry Subtitle',
      content: 'Энэхүү зарлиг эсвэл түүхэн үйл явдлын дэлгэрэнгүй тайлбар энд бичигдэнэ.',
      tag: 'Decree',
      dateOrEra: 'Эрин Үе'
    };
    updateCustomSection(sectionId, { items: [...section.items, newItem] });
  };

  const handleUpdateItem = (sectionId: string, itemId: string, updated: Partial<CustomSectionItem>) => {
    const section = data.customSections.find(s => s.id === sectionId);
    if (!section) return;
    const newItems = section.items.map(item => item.id === itemId ? { ...item, ...updated } : item);
    updateCustomSection(sectionId, { items: newItems });
  };

  const handleDeleteItem = (sectionId: string, itemId: string) => {
    const section = data.customSections.find(s => s.id === sectionId);
    if (!section) return;
    const newItems = section.items.filter(item => item.id !== itemId);
    updateCustomSection(sectionId, { items: newItems });
  };

  return (
    <section id="chronicles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {data.customSections.map((section, sIdx) => (
        <div key={section.id} className="mb-16 last:mb-0">
          <SectionHeading
            number={`ARCHIVE VIII${sIdx > 0 ? `-${sIdx + 1}` : ''}`}
            titleMongolian={section.titleMongolian}
            titleEnglish={section.titleEnglish}
            subtitle={section.description}
            onUpdateTitleMongolian={(val) => updateCustomSection(section.id, { titleMongolian: val })}
            onUpdateTitleEnglish={(val) => updateCustomSection(section.id, { titleEnglish: val })}
            onUpdateSubtitle={(val) => updateCustomSection(section.id, { description: val })}
          />

          {/* Admin Controls */}
          {isEditMode && (
            <div className="mb-6 flex justify-between items-center gap-3">
              <span className="text-xs font-mono text-[#C9A85C]">
                Бүлэг: {section.titleMongolian} ({section.items.length} бичлэг)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleAddItem(section.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C] rounded text-xs font-royal"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C9A85C]" />
                  <span>+ Тэмдэглэл нэмэх (Add Entry)</span>
                </button>

                {data.customSections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`"${section.titleMongolian}" бүлгийг устгах уу?`)) {
                        deleteCustomSection(section.id);
                      }
                    }}
                    className="p-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 border border-red-500/40 rounded text-xs"
                    title="Бүлэг устгах"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Grid of chronicle / decree entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <OrnateFrame
                key={item.id}
                variant="gold"
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Bar: Tag & Date */}
                  <div className="flex items-center justify-between border-b border-[#C9A85C]/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#142B4A] border border-[#C9A85C]/30 text-[#E8C87A]">
                        <EditableText
                          value={item.tag || 'ARCHIVE'}
                          onSave={(val) => handleUpdateItem(section.id, item.id, { tag: val })}
                          label="Шошго"
                        />
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-serif text-[#D9DEE5]/60 italic">
                        <EditableText
                          value={item.dateOrEra || 'Ancient Era'}
                          onSave={(val) => handleUpdateItem(section.id, item.id, { dateOrEra: val })}
                          label="Огноо / Эрин"
                        />
                      </span>
                      {isEditMode && (
                        <button
                          type="button"
                          onClick={() => handleDeleteItem(section.id, item.id)}
                          className="p-1 hover:bg-red-950 text-red-400 hover:text-red-200 rounded"
                          title="Устгах"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <h4 className="text-base sm:text-lg font-royal font-bold text-[#FFF0CA] mb-1">
                      <EditableText
                        value={item.title}
                        onSave={(val) => handleUpdateItem(section.id, item.id, { title: val })}
                        label="Гарчиг"
                        className="text-base sm:text-lg font-royal font-bold text-[#FFF0CA]"
                      />
                    </h4>
                    {item.subtitle && (
                      <div className="text-xs font-serif italic text-[#D9DEE5]/75">
                        <EditableText
                          value={item.subtitle}
                          onSave={(val) => handleUpdateItem(section.id, item.id, { subtitle: val })}
                          label="Дэд гарчиг"
                          className="text-xs font-serif italic text-[#D9DEE5]/75"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 bg-[#0C1421]/60 rounded border border-[#1F4E79]/30 text-xs text-[#D9DEE5]/80 leading-relaxed font-sans mb-4">
                    <EditableText
                      value={item.content}
                      onSave={(val) => handleUpdateItem(section.id, item.id, { content: val })}
                      multiline
                      label="Агуулга"
                      className="text-xs text-[#D9DEE5]/80 leading-relaxed font-sans"
                    />
                  </div>
                </div>

                {/* Footer Decor */}
                <div className="pt-2 border-t border-[#C9A85C]/20 flex items-center justify-between text-[10px] text-[#C9A85C] font-mono">
                  <span>IMPERIAL CHRONICLE</span>
                  <span>❖ ❖</span>
                </div>
              </OrnateFrame>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
