import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'motion/react';
import { MEDIA } from '@/src/config/media';

export const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  // Smoothly transform glassmorphism properties based on scroll position (0 to 80px)
  const backdropFilter = useTransform(
    scrollY,
    [0, 80],
    ['blur(12px)', 'blur(0px)'],
  );
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)'],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)'],
  );
  const opacity = useTransform(scrollY, [0, 80], [1, 0.8]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={MEDIA.hero.main}
          alt="Auto repair workshop"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="container-custom relative z-10 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ 
            backdropFilter, 
            backgroundColor, 
            borderColor,
            WebkitBackdropFilter: backdropFilter
          }}
          className="relative border p-8 md:p-20 rounded-[2.5rem] max-w-4xl text-center premium-shadow"
        >
          {/* Decorative Crosshair Lines */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t border-r border-white/20" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-white/20" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-white/20" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 text-white leading-[0.9]"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light tracking-tight"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-block bg-white text-black px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all rounded-full shadow-lg shadow-black/50"
            >
              {t('hero.cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
