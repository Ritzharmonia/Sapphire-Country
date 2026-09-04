import React from 'react';
import { EditableText } from './EditableText';

interface SectionHeadingProps {
  number?: string;
  titleMongolian: string;
  titleEnglish?: string;
  subtitle?: string;
  onUpdateTitleMongolian?: (val: string) => void;
  onUpdateTitleEnglish?: (val: string) => void;
  onUpdateSubtitle?: (val: string) => void;
  className?: string;
  align?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  titleMongolian,
  titleEnglish,
  subtitle,
  onUpdateTitleMongolian,
  onUpdateTitleEnglish,
  onUpdateSubtitle,
  className = '',
  align = 'center'
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center' : 'text-left'} ${className}`}>
      {/* Royal Victorian Cartouche / Roman Number */}
      {number && (
        <div className="inline-flex items-center justify-center gap-2.5 mb-3">
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#CBD5E1]/70" />
          <span className="text-xs font-royal tracking-[0.28em] uppercase text-[#FFFFFF] px-3.5 py-0.5 border border-[#CBD5E1]/60 bg-gradient-to-b from-[#1F4E79]/70 via-[#142B4A]/90 to-[#0C1421] rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            ⚜ {number} ⚜
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#CBD5E1]/70" />
        </div>
      )}

      {/* Primary Mongolian Title with Imperial Cyrillic Display Font */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-royal tracking-[0.03em] text-[#FFFFFF] mb-2.5 drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]">
        {onUpdateTitleMongolian ? (
          <EditableText
            value={titleMongolian}
            onSave={onUpdateTitleMongolian}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-royal tracking-[0.03em] text-[#FFFFFF]"
          />
        ) : (
          titleMongolian
        )}
      </h2>

      {/* English Royal Subtitle in Elegant Cormorant Garamond */}
      <div className="text-xs sm:text-sm font-cormorant font-semibold italic tracking-[0.24em] uppercase text-[#E2E8F0]/90 mb-3">
        {onUpdateTitleEnglish ? (
          <EditableText
            value={titleEnglish}
            onSave={onUpdateTitleEnglish}
            className="text-xs sm:text-sm font-cormorant font-semibold italic tracking-[0.24em] uppercase text-[#E2E8F0]/90"
          />
        ) : (
          titleEnglish
        )}
      </div>

      {/* Symmetrical Victorian Heraldic Fleur-de-lis Divider */}
      <div className={`flex items-center gap-3 my-4 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#CBD5E1]/70 to-[#CBD5E1]" />
        <span className="text-[#CBD5E1] text-xs">❖</span>
        <span className="text-[#FFFFFF] text-base drop-shadow-[0_0_8px_rgba(226,232,240,0.7)]">⚜</span>
        <span className="text-[#CBD5E1] text-xs">❖</span>
        <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-[#CBD5E1]/70 to-[#CBD5E1]" />
      </div>

      {/* Subtitle / Description in Victorian Serif */}
      {subtitle && (
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D9DEE5]/85 leading-relaxed font-serif italic">
          {onUpdateSubtitle ? (
            <EditableText
              value={subtitle}
              onSave={onUpdateSubtitle}
              multiline
              className="text-sm sm:text-base text-[#D9DEE5]/85 leading-relaxed font-serif italic"
            />
          ) : (
            subtitle
          )}
        </p>
      )}
    </div>
  );
};
