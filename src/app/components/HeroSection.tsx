'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from './LanguageProvider';

const stats = [
{ key: 'hero.stat1', value: '1 200+' },
{ key: 'hero.stat2', value: '45 000+' },
{ key: 'hero.stat3', value: '12' }];


export default function HeroSection() {
  const { t, dir } = useLang();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">

      {/* Atmospheric Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] hero-glow pointer-events-none" />
      {/* Animated Blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[80px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[100px] animate-blob-delay pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${dir === 'rtl' ? 'lg:grid-flow-col-dense' : ''}`}>

          {/* Left: Content */}
          <div className={`space-y-8 text-center lg:text-start ${dir === 'rtl' ? 'lg:text-end' : ''}`}>

            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className="reveal stagger-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              {t('hero.title')?.split(' ')?.map((word, i) =>
              i === 1 || i === 2 ?
              <span key={i} className="text-gradient">{word} </span> :

              <span key={i}>{word} </span>

              )}
            </h1>

            {/* Subtitle */}
            <p className="reveal stagger-2 text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className={`reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${dir === 'rtl' ? 'lg:justify-end' : ''}`}>
              <a
                href="#calendar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full teal-gradient text-white font-bold text-base shadow-teal-lg hover:shadow-teal-lg hover:-translate-y-1 transition-all duration-300 group">

                {t('hero.cta')}
                <i className={`fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} style={{ fontSize: '18px' }}></i>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary/20 text-foreground font-bold text-base hover:border-primary hover:text-primary transition-all duration-300">

                <i className="fa-regular fa-circle-play" style={{ fontSize: '18px' }}></i>
                {t('hero.secondary')}
              </a>
            </div>

            {/* Stats */}
            <div className={`reveal stagger-4 grid grid-cols-3 gap-4 pt-4 border-t border-border`}>
              {stats?.map((stat, i) =>
              <div key={i} className="text-center lg:text-start">
                  <div className="text-2xl font-extrabold text-foreground tracking-tight">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{t(stat?.key)}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Phone Mockups + Doctor Image */}
          <div className="reveal-right relative flex items-center justify-center">

            {/* Floating Badge Top Left */}
            <div className="absolute -top-4 left-0 z-20 animate-float-slow">
              <div className="glass rounded-2xl px-4 py-3 shadow-card flex items-center gap-2">
                <div className="w-8 h-8 rounded-full teal-gradient flex items-center justify-center">
                    <i className="fa-regular fa-circle-check" style={{ color: 'white', fontSize: '16px' }}></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">RDV confirmé</div>
                  <div className="text-xs text-muted-foreground">Dr. Karim Benali</div>
                </div>
              </div>
            </div>

            {/* Floating Badge Bottom Right */}
            <div className="absolute -bottom-4 right-4 z-20 animate-float-delayed">
              <div className="glass rounded-2xl px-4 py-3 shadow-card flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">12 créneaux disponibles</div>
                  <div className="text-xs text-muted-foreground">Cette semaine</div>
                </div>
              </div>
            </div>

            {/* Main Doctor Image */}
            <div className="relative w-full max-w-md mx-auto perspective-[1200px]">
              {/* Decorative ring */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/20 animate-spin-slow pointer-events-none" />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(6,129,142,0.2)] border border-white/80 bg-gradient-to-br from-primary/5 to-accent/5">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1b7e76346-1766083991583.png"
                  alt="Female doctor in white coat smiling with tablet, bright clinical setting, soft natural light"
                  width={500}
                  height={600}
                  priority
                  className="w-full h-auto object-cover" />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

                {/* Overlay card: Mini schedule */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-foreground">Prochains créneaux</span>
                    <span className="text-xs text-primary font-semibold">Aujourd'hui</span>
                  </div>
                  <div className="flex gap-2">
                    {['09:00', '10:30', '14:00']?.map((time) =>
                    <div key={time} className="flex-1 text-center py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold">
                        {time}
                      </div>
                    )}
                    <div className="flex-1 text-center py-1.5 rounded-xl bg-muted text-muted-foreground text-xs line-through">
                      16:30
                    </div>
                  </div>
                </div>
              </div>

              {/* Side phone mockup */}
              <div className="absolute -right-8 top-1/4 z-10 hidden lg:block rotate-[6deg] hover:-translate-y-2 hover:rotate-[3deg] transition-all duration-500">
                <div className="w-32 h-56 bg-gradient-to-b from-secondary to-secondary/80 rounded-[1.5rem] border-4 border-white shadow-2xl overflow-hidden">
                  <div className="bg-primary/20 h-full flex flex-col items-center justify-center gap-2 p-3">
                    <div className="w-8 h-8 rounded-full teal-gradient flex items-center justify-center">
                      <i className="fa-solid fa-user-doctor" style={{ color: 'white', fontSize: '14px' }}></i>
                    </div>
                    <div className="text-white text-[8px] font-bold text-center leading-tight">Dr. Amina Tahiri</div>
                    <div className="text-white/60 text-[7px] text-center">Cardiologue</div>
                    <div className="w-full bg-white/10 rounded-lg p-1.5 mt-1">
                      {['09:30', '11:00']?.map((t) =>
                      <div key={t} className="text-white text-[7px] font-medium text-center py-0.5">{t}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}