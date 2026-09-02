import React from 'react';
import { Crown, Sparkles, Shield, Heart, FileJson, ArrowUp } from 'lucide-react';
import { useKingdom } from '../context/KingdomContext';
import { EditableText } from './ui/EditableText';

export const RoyalFooter: React.FC = () => {
  const { data, updateField, isEditMode, toggleEditMode, openModal } = useKingdom();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070B12] border-t-2 border-[#C9A85C]/40 text-[#D9DEE5] pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient & Starlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#142B4A_0%,_transparent_70%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Symmetrical Heraldic Divider */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A85C]/40 to-[#C9A85C]" />
          <div className="flex items-center gap-2 text-[#C9A85C]">
            <span>✦</span>
            <Crown className="w-5 h-5 text-[#E8C87A]" />
            <span>✦</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A85C]/40 to-[#C9A85C]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Crest & Realm Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A85C] bg-[#142B4A] flex items-center justify-center shadow-lg">
                <img
                  src={data.crest?.imageUrl}
                  alt="Sapphire Crest"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 object-contain rounded-full"
                />
              </div>
              <div>
                <h4 className="font-royal text-base font-bold text-[#FFF0CA]">
                  SAPPHIRE COUNTRY
                </h4>
                <p className="text-xs font-serif text-[#C9A85C]">
                  {data.overview?.officialNameMongolian || 'Саффир улс'}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D9DEE5]/70 font-sans leading-relaxed">
              Хаан угсааны өв соёл, язгууртны эрэмбэ, бүс нутгуудын түүх, соёл, газар нутгийн үнэлгээг хадгалан хамгаалах төрийн албан ёсны цахим архив.
            </p>

            <div className="text-[11px] font-mono text-[#E8C87A] border border-[#C9A85C]/30 bg-[#0C1421] p-2 rounded">
              Харьяалал: {data.overview?.jurisdiction || 'Skill Faith ZGRP'}
            </div>
          </div>

          {/* Column 2: Quick Archives */}
          <div>
            <h5 className="font-royal text-xs uppercase tracking-widest text-[#FFF0CA] font-bold mb-4 border-b border-[#C9A85C]/20 pb-2">
              АРХИВЫН ХЭСГҮҮД
            </h5>
            <ul className="space-y-2 text-xs font-serif">
              <li>
                <a href="#overview" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Төрийн Ерөнхий Тойм (Overview)
                </a>
              </li>
              <li>
                <a href="#royal-titles" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Хаан Угсааны Хэргэм (Royal Titles)
                </a>
              </li>
              <li>
                <a href="#court-ranks" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Ордны Дээд Албан Тушаал (Court)
                </a>
              </li>
              <li>
                <a href="#court-nobility" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Язгууртны Эрэмбэ (Nobility)
                </a>
              </li>
              <li>
                <a href="#regions" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Саффирын Бүс Нутгууд (Regions)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Imperial Protocol & Land */}
          <div>
            <h5 className="font-royal text-xs uppercase tracking-widest text-[#FFF0CA] font-bold mb-4 border-b border-[#C9A85C]/20 pb-2">
              ГАЗАР БА ХААН ТӨР
            </h5>
            <ul className="space-y-2 text-xs font-serif">
              <li>
                <a href="#land-economy" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Газрын Үнэ ба Сангийн Татвар
                </a>
              </li>
              <li>
                <a href="#realm-map" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Эзэнт Гүрний Газар Зүйн Зураг
                </a>
              </li>
              <li>
                <a href="#chronicles" className="hover:text-[#FFF0CA] hover:translate-x-1 inline-block transition-transform text-[#D9DEE5]/80">
                  ❖ Хааны Зарлиг ба Түүхийн Тэмдэглэл
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal('export_import')}
                  className="flex items-center gap-1.5 text-xs text-[#E8C87A] hover:underline font-mono"
                >
                  <FileJson className="w-3.5 h-3.5" />
                  <span>Архив Хадгалах / JSON Татах</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Sovereign Seal & CMS Access */}
          <div className="space-y-3">
            <h5 className="font-royal text-xs uppercase tracking-widest text-[#FFF0CA] font-bold mb-4 border-b border-[#C9A85C]/20 pb-2">
              ТӨРИЙН ДАРХАН БАЙДАЛ
            </h5>
            <p className="text-xs text-[#D9DEE5]/70 font-serif leading-relaxed">
              Төрийн Тэргүүн: <strong className="text-[#FFF0CA]">{data.overview?.monarch}</strong>
              <br />
              Төрийн Бэлгэдэл: <span className="text-[#2A75D3] font-bold">Индранил чулуу (Blue Sapphire)</span>
            </p>

            <button
              type="button"
              onClick={toggleEditMode}
              className="w-full py-2 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/50 rounded-lg text-xs font-royal tracking-wider transition-all flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <Crown className="w-3.5 h-3.5 text-[#C9A85C]" />
              <span>{isEditMode ? '🔒 Засварлах горимоос гарах (Түгжих)' : '🔒 Админ нэвтрэх (PIN)'}</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-8 border-t border-[#C9A85C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9DEE5]/60 font-serif">
          <div>
            © {new Date().getFullYear()} SAPPHIRE COUNTRY (Саффир улс). Бүх эрх хуулиар хамгаалагдсан.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#C9A85C]">
              Skill Faith ZGRP Imperial Registry
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/40 transition-colors"
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
