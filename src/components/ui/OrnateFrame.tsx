import React, { ReactNode } from 'react';

interface OrnateFrameProps {
  children: ReactNode;
  className?: string;
  variant?: 'gold' | 'silver' | 'sapphire' | 'minimal';
  glow?: boolean;
  withCorners?: boolean;
  padding?: string;
}

export const OrnateFrame: React.FC<OrnateFrameProps> = ({
  children,
  className = '',
  variant = 'gold',
  glow = false,
  withCorners = true,
  padding = 'p-6 sm:p-8'
}) => {
  const getBorderColor = () => {
    switch (variant) {
      case 'gold':
        return 'border-[#C9A85C]/50 hover:border-[#C9A85C]/80';
      case 'silver':
        return 'border-[#D9DEE5]/35 hover:border-[#D9DEE5]/70';
      case 'sapphire':
        return 'border-[#1F4E79]/70 hover:border-[#C9A85C]/60';
      case 'minimal':
      default:
        return 'border-[#142B4A]/80 hover:border-[#1F4E79]';
    }
  };

  const getGlow = () => {
    if (!glow) return 'shadow-lg shadow-[#000000]/60';
    switch (variant) {
      case 'gold':
        return 'shadow-[0_0_30px_rgba(201,168,92,0.2)]';
      case 'sapphire':
        return 'sapphire-glow';
      default:
        return 'shadow-[0_0_25px_rgba(20,43,74,0.4)]';
    }
  };

  return (
    <div
      className={`relative bg-[#0C1421]/90 backdrop-blur-md border ${getBorderColor()} ${getGlow()} ${padding} transition-all duration-300 ${className}`}
    >
      {/* Decorative Corner Ornaments */}
      {withCorners && (
        <>
          {/* Top-Left */}
          <div className="absolute -top-[4px] -left-[4px] w-3 h-3 border-t-2 border-l-2 border-[#C9A85C] pointer-events-none" />
          <div className="absolute top-1 left-1 w-1 h-1 bg-[#C9A85C]/70 pointer-events-none" />

          {/* Top-Right */}
          <div className="absolute -top-[4px] -right-[4px] w-3 h-3 border-t-2 border-r-2 border-[#C9A85C] pointer-events-none" />
          <div className="absolute top-1 right-1 w-1 h-1 bg-[#C9A85C]/70 pointer-events-none" />

          {/* Bottom-Left */}
          <div className="absolute -bottom-[4px] -left-[4px] w-3 h-3 border-b-2 border-l-2 border-[#C9A85C] pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#C9A85C]/70 pointer-events-none" />

          {/* Bottom-Right */}
          <div className="absolute -bottom-[4px] -right-[4px] w-3 h-3 border-b-2 border-r-2 border-[#C9A85C] pointer-events-none" />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#C9A85C]/70 pointer-events-none" />
        </>
      )}

      {/* Inner subtle filigree hairline */}
      <div className="absolute inset-[3px] border border-[#C9A85C]/15 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
