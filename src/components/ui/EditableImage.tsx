import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  imageTargetId?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'banner' | 'crest';
  fallbackPlaceholder?: string;
  extraProps?: any;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  imageTargetId = 'general',
  aspectRatio = 'landscape',
  fallbackPlaceholder = '',
  extraProps
}) => {
  const { isEditMode, openModal } = useKingdom();

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    openModal('image', imageTargetId, { src, alt, ...extraProps });
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'crest': return 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64';
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'banner': return 'aspect-[21/9] min-h-[220px]';
      case 'landscape':
      default: return 'aspect-[16/10]';
    }
  };

  return (
    <div className={`relative group/image overflow-hidden ${containerClassName}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105 ${getAspectClass()} ${className}`}
        />
      ) : (
        <div className={`w-full h-full bg-[#142B4A]/40 border border-[#1F4E79]/60 flex flex-col items-center justify-center p-6 text-center ${getAspectClass()} ${className}`}>
          <ImageIcon className="w-10 h-10 text-[#CBD5E1]/60 mb-2" />
          <span className="text-xs text-[#D9DEE5]/60 font-serif">{fallbackPlaceholder || alt}</span>
        </div>
      )}

      {/* Edit overlay button in edit mode */}
      {isEditMode && (
        <div className="absolute inset-0 bg-[#0C1421]/60 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3">
          <button
            type="button"
            onClick={handleEdit}
            className="px-3 py-2 bg-[#1F4E79] hover:bg-[#CBD5E1] text-[#FFFFFF] hover:text-[#0C1421] rounded border border-[#CBD5E1] text-xs font-semibold flex items-center gap-2 shadow-xl transition-all transform hover:scale-105"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Зураг солих ✎ (Change Image)</span>
          </button>
        </div>
      )}
    </div>
  );
};
