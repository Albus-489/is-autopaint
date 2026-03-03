import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock } from 'lucide-react';

export const Location = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-zinc-950 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tighter uppercase mb-12">
            {t('location.title')}
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-accent shrink-0" />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Osoite</p>
                <p className="text-zinc-400">{t('location.address')}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-accent shrink-0" />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Aukioloajat</p>
                <p className="text-zinc-400">{t('location.hours')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] lg:h-auto bg-zinc-900 relative">
          {/* Placeholder for Map */}
          <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm uppercase tracking-widest">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 opacity-20" />
              Google Maps Placeholder
            </div>
          </div>
          {/* Real iframe would go here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.835102551912!2d24.8712345!3d60.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df123456789ab%3A0x123456789abcdef!2sTervam%C3%A4entie%20179%2C%2004410%20Hyvink%C3%A4%C3%A4!5e0!3m2!1sfi!2sfi!4v1234567890123"
            className="w-full h-full border-0 grayscale invert opacity-50"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
