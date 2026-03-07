import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MEDIA } from '@/src/config/media';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export const BeforeAfter = () => {
  const { t } = useTranslation();

  return (
    <section id="before-after" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
            {t('beforeAfter.title')}
          </h2>
          <div className="h-1 w-20 bg-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {MEDIA.beforeAfter.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <BeforeAfterSlider 
                before={item.before} 
                after={item.after} 
                title={item.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
