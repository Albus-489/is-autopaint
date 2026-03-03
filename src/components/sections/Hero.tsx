import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MEDIA } from '@/src/config/media';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 opacity-40">
        <img
          src={MEDIA.hero.main}
          alt="Auto repair workshop"
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all rounded-sm"
          >
            {t('hero.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
