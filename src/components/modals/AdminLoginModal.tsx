import React, { useState } from 'react';
import { ShieldCheck, Lock, Key, X, AlertCircle, Sparkles } from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';

export const AdminLoginModal: React.FC = () => {
  const { showAdminLoginModal, setShowAdminLoginModal, loginAdmin } = useKingdom();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!showAdminLoginModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) {
      setError('Нууц кодоо оруулна уу');
      return;
    }
    const success = loginAdmin(pin);
    if (success) {
      setPin('');
      setError('');
    } else {
      setError('Нууц код буруу байна! (Зөвхөн админ эрхтэй хүн засах боломжтой)');
    }
  };

  const handleClose = () => {
    setShowAdminLoginModal(false);
    setPin('');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070B12]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#0C1421] border-2 border-[#C9A85C] rounded-2xl shadow-[0_0_50px_rgba(201,168,92,0.3)] p-6 sm:p-8 text-[#D9DEE5]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#142B4A]/80 hover:bg-[#1F4E79] text-[#FFF0CA] border border-[#C9A85C]/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#1F4E79] to-[#142B4A] border-2 border-[#C9A85C] flex items-center justify-center shadow-lg mb-3">
            <Lock className="w-7 h-7 text-[#E8C87A]" />
          </div>
          <h3 className="text-xl font-royal font-bold text-[#FFF0CA] tracking-wider">
            ЭЗЭН ХААНЫ АДМИН ХАНДАЛТ
          </h3>
          <p className="text-xs font-serif text-[#C9A85C] mt-1">
            (Imperial Sovereign Admin Verification)
          </p>
          <p className="text-xs text-[#D9DEE5]/70 mt-2 max-w-xs">
            Энэхүү цахим архив олон нийтэд зөвхөн <strong className="text-[#FFF0CA]">Үзэх Горим</strong> (Read-Only)-оор харагдах ба зөвхөн эзэмшигч админ нууц кодоор нэвтэрч засварлана.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-royal uppercase tracking-widest text-[#E8C87A] mb-1.5 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5" />
              <span>Админы Нууц Код / PIN:</span>
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError('');
              }}
              placeholder="Нууц кодоо оруулна уу..."
              autoFocus
              className="w-full px-4 py-3 bg-[#142B4A]/80 border-2 border-[#C9A85C]/60 focus:border-[#E8C87A] rounded-xl text-center text-lg tracking-[0.3em] font-mono text-[#FFF0CA] focus:outline-none focus:ring-2 focus:ring-[#C9A85C]/40 shadow-inner"
            />
            <div className="mt-1.5 flex items-center justify-between text-[11px] text-[#D9DEE5]/60">
              <span>Анхны үндсэн код: <code className="text-[#E8C87A] font-bold">1234</code></span>
              <span>Хаалттай горим 🔒</span>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-200 text-xs">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 py-2.5 bg-[#142B4A]/80 hover:bg-[#1F4E79] text-[#D9DEE5] border border-[#C9A85C]/40 rounded-xl text-xs font-royal tracking-wider transition-all"
            >
              Болих (Үзэх)
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-gradient-to-r from-[#C9A85C] via-[#E8C87A] to-[#C9A85C] hover:from-[#E8C87A] hover:to-[#FFF0CA] text-[#0C1421] font-bold rounded-xl text-xs font-royal tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#0C1421]" />
              <span>Нэвтрэх (Unlock)</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
