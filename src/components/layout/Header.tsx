import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { key: 'home', href: '#' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'beforeAfter', href: '#before-after' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const langs = ['fi', 'en', 'no'];
    const currentIndex = langs.indexOf(i18n.language.split('-')[0]);
    const nextLang = langs[(currentIndex + 1) % langs.length];
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        (isScrolled || isMobileMenuOpen)
          ? 'bg-white/80 backdrop-blur-md py-4 border-black/[0.03] premium-shadow' 
          : 'bg-transparent py-8 border-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase">
          IS-AUTOPAINT
        </a>

        <div className="flex items-center gap-12">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-black transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em]">
            {['EN', 'FI', 'NO'].map((lang) => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                className={cn(
                  'hover:text-accent transition-colors',
                  i18n.language.startsWith(lang.toLowerCase()) ? 'text-black' : 'text-zinc-300'
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile Toggle & Language */}
          <div className="flex items-center gap-6 md:hidden">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              {['EN', 'FI', 'NO'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                  className={cn(
                    'transition-colors',
                    i18n.language.startsWith(lang.toLowerCase()) ? 'text-black' : 'text-zinc-400'
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              className="p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
