import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Menu, 
  X, 
  Sparkles, 
  Edit3, 
  Eye, 
  FileJson, 
  Compass, 
  Layers,
  Lock,
  Unlock,
  ShieldCheck
} from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';

export const HeaderNav: React.FC = () => {
  const { data, isEditMode, toggleEditMode, updateField, openModal, setShowAdminLoginModal } = useKingdom();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C1421]/95 backdrop-blur-md border-b border-[#C9A85C]/30 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-[#0C1421] via-[#0C1421]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Crest Seal Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C9A85C] bg-[#142B4A] flex items-center justify-center sapphire-glow group-hover:border-[#E8C87A] transition-all transform group-hover:scale-105">
            {data.crest?.imageUrl ? (
              <img
                src={data.crest.imageUrl}
                alt="Sapphire Crest"
                referrerPolicy="no-referrer"
                className="w-7 h-7 object-contain rounded-full"
              />
            ) : (
              <Crown className="w-5 h-5 text-[#C9A85C]" />
            )}
            <div className="absolute -bottom-1 w-2 h-2 rotate-45 bg-[#C9A85C]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="ornament hidden sm:inline">✧</span>
            <div className="flex flex-col">
              <span className="font-marcellus text-sm sm:text-base font-normal tracking-[0.18em] text-[#FFF0CA] group-hover:text-[#E8C87A] transition-colors leading-tight">
                {data.crest?.customTitle || 'SAPPHIRE COUNTRY'}
              </span>
              <span className="font-cormorant text-[11px] text-[#D9DEE5]/80 tracking-widest uppercase italic">
                {data.overview?.officialNameMongolian || 'Саффир улс'}
              </span>
            </div>
            <span className="ornament hidden sm:inline">✧</span>
          </div>
        </div>

        {/* Desktop Navigation Links & Telemetry */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-1 xl:gap-2">
            {data.navigation
              .filter((item) => item.isVisible !== false)
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.targetId)}
                  className="sidebar-item px-3 py-1.5 text-xs royal-font tracking-wider uppercase text-[#D9DEE5]/80 hover:text-[#FFF0CA] rounded border border-transparent hover:border-[#C9A85C]/30 transition-all duration-200"
                >
                  {item.labelEnglish}
                </button>
              ))}
          </nav>

          {/* Telemetry Metric Badges */}
          <div className="hidden xl:flex items-center gap-4 text-[10px] royal-font tracking-widest text-[#C9A85C] border-l border-[#C9A85C]/30 pl-4 py-1">
            <span className="opacity-80">ER: 1424</span>
            <span className="w-1 h-1 bg-[#C9A85C] rounded-full"></span>
            <span className="opacity-80">POP: 12.4M</span>
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Administrator / Visitor Toggle Button with PIN Lock */}
          <button
            type="button"
            onClick={toggleEditMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-royal tracking-wider transition-all duration-200 shadow-md ${
              isEditMode
                ? 'bg-gradient-to-r from-[#C9A85C] to-[#E8C87A] text-[#0C1421] font-bold border border-[#FFF0CA]'
                : 'bg-[#142B4A]/80 hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/40'
            }`}
            title={isEditMode ? 'Засварлах горимоос гарах / Түгжих (Exit & Lock Admin Mode)' : 'Админ нэвтрэх (Admin Login with PIN)'}
          >
            {isEditMode ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-[#0C1421]" />
                <span className="hidden sm:inline">Админ горим (Түгжих)</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-[#C9A85C]" />
                <span className="hidden sm:inline">Админ нэвтрэх</span>
              </>
            )}
          </button>

          {/* Quick JSON Backup Button ONLY in Edit Mode */}
          {isEditMode && (
            <button
              type="button"
              onClick={() => openModal('export_import')}
              className="p-1.5 bg-[#142B4A]/60 hover:bg-[#1F4E79] text-[#C9A85C] rounded border border-[#C9A85C]/30 text-xs hidden sm:flex items-center justify-center transition-all"
              title="JSON Архив Татах / Хуулах"
            >
              <FileJson className="w-4 h-4" />
            </button>
          )}

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/40 rounded lg:hidden transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C1421]/95 border-b border-[#C9A85C]/40 backdrop-blur-xl px-4 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C9A85C] mb-2 px-2">
              — АРХИВЫН ЦЭС / NAVIGATION —
            </div>
            {data.navigation
              .filter((item) => item.isVisible !== false)
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.targetId)}
                  className="flex items-center justify-between px-4 py-2.5 text-left text-sm font-serif tracking-wider uppercase text-[#D9DEE5] hover:text-[#FFF0CA] hover:bg-[#142B4A]/80 border border-transparent hover:border-[#C9A85C]/30 rounded transition-all"
                >
                  <span>{item.labelEnglish}</span>
                  <span className="text-xs text-[#C9A85C] font-sans opacity-70">
                    {item.labelMongolian}
                  </span>
                </button>
              ))}

            <div className="border-t border-[#C9A85C]/30 my-2 pt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleEditMode();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#C9A85C] text-[#0C1421] font-bold rounded text-xs font-royal tracking-wider"
              >
                {isEditMode ? <Eye className="w-4 h-4" /> : <Crown className="w-4 h-4" />}
                <span>{isEditMode ? 'Үзэгчийн Горим (Visitor Mode)' : 'Эзэн Хааны Засварлах Горим (Admin Mode)'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('export_import');
                }}
                className="w-full flex items-center justify-center gap-2 py-2 bg-[#142B4A] text-[#FFF0CA] border border-[#C9A85C]/40 rounded text-xs font-serif tracking-wider"
              >
                <FileJson className="w-4 h-4 text-[#C9A85C]" />
                <span>JSON Архив Татах / Хуулах</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
