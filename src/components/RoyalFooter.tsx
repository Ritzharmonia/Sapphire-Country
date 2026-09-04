import React from 'react';
import { Crown, FileJson, ArrowUp } from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';

export const RoyalFooter: React.FC = () => {
  const { data, isEditMode, toggleEditMode, openModal } = useKingdom();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070B12] border-t-2 border-[#CBD5E1]/40 text-[#D9DEE5] pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient & Starlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#142B4A_0%,_transparent_70%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Symmetrical Heraldic Divider */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1]/40 to-[#CBD5E1]" />
          <div className="flex items-center gap-2 text-[#CBD5E1]">
            <span>⚜</span>
            <Crown className="w-5 h-5 text-[#E2E8F0]" />
            <span>⚜</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#CBD5E1]/40 to-[#CBD5E1]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Crest & Realm Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#CBD5E1] bg-[#142B4A] flex items-center justify-center shadow-lg">
                <img
                  src={data.crest?.imageUrl}
                  alt="Sapphire Crest"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 object-contain rounded-full"
                />
              </div>
              <div>
                <h4 className="font-royal text-base font-bold text-[#FFFFFF]">
                  SAPPHIRE COUNTRY
                </h4>
                <p className="text-xs font-serif text-[#CBD5E1]">
                  {data.overview?.officialNameMongolian || 'Саффир улс'}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D9DEE5]/70 font-sans leading-relaxed">
              Хаан угсааны өв соёл, язгууртны эрэмбэ, бүс нутгуудын түүх, соёл, газар нутгийн үнэлгээг хадгалан хамгаалах төрийн албан ёсны цахим архив.
            </p>

            <div className="text-[11px] font-mono text-[#E2E8F0] border border-[#CBD5E1]/30 bg-[#0C1421] p-2 rounded">
              Харьяалал: {data.overview?.jurisdiction || 'Skill Faith ZGRP'}
            </div>
          </div>

          {/* Column 2: Quick Archives */}
          <div>
            <h5 className="font-royal text-xs uppercase tracking-widest text-[#FFFFFF] font-bold mb-4 border-b border-[#CBD5E1]/20 pb-2">
              АРХИВЫН ХЭСГҮҮД
            </h5>
            <ul className="space-y-2 text-xs font-serif">
              <li>
                <a href="#overview" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Төрийн Ерөнхий Тойм (Overview)
                </a>
              </li>
              <li>
                <a href="#royal-titles" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Хаан Угсааны Хэргэм (Royal Titles)
                </a>
              </li>
              <li>
                <a href="#court-ranks" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Ордны Дээд Албан Тушаал (Court)
                </a>
              </li>
              <li>
                <a href="#court-nobility" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Язгууртны Эрэмбэ (Nobility)
                </a>
              </li>
              <li>
                <a href="#regions" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Саффирын Бүс Нутгууд (Regions)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Imperial Protocol & Land */}
          <div>
            <h5 className="font-royal text-xs uppercase tracking-widest text-[#FFFFFF] font-bold mb-4 border-b border-[#CBD5E1]/20 pb-2">
              ГАЗАР БА ХААН ТӨР
            </h5>
            <ul className="space-y-2 text-xs font-serif">
              <li>
                <a href="#land-economy" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Газрын Үнэ ба Сангийн Татвар
                </a>
              </li>
              <li>
                <a href="#realm-map" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Эзэнт Гүрний Газар Зүйн Зураг
                </a>
              </li>
              <li>
                <a href="#chronicles" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ⚜ Хааны Зарлиг ба Түүхийн Тэмдэглэл
                </a>
              </li>
              <li>
                <a href="#sapphire-relic" className="hover:text-[#FFFFFF] hover:translate-x-1 inline-block transition-transform text-[#38BDF8]">
                  ⚜ Үргэлж Гэрэл Цацруулах Индранил
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal('export_import')}
                  className="flex items-center gap-1.5 text-xs text-[#E2E8F0] hover:underline font-mono"
                >
                  <FileJson className="w-3.5 h-3.5" />
                  <span>Архив Хадгалах / JSON Татах</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Sovereign Seal & CMS Access */}
          <div className="space-y-3">
            <h5 className="font-royal text-xs uppercase tracking-widest text-[#FFFFFF] font-bold mb-4 border-b border-[#CBD5E1]/20 pb-2">
              ТӨРИЙН ДАРХАН БАЙДАЛ
            </h5>
            <p className="text-xs text-[#D9DEE5]/70 font-serif leading-relaxed">
              Төрийн Тэргүүн: <strong className="text-[#FFFFFF]">{data.overview?.monarch}</strong>
              <br />
              Төрийн Бэлгэдэл: <span className="text-[#2A75D3] font-bold">Индранил чулуу (Blue Sapphire)</span>
            </p>

            <button
              type="button"
              onClick={toggleEditMode}
              className="w-full py-2 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFFFFF] border border-[#CBD5E1]/50 rounded-lg text-xs font-royal tracking-wider transition-all flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <Crown className="w-3.5 h-3.5 text-[#CBD5E1]" />
              <span>{isEditMode ? '🔒 Засварлах горимоос гарах (Түгжих)' : '🔒 Админ нэвтрэх (PIN)'}</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-8 border-t border-[#CBD5E1]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9DEE5]/60 font-serif">
          <div>
            © {new Date().getFullYear()} SAPPHIRE COUNTRY (Саффир улс). Бүх эрх хуулиар хамгаалагдсан.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#CBD5E1]">
              Skill Faith ZGRP Imperial Registry
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFFFFF] border border-[#CBD5E1]/40 transition-colors"
              title="Дээш гүйлгэх"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
