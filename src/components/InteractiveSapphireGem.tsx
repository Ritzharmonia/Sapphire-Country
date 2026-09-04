import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, Gem, RefreshCw } from 'lucide-react';
import { OrnateFrame } from './ui/OrnateFrame';

interface CrystalParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  size: number;
  color: string;
  shape: 'diamond' | 'shard' | 'spark' | 'hex';
  opacity: number;
  scale: number;
  maxLife: number;
  age: number;
}

const CRYSTAL_COLORS = [
  '#38BDF8', // light sky cyan
  '#60A5FA', // bright blue
  '#2563EB', // royal sapphire blue
  '#1D4ED8', // deep sapphire
  '#93C5FD', // soft crystal
  '#E0F2FE', // platinum icy white
];

export const InteractiveSapphireGem: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [totalCrystals, setTotalCrystals] = useState<number>(0);
  const [isRadiating, setIsRadiating] = useState<boolean>(false);
  const [combo, setCombo] = useState<number>(0);
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<CrystalParticle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const nextIdRef = useRef<number>(1);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Synthesize a clean, soft crystal chime on click using Web Audio API
  const playCrystalChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Soft high crystalline harmonic chords (Sapphire crystal timbre)
      const frequencies = [880, 1108.73, 1318.51, 1760, 2217.46];
      const rootFreq = frequencies[Math.floor(Math.random() * frequencies.length)];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(rootFreq, now);
      // Slight pitch bend shimmer
      osc.frequency.exponentialRampToValueAtTime(rootFreq * 1.03, now + 0.15);

      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.58);
    } catch (e) {
      // Audio context might be restricted before user interaction, safely ignore
    }
  }, []);

  // Spawn crystal particles from center
  const spawnCrystals = useCallback((count: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const newParticles: CrystalParticle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2.5 + Math.random() * 5.5;
      const shapes: Array<'diamond' | 'shard' | 'spark' | 'hex'> = ['diamond', 'shard', 'spark', 'hex'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = CRYSTAL_COLORS[Math.floor(Math.random() * CRYSTAL_COLORS.length)];

      newParticles.push({
        id: nextIdRef.current++,
        x: centerX + (Math.random() - 0.5) * 20,
        y: centerY + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 1.5), // slight upward bias
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.18,
        size: 5 + Math.random() * 9,
        color,
        shape,
        opacity: 1,
        scale: 1,
        maxLife: 45 + Math.random() * 35,
        age: 0,
      });
    }

    particlesRef.current = [...particlesRef.current, ...newParticles].slice(-160); // Cap particles
    setTotalCrystals((prev) => prev + count);
  }, []);

  // Animation Loop for Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const remaining: CrystalParticle[] = [];

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.age++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // Gentle gravity
        p.vx *= 0.98; // Air friction
        p.rotation += p.vRot;

        const progress = p.age / p.maxLife;
        p.opacity = Math.max(0, 1 - progress);
        p.scale = Math.max(0.2, 1 - progress * 0.4);

        if (p.age < p.maxLife && p.opacity > 0.01) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = p.opacity;

          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;

          const s = p.size * p.scale;

          if (p.shape === 'diamond') {
            // Diamond crystal
            ctx.beginPath();
            ctx.moveTo(0, -s);
            ctx.lineTo(s * 0.65, 0);
            ctx.lineTo(0, s);
            ctx.lineTo(-s * 0.65, 0);
            ctx.closePath();
            ctx.fill();

            // Inner facet highlight
            ctx.fillStyle = '#FFFFFF';
            ctx.globalAlpha = p.opacity * 0.7;
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.5);
            ctx.lineTo(s * 0.25, 0);
            ctx.lineTo(0, s * 0.5);
            ctx.lineTo(-s * 0.25, 0);
            ctx.closePath();
            ctx.fill();
          } else if (p.shape === 'shard') {
            // Angular elongated crystal shard
            ctx.beginPath();
            ctx.moveTo(0, -s * 1.3);
            ctx.lineTo(s * 0.5, s * 0.7);
            ctx.lineTo(0, s * 1.1);
            ctx.lineTo(-s * 0.5, s * 0.7);
            ctx.closePath();
            ctx.fill();
          } else if (p.shape === 'hex') {
            // Hexagonal jewel particle
            ctx.beginPath();
            for (let a = 0; a < 6; a++) {
              const rad = (Math.PI / 3) * a;
              const hx = Math.cos(rad) * (s * 0.7);
              const hy = Math.sin(rad) * (s * 0.7);
              if (a === 0) ctx.moveTo(hx, hy);
              else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            ctx.fill();
          } else {
            // 4-point glittering star spark
            ctx.beginPath();
            ctx.moveTo(0, -s * 1.2);
            ctx.quadraticCurveTo(0, 0, s * 1.2, 0);
            ctx.quadraticCurveTo(0, 0, 0, s * 1.2);
            ctx.quadraticCurveTo(0, 0, -s * 1.2, 0);
            ctx.quadraticCurveTo(0, 0, 0, -s * 1.2);
            ctx.closePath();
            ctx.fill();
          }

          ctx.restore();
          remaining.push(p);
        }
      }

      particlesRef.current = remaining;
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Adjust canvas size to match container
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Combo decay
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastClickTime > 2000 && combo > 0) {
        setCombo((c) => Math.max(0, c - 1));
      }
    }, 500);
    return () => clearInterval(timer);
  }, [combo, lastClickTime]);

  const handleGemClick = () => {
    const now = Date.now();
    setClickCount((c) => c + 1);
    setCombo((c) => Math.min(25, c + 1));
    setLastClickTime(now);

    setIsRadiating(true);
    setTimeout(() => setIsRadiating(false), 450);

    // Play chime sound
    playCrystalChime();

    // Spawn 14 to 22 crystals per click
    const count = 14 + Math.floor(Math.random() * 9);
    spawnCrystals(count);
  };

  return (
    <section 
      id="sapphire-relic"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative select-none"
    >
      <OrnateFrame 
        variant="platinum" 
        glow 
        padding="p-8 sm:p-12"
        className="bg-gradient-to-b from-[#0C1421] via-[#10243E] to-[#070B12] text-center relative overflow-hidden"
      >
        {/* Soft Radial Ambient Lighting */}
        <div 
          className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.25)_0%,_transparent_70%)] pointer-events-none transition-opacity duration-300 ${
            isRadiating ? 'opacity-100 scale-110' : 'opacity-40'
          }`} 
        />

        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C1421]/90 border border-[#CBD5E1]/40 shadow-md mb-6">
          <Gem className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
          <span className="text-[10px] font-royal tracking-widest uppercase text-[#FFFFFF]">
            SAPPHIRE IMPERIAL RELIC · ТОГЛООМТ ТАЛСТ
          </span>
        </div>

        {/* Interactive Gem Pedestal Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-80 sm:h-96 flex items-center justify-center my-2 cursor-pointer group"
          onClick={handleGemClick}
        >
          {/* Particle Canvas Layer */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          />

          {/* Radiant Shockwave Rings when Clicked */}
          {isRadiating && (
            <>
              <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-[#38BDF8]/80 animate-ping pointer-events-none z-10" />
              <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-[#60A5FA]/60 animate-ping pointer-events-none z-10" style={{ animationDuration: '0.4s' }} />
            </>
          )}

          {/* Pedestal Glow Aura */}
          <div 
            className={`absolute w-48 h-60 sm:w-56 sm:h-72 rounded-[50%] bg-gradient-to-t from-[#1D4ED8]/40 via-[#38BDF8]/30 to-transparent blur-2xl transition-all duration-300 pointer-events-none ${
              isRadiating ? 'scale-125 opacity-100' : 'group-hover:scale-110 opacity-60'
            }`} 
          />

          {/* Sacred Teardrop / Pear-Cut Sapphire Gem (Дусал хэлбэрийн Sapphire Gem) */}
          <div 
            className={`relative z-10 transition-transform duration-200 transform ${
              isRadiating ? 'scale-110 -translate-y-2' : 'group-hover:scale-105 group-hover:-translate-y-1'
            }`}
          >
            <svg
              viewBox="0 0 200 280"
              className="w-40 h-56 sm:w-48 sm:h-68 drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)] transition-all duration-300"
              style={{
                filter: isRadiating
                  ? 'drop-shadow(0 0 35px rgba(56,189,248,0.95)) drop-shadow(0 0 60px rgba(37,99,235,0.7))'
                  : 'drop-shadow(0 0 18px rgba(37,99,235,0.45))'
              }}
            >
              <defs>
                {/* Outer Pear Gradient */}
                <radialGradient id="sapphireCore" cx="50%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="35%" stopColor="#2563EB" />
                  <stop offset="70%" stopColor="#1D4ED8" />
                  <stop offset="95%" stopColor="#0B1A30" />
                  <stop offset="100%" stopColor="#060C17" />
                </radialGradient>

                {/* Specular Facet Gradient */}
                <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
                </linearGradient>

                {/* Deep Facet Gradient */}
                <linearGradient id="deepFacet" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0F172A" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#1E40AF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
                </linearGradient>

                {/* Platinum Metal Prongs */}
                <linearGradient id="platinumProng" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="50%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
              </defs>

              {/* Platinum Outer Setting & Filigree Mount */}
              <path
                d="M 100 10 C 145 70 185 135 185 195 C 185 245 145 272 100 272 C 55 272 15 245 15 195 C 15 135 55 70 100 10 Z"
                fill="none"
                stroke="url(#platinumProng)"
                strokeWidth="4"
                className="opacity-80"
              />
              <path
                d="M 100 14 C 141 72 179 133 179 193 C 179 239 143 266 100 266 C 57 266 21 239 21 193 C 21 133 59 72 100 14 Z"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1"
                strokeDasharray="2 3"
                className="opacity-50"
              />

              {/* Main Teardrop / Pear-Cut Gem Body */}
              <path
                d="M 100 16 C 140 73 176 133 176 192 C 176 238 141 264 100 264 C 59 264 24 238 24 192 C 24 133 60 73 100 16 Z"
                fill="url(#sapphireCore)"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />

              {/* Faceted Geometry: Top Crown Table Facet (Teardrop shape) */}
              <path
                d="M 100 50 C 124 95 146 142 146 182 C 146 215 125 234 100 234 C 75 234 54 215 54 182 C 54 142 76 95 100 50 Z"
                fill="#1E3A8A"
                fillOpacity="0.45"
                stroke="#93C5FD"
                strokeWidth="1"
                strokeOpacity="0.75"
              />

              {/* Upper Triangular Facets radiating from apex */}
              <polygon points="100,16 75,70 100,50" fill="url(#facetHighlight)" fillOpacity="0.7" />
              <polygon points="100,16 125,70 100,50" fill="url(#deepFacet)" fillOpacity="0.8" />
              <polygon points="100,16 50,95 75,70" fill="url(#deepFacet)" fillOpacity="0.5" />
              <polygon points="100,16 150,95 125,70" fill="url(#facetHighlight)" fillOpacity="0.4" />

              {/* Side Kite & Triangular Facets */}
              <polygon points="75,70 50,95 54,140 70,120" fill="url(#facetHighlight)" fillOpacity="0.3" stroke="#93C5FD" strokeWidth="0.7" strokeOpacity="0.5" />
              <polygon points="125,70 150,95 146,140 130,120" fill="url(#deepFacet)" fillOpacity="0.6" stroke="#93C5FD" strokeWidth="0.7" strokeOpacity="0.5" />
              <polygon points="50,95 24,145 54,155" fill="url(#deepFacet)" fillOpacity="0.7" stroke="#60A5FA" strokeWidth="0.7" strokeOpacity="0.4" />
              <polygon points="150,95 176,145 146,155" fill="url(#facetHighlight)" fillOpacity="0.4" stroke="#60A5FA" strokeWidth="0.7" strokeOpacity="0.4" />

              {/* Lower Girdle Facets */}
              <polygon points="54,182 24,192 48,230 75,215" fill="url(#deepFacet)" fillOpacity="0.75" stroke="#93C5FD" strokeWidth="0.7" strokeOpacity="0.5" />
              <polygon points="146,182 176,192 152,230 125,215" fill="url(#facetHighlight)" fillOpacity="0.5" stroke="#93C5FD" strokeWidth="0.7" strokeOpacity="0.5" />
              <polygon points="100,234 75,215 48,230 70,256 100,264" fill="url(#deepFacet)" fillOpacity="0.8" stroke="#93C5FD" strokeWidth="0.7" strokeOpacity="0.5" />
              <polygon points="100,234 125,215 152,230 130,256 100,264" fill="url(#facetHighlight)" fillOpacity="0.6" stroke="#93C5FD" strokeWidth="0.7" strokeOpacity="0.5" />

              {/* Central Star Brilliant Highlights */}
              <polygon points="100,90 115,140 100,170 85,140" fill="url(#facetHighlight)" fillOpacity="0.6" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.8" />
              <polygon points="100,90 125,120 100,135 75,120" fill="#60A5FA" fillOpacity="0.4" stroke="#BAE6FD" strokeWidth="0.6" strokeOpacity="0.6" />

              {/* Specular White Gloss Glare Accent */}
              <ellipse cx="80" cy="110" rx="16" ry="32" transform="rotate(-25 80 110)" fill="#FFFFFF" fillOpacity="0.45" filter="blur(2px)" />
              <ellipse cx="78" cy="105" rx="6" ry="14" transform="rotate(-25 78 105)" fill="#FFFFFF" fillOpacity="0.8" />

              {/* Bottom Culet Sparkle Accent */}
              <circle cx="100" cy="245" r="3" fill="#FFFFFF" fillOpacity="0.9" />

              {/* Top Apex Claw / Platinum Finial */}
              <circle cx="100" cy="12" r="5" fill="url(#platinumProng)" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="20" cy="192" r="4" fill="url(#platinumProng)" stroke="#CBD5E1" strokeWidth="0.8" />
              <circle cx="180" cy="192" r="4" fill="url(#platinumProng)" stroke="#CBD5E1" strokeWidth="0.8" />
              <circle cx="100" cy="268" r="4" fill="url(#platinumProng)" stroke="#CBD5E1" strokeWidth="0.8" />
            </svg>
          </div>
        </div>

        {/* Interactive Click Prompt & Status */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-3 mb-6 text-xs text-[#CBD5E1]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142B4A]/80 border border-[#CBD5E1]/30 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Цацарсан талст: <strong className="text-[#FFFFFF]">{totalCrystals}</strong></span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142B4A]/80 border border-[#CBD5E1]/30 font-mono">
            <span>Эрч хүч: <strong className="text-[#38BDF8]">+{combo * 10}%</strong></span>
          </span>

          <span className="text-[11px] text-[#94A3B8] font-sans italic">
            (Индранил чулуун дээр дарж гэрэл цацруулна уу)
          </span>
        </div>

        {/* Elegant Primary Script Inscription as requested: "Үргэлж гэрэл цацруулах Индранил" */}
        <div className="my-5">
          <h3 
            className="font-royal italic text-2xl sm:text-3xl md:text-4xl text-[#FFFFFF] tracking-wide drop-shadow-[0_2px_14px_rgba(56,189,248,0.45)]"
          >
            “Үргэлж гэрэл цацруулах Индранил”
          </h3>
        </div>

        {/* Small Inscription below: "Либертиа хатан хааны 1-р онд бүтээв" */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-[#CBD5E1]/75 tracking-[0.25em] uppercase font-royal pt-2">
          <span>⚜</span>
          <span>Либертиа хатан хааны 1-р онд бүтээв</span>
          <span>⚜</span>
        </div>
      </OrnateFrame>
    </section>
  );
};
