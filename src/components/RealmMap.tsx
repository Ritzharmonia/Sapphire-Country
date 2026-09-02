import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Eye, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  Shield 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { Region } from '../types';

export const RealmMap: React.FC = () => {
  const { data, updateRegion, isEditMode } = useKingdom();
  const [selectedMapRegion, setSelectedMapRegion] = useState<Region | null>(data.regions[0] || null);

  const getRegionCoords = (region: Region, idx: number) => {
    if (region.mapCoordinates) {
      return region.mapCoordinates;
    }
    // Default symmetrical coordinates based on region type / index
    if (region.id.includes('celestine')) return { x: 50, y: 50 };
    if (region.id.includes('monolith')) return { x: 50, y: 20 };
    if (region.id.includes('sunset')) return { x: 22, y: 52 };
    if (region.id.includes('ludwin')) return { x: 78, y: 52 };
    if (region.id.includes('elynthia')) return { x: 50, y: 82 };
    
    // Spread around
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
          <OrnateFrame variant="gold" glow padding="p-3 sm:p-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-lg bg-[#0C1421] border border-[#1F4E79]/80 overflow-hidden shadow-2xl flex items-center justify-center">
              
              {/* Antique Parchment & Deep Sapphire Radial Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#142B4A_0%,_#0C1421_75%,_#070B12_100%)] opacity-95" />
              
              {/* Heraldic Grid Lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C9A85C_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#C9A85C]/20" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#C9A85C]/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full border border-[#C9A85C]/25 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-[#1F4E79]/40 pointer-events-none" />

              {/* Decorative Compass Rose in corner */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-60">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Compass className="w-full h-full text-[#C9A85C] animate-spin-slow" />
                  <span className="absolute top-0 text-[9px] font-mono font-bold text-[#E8C87A]">N</span>
                  <span className="absolute bottom-0 text-[9px] font-mono font-bold text-[#C9A85C]">S</span>
                  <span className="absolute right-0 text-[9px] font-mono font-bold text-[#C9A85C]">E</span>
                  <span className="absolute left-0 text-[9px] font-mono font-bold text-[#C9A85C]">W</span>
                </div>
              </div>

              {/* Map Title Legend */}
              <div className="absolute top-4 left-4 pointer-events-none p-2 rounded bg-[#0C1421]/80 border border-[#C9A85C]/30 text-left">
                <div className="font-royal text-[11px] font-bold text-[#FFF0CA] tracking-wider">
                  SAPPHIRE IMPERIAL DOMAIN
                </div>
                <div className="font-serif text-[9px] text-[#C9A85C] uppercase tracking-widest">
                  Cartographia Regalis
                </div>
              </div>

              {/* Region Territorial Nodes & Pins */}
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
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                    onClick={() => setSelectedMapRegion(region)}
                  >
                    {/* Pulsing ring for active / capital */}
                    <div className={`absolute -inset-2 rounded-full border transition-all ${
                      isSelected 
                        ? 'border-[#E8C87A] scale-125 animate-ping opacity-60' 
                        : 'border-[#C9A85C]/30 scale-100 opacity-0 group-hover:opacity-100'
                    }`} />

                    {/* Pin Node */}
                    <div className={`relative flex items-center justify-center px-2.5 py-1 rounded-full border shadow-xl transition-all transform duration-300 ${
                      isSelected
                        ? 'bg-[#C9A85C] text-[#0C1421] border-[#FFF0CA] scale-110 font-bold shadow-[0_0_20px_rgba(201,168,92,0.6)]'
                        : 'bg-[#142B4A]/90 hover:bg-[#1F4E79] text-[#FFF0CA] border-[#C9A85C]/60 group-hover:scale-105'
                    }`}>
                      <MapPin className={`w-3 h-3 mr-1 ${isSelected ? 'text-[#0C1421]' : 'text-[#C9A85C]'}`} />
                      <span className="text-[10px] sm:text-xs font-royal whitespace-nowrap">
                        {region.name}
                      </span>
                    </div>

                    {/* Mini House Badge below pin */}
                    <div className="text-center mt-1">
                      <span className="text-[9px] font-serif text-[#D9DEE5]/80 bg-[#0C1421]/90 px-1.5 py-0.2 rounded border border-[#C9A85C]/20 whitespace-nowrap shadow">
                        {region.leadingHouse}
                      </span>
                    </div>
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
              <div className="flex items-center justify-between border-b border-[#C9A85C]/30 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C9A85C]" />
                  <span className="font-royal text-xs uppercase tracking-widest text-[#FFF0CA] font-bold">
                    БҮСИЙН ТОВЧ МЭДЭЭЛЭЛ
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C9A85C] bg-[#0C1421] px-2 py-0.5 rounded border border-[#C9A85C]/30">
                  {selectedMapRegion.areaKm2}
                </span>
              </div>

              <h4 className="text-2xl font-royal font-bold text-[#FFF0CA] mb-1">
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
                  <span className="text-[#C9A85C] font-serif">Толгой овог:</span>
                  <span className="font-royal font-bold text-[#FFF0CA]">{selectedMapRegion.leadingHouse}</span>
                </div>
                <div className="flex justify-between border-b border-[#1F4E79]/30 pb-1">
                  <span className="text-[#C9A85C] font-serif">Газрын тэргүүн:</span>
                  <span className="font-royal text-[#E8C87A]">{selectedMapRegion.regionalLeader}</span>
                </div>
                <div className="flex justify-between border-b border-[#1F4E79]/30 pb-1">
                  <span className="text-[#C9A85C] font-serif">Жилийн татвар:</span>
                  <span className="font-mono text-[#D9DEE5]">{selectedMapRegion.tax}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('regions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-gradient-to-r from-[#142B4A] via-[#1F4E79] to-[#142B4A] hover:from-[#1F4E79] hover:to-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C] rounded font-royal text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
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
