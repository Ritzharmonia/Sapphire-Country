import React, { ReactNode } from 'react';

interface ElegantLineCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  accentColor?: 'platinum' | 'sapphire' | 'silver';
  padding?: string;
  onClick?: () => void;
}

export const ElegantLineCard: React.FC<ElegantLineCardProps> = ({
  children,
  className = '',
  glow = false,
  accentColor = 'platinum',
  padding = 'p-5 sm:p-6',
  onClick
}) => {
  const getTopLineGradient = () => {
    switch (accentColor) {
      case 'sapphire':
        return 'from-transparent via-[#2A75D3]/70 to-transparent group-hover:via-[#60A5FA]/90';
      case 'silver':
        return 'from-transparent via-[#CBD5E1]/60 to-transparent group-hover:via-[#FFFFFF]/90';
      case 'platinum':
      default:
        return 'from-transparent via-[#CBD5E1]/70 to-transparent group-hover:via-[#FFFFFF]';
    }
  };

  const getPipBorder = () => {
    switch (accentColor) {
      case 'sapphire':
        return 'border-[#2A75D3]/80 group-hover:border-[#60A5FA] group-hover:bg-[#2A75D3]';
      case 'silver':
      case 'platinum':
      default:
        return 'border-[#CBD5E1]/80 group-hover:border-[#FFFFFF] group-hover:bg-[#CBD5E1]';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`group relative bg-gradient-to-b from-[#142B4A]/20 via-[#0C1421]/60 to-[#0C1421]/90 backdrop-blur-md ${padding} transition-all duration-300 rounded-[2px] ${
        glow
          ? 'shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_24px_rgba(203,213,225,0.18)] ring-1 ring-[#CBD5E1]/20'
          : 'shadow-lg shadow-[#000000]/60'
      } hover:bg-gradient-to-b hover:from-[#142B4A]/35 hover:via-[#112238]/70 hover:to-[#0C1421]/95 ${className}`}
    >
      {/* Top Refined Hairline Accent with subtle gradient fade */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${getTopLineGradient()} transition-all duration-300 pointer-events-none`}
      />

      {/* Delicate Miniature Diamond Pip at Top Center */}
      <div
        className={`absolute top-[-3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rotate-45 border ${getPipBorder()} bg-[#0C1421] transition-all duration-300 pointer-events-none shadow-sm`}
      />

      {/* Subtle Bottom Hairline Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBD5E1]/20 to-transparent group-hover:via-[#CBD5E1]/45 transition-all duration-300 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
