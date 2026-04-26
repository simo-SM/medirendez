'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { useLang } from '@/app/components/LanguageProvider';

export default function Footer() {
  const { t } = useLang();
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Pattern 1: Linear Single-Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <AppLogo size={32} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <span className="font-bold text-lg text-foreground">
              Medi<span className="text-gradient">Rendez</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { href: '#hero', label: t('nav.home') },
              { href: '#how-it-works', label: t('footer.about') },
              { href: '#benefits', label: t('footer.help') },
              { href: '#contact', label: t('nav.contact') },
            ]?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:underline"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Right: Legal + Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t('footer.privacy')}</a>
            <span className="text-border">·</span>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t('footer.terms')}</a>
            <span className="text-border hidden sm:block">·</span>
            <span className="text-sm text-muted-foreground hidden sm:block">© {year} MediRendez</span>
          </div>
        </div>

        {/* Mobile copyright */}
        <div className="sm:hidden text-center mt-4">
          <span className="text-sm text-muted-foreground">{t('footer.rights')?.replace('2026', year)}</span>
        </div>
      </div>
    </footer>
  );
}