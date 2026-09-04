import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  UploadCloud, 
  Link as LinkIcon, 
  RotateCcw, 
  Check, 
  ZoomIn, 
  Image as ImageIcon,
  Sparkles,
  Shield,
  Crown,
  AlertCircle,
  Camera
} from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';
import { OrnateFrame } from '../ui/OrnateFrame';
import { VictorianCorner } from '../ui/VictorianOrnaments';
import { DEFAULT_ROYAL_CREST, DEFAULT_MONARCH_IMAGE } from '../../initialData';

// Additional curated imperial presets for quick selection
const ROYAL_PRESETS = [
  {
    id: 'preset-crest-sapphire',
    title: 'Индранил Хааны Сүлд',
    category: 'crest',
    subtitle: 'Албан ёсны төрийн сүлд',
    url: DEFAULT_ROYAL_CREST
  },
  {
    id: 'preset-monarch-sovereign',
    title: 'Төрийн Дээд Эзэн',
    category: 'monarch',
    subtitle: 'Хааны эзэнт хөрөг',
    url: DEFAULT_MONARCH_IMAGE
  },
  {
    id: 'preset-crest-platinum-lion',
    title: 'Цагаан Алтан Арслан Сүлд',
    category: 'crest',
    subtitle: 'Эртний язгуурын сүлд',
    url: `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="platG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#E2E8F0"/>
      <stop offset="80%" stop-color="#CBD5E1"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
    <radialGradient id="sapphRad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2A75D3"/>
      <stop offset="70%" stop-color="#142B4A"/>
      <stop offset="100%" stop-color="#0C1421"/>
    </radialGradient>
  </defs>
  <rect width="500" height="500" rx="30" fill="url(#sapphRad)"/>
  <circle cx="250" cy="250" r="220" fill="none" stroke="url(#platG)" stroke-width="4"/>
  <circle cx="250" cy="250" r="205" fill="none" stroke="url(#platG)" stroke-width="1.5" stroke-dasharray="8,6"/>
  <!-- Crown Top -->
  <path d="M 180 140 L 205 80 L 230 115 L 250 60 L 270 115 L 295 80 L 320 140 Z" fill="url(#platG)" stroke="#334155" stroke-width="2"/>
  <circle cx="250" cy="55" r="8" fill="#FFFFFF"/>
  <!-- Shield Body -->
  <path d="M 160 160 L 340 160 Q 340 320 250 410 Q 160 320 160 160 Z" fill="#142B4A" stroke="url(#platG)" stroke-width="6"/>
  <!-- Imperial Eagle/Gem Center -->
  <polygon points="250,190 310,270 250,360 190,270" fill="url(#platG)"/>
  <polygon points="250,210 290,270 250,335 210,270" fill="#2A75D3"/>
  <text x="250" y="445" text-anchor="middle" fill="#E2E8F0" font-family="'Cormorant Garamond', serif" font-size="14" letter-spacing="4" font-weight="bold">COUNTRY OF SAPPHIRE</text>
</svg>
`)}`
  },
  {
    id: 'preset-monarch-queen',
    title: 'Эрхэм Дээдэс Хатан',
    category: 'monarch',
    subtitle: 'Хатан хааны хөрөг',
    url: `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
  <defs>
    <radialGradient id="queenGlow" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#3A85E3" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#142B4A" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#09111E" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="queenPlat" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
  </defs>
  <rect width="500" height="600" fill="url(#queenGlow)"/>
  <rect x="25" y="25" width="450" height="550" rx="16" fill="none" stroke="url(#queenPlat)" stroke-width="2" opacity="0.85"/>
  <circle cx="250" cy="220" r="145" fill="none" stroke="url(#queenPlat)" stroke-width="1.5" opacity="0.4"/>
  <!-- Robe -->
  <path d="M 130 560 L 165 350 Q 250 310 335 350 L 370 560 Z" fill="#142B4A" stroke="url(#queenPlat)" stroke-width="2"/>
  <path d="M 210 340 Q 250 450 290 340 Z" fill="#0C1421" stroke="url(#queenPlat)" stroke-width="1"/>
  <!-- Head Silhouette -->
  <circle cx="250" cy="220" r="52" fill="#1B3A61" stroke="url(#queenPlat)" stroke-width="1.5"/>
  <path d="M 210 230 Q 250 290 290 230 Q 270 310 250 320 Q 230 310 210 230 Z" fill="#142B4A" stroke="url(#queenPlat)" stroke-width="1"/>
  <!-- Tiara -->
  <path d="M 205 160 L 225 125 L 250 100 L 275 125 L 295 160 Z" fill="url(#queenPlat)" stroke="#475569" stroke-width="1.5"/>
  <circle cx="250" cy="95" r="6" fill="#2A75D3" stroke="url(#queenPlat)" stroke-width="1"/>
  <circle cx="225" cy="120" r="4" fill="#2A75D3"/>
  <circle cx="275" cy="120" r="4" fill="#2A75D3"/>
  <text x="250" y="530" text-anchor="middle" fill="#E2E8F0" font-family="'Cormorant Garamond', serif" font-size="16" letter-spacing="4" font-weight="bold">HER MAJESTY THE QUEEN</text>
  <text x="250" y="552" text-anchor="middle" fill="#D9DEE5" font-family="'Cormorant Garamond', serif" font-size="10" letter-spacing="3" opacity="0.75">IMPERIAL MONARCH</text>
