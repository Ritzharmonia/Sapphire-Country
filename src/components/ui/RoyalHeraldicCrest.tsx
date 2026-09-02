import React from 'react';
import { UploadCloud, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';

interface RoyalHeraldicCrestProps {
  imageUrl: string;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  showChangeButton?: boolean;
}

export const RoyalHeraldicCrest: React.FC<RoyalHeraldicCrestProps> = ({
  imageUrl,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  size = 'lg',
  onClick,
  showChangeButton = true,
}) => {
  const { openModal, data, isEditMode } = useKingdom();

  const handleCrestClick = () => {
    if (!isEditMode) return; // Read-only for visitors!
    if (onClick) {
      onClick();
    } else {
      openModal('image', 'national-crest', {
        currentUrl: imageUrl || data.crest.imageUrl,
        scale: scale || data.crest.scale,
        offsetX: offsetX || data.crest.offsetX,
        offsetY: offsetY || data.crest.offsetY,
        title: 'УЛСЫН ТӨРИЙН СҮЛДНИЙ ЗУРАГ (NATIONAL CREST IMAGE)'
      });
    }
  };

  const dimensions = {
    sm: 'w-36 h-36 sm:w-44 sm:h-44',
    md: 'w-48 h-48 sm:w-56 sm:h-56',
    lg: 'w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72'
  }[size];

  const currentImg = imageUrl || data.crest.imageUrl;

  return (
    <div className="relative flex flex-col items-center justify-center my-3 group">
      
      {/* Soft Ambient Sapphire & Golden Radiant Halo in Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E79]/35 via-[#2A75D3]/20 to-transparent blur-3xl rounded-full scale-125 pointer-events-none -z-10" />

      {/* Pure & Clean Image Container */}
      <div
        onClick={handleCrestClick}
        className={`relative ${dimensions} transition-all duration-300 transform select-none flex items-center justify-center p-2 rounded-2xl ${
          isEditMode
            ? 'cursor-pointer hover:scale-[1.04] hover:ring-2 hover:ring-[#E8C87A]/60'
            : 'cursor-default'
        }`}
        title={isEditMode ? 'Зураг оруулах / Сүлд солих (Click to Upload / Change Crest Image)' : 'Улсын Төрийн Сүлд (National Crest)'}
      >
        
        {/* Subtle Backdrop Illumination for Crisp Contrast */}
        <div className="absolute inset-2 rounded-2xl bg-[#0C1421]/30 backdrop-blur-[1px] border border-[#C9A85C]/15 pointer-events-none transition-all group-hover:border-[#E8C87A]/30" />

        {/* Clean Unobstructed Crest Image */}
        {currentImg ? (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-10">
            <img
              src={currentImg}
              alt="National Crest"
              referrerPolicy="no-referrer"
              style={{
                transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`
              }}
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] transition-transform duration-200"
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-[#C9A85C]/40 rounded-2xl p-4 text-center z-10 bg-[#142B4A]/30">
            <ImageIcon className="w-12 h-12 text-[#C9A85C] mb-2" />
            <span className="text-xs font-royal text-[#FFF0CA]">Төрийн Сүлд</span>
          </div>
        )}

        {/* Interactive Hover Upload Overlay ONLY in Edit Mode */}
        {isEditMode && (
          <div className="absolute inset-0 z-20 rounded-2xl bg-[#0C1421]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center border border-[#E8C87A]">
            <div className="w-11 h-11 rounded-full bg-[#1F4E79] border border-[#E8C87A] flex items-center justify-center mb-2 shadow-lg">
              <UploadCloud className="w-6 h-6 text-[#E8C87A] animate-bounce" />
            </div>
            <span className="text-xs font-royal font-bold text-[#FFF0CA] tracking-wider">
              Зураг оруулах / Солих ✎
            </span>
            <span className="text-[10px] text-[#D9DEE5]/80 font-sans mt-0.5">
              (Файл хуулах эсвэл URL оруулах)
            </span>
          </div>
        )}

      </div>

      {/* Clear Change Image Button Below Crest ONLY in Edit Mode */}
      {isEditMode && showChangeButton && (
        <button
          type="button"
          onClick={handleCrestClick}
          className="mt-3 px-4 py-1.5 bg-gradient-to-r from-[#142B4A] via-[#1F4E79] to-[#142B4A] hover:from-[#1F4E79] hover:to-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C]/70 rounded-full font-royal text-[11px] tracking-widest uppercase flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.6)] transition-all hover:scale-105 hover:border-[#E8C87A] cursor-pointer"
        >
          <UploadCloud className="w-3.5 h-3.5 text-[#E8C87A]" />
          <span>Зураг оруулах / Сүлд солих ✎</span>
        </button>
      )}

    </div>
  );
};
