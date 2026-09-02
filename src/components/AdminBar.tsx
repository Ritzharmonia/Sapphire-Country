import React from 'react';
import { 
  ShieldAlert, 
  Eye, 
  Edit3, 
  PlusCircle, 
  Download, 
  Upload, 
  RotateCcw, 
  CheckCircle2, 
  HelpCircle,
  Lock,
  KeyRound
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';

export const AdminBar: React.FC = () => {
  const { 
    isEditMode, 
    logoutAdmin,
    openModal, 
    exportDataToJson, 
    resetToDefaults,
    hasUnsavedChanges 
  } = useKingdom();

  if (!isEditMode) return null;

  return (
    <aside aria-label="Administrator CMS Toolbar" className="sticky top-0 z-50 bg-[#0C1421]/95 border-b-2 border-[#C9A85C]/70 backdrop-blur-md px-4 py-2 text-xs text-[#D9DEE5] shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Status indicator with Immersive UI Session Ribbon */}
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A85C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9A85C]"></span>
          </span>
          <div className="flex items-center gap-2 royal-font tracking-widest text-[#FFF0CA] font-bold text-xs sm:text-sm">
            <ShieldAlert className="w-4 h-4 text-[#C9A85C]" />
            <span>SESSION: ADMIN_ACTIVE (EDITING ENABLED)</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] royal-font text-[#C9A85C] bg-[#142B4A]/80 px-2.5 py-0.5 rounded border border-[#C9A85C]/40">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>AUTOSAVE: LOCAL</span>
          </span>
        </div>

        {/* Quick actions toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Change Crest */}
          <button
            type="button"
            onClick={() => openModal('image', 'national-crest', { title: 'Улсын Төрийн Сүлд Зураг (Royal Crest)' })}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1F4E79]/90 hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C]/60 rounded transition-all text-xs royal-font shadow"
          >
            <Upload className="w-3.5 h-3.5 text-[#E8C87A]" />
            <span>Сүлд солих</span>
          </button>

          {/* Change Monarch Portrait */}
          <button
            type="button"
            onClick={() => openModal('image', 'monarch-portrait', { title: 'Төрийн Тэргүүний Хөрөг Зураг (Monarch Portrait)' })}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1F4E79]/90 hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C]/60 rounded transition-all text-xs royal-font shadow"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#E8C87A]" />
            <span>Хааны зураг</span>
          </button>

          {/* Add Region */}
          <button
            type="button"
            onClick={() => openModal('region')}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/40 rounded transition-all text-xs royal-font"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#C9A85C]" />
            <span>+ Бүс нэмэх</span>
          </button>

          {/* Add Royal Title */}
          <button
            type="button"
            onClick={() => openModal('title')}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/40 rounded transition-all text-xs royal-font"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#C9A85C]" />
            <span>+ Хэргэм</span>
          </button>

          {/* Export JSON */}
          <button
            type="button"
            onClick={exportDataToJson}
            title="Бүх архивын өгөгдлийг JSON файлаар татах"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1F4E79]/80 hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C]/40 rounded transition-all text-xs royal-font"
          >
            <Download className="w-3.5 h-3.5 text-[#FFF0CA]" />
            <span>Export JSON</span>
          </button>

          {/* Import JSON */}
          <button
            type="button"
            onClick={() => openModal('export_import')}
            title="Өмнө нь хадгалсан JSON архивыг оруулах"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1F4E79]/80 hover:bg-[#2A75D3] text-[#FFF0CA] border border-[#C9A85C]/40 rounded transition-all text-xs royal-font"
          >
            <Upload className="w-3.5 h-3.5 text-[#FFF0CA]" />
            <span>Import JSON</span>
          </button>

          {/* Reset Defaults */}
          <button
            type="button"
            onClick={resetToDefaults}
            title="Анхны байдалд сэргээх"
            className="p-1 bg-[#142B4A]/80 hover:bg-red-950 text-red-300 border border-red-500/30 rounded transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Prominent Lock & Exit Button */}
          <button
            type="button"
            onClick={logoutAdmin}
            className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-lg border border-red-500/50 shadow-lg transition-all text-xs royal-font ml-1 cursor-pointer"
            title="Засварлаж дуусаад түгжих (Lock and return to clean Read-Only view)"
          >
            <Lock className="w-3.5 h-3.5 text-amber-300" />
            <span>ТҮГЖИХ & ГАРАХ</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
