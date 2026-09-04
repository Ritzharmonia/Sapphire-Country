import React, { ReactNode } from 'react';
import { VictorianCorner, VictorianCenterFinial, VictorianOrnamentVariant } from './VictorianOrnaments';

interface OrnateFrameProps {
  children: ReactNode;
  className?: string;
  variant?: 'platinum' | 'silver' | 'sapphire' | 'minimal' | 'gold';
  glow?: boolean;
  withCorners?: boolean;
  withFinial?: boolean;
  padding?: string;
}

export const OrnateFrame: React.FC<OrnateFrameProps> = ({
  children,
  className = '',
  variant = 'platinum',
  glow = false,
  withCorners = true,
  withFinial = false,
  padding = 'p-6 sm:p-8'
}) => {
  const isPlatinumOrGold = variant === 'platinum' || variant === 'gold';

  const getBorderColor = () => {
    if (isPlatinumOrGold) {
      return 'border-[#CBD5E1]/60 hover:border-[#FFFFFF]/85';
    }
    switch (variant) {
      case 'silver':
        return 'border-[#E2E8F0]/45 hover:border-[#FFFFFF]/75';
      case 'sapphire':
        return 'border-[#2A75D3]/60 hover:border-[#CBD5E1]/80';
      case 'minimal':
      default:
        return 'border-[#1F4E79]/60 hover:border-[#CBD5E1]/50';
    }
  };

  const getGlow = () => {
    if (!glow) return 'shadow-xl shadow-[#000000]/70';
    if (isPlatinumOrGold) {
      return 'shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_22px_rgba(226,232,240,0.22)]';
    }
    switch (variant) {
      case 'silver':
        return 'shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(226,232,240,0.18)]';
      case 'sapphire':
        return 'shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_24px_rgba(31,78,121,0.45)]';
      default:
        return 'shadow-[0_8px_30px_rgba(0,0,0,0.7)]';
    }
  };

  const ornamentVariant: VictorianOrnamentVariant =
    variant === 'sapphire' ? 'sapphire' : 'platinum';

  return (
    <div
      className={`relative bg-[#0C1421]/95 backdrop-blur-md border ${getBorderColor()} ${getGlow()} ${padding} transition-all duration-300 rounded-sm ${className}`}
    >
      {/* Top Center Platinum Victorian Fleur-de-lis Finial */}
      {withFinial && (
        <VictorianCenterFinial variant={ornamentVariant} position="top" width={110} />
      )}

      {/* Slender Platinum Fleur-de-lis Corner Accents */}
      {withCorners && variant !== 'minimal' && (
        <>
          <VictorianCorner position="top-left" size={26} variant={ornamentVariant} opacity={0.85} />
          <VictorianCorner position="top-right" size={26} variant={ornamentVariant} opacity={0.85} />
          <VictorianCorner position="bottom-left" size={26} variant={ornamentVariant} opacity={0.85} />
          <VictorianCorner position="bottom-right" size={26} variant={ornamentVariant} opacity={0.85} />
        </>
      )}

      {/* Dual Inset Slender Platinum Moldings */}
      <div className="absolute inset-[3px] sm:inset-[4px] border border-[#CBD5E1]/20 pointer-events-none rounded-[1px]" />
      <div className="absolute inset-[5px] sm:inset-[7px] border border-[#CBD5E1]/10 pointer-events-none rounded-[1px]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
