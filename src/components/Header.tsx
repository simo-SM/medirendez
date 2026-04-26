'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { useLang } from '@/app/components/LanguageProvider';

export default function Header() {
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#how-it-works', label: t('nav.how') },
    { href: '#benefits', label: t('nav.benefits') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-teal-sm rounded-2xl mx-4 sm:mx-6'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <AppLogo size={36} className="group-hover:scale-105 transition-transform duration-300" />
            <span className="font-bold text-xl text-foreground tracking-tight">
              Medi<span className="text-gradient">Rendez</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-bold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
              aria-label="Toggle language"
            >
              <span className="text-base"><i className={lang === 'fr' ? 'fa-solid fa-earth-africa' : 'fa-solid fa-earth-europe'}></i></span>
              <span>{lang === 'fr' ? 'عربية' : 'FR'}</span>
            </button>

            <a
              href="#calendar"
              className="px-5 py-2.5 rounded-full teal-gradient text-white text-sm font-bold shadow-teal-md hover:shadow-teal-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <i className="fa-solid fa-xmark text-2xl" style={{ display: 'block', width: '24px', height: '24px' }}></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl" style={{ display: 'block', width: '24px', height: '24px' }}></i>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark" style={{ fontSize: '28px', display: 'block', width: '28px', height: '28px' }}></i>
          </button>

          <div className="flex items-center gap-2 mb-4">
            <AppLogo size={40} />
            <span className="font-bold text-2xl text-foreground">
              Medi<span className="text-gradient">Rendez</span>
            </span>
          </div>

          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
            >
              {link?.label}
            </a>
          ))}

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => { toggleLang(); setMenuOpen(false); }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-bold"
            >
              <span><i className={lang === 'fr' ? 'fa-solid fa-earth-africa' : 'fa-solid fa-earth-europe'}></i></span>
              <span>{lang === 'fr' ? 'عربية' : 'FR'}</span>
            </button>
            <a
              href="#calendar"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 rounded-full teal-gradient text-white text-sm font-bold shadow-teal-md"
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}