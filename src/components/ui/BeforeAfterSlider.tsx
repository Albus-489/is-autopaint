import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, title }) => {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
          {title}
        </h3>
      )}
      <div 
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden select-none cursor-ew-resize group"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={after} 
          alt="After" 
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 h-full w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={before} 
            alt="Before" 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <span className="bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
            {t('beforeAfter.before')}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
          <span className="bg-accent/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
            {t('beforeAfter.after')}
          </span>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center border border-zinc-200">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-3 bg-zinc-400 rounded-full" />
              <div className="w-0.5 h-3 bg-zinc-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
