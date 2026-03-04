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
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-square bg-zinc-100 overflow-hidden"
        >
          <video
            src={MEDIA.about.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
};
