import React from 'react';

export type VictorianOrnamentVariant = 'platinum' | 'silver' | 'sapphire' | 'gold';

interface FleurDeLisProps {
  size?: number | string;
  className?: string;
  variant?: VictorianOrnamentVariant;
}

/**
 * Authentic Royal Fleur-de-lis (⚜) Heraldic Vector Emblem
 * Modeled on traditional royal European & French monarchy insignia.
 */
export const FleurDeLis: React.FC<FleurDeLisProps> = ({
  size = 24,
  className = '',
  variant = 'platinum'
}) => {
  const gradId = `fleur-grad-${variant}-${Math.random().toString(36).substring(2, 7)}`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size }}
      className={`inline-block select-none filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] ${className}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          {variant === 'sapphire' ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#93C5FD" />
              <stop offset="75%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#F1F5F9" />
              <stop offset="65%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </>
          )}
        </linearGradient>
      </defs>

      {/* Central Upright Spear Petal */}
      <path
        d="M 50,8 C 50,8 41,25 41,40 C 41,47 45,50 50,51 C 55,50 59,47 59,40 C 59,25 50,8 50,8 Z"
        fill={`url(#${gradId})`}
      />
      {/* Central Petal Ridge Highlight */}
      <path
        d="M 50,9 L 50,49"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Left Curving Side Petal */}
      <path
        d="M 43,48 C 36,45 28,38 24,28 C 22,23 20,29 20,33 C 20,44 26,50 35,53 C 40,54 44,53 44,53 C 44,53 38,49 43,48 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 23,30 C 24,38 30,47 43,51"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.6"
        fill="none"
      />

      {/* Right Curving Side Petal (Symmetrical) */}
      <path
        d="M 57,48 C 64,45 72,38 76,28 C 78,23 80,29 80,33 C 80,44 74,50 65,53 C 60,54 56,53 56,53 C 56,53 62,49 57,48 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 77,30 C 76,38 70,47 57,51"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.6"
        fill="none"
      />

      {/* Horizontal Clasp / Waist Ribbon */}
      <rect
        x="32"
        y="51"
        width="36"
        height="7"
        rx="2"
        fill={`url(#${gradId})`}
        stroke="#475569"
        strokeWidth="0.8"
      />
      <line x1="34" y1="54.5" x2="66" y2="54.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />

      {/* Lower Stem / Root Petals */}
      <path
        d="M 50,58 C 47,65 42,75 50,88 C 58,75 53,65 50,58 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 44,58 C 39,63 34,70 38,76 C 41,74 44,68 45,61 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 56,58 C 61,63 66,70 62,76 C 59,74 56,68 55,61 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
};

interface VictorianCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number | string;
  variant?: VictorianOrnamentVariant;
  className?: string;
  opacity?: number;
}

/**
 * Slender Platinum Royal Fleur-de-lis Corner Accent
 * Crisp, clean, thin 1px framing lines with an unmistakable corner Fleur-de-lis.
 */
export const VictorianCorner: React.FC<VictorianCornerProps> = ({
  position = 'top-left',
  size = 36,
  variant = 'platinum',
  className = '',
  opacity = 1
}) => {
  const getTransforms = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      case 'top-left':
      default:
        return 'none';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      case 'top-left':
      default:
        return 'top-0 left-0';
    }
  };

  const gradId = `corner-plat-grad-${position}-${Math.random().toString(36).substring(2, 6)}`;

  return (
    <div
      className={`absolute ${getPositionClasses()} pointer-events-none select-none z-10 ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        transform: getTransforms(),
        opacity
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#E2E8F0" />
            <stop offset="80%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Thin Platinum Outer Framing Lines */}
        <path
          d="M 3,96 L 3,14 C 3,7 7,3 14,3 L 96,3"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Thin Platinum Inset Hairline */}
        <path
          d="M 8,92 L 8,16 C 8,11 11,8 16,8 L 92,8"
          stroke={`url(#${gradId})`}
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />

        {/* Elegant Corner Diagonal Fleur-de-lis Emblem (Oriented at 45° pointing toward corner) */}
        <g transform="translate(18, 18) rotate(-45) scale(0.38)">
          {/* Central Spear */}
          <path
            d="M 50,6 C 50,6 40,24 40,38 C 40,46 44,49 50,50 C 56,49 60,46 60,38 C 60,24 50,6 50,6 Z"
            fill={`url(#${gradId})`}
          />
          <path d="M 50,7 L 50,48" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Left Petal */}
          <path
            d="M 43,47 C 36,44 28,37 24,27 C 22,22 20,28 20,32 C 20,43 26,49 35,52 C 40,53 44,52 44,52 C 44,52 38,48 43,47 Z"
            fill={`url(#${gradId})`}
          />

          {/* Right Petal */}
          <path
            d="M 57,47 C 64,44 72,37 76,27 C 78,22 80,28 80,32 C 80,43 74,49 65,52 C 60,53 56,52 56,52 C 56,52 62,48 57,47 Z"
            fill={`url(#${gradId})`}
          />

          {/* Waist Band */}
          <rect x="33" y="50" width="34" height="6" rx="2" fill={`url(#${gradId})`} stroke="#334155" strokeWidth="0.8" />

          {/* Lower Stem */}
          <path d="M 50,56 C 47,63 43,72 50,84 C 57,72 53,63 50,56 Z" fill={`url(#${gradId})`} />
          <path d="M 44,56 C 39,61 35,67 39,73 C 41,71 44,66 45,59 Z" fill={`url(#${gradId})`} />
          <path d="M 56,56 C 61,61 65,67 61,73 C 59,71 56,66 55,59 Z" fill={`url(#${gradId})`} />
        </g>

        {/* Delicate Platinum Corner Diamond Studs */}
        <polygon points="96,3 99,6 96,9 93,6" fill={`url(#${gradId})`} />
        <polygon points="3,96 6,99 3,102 0,99" fill={`url(#${gradId})`} />
      </svg>
    </div>
  );
};

