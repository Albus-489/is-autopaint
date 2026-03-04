import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MEDIA } from '@/src/config/media';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={MEDIA.hero.main}
          alt="Auto repair workshop"
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="container-custom relative z-10 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] max-w-4xl text-center shadow-2xl shadow-black/5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-zinc-900"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-800 mb-10 max-w-2xl mx-auto font-medium"
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
              className="inline-block bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-full"
            >
              {t('hero.cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
