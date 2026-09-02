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
  const { data, updateField } = useKingdom();
  const { overview } = data;

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
        <OrnateFrame variant="gold" glow padding="p-6 sm:p-8" className="bg-gradient-to-r from-[#0C1421] via-[#142B4A]/80 to-[#0C1421]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Royal Monarch Portrait Frame - Officially Locked */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
              <div 
                className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1F4E79] to-[#0C1421] border-2 border-[#C9A85C] shadow-[0_0_40px_rgba(31,78,121,0.6)] cursor-default"
              >
                {/* Filigree Corner Accents */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#C9A85C] z-10" />
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#C9A85C] z-10" />
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#C9A85C] z-10" />
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#C9A85C] z-10" />

                {/* Monarch Portrait Image */}
                <img
                  src={overview.monarchImage || DEFAULT_MONARCH_IMAGE}
                  alt="Reigning Sovereign Monarch"
                  referrerPolicy="no-referrer"
                  style={{
                    transform: `scale(${overview.monarchScale || 1}) translate(${overview.monarchOffsetX || 0}px, ${overview.monarchOffsetY || 0}px)`
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
                />
              </div>
            </div>

            {/* Right: Royal Monarch Information & Reign Dossier */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-4">
              
              {/* Sovereign Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#0C1421] border border-[#C9A85C]/60 shadow">
                <Crown className="w-4 h-4 text-[#E8C87A]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8C87A] font-bold">
                  REIGNING SOVEREIGN · ТӨРИЙН ДЭЭД ЭЗЭН
                </span>
              </div>

              {/* Monarch Full Name (Refined slightly smaller font size) */}
              <div>
                <span className="text-xs uppercase font-serif tracking-wider text-[#C9A85C] block mb-1">
                  Төрийн Тэргүүний Нэршил / Хаан Хэргэм:
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-royal font-bold text-[#FFF0CA] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {overview.monarch || 'Эрхэм Дээдэс Хаан / Хатан'}
                </h3>
              </div>

              {/* Monarch Official Reign Title */}
              <div className="text-xs sm:text-sm font-serif uppercase tracking-[0.2em] text-[#D9DEE5]/90 font-medium">
                {overview.monarchTitle || 'ТӨРИЙН ТЭРГҮҮН, ХААН ШИРЭЭНИЙ ЭЗЭН'}
              </div>

              {/* Imperial Proclamation / Quote */}
              <div className="p-4 rounded-xl bg-[#0C1421]/70 border border-[#C9A85C]/30 relative text-xs sm:text-sm text-[#D9DEE5]/90 font-serif italic leading-relaxed">
                <span className="text-[#C9A85C] text-lg font-royal mr-1">“</span>
                {overview.monarchQuote || 'Индранил эрдэнийн мөнхийн гэрэл дор эзэнт гүрний нэр хүнд, төрийн эрх үеэс үед өвлөгдөнө.'}
                <span className="text-[#C9A85C] text-lg font-royal ml-1">”</span>
              </div>

              {/* Quick Status Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-2.5 py-1 rounded bg-[#142B4A]/60 text-[#C9A85C] border border-[#C9A85C]/30 font-mono">
                  ✦ Саффирын Хаан Ширээ
                </span>
                <span className="px-2.5 py-1 rounded bg-[#142B4A]/60 text-[#D9DEE5] border border-[#C9A85C]/30 font-mono">
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
          <OrnateFrame variant="gold" glow className="h-full flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#C9A85C]/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#C9A85C]" />
                  <span className="font-royal text-sm uppercase tracking-widest text-[#FFF0CA] font-bold">
                    ТӨРИЙН ДЭЭД МЭДЭЭЛЭЛ / STATE DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A85C] px-2 py-0.5 border border-[#C9A85C]/30 bg-[#142B4A]/50">
                  CONFIDENTIAL ARCHIVE
                </span>
              </div>

              {/* Core Properties List */}
              <div className="space-y-4 sm:space-y-5">
                
                {/* 1. Албан ёсны нэр */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#C9A85C]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#C9A85C]/40 flex items-center justify-center shrink-0">
                      <Flag className="w-4 h-4 text-[#C9A85C]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#C9A85C]">Албан ёсны нэр (Official Name)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFF0CA]">
                        <EditableText
                          value={overview.officialNameMongolian}
                          onSave={(val) => updateField('overview.officialNameMongolian', val)}
                          label="Албан ёсны нэр"
                          className="font-royal font-bold text-[#FFF0CA]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#D9DEE5]/60 font-mono sm:text-right pl-11 sm:pl-0">
                    Үндэсний нэршил
                  </div>
                </div>

                {/* 2. Англи нэр */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#C9A85C]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#C9A85C]/40 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-[#C9A85C]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#C9A85C]">Англи нэр (English Name)</div>
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
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#C9A85C]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#C9A85C]/40 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-[#C9A85C]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#C9A85C]">Харьяалал (Jurisdiction / Group)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFF0CA]">
                        <EditableText
                          value={overview.jurisdiction}
                          onSave={(val) => updateField('overview.jurisdiction', val)}
                          label="Харьяалал"
                          className="font-royal font-bold text-[#FFF0CA]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#D9DEE5]/60 font-mono sm:text-right pl-11 sm:pl-0">
                    Imperial Jurisdiction
                  </div>
                </div>

                {/* 4. Төрийн тэргүүн / Monarch Fast-Link */}
                <div className="p-3.5 sm:p-4 rounded bg-gradient-to-r from-[#142B4A]/60 via-[#1F4E79]/40 to-[#142B4A]/60 border border-[#C9A85C]/60 hover:border-[#E8C87A] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#C9A85C] flex items-center justify-center shrink-0 shadow-lg">
                      <Crown className="w-4 h-4 text-[#E8C87A]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#E8C87A] font-bold">Төрийн тэргүүн / Monarch</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFF0CA]">
                        {overview.monarch || 'Эрхэм Дээдэс Хаан / Хатан'}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono uppercase text-[#E8C87A]/80 pl-11 sm:pl-0">
                    Reigning Sovereign
                  </div>
                </div>

                {/* 5. Төрийн бэлгэдэл */}
                <div className="p-3.5 sm:p-4 rounded bg-[#142B4A]/30 border border-[#1F4E79]/50 hover:border-[#C9A85C]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0C1421] border border-[#C9A85C]/40 flex items-center justify-center shrink-0">
                      <Gem className="w-4 h-4 text-[#2A75D3]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-serif tracking-wider text-[#C9A85C]">Төрийн бэлгэдэл (State Symbol)</div>
                      <div className="text-base sm:text-lg font-royal font-bold text-[#FFF0CA] flex items-center gap-2">
                        <EditableText
                          value={overview.stateSymbolMongolian}
                          onSave={(val) => updateField('overview.stateSymbolMongolian', val)}
                          label="Төрийн бэлгэдэл (Монгол)"
                          className="font-royal font-bold text-[#FFF0CA]"
                        />
                        <span className="text-[#C9A85C]">/</span>
                        <EditableText
                          value={overview.stateSymbolEnglish}
                          onSave={(val) => updateField('overview.stateSymbolEnglish', val)}
                          label="State Symbol (English)"
                          className="text-[#D9DEE5] font-serif text-sm italic"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#2A75D3] font-mono sm:text-right pl-11 sm:pl-0 font-bold">
                    Sapphire Gemstone
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Imperial Seal Footnote */}
            <div className="mt-8 pt-4 border-t border-[#C9A85C]/20 flex items-center justify-between text-xs text-[#D9DEE5]/60 font-serif">
              <span>Эзэн Хааны Тамгын Газар</span>
              <span className="text-[#C9A85C] font-mono">SEAL № 001-SFZ</span>
            </div>
          </OrnateFrame>
        </div>

        {/* Right Column: Capital, Anthem, Motto & Crest Lore */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Capital & Era Card */}
          <OrnateFrame variant="sapphire" padding="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#C9A85C]" />
              <h3 className="font-royal text-sm uppercase tracking-widest text-[#FFF0CA] font-bold">
                НИЙСЛЭЛ & ЭРИН ҮЕ
              </h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-[#C9A85C] uppercase font-serif block">Төв Нийслэл Хот:</span>
                <div className="font-royal text-base text-[#FFF0CA]">
                  <EditableText
                    value={overview.capitalCity || 'Селестин (Celestine Capital)'}
                    onSave={(val) => updateField('overview.capitalCity', val)}
                  />
                </div>
              </div>
              <div>
                <span className="text-xs text-[#C9A85C] uppercase font-serif block">Үүсгэн байгуулагдсан эрин:</span>
                <div className="font-serif italic text-[#D9DEE5]/90">
                  <EditableText
                    value={overview.foundingEra || 'Эртний Саффирын Эрин Үе (Imperial Ancient Era)'}
                    onSave={(val) => updateField('overview.foundingEra', val)}
                  />
                </div>
              </div>
            </div>
          </OrnateFrame>

          {/* National Anthem & Crest Lore */}
          <OrnateFrame variant="gold" padding="p-6" className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-[#C9A85C]" />
                <h3 className="font-royal text-sm uppercase tracking-widest text-[#FFF0CA] font-bold">
                  СҮЛД ДУУЛАЛ & ТӨРИЙН СҮЛД
                </h3>
              </div>
              <div className="mb-4">
                <span className="text-xs text-[#C9A85C] uppercase font-serif block">Төрийн сүлд дуулал:</span>
                <div className="font-royal text-sm font-bold text-[#FFF0CA] mb-2">
                  <EditableText
                    value={overview.nationalAnthemTitle || 'Индранил Титмийн Сүлд Дуулал'}
                    onSave={(val) => updateField('overview.nationalAnthemTitle', val)}
                  />
                </div>
                <div className="p-3 bg-[#0C1421]/80 rounded border border-[#C9A85C]/20 text-xs italic text-[#D9DEE5]/80 font-serif leading-relaxed">
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
                  <span className="text-xs text-[#C9A85C] uppercase font-serif block">Төрийн сүлдний тайлбар:</span>
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
            
            <div className="mt-4 pt-3 border-t border-[#C9A85C]/20 flex items-center justify-between text-[11px] text-[#C9A85C]">
              <span>ТӨРИЙН ХАЛДАШГҮЙ ДАРХАН БАЙДАЛ</span>
              <span>❖ ❖ ❖</span>
            </div>
          </OrnateFrame>

        </div>

      </div>
    </section>
  );
};
