import React from 'react';
import { 
  Landmark, 
  Crown, 
  Sparkles, 
  Shield, 
  Gem, 
  BookOpen, 
  Flag, 
  Scroll,
  Award
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { EditableText } from './ui/EditableText';
import { DEFAULT_MONARCH_IMAGE } from '../initialData';

export const CountryOverview: React.FC = () => {
  const { data, updateField, openModal, isEditMode } = useKingdom();
  const { overview } = data;

  const handleMonarchClick = () => {
    if (!isEditMode) return;
    openModal('image', 'monarch-portrait', {
      currentUrl: overview.monarchImage || DEFAULT_MONARCH_IMAGE,
      scale: overview.monarchScale || 1,
      offsetX: overview.monarchOffsetX || 0,
      offsetY: overview.monarchOffsetY || 0,
      title: 'ХАТАН ХААНЫ ХӨРӨГ ЗУРАГ (ROYAL MONARCH PORTRAIT)'
    });
  };

  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE I"
        titleMongolian="ТӨРИЙН ЕРӨНХИЙ ТОЙМ"
        titleEnglish="COUNTRY OF SAPPHIRE"
        subtitle="Саффир улсын төрийн байгууламж, албан ёсны нэршил, харьяалал, төрийн тэргүүн болон дээд бэлгэдлийн албан ёсны архив."
      />

      {/* Grand Sovereign Monarch Feature Card with Locked Royal Portrait */}
      <div className="mb-10">
        <OrnateFrame variant="platinum" glow padding="p-6 sm:p-8" className="bg-gradient-to-r from-[#0C1421] via-[#142B4A]/80 to-[#0C1421]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Royal Queen / Monarch Portrait in Luxurious Oval (Зууван) Imperial Medallion Frame */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
              <div 
                onClick={handleMonarchClick}
                className={`relative w-56 h-72 sm:w-64 sm:h-80 md:w-68 md:h-84 rounded-[50%] select-none transition-all duration-300 ${
                  isEditMode ? 'cursor-pointer hover:scale-[1.02] group' : 'cursor-default'
                }`}
                title={isEditMode ? 'Хатан хааны хөрөг зураг солих (Click to Change Monarch Portrait)' : 'Эрхэм Дээдэс Хатан Хааны Хөрөг'}
              >
                {/* Outer Platinum Oval Ring with Deep Imperial Shadow */}
                <div className="absolute inset-0 rounded-[50%] border-2 border-[#CBD5E1]/85 shadow-[0_16px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(203,213,225,0.22)] bg-gradient-to-b from-[#142B4A]/60 via-[#0C1421] to-[#142B4A]/60 pointer-events-none transition-all group-hover:border-[#FFFFFF]" />

                {/* Inner Delicate Concentric Oval Hairline */}
                <div className="absolute inset-2 sm:inset-2.5 rounded-[50%] border border-[#CBD5E1]/40 pointer-events-none z-20" />

                {/* Imperial Crown Topper mounted at top apex of the Oval */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 px-3 py-0.5 rounded-full bg-[#0C1421] border border-[#CBD5E1] shadow-[0_2px_12px_rgba(0,0,0,0.9)] flex items-center gap-1.5 text-[#E2E8F0]">
                  <Crown className="w-3.5 h-3.5 text-[#E2E8F0]" />
                  <span className="text-[10px] font-royal tracking-widest uppercase font-bold text-[#FFFFFF]">
                    MONARCH
                  </span>
                </div>

                {/* Bottom Heraldic Finial Ornament */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-30 px-2.5 py-0.5 rounded-full bg-[#0C1421] border border-[#CBD5E1]/70 shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-[#CBD5E1] text-[10px] font-serif flex items-center gap-1">
                  <span>⚜</span>
                  <span className="text-[9px] font-mono tracking-widest text-[#FFFFFF]">SAPPHIRE</span>
                  <span>⚜</span>
                </div>

                {/* Monarch Portrait Image - Preserved crisp inside the Oval Medallion */}
                <div className="relative w-full h-full rounded-[50%] overflow-hidden bg-[#0C1421] flex items-center justify-center z-10">
                  <img
                    src={overview.monarchImage || DEFAULT_MONARCH_IMAGE}
                    alt="Monarch"
                    referrerPolicy="no-referrer"
                    style={{
                      transform: `scale(${overview.monarchScale || 1}) translate(${overview.monarchOffsetX || 0}px, ${overview.monarchOffsetY || 0}px)`
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
                  />

                  {/* Soft Perimeter Vignette Matching Royal Dark Canvas */}
                  <div className="absolute inset-0 pointer-events-none z-10 rounded-[50%] shadow-[inset_0_0_24px_rgba(12,20,33,0.85)] border border-[#CBD5E1]/20" />
                </div>

                {/* Interactive Hover Overlay in Edit Mode */}
                {isEditMode && (
                  <div className="absolute inset-0 z-30 rounded-[50%] bg-[#0C1421]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center border-2 border-[#CBD5E1]">
                    <div className="w-10 h-10 rounded-full bg-[#1F4E79] border border-[#CBD5E1] flex items-center justify-center mb-1.5 shadow-lg">
                      <Crown className="w-5 h-5 text-[#CBD5E1]" />
                    </div>
                    <span className="text-xs font-royal font-bold text-[#FFFFFF] tracking-wider">
                      Хөрөг зураг солих ✎
                    </span>
                    <span className="text-[9px] text-[#D9DEE5]/80 font-sans mt-0.5">
                      (Файл хуулах эсвэл URL оруулах)
                    </span>
                  </div>
                )}
              </div>

              {/* Edit Mode Button Below Portrait */}
              {isEditMode && (
                <button
                  type="button"
                  onClick={handleMonarchClick}
                  className="mt-3.5 px-4 py-1.5 bg-gradient-to-r from-[#142B4A] via-[#1B385D] to-[#142B4A] hover:from-[#1B385D] hover:to-[#224A7A] text-[#FFFFFF] border border-[#CBD5E1]/70 rounded-full font-royal text-[11px] tracking-widest uppercase flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.6)] transition-all hover:scale-105 hover:border-[#FFFFFF] cursor-pointer"
                >
                  <Crown className="w-3.5 h-3.5 text-[#CBD5E1]" />
                  <span>Хатан хааны хөрөг солих ✎</span>
                </button>
              )}
            </div>

            {/* Right: Royal Monarch Information & Reign Dossier */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-4">
              
              {/* Monarch Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#0C1421] border border-[#CBD5E1]/60 shadow">
                <Crown className="w-4 h-4 text-[#E2E8F0]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] font-bold">
                  MONARCH · ТӨРИЙН ТЭРГҮҮН
                </span>
              </div>

              {/* Monarch Full Name */}
              <div>
                <span className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1] block mb-1">
                  Төрийн Тэргүүний Нэршил / Хаан Хэргэм:
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-royal font-bold text-[#FFFFFF] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {overview.monarch || 'Эрхэм Дээдэс Хаан / Хатан'}
                </h3>
              </div>

              {/* Monarch Official Reign Title */}
              <div className="text-xs sm:text-sm font-serif uppercase tracking-[0.2em] text-[#D9DEE5]/90 font-medium">
                {overview.monarchTitle || 'ТӨРИЙН ТЭРГҮҮН, ХААН ШИРЭЭНИЙ ЭЗЭН'}
              </div>

              {/* Imperial Proclamation / Quote */}
              <div className="p-4 rounded-xl bg-[#0C1421]/70 border border-[#CBD5E1]/30 relative text-xs sm:text-sm text-[#D9DEE5]/90 font-serif italic leading-relaxed">
                <span className="text-[#CBD5E1] text-lg font-royal mr-1">“</span>
                {overview.monarchQuote || 'Индранил эрдэнийн мөнхийн гэрэл дор эзэнт гүрний нэр хүнд, төрийн эрх үеэс үед өвлөгдөнө.'}
                <span className="text-[#CBD5E1] text-lg font-royal ml-1">”</span>
              </div>

              {/* Quick Status Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-2.5 py-1 rounded bg-[#142B4A]/60 text-[#CBD5E1] border border-[#CBD5E1]/30 font-mono">
                  ✦ Саффирын Хаан Ширээ
                </span>
                <span className="px-2.5 py-1 rounded bg-[#142B4A]/60 text-[#D9DEE5] border border-[#CBD5E1]/30 font-mono">
                  ✦ Тусгаар Тогтнолын Батлан Даагч
                </span>
              </div>

            </div>

          </div>
        </OrnateFrame>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Official Imperial Dossier (The Core Fields) */}
        <div className="lg:col-span-7 flex flex-col">
          <OrnateFrame variant="platinum" glow className="h-full flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#CBD5E1]/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#CBD5E1]" />
                  <span className="font-royal text-sm uppercase tracking-widest text-[#FFFFFF] font-bold">
                    ТӨРИЙН ДЭЭД МЭДЭЭЛЭЛ / STATE DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#CBD5E1] px-2 py-0.5 border border-[#CBD5E1]/30 bg-[#142B4A]/50">
                  CONFIDENTIAL ARCHIVE
                </span>
              </div>

              {/* Core Properties List */}
              <div className="space-y-4 sm:space-y-5">
                
                {/* 1. Албан ёсны нэр */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#CBD5E1]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#CBD5E1]/40 flex items-center justify-center shrink-0">
                      <Flag className="w-4 h-4 text-[#CBD5E1]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1]">Албан ёсны нэр (Official Name)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFFFFF]">
                        <EditableText
                          value={overview.officialNameMongolian}
                          onSave={(val) => updateField('overview.officialNameMongolian', val)}
                          label="Албан ёсны нэр"
                          className="font-royal font-bold text-[#FFFFFF]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#D9DEE5]/60 font-mono sm:text-right pl-11 sm:pl-0">
                    Үндэсний нэршил
                  </div>
                </div>

                {/* 2. Англи нэр */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#CBD5E1]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#CBD5E1]/40 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-[#CBD5E1]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1]">Англи нэр (English Name)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#D9DEE5]">
                        <EditableText
                          value={overview.officialNameEnglish}
                          onSave={(val) => updateField('overview.officialNameEnglish', val)}
                          label="Англи нэр"
                          className="font-royal font-bold text-[#D9DEE5]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#D9DEE5]/60 font-mono sm:text-right pl-11 sm:pl-0">
                    International Title
                  </div>
                </div>

                {/* 3. Харьяалал */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#CBD5E1]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#CBD5E1]/40 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-[#CBD5E1]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1]">Харьяалал (Jurisdiction / Group)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFFFFF]">
                        <EditableText
                          value={overview.jurisdiction}
                          onSave={(val) => updateField('overview.jurisdiction', val)}
                          label="Харьяалал"
                          className="font-royal font-bold text-[#FFFFFF]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#D9DEE5]/60 font-mono sm:text-right pl-11 sm:pl-0">
                    Imperial Jurisdiction
                  </div>
                </div>

                {/* 4. Төрийн тэргүүн / Monarch Fast-Link */}
                <div className="p-3.5 sm:p-4 rounded bg-gradient-to-r from-[#142B4A]/60 via-[#1F4E79]/40 to-[#142B4A]/60 border border-[#CBD5E1]/60 hover:border-[#FFFFFF] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#CBD5E1] flex items-center justify-center shrink-0 shadow-lg">
                      <Crown className="w-4 h-4 text-[#E2E8F0]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#E2E8F0] font-bold">Төрийн тэргүүн / Monarch</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFFFFF]">
                        {overview.monarch || 'Эрхэм Дээдэс Хаан / Хатан'}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono uppercase text-[#E2E8F0]/80 pl-11 sm:pl-0 font-semibold tracking-wider">
                    Monarch
                  </div>
                </div>

                {/* 5. Төрийн бэлгэдэл */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#CBD5E1]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#CBD5E1]/40 flex items-center justify-center shrink-0">
                      <Gem className="w-4 h-4 text-[#5B8AC4]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1]">Төрийн бэлгэдэл (State Symbol)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFFFFF] flex items-center gap-2">
                        <EditableText
                          value={overview.stateSymbolMongolian}
                          onSave={(val) => updateField('overview.stateSymbolMongolian', val)}
                          label="Төрийн бэлгэдэл (Монгол)"
                          className="font-royal font-bold text-[#FFFFFF]"
                        />
                        <span className="text-[#CBD5E1]">/</span>
                        <EditableText
                          value={overview.stateSymbolEnglish}
                          onSave={(val) => updateField('overview.stateSymbolEnglish', val)}
                          label="State Symbol (English)"
                          className="text-[#D9DEE5] font-serif text-sm italic"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#5B8AC4] font-mono sm:text-right pl-11 sm:pl-0 font-bold">
                    Sapphire Gemstone
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Imperial Seal Footnote */}
            <div className="mt-8 pt-4 border-t border-[#CBD5E1]/20 flex items-center justify-between text-xs text-[#D9DEE5]/60 font-serif">
              <span>Эзэн Хааны Тамгын Газар</span>
              <span className="text-[#CBD5E1] font-mono">SEAL № 001-SFZ</span>
            </div>
          </OrnateFrame>
        </div>

        {/* Right Column: Capital, Anthem, Motto & Crest Lore */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Capital & Era Card */}
          <OrnateFrame variant="sapphire" padding="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#CBD5E1]" />
              <h3 className="font-royal text-sm uppercase tracking-widest text-[#FFFFFF] font-bold">
                НИЙСЛЭЛ & ЭРИН ҮЕ
              </h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-[#CBD5E1] uppercase font-serif block">Төв Нийслэл Хот:</span>
                <div className="font-royal text-base text-[#FFFFFF]">
                  <EditableText
                    value={overview.capitalCity || 'Селестин (Celestine Capital)'}
                    onSave={(val) => updateField('overview.capitalCity', val)}
                  />
                </div>
              </div>
              <div>
                <span className="text-xs text-[#CBD5E1] uppercase font-serif block">Үүсгэн байгуулагдсан эрин:</span>
                <div className="font-serif italic text-[#D9DEE5]/90">
                  <EditableText
                    value={overview.foundingEra || 'Саффир улс'}
                    onSave={(val) => updateField('overview.foundingEra', val)}
                  />
                </div>
              </div>
            </div>
          </OrnateFrame>

          {/* National Anthem & Crest Lore */}
          <OrnateFrame variant="platinum" padding="p-6" className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-[#CBD5E1]" />
                <h3 className="font-royal text-sm uppercase tracking-widest text-[#FFFFFF] font-bold">
                  СҮЛД ДУУЛАЛ & ТӨРИЙН СҮЛД
                </h3>
              </div>
              <div className="mb-4">
                <span className="text-xs text-[#CBD5E1] uppercase font-serif block">Төрийн сүлд дуулал:</span>
                <div className="font-royal text-sm font-bold text-[#FFFFFF] mb-2">
                  <EditableText
                    value={overview.nationalAnthemTitle || 'Индранил Титмийн Сүлд Дуулал'}
                    onSave={(val) => updateField('overview.nationalAnthemTitle', val)}
                  />
                </div>
                <div className="p-3 bg-[#0C1421]/80 rounded border border-[#CBD5E1]/20 text-xs italic text-[#D9DEE5]/80 font-serif leading-relaxed">
                  "
                  <EditableText
                    value={overview.nationalAnthemExcerpt || 'Мөнхийн цэнхэр гэрэл дор эзэнт гүрэн мандан бадарч, язгууртны алдар нэр үеийн үед цуурайтна.'}
                    onSave={(val) => updateField('overview.nationalAnthemExcerpt', val)}
                    multiline
                  />
                  "
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <span className="text-xs text-[#CBD5E1] uppercase font-serif block">Төрийн сүлдний тайлбар:</span>
                </div>
                <p className="text-xs text-[#D9DEE5]/75 font-sans leading-relaxed">
                  <EditableText
                    value={overview.crestDescription || 'Хааны сүлд нь төрийн тусгаар тогтнол, дээд язгуур, индранил эрдэнийн мөнхийн бат бэх чанарыг бэлгэдэнэ.'}
                    onSave={(val) => updateField('overview.crestDescription', val)}
                    multiline
                  />
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-[#CBD5E1]/20 flex items-center justify-between text-[11px] text-[#CBD5E1]">
              <span>ТӨРИЙН ХАЛДАШГҮЙ ДАРХАН БАЙДАЛ</span>
              <span>⚜ ⚜ ⚜</span>
            </div>
          </OrnateFrame>

        </div>

      </div>
    </section>
  );
};
