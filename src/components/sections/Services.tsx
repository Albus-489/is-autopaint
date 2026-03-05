import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench, Paintbrush, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  { id: 'body_repairs', icon: Wrench },
  { id: 'plastic_repairs', icon: Zap },
  { id: 'painting', icon: Paintbrush },
  { id: 'rust_protection', icon: ShieldCheck },
];

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-padding bg-zinc-50">
      <div className="container-custom">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
            {t('services.title')}
          </h2>
          <div className="h-1 w-20 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 hover:bg-zinc-50 transition-all group relative"
            >
              <div className="absolute top-6 right-8 text-[10px] font-mono text-zinc-300">
                0{index + 1}
              </div>
              <service.icon className="w-8 h-8 mb-8 text-zinc-400 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tight leading-tight">
                {t(`services.${service.id}.title`)}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                {t(`services.${service.id}.desc`)}
              </p>
              
              <div className="mt-8 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
