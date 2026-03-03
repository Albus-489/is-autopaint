import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800', alt: 'Car repair 1' },
  { src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800', alt: 'Car painting 1' },
  { src: 'https://images.unsplash.com/photo-1507702553912-a15641ec572c?auto=format&fit=crop&q=80&w=800', alt: 'Workshop' },
  { src: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800', alt: 'Detailing' },
  { src: 'https://images.unsplash.com/photo-1625047509168-a7026f36fe04?auto=format&fit=crop&q=80&w=800', alt: 'Body work' },
  { src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800', alt: 'Finish' },
];

export const Gallery = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="section-padding bg-zinc-50">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
            {t('gallery.title')}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square cursor-pointer overflow-hidden group"
              onClick={() => setIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images.map(img => ({ src: img.src }))}
        />
      </div>
    </section>
  );
};
