import React from 'react';
import { EditableText } from './EditableText';

interface SectionHeadingProps {
  number?: string;
  titleMongolian: string;
  titleEnglish: string;
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
      {/* Royal Tag / Roman Number */}
      {number && (
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#C9A85C]/50" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C9A85C] px-2 py-0.5 border border-[#C9A85C]/30 bg-[#142B4A]/40">
            {number}
          </span>
          <span className="w-6 h-[1px] bg-[#C9A85C]/50" />
        </div>
      )}

      {/* Primary Mongolian Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-royal tracking-wide text-[#FFF0CA] mb-2 drop-shadow">
        {onUpdateTitleMongolian ? (
          <EditableText
            value={titleMongolian}
            onSave={onUpdateTitleMongolian}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-royal tracking-wide text-[#FFF0CA]"
          />
        ) : (
          titleMongolian
        )}
      </h2>

      {/* English Royal Title */}
      <div className="text-sm sm:text-base font-serif italic tracking-widest uppercase text-[#D9DEE5]/80 mb-3">
        {onUpdateTitleEnglish ? (
          <EditableText
            value={titleEnglish}
            onSave={onUpdateTitleEnglish}
            className="text-sm sm:text-base font-serif italic tracking-widest uppercase text-[#D9DEE5]/80"
          />
        ) : (
          titleEnglish
        )}
      </div>

      {/* Symmetrical Heraldic Divider */}
      <div className={`flex items-center gap-3 my-4 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C9A85C]/60 to-[#C9A85C]" />
        <span className="text-[#C9A85C] text-xs">❖</span>
        <div className="w-2 h-2 rotate-45 border border-[#C9A85C] bg-[#1F4E79]" />
        <span className="text-[#C9A85C] text-xs">❖</span>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C9A85C]/60 to-[#C9A85C]" />
      </div>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D9DEE5]/75 leading-relaxed font-sans">
          {onUpdateSubtitle ? (
            <EditableText
              value={subtitle}
              onSave={onUpdateSubtitle}
              multiline
              className="text-sm sm:text-base text-[#D9DEE5]/75 leading-relaxed font-sans"
            />
          ) : (
            subtitle
          )}
        </p>
      )}
    </div>
  );
};
