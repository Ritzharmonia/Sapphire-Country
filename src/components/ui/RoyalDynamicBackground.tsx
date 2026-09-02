import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  targetOpacity: number;
  pulseSpeed: number;
  hue: 'gold' | 'sapphire' | 'amber' | 'starlight';
}

interface Star {
  x: number;
  y: number;
  size: number;
  twinklePhase: number;
  twinkleSpeed: number;
  color: string;
}

interface SapphireGem {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  speedY: number;
  speedX: number;
  wobblePhase: number;
  wobbleSpeed: number;
  opacity: number;
  cutType: 'brilliant' | 'rhombus' | 'emerald' | 'crystal';
  sparklePhase: number;
}

export const RoyalDynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener('resize', handleResize);

    let particles: Particle[] = [];
    let stars: Star[] = [];
    let gems: SapphireGem[] = [];

    const initElements = () => {
      const particleCount = Math.min(Math.floor((width * height) / 20000), 70);
      const starCount = Math.min(Math.floor((width * height) / 16000), 85);
      const gemCount = Math.min(Math.max(Math.floor((width * height) / 75000), 8), 16);

      // 1. Golden stardust particles
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const types: ('gold' | 'sapphire' | 'amber' | 'starlight')[] = ['gold', 'gold', 'sapphire', 'amber', 'starlight'];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 0.8,
          speedY: -(Math.random() * 0.4 + 0.15),
          speedX: (Math.random() - 0.5) * 0.25,
          opacity: Math.random() * 0.7 + 0.2,
          targetOpacity: Math.random() * 0.8 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          hue: types[Math.floor(Math.random() * types.length)]
        });
      }

      // 2. Diamond starlight stars
      stars = [];
      const starColors = [
        'rgba(255, 245, 223, ',
        'rgba(232, 200, 122, ',
        'rgba(147, 197, 253, ',
        'rgba(255, 255, 255, '
      ];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.5,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.03 + 0.012,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }

      // 3. Floating Faceted Sapphire Gemstones & Crystals
      gems = [];
      const cuts: ('brilliant' | 'rhombus' | 'emerald' | 'crystal')[] = ['brilliant', 'rhombus', 'emerald', 'crystal'];
      for (let i = 0; i < gemCount; i++) {
        gems.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 22 + 16, // Size 16px - 38px
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.006,
          speedY: -(Math.random() * 0.25 + 0.08),
          speedX: (Math.random() - 0.5) * 0.15,
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.015 + 0.008,
          opacity: Math.random() * 0.35 + 0.45,
          cutType: cuts[Math.floor(Math.random() * cuts.length)],
          sparklePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initElements();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Helper: Draw Faceted Sapphire Crystal
    const drawSapphireGem = (gem: SapphireGem, tick: number) => {
      ctx.save();
      ctx.translate(gem.x, gem.y);
      ctx.rotate(gem.rotation);

      const r = gem.size;
      const alpha = gem.opacity;

      // Soft deep sapphire halo glow
      const glow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 2.2);
      glow.addColorStop(0, `rgba(66, 153, 225, ${alpha * 0.35})`);
      glow.addColorStop(0.5, `rgba(31, 78, 121, ${alpha * 0.15})`);
      glow.addColorStop(1, 'rgba(12, 20, 33, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 1;

      if (gem.cutType === 'rhombus' || gem.cutType === 'crystal') {
        // Rhombus / Diamond Shard Crystal
        const w = r * 0.75;
        const h = r * 1.35;

        // Base gradient
        const gemGrad = ctx.createLinearGradient(-w, -h, w, h);
        gemGrad.addColorStop(0, `rgba(147, 197, 253, ${alpha * 0.95})`);
        gemGrad.addColorStop(0.3, `rgba(42, 117, 211, ${alpha * 0.85})`);
        gemGrad.addColorStop(0.7, `rgba(20, 43, 74, ${alpha * 0.9})`);
        gemGrad.addColorStop(1, `rgba(8, 24, 48, ${alpha * 0.95})`);

        // Outer Diamond contour
        ctx.fillStyle = gemGrad;
        ctx.strokeStyle = `rgba(224, 242, 254, ${alpha * 0.85})`;
        ctx.beginPath();
        ctx.moveTo(0, -h);
        ctx.lineTo(w, 0);
        ctx.lineTo(0, h);
        ctx.lineTo(-w, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner Facet Faceting lines
        ctx.strokeStyle = `rgba(186, 230, 253, ${alpha * 0.6})`;
        ctx.beginPath();
        // Inner kite
        ctx.moveTo(0, -h * 0.5);
        ctx.lineTo(w * 0.5, 0);
        ctx.lineTo(0, h * 0.5);
        ctx.lineTo(-w * 0.5, 0);
        ctx.closePath();
        ctx.stroke();

        // Facet corner rays
        ctx.beginPath();
        ctx.moveTo(0, -h);
        ctx.lineTo(0, -h * 0.5);
        ctx.moveTo(w, 0);
        ctx.lineTo(w * 0.5, 0);
        ctx.moveTo(0, h);
        ctx.lineTo(0, h * 0.5);
        ctx.moveTo(-w, 0);
        ctx.lineTo(-w * 0.5, 0);
        ctx.stroke();

        // Top facet specular highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.55})`;
        ctx.beginPath();
        ctx.moveTo(0, -h);
        ctx.lineTo(w * 0.4, -h * 0.2);
        ctx.lineTo(0, -h * 0.5);
        ctx.closePath();
        ctx.fill();

      } else if (gem.cutType === 'emerald') {
        // Emerald Cut Octagon Faceted Gem
        const w = r * 0.9;
        const h = r * 1.1;
        const c = r * 0.3;

        const gemGrad = ctx.createLinearGradient(-w, -h, w, h);
        gemGrad.addColorStop(0, `rgba(186, 230, 253, ${alpha * 0.95})`);
        gemGrad.addColorStop(0.35, `rgba(59, 130, 246, ${alpha * 0.85})`);
        gemGrad.addColorStop(0.75, `rgba(30, 58, 138, ${alpha * 0.9})`);
        gemGrad.addColorStop(1, `rgba(15, 23, 42, ${alpha * 0.95})`);

        ctx.fillStyle = gemGrad;
        ctx.strokeStyle = `rgba(224, 242, 254, ${alpha * 0.85})`;

        ctx.beginPath();
        ctx.moveTo(-w + c, -h);
        ctx.lineTo(w - c, -h);
        ctx.lineTo(w, -h + c);
        ctx.lineTo(w, h - c);
        ctx.lineTo(w - c, h);
        ctx.lineTo(-w + c, h);
        ctx.lineTo(-w, h - c);
        ctx.lineTo(-w, -h + c);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner table facet
        const iw = w * 0.55;
        const ih = h * 0.55;
        const ic = c * 0.55;

        ctx.strokeStyle = `rgba(186, 230, 253, ${alpha * 0.6})`;
        ctx.beginPath();
        ctx.moveTo(-iw + ic, -ih);
        ctx.lineTo(iw - ic, -ih);
        ctx.lineTo(iw, -ih + ic);
        ctx.lineTo(iw, ih - ic);
        ctx.lineTo(iw - ic, ih);
        ctx.lineTo(-iw + ic, ih);
        ctx.lineTo(-iw, ih - ic);
        ctx.lineTo(-iw, -ih + ic);
        ctx.closePath();
        ctx.stroke();

        // Bevel corner rays
        ctx.beginPath();
        ctx.moveTo(-w + c, -h);
        ctx.lineTo(-iw + ic, -ih);
        ctx.moveTo(w - c, -h);
        ctx.lineTo(iw - ic, -ih);
        ctx.moveTo(w, -h + c);
        ctx.lineTo(iw, -ih + ic);
        ctx.moveTo(w, h - c);
        ctx.lineTo(iw, ih - ic);
        ctx.moveTo(w - c, h);
        ctx.lineTo(iw - ic, ih);
        ctx.moveTo(-w + c, h);
        ctx.lineTo(-iw + ic, ih);
        ctx.moveTo(-w, h - c);
        ctx.lineTo(-iw, ih - ic);
        ctx.moveTo(-w, -h + c);
        ctx.lineTo(-iw, -ih + ic);
        ctx.stroke();

      } else {
        // Brilliant Round / Hexagonal Royal Jewel
        const sides = 6;
        const gemGrad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
        gemGrad.addColorStop(0, `rgba(224, 242, 254, ${alpha * 0.98})`);
        gemGrad.addColorStop(0.3, `rgba(59, 130, 246, ${alpha * 0.9})`);
        gemGrad.addColorStop(0.7, `rgba(29, 78, 216, ${alpha * 0.85})`);
        gemGrad.addColorStop(1, `rgba(15, 23, 42, ${alpha * 0.95})`);

        ctx.fillStyle = gemGrad;
        ctx.strokeStyle = `rgba(224, 242, 254, ${alpha * 0.85})`;

        ctx.beginPath();
        for (let s = 0; s < sides; s++) {
          const angle = (s * 2 * Math.PI) / sides;
          const px = Math.cos(angle) * r;
          const py = Math.sin(angle) * r;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner table
        ctx.strokeStyle = `rgba(186, 230, 253, ${alpha * 0.6})`;
        ctx.beginPath();
        for (let s = 0; s < sides; s++) {
          const angle = (s * 2 * Math.PI) / sides;
          const px = Math.cos(angle) * (r * 0.5);
          const py = Math.sin(angle) * (r * 0.5);
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // Ray spokes
        ctx.beginPath();
        for (let s = 0; s < sides; s++) {
          const angle = (s * 2 * Math.PI) / sides;
          ctx.moveTo(Math.cos(angle) * (r * 0.5), Math.sin(angle) * (r * 0.5));
          ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        }
        ctx.stroke();
      }

      // Specular Star Flare Sparkle on the gemstone facet
      gem.sparklePhase += 0.04;
      const flareAlpha = (Math.sin(gem.sparklePhase) + 1) / 2;
      if (flareAlpha > 0.4) {
        ctx.fillStyle = `rgba(255, 255, 255, ${flareAlpha * 0.95})`;
        ctx.beginPath();
        ctx.arc(-r * 0.35, -r * 0.35, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${flareAlpha * 0.75})`;
        ctx.lineWidth = 0.8;
        const sparkLen = r * 0.6 * flareAlpha;
        ctx.beginPath();
        ctx.moveTo(-r * 0.35 - sparkLen, -r * 0.35);
        ctx.lineTo(-r * 0.35 + sparkLen, -r * 0.35);
        ctx.moveTo(-r * 0.35, -r * 0.35 - sparkLen);
        ctx.lineTo(-r * 0.35, -r * 0.35 + sparkLen);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Render loop
    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // 1. Interactive Dynamic Ambient Sapphire Aura
      const auraGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 520);
      auraGrad.addColorStop(0, 'rgba(42, 117, 211, 0.12)');
      auraGrad.addColorStop(0.5, 'rgba(31, 78, 121, 0.05)');
      auraGrad.addColorStop(1, 'rgba(12, 20, 33, 0)');
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Animated Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentTwinkle = Math.sin(star.twinklePhase);
        const alpha = Math.max(0.08, (currentTwinkle + 1) / 2 * 0.75 + 0.1);

        ctx.fillStyle = `${star.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (alpha > 0.65 && star.size > 1.2) {
          ctx.strokeStyle = `rgba(255, 245, 223, ${alpha * 0.6})`;
          ctx.lineWidth = 0.75;
          const rayLen = star.size * 3.5;
          ctx.beginPath();
          ctx.moveTo(star.x - rayLen, star.y);
          ctx.lineTo(star.x + rayLen, star.y);
          ctx.moveTo(star.x, star.y - rayLen);
          ctx.lineTo(star.x, star.y + rayLen);
          ctx.stroke();
        }
      }

      // 3. Floating Sapphire Gemstones / Crystals
      for (let i = 0; i < gems.length; i++) {
        const gem = gems[i];

        gem.y += gem.speedY;
        gem.x += gem.speedX + Math.sin(tick * 0.015 + gem.wobblePhase) * 0.35;
        gem.rotation += gem.rotSpeed;

        // Screen wrap
        if (gem.y < -60) {
          gem.y = height + 60;
          gem.x = Math.random() * width;
        }
        if (gem.x < -60) gem.x = width + 60;
        if (gem.x > width + 60) gem.x = -60;

        drawSapphireGem(gem, tick);
      }

      // 4. Golden Dust Motes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX + Math.sin(tick * 0.02 + i) * 0.2;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        p.opacity += (p.targetOpacity - p.opacity) * p.pulseSpeed;
        if (Math.abs(p.targetOpacity - p.opacity) < 0.05) {
          p.targetOpacity = Math.random() * 0.75 + 0.2;
        }

        let gradColorCenter = 'rgba(255, 245, 223, ';
        let gradColorOuter = 'rgba(201, 168, 92, ';

        if (p.hue === 'sapphire') {
          gradColorCenter = 'rgba(147, 197, 253, ';
          gradColorOuter = 'rgba(42, 117, 211, ';
        } else if (p.hue === 'amber') {
          gradColorCenter = 'rgba(254, 240, 138, ';
          gradColorOuter = 'rgba(217, 119, 6, ';
        } else if (p.hue === 'starlight') {
          gradColorCenter = 'rgba(255, 255, 255, ';
          gradColorOuter = 'rgba(203, 213, 225, ';
        }

        const rad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        rad.addColorStop(0, `${gradColorCenter}${p.opacity})`);
        rad.addColorStop(0.4, `${gradColorOuter}${p.opacity * 0.6})`);
        rad.addColorStop(1, 'rgba(12, 20, 33, 0)');

        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `${gradColorCenter}${p.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Animated Ambient Nebulae & Lighting Waves */}
      <div 
        className="absolute -top-[25%] -left-[20%] w-[140vw] h-[140vh] opacity-35 animate-[pulse_14s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(31, 78, 121, 0.4) 0%, rgba(20, 43, 74, 0.25) 45%, rgba(12, 20, 33, 0) 75%)'
        }}
      />
      
      {/* Warm Golden Imperial Aurora Glow in upper-center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] max-w-5xl h-[600px] opacity-25 blur-3xl pointer-events-none animate-[pulse_10s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(232, 200, 122, 0.35) 0%, rgba(31, 78, 121, 0.2) 50%, transparent 80%)'
        }}
      />

      {/* Dynamic Canvas with Sapphire Crystals, Golden Dust, Twinkling Stars & Shimmer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Royal Subtle Geometric Watermark */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#E8C87A_1.5px,transparent_1.5px)] [background-size:48px_48px]" />
    </div>
  );
};
