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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-black/5 hover:border-accent/20 transition-colors group"
            >
              <service.icon className="w-10 h-10 mb-6 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                {t(`services.${service.id}.title`)}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {t(`services.${service.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
