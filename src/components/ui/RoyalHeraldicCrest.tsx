import React from 'react';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';
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

  // Majestic vertical oval (зууван) dimensions
  const dimensions = {
    sm: 'w-36 h-44 sm:w-40 sm:h-48',
    md: 'w-48 h-58 sm:w-52 sm:h-64',
    lg: 'w-56 h-68 sm:w-64 sm:h-76 md:w-72 md:h-84'
  }[size];

  const currentImg = imageUrl || data.crest.imageUrl;

  return (
    <div className="relative flex flex-col items-center justify-center my-4 group">
      
      {/* Soft Ambient Radiant Platinum Atmosphere in Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(226,232,240,0.14)_0%,_rgba(20,43,74,0.18)_45%,_transparent_75%)] blur-2xl rounded-[50%] scale-110 pointer-events-none -z-10" />

      {/* Exquisite Oval (Зууван) Imperial Medallion Frame */}
      <div
        onClick={handleCrestClick}
        className={`relative ${dimensions} transition-all duration-300 transform select-none flex items-center justify-center rounded-[50%] ${
          isEditMode
            ? 'cursor-pointer hover:scale-[1.03] hover:ring-2 hover:ring-[#CBD5E1]/70'
            : 'cursor-default'
        }`}
        title={isEditMode ? 'Зураг оруулах / Сүлд солих (Click to Upload / Change Crest Image)' : 'Улсын Төрийн Сүлд (National Crest)'}
      >
        {/* Outer Oval Platinum Frame Border */}
        <div className="absolute inset-0 rounded-[50%] border-2 border-[#CBD5E1]/80 shadow-[0_14px_40px_rgba(0,0,0,0.95),0_0_24px_rgba(203,213,225,0.2)] bg-gradient-to-b from-[#142B4A]/50 via-[#0C1421]/80 to-[#142B4A]/50 pointer-events-none transition-all group-hover:border-[#FFFFFF]/90" />

        {/* Inner Delicate Concentric Oval Hairline */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-[50%] border border-[#CBD5E1]/40 pointer-events-none z-20" />

        {/* Bottom Oval Finial Accent */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 px-2 py-0.2 rounded-full bg-[#0C1421] border border-[#CBD5E1]/60 shadow text-[#CBD5E1] text-[9px] font-serif">
          ⚜ ❖ ⚜
        </div>

        {/* Clean Unobstructed Crest Image Container inside Oval */}
        <div className="relative w-full h-full rounded-[50%] overflow-hidden flex items-center justify-center p-6 sm:p-8 z-10">
          {currentImg ? (
            <img
              src={currentImg}
              alt="National Crest"
              referrerPolicy="no-referrer"
              style={{
                transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`
              }}
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)] transition-transform duration-200"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center border border-dashed border-[#CBD5E1]/40 rounded-[50%] p-4 text-center">
              <ImageIcon className="w-10 h-10 text-[#CBD5E1] mb-2" />
              <span className="text-xs font-royal text-[#FFFFFF]">Төрийн Сүлд</span>
            </div>
          )}

          {/* Soft Inner Oval Vignette */}
          <div className="absolute inset-0 pointer-events-none rounded-[50%] shadow-[inset_0_0_20px_rgba(12,20,33,0.7)]" />
        </div>

        {/* Interactive Hover Upload Overlay ONLY in Edit Mode */}
        {isEditMode && (
          <div className="absolute inset-0 z-30 rounded-[50%] bg-[#0C1421]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center border-2 border-[#CBD5E1]">
            <div className="w-10 h-10 rounded-full bg-[#1F4E79] border border-[#CBD5E1] flex items-center justify-center mb-1.5 shadow-lg">
              <UploadCloud className="w-5 h-5 text-[#CBD5E1] animate-bounce" />
            </div>
            <span className="text-xs font-royal font-bold text-[#FFFFFF] tracking-wider">
              Зураг оруулах / Солих ✎
            </span>
            <span className="text-[9px] text-[#D9DEE5]/80 font-sans mt-0.5">
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
          className="mt-3.5 px-4 py-1.5 bg-gradient-to-r from-[#142B4A] via-[#1B385D] to-[#142B4A] hover:from-[#1B385D] hover:to-[#224A7A] text-[#FFFFFF] border border-[#CBD5E1]/70 rounded-full font-royal text-[11px] tracking-widest uppercase flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.6)] transition-all hover:scale-105 hover:border-[#FFFFFF] cursor-pointer"
        >
          <UploadCloud className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <span>Зураг оруулах / Сүлд солих ✎</span>
        </button>
      )}

    </div>
  );
};
