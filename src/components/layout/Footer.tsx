import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-black/5">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold tracking-tighter">
          IS-AUTOPAINT
        </div>
        
        <div className="text-zinc-400 text-xs uppercase tracking-widest">
          © {year} IS-Autopaint Oy. {t('footer.rights')}
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-zinc-400 hover:text-black transition-colors">
            <span className="sr-only">Facebook</span>
            {/* Social icon placeholder */}
          </a>
        </div>
      </div>
    </footer>
  );
};