interface VictorianCenterFinialProps {
  variant?: VictorianOrnamentVariant;
  className?: string;
  position?: 'top' | 'bottom';
  width?: number | string;
}

/**
 * Slender Platinum Header Finial with Royal Fleur-de-lis & Laurel Ribbons
 */
export const VictorianCenterFinial: React.FC<VictorianCenterFinialProps> = ({
  variant = 'platinum',
  className = '',
  position = 'top',
  width = 110
}) => {
  const gradId = `finial-plat-${position}-${Math.random().toString(36).substring(2, 6)}`;

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 ${
        position === 'top' ? '-top-[10px]' : '-bottom-[10px]'
      } pointer-events-none select-none z-20 ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: '20px',
        transform: `translateX(-50%) ${position === 'bottom' ? 'rotate(180deg)' : ''}`
      }}
    >
      <svg
        viewBox="0 0 160 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="25%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Slender Platinum Ribbons */}
        <path d="M 68,14 L 6,14" stroke={`url(#${gradId})`} strokeWidth="1" strokeLinecap="round" />
        <polygon points="20,14 24,11 28,14 24,17" fill={`url(#${gradId})`} />

        {/* Right Slender Platinum Ribbons */}
        <path d="M 92,14 L 154,14" stroke={`url(#${gradId})`} strokeWidth="1" strokeLinecap="round" />
        <polygon points="140,14 136,11 132,14 136,17" fill={`url(#${gradId})`} />

        {/* Center Royal Fleur-de-lis */}
        <g transform="translate(68, 0) scale(0.24)">
          {/* Central Spear */}
          <path
            d="M 50,6 C 50,6 41,24 41,38 C 41,46 45,49 50,50 C 55,49 59,46 59,38 C 59,24 50,6 50,6 Z"
            fill={`url(#${gradId})`}
          />
          <path d="M 50,7 L 50,48" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Left Petal */}
          <path
            d="M 43,47 C 36,44 28,37 24,27 C 22,22 20,28 20,32 C 20,43 26,49 35,52 C 40,53 44,52 44,52 C 44,52 38,48 43,47 Z"
            fill={`url(#${gradId})`}
          />

          {/* Right Petal */}
          <path
            d="M 57,47 C 64,44 72,37 76,27 C 78,22 80,28 80,32 C 80,43 74,49 65,52 C 60,53 56,52 56,52 C 56,52 62,48 57,47 Z"
            fill={`url(#${gradId})`}
          />

          {/* Waist Band */}
          <rect x="33" y="50" width="34" height="6" rx="2" fill={`url(#${gradId})`} stroke="#334155" strokeWidth="0.8" />

          {/* Lower Stem */}
          <path d="M 50,56 C 47,63 43,72 50,84 C 57,72 53,63 50,56 Z" fill={`url(#${gradId})`} />
          <path d="M 44,56 C 39,61 35,67 39,73 C 41,71 44,66 45,59 Z" fill={`url(#${gradId})`} />
          <path d="M 56,56 C 61,61 65,67 61,73 C 59,71 56,66 55,59 Z" fill={`url(#${gradId})`} />
        </g>
      </svg>
    </div>
  );
};

/**
 * Grand Victorian Screen Frame in Pure Radiant Platinum
 * Slender, refined hairline borders with elegant corner Fleur-de-lis crests.
 */
export const VictorianScreenFrame: React.FC = () => {
  return (
    <aside aria-label="Imperial Platinum Victorian Frame" className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden">
      {/* 4 Refined Platinum Fleur-de-lis Corner Accents */}
      <VictorianCorner position="top-left" size={60} variant="platinum" opacity={0.65} className="!top-1 !left-1 sm:!top-3 sm:!left-3 sm:!w-[75px] sm:!h-[75px]" />
      <VictorianCorner position="top-right" size={60} variant="platinum" opacity={0.65} className="!top-1 !right-1 sm:!top-3 sm:!right-3 sm:!w-[75px] sm:!h-[75px]" />
      <VictorianCorner position="bottom-left" size={60} variant="platinum" opacity={0.65} className="!bottom-1 !left-1 sm:!bottom-3 sm:!left-3 sm:!w-[75px] sm:!h-[75px]" />
      <VictorianCorner position="bottom-right" size={60} variant="platinum" opacity={0.65} className="!bottom-1 !right-1 sm:!bottom-3 sm:!right-3 sm:!w-[75px] sm:!h-[75px]" />

      {/* Ultra-thin 1px Platinum Perimeter Lines */}
      <div className="absolute inset-2 sm:inset-3.5 border border-[#CBD5E1]/20 pointer-events-none rounded-sm" />
      <div className="absolute inset-3 sm:inset-5 border border-[#CBD5E1]/10 pointer-events-none rounded-sm" />

      {/* Subtle Central Platinum Fleur-de-lis Marker at Top & Bottom Edges */}
      <div className="hidden md:block absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#CBD5E1]/40" />
          <span className="text-[#CBD5E1]/70 text-xs">⚜</span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#CBD5E1]/40" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#CBD5E1]/40" />
          <span className="text-[#CBD5E1]/70 text-xs">⚜</span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#CBD5E1]/40" />
        </div>
      </div>
    </aside>
  );
};
