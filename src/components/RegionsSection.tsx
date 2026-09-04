import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Landmark, 
  Trees, 
  Gem, 
  Users, 
  PlusCircle, 
  Edit3, 
  Trash2
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { Region } from '../types';

export const RegionsSection: React.FC = () => {
  const { data, updateRegion, deleteRegion, isEditMode, openModal } = useKingdom();
  const [selectedRegionId, setSelectedRegionId] = useState<string>(data.regions[0]?.id || 'region-celestine');
  const [activeTab, setActiveTab] = useState<'overview' | 'buildings' | 'nature' | 'products' | 'estates'>('overview');

  const selectedRegion = data.regions.find((r) => r.id === selectedRegionId) || data.regions[0];

  const handleOpenEditModal = (region: Region) => {
    openModal('region', region.id, { region });
  };

  return (
    <section id="regions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE V"
        titleMongolian="САФФИРЫН БҮС НУТГУУД"
        titleEnglish="REGIONS OF SAPPHIRE"
        subtitle="Саффир улсын газар нутаг, нийслэл хот, бүс нутгуудын язгууртны овог, засаг захиргаа, эдийн засаг болон байгалийн өвөрмөц бүтэц."
      />

      {/* Region Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {data.regions.map((region) => {
          const isSelected = region.id === selectedRegionId;
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedRegionId(region.id)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-royal tracking-wider transition-all duration-300 flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#CBD5E1] to-[#E2E8F0] text-[#0C1421] font-bold shadow-[0_0_25px_rgba(226,232,240,0.3)] scale-105 border border-[#FFFFFF]'
                  : 'bg-[#142B4A]/80 hover:bg-[#1F4E79] text-[#D9DEE5] border border-[#CBD5E1]/30'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0C1421]' : 'text-[#CBD5E1]'}`} />
              <span>{region.name}</span>
              <span className={`text-[10px] font-serif uppercase tracking-normal ${isSelected ? 'text-[#0C1421]/80' : 'text-[#D9DEE5]/60'}`}>
                ({region.englishName})
              </span>
            </button>
          );
        })}

        {isEditMode && (
          <button
            type="button"
            onClick={() => openModal('region')}
            className="px-3.5 py-2.5 rounded-lg text-xs font-royal tracking-wider bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFFFFF] border border-[#CBD5E1] flex items-center gap-1.5 shadow-lg transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>+ Шинэ Бүс (Add Region)</span>
          </button>
        )}
      </div>

      {/* Selected Region Detailed Dossier */}
      {selectedRegion && (
        <OrnateFrame variant="platinum" glow padding="p-6 sm:p-10" className="transition-all duration-500">
          
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#CBD5E1]/30 pb-6 mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#142B4A] border border-[#CBD5E1]/40 text-[11px] font-mono text-[#E2E8F0] uppercase mb-2">
                <Compass className="w-3 h-3 text-[#CBD5E1]" />
                <EditableText
                  value={selectedRegion.geographicPosition}
                  onSave={(val) => updateRegion(selectedRegion.id, { geographicPosition: val })}
                  label="Бүсийн байрлал"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-royal text-[#FFFFFF] tracking-wide flex items-center gap-3">
                <EditableText
                  value={selectedRegion.name}
                  onSave={(val) => updateRegion(selectedRegion.id, { name: val })}
                  label="Бүсийн нэр"
                  className="text-3xl sm:text-4xl font-extrabold font-royal text-[#FFFFFF]"
                />
                <span className="text-xl sm:text-2xl font-serif italic font-normal text-[#D9DEE5]/70">
                  / {selectedRegion.englishName}
                </span>
              </h3>
            </div>

            {/* Edit / Delete Buttons */}
            <div className="flex items-center gap-2 self-start lg:self-center">
              {isEditMode && (
                <>
                  <button
                    type="button"
                    onClick={() => handleOpenEditModal(selectedRegion)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1F4E79] hover:bg-[#CBD5E1] text-[#FFFFFF] hover:text-[#0C1421] rounded border border-[#CBD5E1] text-xs font-royal transition-all shadow"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Бүх талбарыг засварлах (Edit Full Region)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`"${selectedRegion.name}" бүсийг бүрмөсөн устгах уу?`)) {
                        deleteRegion(selectedRegion.id);
                        setSelectedRegionId(data.regions[0]?.id);
                      }
                    }}
                    className="p-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 border border-red-500/40 rounded transition-all"
                    title="Устгах"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 p-4 bg-[#0C1421]/80 rounded-lg border border-[#1F4E79]/50 text-sm sm:text-base text-[#D9DEE5] leading-relaxed font-sans shadow-inner">
            <EditableText
              value={selectedRegion.description}
              onSave={(val) => updateRegion(selectedRegion.id, { description: val })}
              multiline
              label="Бүс нутгийн дэлгэрэнгүй тодорхойлолт"
              className="text-sm sm:text-base text-[#D9DEE5] leading-relaxed font-sans"
            />
          </div>

          {/* Core Stats Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
            
            {/* 1. Origin */}
            <div className="region-card p-3 rounded text-center">
              <span className="text-[10px] uppercase font-serif tracking-wider text-[#CBD5E1] block mb-1">Гарал үүсэл</span>
              <div className="royal-font text-xs sm:text-sm font-bold text-[#FFFFFF]">
                <EditableText
                  value={selectedRegion.origin}
                  onSave={(val) => updateRegion(selectedRegion.id, { origin: val })}
                  label="Гарал үүсэл"
                />
              </div>
            </div>

            {/* 2. Area */}
            <div className="region-card p-3 rounded text-center">
              <span className="text-[10px] uppercase font-serif tracking-wider text-[#CBD5E1] block mb-1">Газар нутаг</span>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#D9DEE5]">
                <EditableText
                  value={selectedRegion.areaKm2}
                  onSave={(val) => updateRegion(selectedRegion.id, { areaKm2: val })}
                  label="Газар нутгийн хэмжээ"
                />
              </div>
            </div>

            {/* 3. Leading House */}
            <div className="region-card p-3 rounded text-center">
              <span className="text-[10px] uppercase font-serif tracking-wider text-[#CBD5E1] block mb-1">Толгой овог</span>
              <div className="royal-font text-xs sm:text-sm font-bold text-[#FFFFFF]">
                <EditableText
                  value={selectedRegion.leadingHouse}
                  onSave={(val) => updateRegion(selectedRegion.id, { leadingHouse: val })}
                  label="Толгой овог"
                />
              </div>
            </div>

            {/* 4. Leader */}
            <div className="region-card p-3 rounded text-center bg-gradient-to-b from-[#142B4A]/90 to-[#0C1421] border-[#CBD5E1]/50">
              <span className="text-[10px] uppercase font-serif tracking-wider text-[#E2E8F0] font-bold block mb-1">Газрын тэргүүн</span>
              <div className="royal-font text-xs sm:text-sm font-extrabold text-[#FFFFFF]">
                <EditableText
                  value={selectedRegion.regionalLeader}
                  onSave={(val) => updateRegion(selectedRegion.id, { regionalLeader: val })}
                  label="Газрын тэргүүн"
                />
              </div>
            </div>

            {/* 5. Concentrated Houses */}
            <div className="region-card p-3 rounded text-center">
              <span className="text-[10px] uppercase font-serif tracking-wider text-[#CBD5E1] block mb-1">Төвлөрсөн овог</span>
              <div className="body-font text-xs text-[#D9DEE5]">
                <EditableText
                  value={selectedRegion.concentratedHouses?.join(', ') || ''}
                  onSave={(val) => updateRegion(selectedRegion.id, { concentratedHouses: val.split(',').map(s => s.trim()) })}
                  label="Төвлөрсөн овгууд (таслалаар)"
                />
              </div>
            </div>

            {/* 6. Tax */}
            <div className="region-card p-3 rounded text-center">
              <span className="text-[10px] uppercase font-serif tracking-wider text-[#CBD5E1] block mb-1">Татвар</span>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#E2E8F0]">
                <EditableText
                  value={selectedRegion.tax}
                  onSave={(val) => updateRegion(selectedRegion.id, { tax: val })}
                  label="Татвар"
                />
              </div>
            </div>

          </div>

          {/* Sub-sections tabs: Buildings, Nature, Products, Estates */}
          <div className="border-t border-[#CBD5E1]/30 pt-6">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-1.5 rounded text-xs font-serif tracking-wider uppercase transition-all ${
                  activeTab === 'overview'
                    ? 'bg-[#CBD5E1] text-[#0C1421] font-bold'
                    : 'bg-[#142B4A]/60 text-[#D9DEE5] hover:bg-[#1F4E79]'
                }`}
              >
                Бүтэц ба Байгууламж (Buildings)
              </button>

              {selectedRegion.naturalFeatures && selectedRegion.naturalFeatures.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab('nature')}
                  className={`px-3.5 py-1.5 rounded text-xs font-serif tracking-wider uppercase transition-all ${
                    activeTab === 'nature'
                      ? 'bg-[#CBD5E1] text-[#0C1421] font-bold'
                      : 'bg-[#142B4A]/60 text-[#D9DEE5] hover:bg-[#1F4E79]'
                  }`}
                >
                  Байгалийн Онцлог (Nature)
                </button>
              )}

              {selectedRegion.mainProducts && selectedRegion.mainProducts.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab('products')}
                  className={`px-3.5 py-1.5 rounded text-xs font-serif tracking-wider uppercase transition-all ${
                    activeTab === 'products'
                      ? 'bg-[#CBD5E1] text-[#0C1421] font-bold'
                      : 'bg-[#142B4A]/60 text-[#D9DEE5] hover:bg-[#1F4E79]'
                  }`}
                >
                  Гол Бүтээгдэхүүн (Products)
                </button>
              )}

              {selectedRegion.estateHolders && selectedRegion.estateHolders.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab('estates')}
                  className={`px-3.5 py-1.5 rounded text-xs font-serif tracking-wider uppercase transition-all ${
                    activeTab === 'estates'
                      ? 'bg-[#CBD5E1] text-[#0C1421] font-bold'
                      : 'bg-[#142B4A]/60 text-[#D9DEE5] hover:bg-[#1F4E79]'
                  }`}
                >
                  Эдлэнтэй Иргэд (Estates)
                </button>
              )}
            </div>

            {/* Tab 1: Main Buildings */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1] flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#CBD5E1]" />
                  <span>ГОЛ БАЙГУУЛАМЖУУД ({selectedRegion.mainBuildings?.length || 0})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {selectedRegion.mainBuildings?.map((bldg, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#0C1421]/90 rounded border border-[#1F4E79]/40 hover:border-[#CBD5E1]/50 flex items-center gap-2.5 text-xs text-[#FFFFFF] font-royal shadow-sm"
                    >
                      <span className="text-[#CBD5E1] text-xs">⚜</span>
                      <span>{bldg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Natural Features */}
            {activeTab === 'nature' && selectedRegion.naturalFeatures && (
              <div className="space-y-4">
                <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1] flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#CBD5E1]" />
                  <span>БАЙГАЛИЙН ОНЦЛОГ ({selectedRegion.naturalFeatures.length})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {selectedRegion.naturalFeatures.map((nat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#0C1421]/90 rounded border border-[#1F4E79]/40 text-xs text-[#D9DEE5] flex items-center gap-2"
                    >
                      <span className="text-[#2A75D3]">✦</span>
                      <span>{nat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Main Products */}
            {activeTab === 'products' && selectedRegion.mainProducts && (
              <div className="space-y-4">
                <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1] flex items-center gap-2">
                  <Gem className="w-4 h-4 text-[#CBD5E1]" />
                  <span>ГОЛ ҮЙЛДВЭРЛЭЛ, БҮТЭЭГДЭХҮҮН ({selectedRegion.mainProducts.length})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedRegion.mainProducts.map((prod, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-[#142B4A]/70 border border-[#CBD5E1]/40 text-xs font-sans text-[#FFFFFF] shadow-sm"
                    >
                      ⚜ {prod}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Estate Holders */}
            {activeTab === 'estates' && selectedRegion.estateHolders && (
              <div className="space-y-4">
                <div className="text-xs uppercase font-serif tracking-wider text-[#CBD5E1] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#CBD5E1]" />
                  <span>ЭДЛЭНТЭЙ ИРГЭД, ЯЗГУУРТНУУД</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedRegion.estateHolders.map((holder, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 bg-[#0C1421] border border-[#CBD5E1]/50 rounded text-xs font-royal text-[#E2E8F0]"
                    >
                      ⚜ {holder}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Historical Notes Footer */}
            {selectedRegion.historicalNotes && (
              <div className="mt-8 pt-4 border-t border-[#CBD5E1]/20 text-xs text-[#D9DEE5]/80 font-serif italic">
                <span className="text-[#CBD5E1] not-italic font-bold mr-2">Түүхэн тэмдэглэл:</span>
                <EditableText
                  value={selectedRegion.historicalNotes}
                  onSave={(val) => updateRegion(selectedRegion.id, { historicalNotes: val })}
                  multiline
                  label="Түүхэн тэмдэглэл"
                  className="text-xs text-[#D9DEE5]/80 font-serif italic"
                />
              </div>
            )}

          </div>
        </OrnateFrame>
      )}
    </section>
  );
};
