import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  ChevronRight, 
  Shield 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { Region } from '../types';

export const RealmMap: React.FC = () => {
  const { data } = useKingdom();
  const [selectedMapRegion, setSelectedMapRegion] = useState<Region | null>(data.regions[0] || null);

  const getRegionCoords = (region: Region, idx: number) => {
    if (region.mapCoordinates) {
      return region.mapCoordinates;
    }
    if (region.id.includes('celestine')) return { x: 50, y: 50 };
    if (region.id.includes('monolith')) return { x: 50, y: 20 };
    if (region.id.includes('sunset')) return { x: 22, y: 52 };
    if (region.id.includes('ludwin')) return { x: 78, y: 52 };
    if (region.id.includes('elynthia')) return { x: 50, y: 82 };
    
    const angle = (idx * 2 * Math.PI) / Math.max(1, data.regions.length);
    return {
      x: 50 + 30 * Math.cos(angle),
      y: 50 + 30 * Math.sin(angle)
    };
  };

  return (
    <section id="realm-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE VII"
        titleMongolian="ЭЗЭНТ ГҮРНИЙ ГАЗАР ЗҮЙН ЗУРАГ"
        titleEnglish="CARTOGRAPHY OF SAPPHIRE REALM"
        subtitle="Таван их бүс нутаг, хааны ордон, уул уурхай, боомт, хил хязгаарын бэхлэлтийн интерактив орон зайн байршил."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left / Center: Interactive Map Stage */}
        <div className="lg:col-span-8 flex flex-col">
          <OrnateFrame variant="platinum" glow padding="p-3 sm:p-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-lg bg-[#0C1421] border border-[#1F4E79]/80 overflow-hidden shadow-2xl flex items-center justify-center">
              
              {/* Antique Parchment & Deep Sapphire Radial Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#142B4A_0%,_#0C1421_75%,_#070B12_100%)] opacity-95" />
              
              {/* Heraldic Grid Lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#CBD5E1]/20" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#CBD5E1]/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full border border-[#CBD5E1]/25 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-[#1F4E79]/40 pointer-events-none" />

              {/* Decorative Compass Rose in corner */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-60">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Compass className="w-full h-full text-[#CBD5E1] animate-spin-slow" />
                  <span className="absolute top-0 text-[9px] font-mono font-bold text-[#E2E8F0]">N</span>
                  <span className="absolute bottom-0 text-[9px] font-mono font-bold text-[#CBD5E1]">S</span>
                  <span className="absolute right-0 text-[9px] font-mono font-bold text-[#CBD5E1]">E</span>
                  <span className="absolute left-0 text-[9px] font-mono font-bold text-[#CBD5E1]">W</span>
                </div>
              </div>

              {/* Map Title Legend */}
              <div className="absolute top-4 left-4 pointer-events-none p-2 rounded bg-[#0C1421]/80 border border-[#CBD5E1]/30 text-left">
                <div className="font-royal text-[11px] font-bold text-[#FFFFFF] tracking-wider">
                  SAPPHIRE IMPERIAL DOMAIN
                </div>
                <div className="font-serif text-[9px] text-[#CBD5E1] uppercase tracking-widest">
                  ⚜ Cartographia Regalis
                </div>
              </div>

              {/* Region Territorial Nodes & Pins - Frameless with pure location logo & name */}
              {data.regions.map((region, idx) => {
                const coords = getRegionCoords(region, idx);
                const isSelected = selectedMapRegion?.id === region.id;

                return (
                  <div
                    key={region.id}
                    style={{
                      left: `${coords.x}%`,
                      top: `${coords.y}%`
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer select-none"
                    onClick={() => setSelectedMapRegion(region)}
                  >
                    {/* Location Logo with Name behind it (No outer frames or badge boxes) */}
                    <div className="flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
                      {/* Location Pin Logo */}
                      <div className="relative flex items-center justify-center">
                        {isSelected && (
                          <span className="absolute -inset-1 rounded-full bg-[#CBD5E1] animate-ping opacity-60 pointer-events-none" />
                        )}
                        <MapPin
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] ${
                            isSelected
                              ? 'text-[#FFFFFF] fill-[#E2E8F0] drop-shadow-[0_0_8px_rgba(226,232,240,0.85)] scale-110'
                              : 'text-[#CBD5E1] fill-[#142B4A]/70 group-hover:text-[#FFFFFF] group-hover:fill-[#1F4E79]'
                          }`}
                        />
                      </div>

                      {/* Name directly after logo - pure typography with elegant drop shadow */}
                      <span
                        className={`font-royal text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.98)] drop-shadow-[0_0_12px_rgba(7,11,18,0.95)] ${
                          isSelected
                            ? 'text-[#FFFFFF] drop-shadow-[0_0_10px_rgba(226,232,240,0.6)] font-bold'
                            : 'text-[#E2E8F0] group-hover:text-[#FFFFFF]'
                        }`}
                      >
                        {region.name}
                      </span>
                    </div>

                    {/* Subtle Leading House Subtitle (No frame or background box) */}
                    {region.leadingHouse && (
                      <div className="ml-5 mt-0.5">
                        <span className="text-[10px] font-serif italic text-[#CBD5E1]/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.98)] whitespace-nowrap block">
                          {region.leadingHouse}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </OrnateFrame>
        </div>

        {/* Right: Selected Map Region Briefing Dossier */}
        <div className="lg:col-span-4 flex flex-col">
          {selectedMapRegion ? (
            <OrnateFrame variant="sapphire" glow padding="p-6">
              <div className="flex items-center justify-between border-b border-[#CBD5E1]/30 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#CBD5E1]" />
                  <span className="font-royal text-xs uppercase tracking-widest text-[#FFFFFF] font-bold">
                    БҮСИЙН ТОВЧ МЭДЭЭЛЭЛ
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#CBD5E1] bg-[#0C1421] px-2 py-0.5 rounded border border-[#CBD5E1]/30">
                  {selectedMapRegion.areaKm2}
                </span>
              </div>

              <h4 className="text-2xl font-royal font-bold text-[#FFFFFF] mb-1">
                {selectedMapRegion.name}
              </h4>
              <div className="text-xs font-serif italic text-[#D9DEE5]/70 mb-3">
                {selectedMapRegion.geographicPosition}
              </div>

              <p className="text-xs text-[#D9DEE5]/90 leading-relaxed font-sans bg-[#0C1421]/60 p-3 rounded border border-[#1F4E79]/40 mb-4 line-clamp-4">
                {selectedMapRegion.description}
              </p>

              <div className="space-y-2 text-xs mb-6">
                <div className="flex justify-between border-b border-[#1F4E79]/30 pb-1">
                  <span className="text-[#CBD5E1] font-serif">Толгой овог:</span>
                  <span className="font-royal font-bold text-[#FFFFFF]">{selectedMapRegion.leadingHouse}</span>
                </div>
                <div className="flex justify-between border-b border-[#1F4E79]/30 pb-1">
                  <span className="text-[#CBD5E1] font-serif">Газрын тэргүүн:</span>
                  <span className="font-royal text-[#E2E8F0]">{selectedMapRegion.regionalLeader}</span>
                </div>
                <div className="flex justify-between border-b border-[#1F4E79]/30 pb-1">
                  <span className="text-[#CBD5E1] font-serif">Жилийн татвар:</span>
                  <span className="font-mono text-[#D9DEE5]">{selectedMapRegion.tax}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('regions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-gradient-to-r from-[#142B4A] via-[#1F4E79] to-[#142B4A] hover:from-[#1F4E79] hover:to-[#2A75D3] text-[#FFFFFF] border border-[#CBD5E1] rounded font-royal text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Бүс нутгийн бүрэн архивыг үзэх</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </OrnateFrame>
          ) : (
            <OrnateFrame variant="minimal" padding="p-6">
              <div className="text-center text-xs text-[#D9DEE5]/60 font-serif">
                Газрын зураг дээрх бүсийг дарж мэдээлэл авна уу.
              </div>
            </OrnateFrame>
          )}
        </div>

      </div>
    </section>
  );
};