</svg>
`)}`
  }
];

export const ImageManagerModal: React.FC = () => {
  const { activeModal, closeModal, updateCrest, updateField, updateRegion, data } = useKingdom();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState('');
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [tab, setTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [saveFeedback, setSaveFeedback] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const isOpen = activeModal.type === 'image';
  const targetId = activeModal.targetId || 'national-crest';
  const extraProps = activeModal.extraProps || {};

  const isCrest = targetId === 'national-crest' || targetId === 'crest';
  const isMonarch = targetId === 'monarch-portrait' || targetId === 'monarch';
  const isRegion = targetId.startsWith('region-') || targetId.includes('region');

  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      setSaveFeedback(false);

      if (isCrest) {
        setImageUrl(data.crest?.imageUrl || DEFAULT_ROYAL_CREST);
        setScale(data.crest?.scale || 1);
        setOffsetX(data.crest?.offsetX || 0);
        setOffsetY(data.crest?.offsetY || 0);
        setUrlInput(data.crest?.imageUrl || '');
      } else if (isMonarch) {
        setImageUrl(data.overview?.monarchImage || DEFAULT_MONARCH_IMAGE);
        setScale(data.overview?.monarchScale || 1);
        setOffsetX(data.overview?.monarchOffsetX || 0);
        setOffsetY(data.overview?.monarchOffsetY || 0);
        setUrlInput(data.overview?.monarchImage || '');
      } else if (extraProps.src || extraProps.currentUrl) {
        const initialSrc = extraProps.src || extraProps.currentUrl || '';
        setImageUrl(initialSrc);
        setScale(extraProps.scale || 1);
        setOffsetX(extraProps.offsetX || 0);
        setOffsetY(extraProps.offsetY || 0);
        setUrlInput(initialSrc);
      } else {
        setImageUrl(DEFAULT_ROYAL_CREST);
        setScale(1);
        setOffsetX(0);
        setOffsetY(0);
        setUrlInput('');
      }
    }
  }, [isOpen, targetId, isCrest, isMonarch, extraProps.src, extraProps.currentUrl, data.crest, data.overview]);

  if (!isOpen) return null;

  const processFile = (file: File) => {
    setErrorMessage('');
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Зөвхөн зургийн файл (PNG, JPG, SVG, WebP гэх мэт) сонгоно уу.');
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => {
      setErrorMessage('Файл уншихад алдаа гарлаа. Өөр файл туршина уу.');
    };

    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (!rawDataUrl) return;

      if (file.type === 'image/svg+xml' || rawDataUrl.startsWith('data:image/svg')) {
        setImageUrl(rawDataUrl);
        setUrlInput('');
        return;
      }

      const img = new Image();
      img.onerror = () => {
        setImageUrl(rawDataUrl);
        setUrlInput('');
      };
      img.onload = () => {
        const MAX_DIM = 850;
        let width = img.width;
        let height = img.height;

        if (width > MAX_DIM || height > MAX_DIM) {
          if (width > height) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          } else {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        try {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL('image/webp', 0.85);
            setImageUrl(compressed);
            setUrlInput('');
          } else {
            setImageUrl(rawDataUrl);
            setUrlInput('');
          }
        } catch {
          setImageUrl(rawDataUrl);
          setUrlInput('');
        }
      };
      img.src = rawDataUrl;
    };

    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleUrlApply = () => {
    if (!urlInput.trim()) {
      setErrorMessage('Зургийн URL холбоос оруулна уу.');
      return;
    }
    setErrorMessage('');
    setImageUrl(urlInput.trim());
  };

  const handleSave = () => {
    if (!imageUrl) {
      setErrorMessage('Зураг сонгоогүй байна.');
      return;
    }

    try {
      if (isCrest) {
        updateCrest({
          imageUrl,
          scale,
          offsetX,
          offsetY
        });
      } else if (isMonarch) {
        updateField('overview.monarchImage', imageUrl);
        updateField('overview.monarchScale', scale);
        updateField('overview.monarchOffsetX', offsetX);
        updateField('overview.monarchOffsetY', offsetY);
      } else if (isRegion) {
        updateRegion(targetId, { bannerImage: imageUrl });
      } else if (extraProps?.onSave) {
        extraProps.onSave({ imageUrl, scale, offsetX, offsetY });
      }

      setSaveFeedback(true);
      setTimeout(() => {
        setSaveFeedback(false);
        closeModal();
      }, 350);
    } catch (err) {
      console.error('Save failed:', err);
      setErrorMessage('Хадгалахад алдаа гарлаа.');
    }
  };

  const handleResetPanZoom = () => {
    setScale(1);
    setOffsetX(0);
    setOffsetY(0);
  };

  const modalTitle = extraProps?.title || (
    isMonarch 
      ? 'ТӨРИЙН ТЭРГҮҮНИЙ ХӨРӨГ ЗУРАГ (MONARCH PORTRAIT)' 
      : isCrest 
        ? 'УЛСЫН ТӨРИЙН СҮЛД (ROYAL CREST)' 
        : 'ЗУРАГ СОЛИХ & ЗАСВАРЛАХ (IMAGE MANAGER)'
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl">
        <OrnateFrame variant="platinum" glow padding="p-5 sm:p-7" className="max-h-[92vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#CBD5E1]/30 pb-3 mb-5">
            <div className="flex items-center gap-2.5">
              {isMonarch ? (
                <Crown className="w-5 h-5 text-[#E2E8F0]" />
              ) : isCrest ? (
                <Shield className="w-5 h-5 text-[#CBD5E1]" />
              ) : (
                <ImageIcon className="w-5 h-5 text-[#2A75D3]" />
              )}
              <h3 className="font-royal text-base sm:text-lg font-bold text-[#FFFFFF]">
                {modalTitle}
              </h3>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="p-1.5 text-[#D9DEE5]/60 hover:text-[#FFFFFF] rounded-full hover:bg-[#142B4A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Error notice if any */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded bg-red-950/80 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Main Workspace: 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Left: Live Interactive Preview */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[10px] sm:text-[11px] uppercase font-serif text-[#CBD5E1] tracking-wider">
                  Шууд Харагдах Байдал (Preview)
                </span>
                <span className="text-[10px] font-mono text-[#D9DEE5]/60">
                  {scale.toFixed(2)}x · ({offsetX}px, {offsetY}px)
                </span>
              </div>
              
              <div className={`relative w-48 h-48 sm:w-56 sm:h-56 ${isMonarch ? 'rounded-2xl' : 'rounded-xl'} bg-[#0C1421] border-2 border-[#CBD5E1]/80 flex items-center justify-center overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(226,232,240,0.15)]`}>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    style={{
                      transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`
                    }}
                    className={`w-full h-full ${isMonarch ? 'object-cover' : 'object-contain'} filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-75`}
                  />
                ) : (
                  <div className="text-center p-4 text-xs text-[#D9DEE5]/60 font-serif flex flex-col items-center gap-1.5">
                    <ImageIcon className="w-8 h-8 text-[#CBD5E1]/40" />
                    <span>Зураг оруулаагүй байна</span>
                  </div>
                )}

                {/* Victorian Fleur-de-lis Corner Ornaments */}
                <VictorianCorner position="top-left" size={28} variant="platinum" opacity={0.85} />
                <VictorianCorner position="top-right" size={28} variant="platinum" opacity={0.85} />
                <VictorianCorner position="bottom-left" size={28} variant="platinum" opacity={0.85} />
                <VictorianCorner position="bottom-right" size={28} variant="platinum" opacity={0.85} />
              </div>

              <div className="flex items-center gap-2 mt-3 w-full justify-center">
                <button
                  type="button"
                  onClick={handleResetPanZoom}
                  className="px-3 py-1 rounded bg-[#142B4A] text-[11px] font-serif text-[#D9DEE5] hover:text-[#FFFFFF] border border-[#CBD5E1]/30 flex items-center gap-1.5 transition-colors shadow"
                >
                  <RotateCcw className="w-3 h-3 text-[#CBD5E1]" />
                  <span>Төвд шилжүүлэх (Reset)</span>
                </button>
              </div>
            </div>

            {/* Right: Upload Options & Pan/Zoom Sliders */}
            <div className="space-y-3.5 text-xs flex flex-col justify-between">
              
              {/* Tabs */}
              <div>
                <div className="flex rounded-md overflow-hidden border border-[#CBD5E1]/40 bg-[#0C1421] mb-3">
                  <button
                    type="button"
                    onClick={() => setTab('upload')}
                    className={`flex-1 py-1.5 font-serif text-[11px] transition-colors flex items-center justify-center gap-1.5 ${
                      tab === 'upload' ? 'bg-[#CBD5E1] text-[#0C1421] font-bold shadow' : 'text-[#D9DEE5] hover:bg-[#142B4A]'
                    }`}
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Файл Хуулах</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab('url')}
                    className={`flex-1 py-1.5 font-serif text-[11px] transition-colors flex items-center justify-center gap-1.5 ${
                      tab === 'url' ? 'bg-[#CBD5E1] text-[#0C1421] font-bold shadow' : 'text-[#D9DEE5] hover:bg-[#142B4A]'
                    }`}
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>URL Холбоос</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab('presets')}
                    className={`flex-1 py-1.5 font-serif text-[11px] transition-colors flex items-center justify-center gap-1.5 ${
                      tab === 'presets' ? 'bg-[#CBD5E1] text-[#0C1421] font-bold shadow' : 'text-[#D9DEE5] hover:bg-[#142B4A]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Бэлэн Сүлд</span>
                  </button>
                </div>

                {/* Tab 1: File Upload */}
                {tab === 'upload' && (
                  <div>
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`p-4 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all group ${
                        isDragging 
                          ? 'border-[#FFFFFF] bg-[#1F4E79]/80 scale-[1.02]' 
                          : 'border-[#CBD5E1]/60 hover:border-[#E2E8F0] bg-[#0C1421]/80 hover:bg-[#142B4A]/50'
                      }`}
                    >
                      <UploadCloud className="w-8 h-8 text-[#CBD5E1] group-hover:text-[#FFFFFF] mx-auto mb-1.5 transition-transform group-hover:scale-110" />
                      <p className="text-xs text-[#FFFFFF] font-serif mb-1 font-bold">
                        {isMonarch ? 'Хааны хөрөг зураг сонгох' : 'Өөрийн сүлдний зургийн файлыг сонгоно уу'}
                      </p>
                      <p className="text-[10px] text-[#D9DEE5]/70 font-sans mb-2.5">
                        PNG, JPG, SVG, WebP (Компьютер / Утаснаасаа оруулна)
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="px-3.5 py-1.5 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFFFFF] rounded text-xs font-royal border border-[#CBD5E1] shadow inline-flex items-center gap-1.5"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#E2E8F0]" />
                        <span>Зураг Сонгох (Browse File)</span>
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}

                {/* Tab 2: URL Input */}
                {tab === 'url' && (
                  <div className="space-y-2 bg-[#0C1421]/80 p-3 rounded border border-[#CBD5E1]/30">
                    <label className="block text-[11px] font-serif text-[#CBD5E1] uppercase">
                      Зургийн Шууд Холбоос (Image URL):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleUrlApply()}
                        placeholder="https://example.com/crest-or-photo.png"
                        className="flex-1 bg-[#142B4A]/80 text-[#FFFFFF] border border-[#CBD5E1]/50 rounded px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#CBD5E1]"
                      />
                      <button
                        type="button"
                        onClick={handleUrlApply}
                        className="px-3 py-1.5 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFFFFF] rounded border border-[#CBD5E1]/50 font-serif text-xs shrink-0"
                      >
                        Шалгах
                      </button>
                    </div>
                    <p className="text-[10px] text-[#D9DEE5]/60 font-sans">
                      Discord, Imgur, Pinterest, Wikimedia болон бусад шууд зургийн холбоосыг хуулж тавина.
                    </p>
                  </div>
                )}

                {/* Tab 3: Presets */}
                {tab === 'presets' && (
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    <div className="grid grid-cols-2 gap-2">
                      {ROYAL_PRESETS.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setImageUrl(p.url);
                            setUrlInput('');
                          }}
                          className={`p-2 rounded border text-left flex items-center gap-2 transition-all ${
                            imageUrl === p.url 
                              ? 'bg-[#1F4E79] border-[#E2E8F0] ring-1 ring-[#E2E8F0]' 
                              : 'bg-[#0C1421] hover:bg-[#142B4A] border-[#CBD5E1]/40'
                          }`}
                        >
                          {p.category === 'monarch' ? (
                            <Crown className="w-4 h-4 text-[#E2E8F0] shrink-0" />
                          ) : (
                            <Shield className="w-4 h-4 text-[#CBD5E1] shrink-0" />
                          )}
                          <div className="overflow-hidden">
                            <div className="text-[11px] font-royal font-bold text-[#FFFFFF] truncate">{p.title}</div>
                            <div className="text-[9px] text-[#D9DEE5]/70 truncate">{p.subtitle}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Adjustments: Scale & Pan Offsets */}
              <div className="space-y-2.5 pt-3 border-t border-[#CBD5E1]/20 bg-[#0C1421]/60 p-2.5 rounded">
                <div>
                  <div className="flex justify-between text-[10px] sm:text-[11px] font-serif text-[#CBD5E1] mb-1">
                    <span className="flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" />
                      <span>Томруулах / Багасгах (Scale):</span>
                    </span>
                    <span className="font-mono text-[#FFFFFF]">{scale.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.3"
                    max="2.5"
                    step="0.05"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    className="w-full accent-[#CBD5E1] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between text-[10px] font-serif text-[#CBD5E1] mb-1">
                      <span>Хэвтээ (X):</span>
                      <span className="font-mono text-[#FFFFFF]">{offsetX}px</span>
                    </div>
                    <input
                      type="range"
                      min="-150"
                      max="150"
                      value={offsetX}
                      onChange={(e) => setOffsetX(parseInt(e.target.value))}
                      className="w-full accent-[#CBD5E1] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] font-serif text-[#CBD5E1] mb-1">
                      <span>Босоо (Y):</span>
                      <span className="font-mono text-[#FFFFFF]">{offsetY}px</span>
                    </div>
                    <input
                      type="range"
                      min="-150"
                      max="150"
                      value={offsetY}
                      onChange={(e) => setOffsetY(parseInt(e.target.value))}
                      className="w-full accent-[#CBD5E1] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#CBD5E1]/30">
            <span className="text-[11px] text-[#E2E8F0] font-mono">
              {saveFeedback ? '✓ Амжилттай хадгалагдлаа!' : ''}
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="px-3.5 py-1.5 bg-[#142B4A] hover:bg-[#1F4E79] text-[#D9DEE5] rounded text-xs font-royal border border-[#CBD5E1]/30 transition-colors"
              >
                Болих (Cancel)
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2 bg-[#CBD5E1] hover:bg-[#E2E8F0] text-[#0C1421] font-bold rounded text-xs font-royal flex items-center gap-1.5 shadow-lg transform hover:scale-105 transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Хадгалах & Хэрэглэх (Save & Apply)</span>
              </button>
            </div>
          </div>

        </OrnateFrame>
      </div>
    </div>
  );
};
