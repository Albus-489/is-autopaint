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
    const nextLang = i18n.language.startsWith('fi') ? 'en' : 'fi';
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
        isScrolled 
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
          <button
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors group"
          >
            <span className={i18n.language.startsWith('fi') ? 'text-zinc-300' : 'text-black'}>EN</span>
            <span className="text-zinc-200">/</span>
            <span className={i18n.language.startsWith('fi') ? 'text-black' : 'text-zinc-300'}>FI</span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
