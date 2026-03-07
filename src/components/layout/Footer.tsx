import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold tracking-tighter text-white">
          IS-AUTOPAINT
        </div>
        
        <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">
          © {year} IS-Autopaint Oy. {t('footer.rights')}
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            {/* Social icon placeholder */}
          </a>
        </div>
      </div>
    </footer>
  );
};
