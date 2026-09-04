import React, { useState } from 'react';
import { 
  Coins, 
  Calculator, 
  PlusCircle, 
  Trash2 
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';
import { OrnateFrame } from './ui/OrnateFrame';
import { SectionHeading } from './ui/SectionHeading';
import { LandValueItem } from '../types';

export const LandEconomySection: React.FC = () => {
  const { data, updateLandValue, addLandValue, deleteLandValue, isEditMode } = useKingdom();

  // Interactive Royal Land Calculator State
  const [calcRegionId, setCalcRegionId] = useState<string>(data.landValues[0]?.id || 'land-01');
  const [calcAreaValue, setCalcAreaValue] = useState<number>(5);
  const [calcUnit, setCalcUnit] = useState<'ha' | 'km2'>('ha');

  const activeLand = data.landValues.find((l) => l.id === calcRegionId) || data.landValues[0];

  const calculateTotalValuation = () => {
    if (!activeLand) return 0;
    const rate = calcUnit === 'ha' ? activeLand.pricePerHaNumeric : activeLand.pricePerKm2Numeric;
    return calcAreaValue * rate;
  };

  const calculateAnnualTax = () => {
    // 3,000 coins base imperial tax per estate unit
    return 3000 + Math.round(calculateTotalValuation() * 0.005);
  };

  const handleAddNewLand = () => {
    const newLand: LandValueItem = {
      id: `land-${Date.now()}`,
      regionId: `custom-region-${Date.now()}`,
      regionName: 'Шинэ Бүс Нутаг (New Region)',
      zoneTitle: 'Шинэ Эзэмшлийн Бүс',
      pricePerHa: '500,000 зоос',
      pricePerHaNumeric: 500000,
      pricePerKm2: '1,500,000 зоос',
      pricePerKm2Numeric: 1500000,
      economicNotes: 'Эдийн засгийн онцлог, эдлэнгийн үнэлгээ.'
    };
    addLandValue(newLand);
  };

  return (
    <section id="land-economy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        number="ARCHIVE VI"
        titleMongolian="ГАЗРЫН ҮНЭ БА ЭДИЙН ЗАСАГ"
        titleEnglish="LAND VALUE & IMPERIAL ECONOMY"
        subtitle="Саффир улсын таван үндсэн бүс нутгийн газар эзэмшлийн албан ёсны үнэлгээ, га газрын ханш болон эзэнт гүрний төрийн сангийн татвар."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Official Land Value Table (The 5 Regions) */}
        <div className="lg:col-span-7 flex flex-col">
          <OrnateFrame variant="platinum" glow padding="p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-[#CBD5E1]/30 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Coins className="w-5 h-5 text-[#CBD5E1]" />
                <h3 className="font-royal text-sm sm:text-base uppercase tracking-widest text-[#FFFFFF] font-bold">
                  БҮС НУТГИЙН АЛБАН ЁСНЫ ҮНЭЛГЭЭ
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#CBD5E1] uppercase px-2 py-0.5 rounded bg-[#142B4A]/60 border border-[#CBD5E1]/30">
                ROYAL COIN VALUATION
              </span>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#CBD5E1]/40 text-xs font-serif uppercase tracking-wider text-[#CBD5E1]">
                    <th className="py-3 px-3">Бүс Нутаг / Region</th>
                    <th className="py-3 px-3 text-right">1 га (Hectare)</th>
                    <th className="py-3 px-3 text-right">1 км² (Sq. Km)</th>
                    {isEditMode && <th className="py-3 px-2 text-center">Засах</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1F4E79]/30 text-xs sm:text-sm font-sans">
                  {data.landValues.map((land) => (
                    <tr 
                      key={land.id}
                      className="hover:bg-[#142B4A]/40 transition-colors group/row"
                    >
                      {/* Region Title */}
                      <td className="py-3.5 px-3">
                        <div className="font-royal font-bold text-[#FFFFFF]">
                          <EditableText
                            value={land.regionName}
                            onSave={(val) => updateLandValue(land.id, { regionName: val })}
                            label="Бүсийн нэр"
                          />
                        </div>
                        {land.economicNotes && (
                          <div className="text-[11px] text-[#D9DEE5]/60 font-serif italic line-clamp-1 mt-0.5">
                            <EditableText
                              value={land.economicNotes}
                              onSave={(val) => updateLandValue(land.id, { economicNotes: val })}
                              label="Тайлбар"
                            />
                          </div>
                        )}
                      </td>

                      {/* 1 ha price */}
                      <td className="py-3.5 px-3 text-right font-mono font-bold text-[#E2E8F0]">
                        <EditableText
                          value={land.pricePerHa}
                          onSave={(val) => {
                            const num = parseInt(val.replace(/\D/g, '')) || 0;
                            updateLandValue(land.id, { pricePerHa: val, pricePerHaNumeric: num });
                          }}
                          label="1 га үнэ"
                          className="font-mono font-bold text-[#E2E8F0]"
                        />
                      </td>

                      {/* 1 km2 price */}
                      <td className="py-3.5 px-3 text-right font-mono text-[#D9DEE5]">
                        <EditableText
                          value={land.pricePerKm2}
                          onSave={(val) => {
                            const num = parseInt(val.replace(/\D/g, '')) || 0;
                            updateLandValue(land.id, { pricePerKm2: val, pricePerKm2Numeric: num });
                          }}
                          label="1 км² үнэ"
                          className="font-mono text-[#D9DEE5]"
                        />
                      </td>

                      {/* Admin Actions */}
                      {isEditMode && (
                        <td className="py-3.5 px-2 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`"${land.regionName}" газрын үнэлгээг устгах уу?`)) {
                                deleteLandValue(land.id);
                              }
                            }}
                            className="p-1 hover:bg-red-950 text-red-400 hover:text-red-200 rounded"
                            title="Устгах"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Admin Add Button */}
            {isEditMode && (
              <div className="mt-4 pt-4 border-t border-[#CBD5E1]/20 flex justify-end">
                <button
                  type="button"
                  onClick={handleAddNewLand}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFFFFF] border border-[#CBD5E1]/40 rounded text-xs font-royal"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-[#CBD5E1]" />
                  <span>+ Шинэ үнэлгээ нэмэх (Add Land Valuation)</span>
                </button>
              </div>
            )}
          </OrnateFrame>
        </div>

        {/* Right Column: Interactive Royal Land & Tax Calculator */}
        <div className="lg:col-span-5 flex flex-col">
          <OrnateFrame variant="sapphire" glow padding="p-6">
            <div className="flex items-center gap-2.5 border-b border-[#CBD5E1]/30 pb-4 mb-6">
              <Calculator className="w-5 h-5 text-[#CBD5E1]" />
              <div>
                <h3 className="font-royal text-sm sm:text-base uppercase tracking-widest text-[#FFFFFF] font-bold">
                  ХААНЫ САНГИЙН ТООЦООЛУУР
                </h3>
                <span className="text-[10px] font-serif uppercase tracking-wider text-[#D9DEE5]/60">
                  IMPERIAL ESTATE & TAX CALCULATOR
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4 text-xs">
              
              {/* Region Select */}
              <div>
                <label className="block text-xs uppercase font-serif text-[#CBD5E1] mb-1.5">
                  Бүс Нутаг Сонгох (Select Region):
                </label>
                <select
                  value={calcRegionId}
                  onChange={(e) => setCalcRegionId(e.target.value)}
                  className="w-full bg-[#0C1421] text-[#FFFFFF] border border-[#CBD5E1]/50 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#CBD5E1] font-royal"
                >
                  {data.landValues.map((land) => (
                    <option key={land.id} value={land.id}>
                      {land.regionName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area Amount & Unit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase font-serif text-[#CBD5E1] mb-1.5">
                    Хэмжээ (Area Amount):
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={calcAreaValue}
                    onChange={(e) => setCalcAreaValue(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full bg-[#0C1421] text-[#FFFFFF] border border-[#CBD5E1]/50 rounded-md px-3 py-2 text-xs font-mono font-bold focus:outline-none focus:ring-1 focus:ring-[#CBD5E1]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-serif text-[#CBD5E1] mb-1.5">
                    Нэгж (Unit):
                  </label>
                  <div className="flex rounded-md overflow-hidden border border-[#CBD5E1]/50">
                    <button
                      type="button"
                      onClick={() => setCalcUnit('ha')}
                      className={`flex-1 py-2 font-mono text-xs transition-colors ${
                        calcUnit === 'ha'
                          ? 'bg-[#CBD5E1] text-[#0C1421] font-bold'
                          : 'bg-[#0C1421] text-[#D9DEE5]'
                      }`}
                    >
                      га (Ha)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcUnit('km2')}
                      className={`flex-1 py-2 font-mono text-xs transition-colors ${
                        calcUnit === 'km2'
                          ? 'bg-[#CBD5E1] text-[#0C1421] font-bold'
                          : 'bg-[#0C1421] text-[#D9DEE5]'
                      }`}
                    >
                      км² (Km²)
                    </button>
                  </div>
                </div>
              </div>

              {/* Calculation Results Card */}
              <div className="mt-6 p-4 rounded-lg bg-[#0C1421]/95 border border-[#CBD5E1]/60 space-y-3 shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-serif tracking-wider text-[#CBD5E1] block">
                    Нийт Газрын Үнэлгээ (Total Valuation):
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#FFFFFF] flex items-baseline gap-1.5">
                    <span>{calculateTotalValuation().toLocaleString()}</span>
                    <span className="text-xs font-serif text-[#E2E8F0]">зоос (Coins)</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#CBD5E1]/20 flex items-center justify-between">
                  <span className="text-xs text-[#D9DEE5]/80 font-serif">
                    Улсын Сангийн Жилийн Татвар (Tax):
                  </span>
                  <span className="font-mono font-bold text-[#E2E8F0] text-sm">
                    {calculateAnnualTax().toLocaleString()} зоос
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-[#D9DEE5]/60 font-serif italic text-center pt-2">
                ⚜ Төрийн дээд зарлигаар тогтоосон албан ёсны ханш
              </div>

            </div>
          </OrnateFrame>
        </div>

      </div>
    </section>
  );
};
