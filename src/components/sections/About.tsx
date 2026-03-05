import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MEDIA } from '@/src/config/media';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-12 left-0 text-[10px] font-mono text-zinc-400 tracking-[0.5em] uppercase">
            / Introduction
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
            {t('about.title')}
          </h2>
          <div className="space-y-8 text-zinc-500 leading-relaxed font-light text-lg">
            <p className="relative pl-8 border-l border-black/5">{t('about.p1')}</p>
            <p className="relative pl-8 border-l border-black/5">{t('about.p2')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-4 border border-black/5"
        >
          <div className="relative aspect-video lg:aspect-square bg-zinc-100 overflow-hidden">
            <video
              src={MEDIA.about.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 pointer-events-none"
            />
          </div>
          {/* Decorative Corner */}
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-accent/20" />
        </motion.div>
      </div>
    </section>
  );
};
