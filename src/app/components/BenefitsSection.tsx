'use client';

import React from 'react';
import { useLang } from './LanguageProvider';

/* BENTO GRID AUDIT:
  Array has 6 cards: [AutoSchedule, WhatsApp, DoctorSelect, SmartFilter, MedProfile, MobileFirst]
  Desktop grid-cols-3:
  Row 1: [col-1: AutoSchedule cs-1 rs-1] [col-2: WhatsApp cs-1 rs-1] [col-3: DoctorSelect cs-1 rs-1]
  Row 2: [col-1: SmartFilter cs-1 rs-1] [col-2: MedProfile cs-1 rs-1] [col-3: MobileFirst cs-1 rs-1]
  Placed 6/6 cards ✓
*/

const benefits = [
  {
    titleKey: 'benefits.1.title',
    descKey: 'benefits.1.desc',
    color: 'from-teal-50 to-cyan-50',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    icon: (
      <i className="fa-solid fa-calendar-days" style={{ fontSize: '28px' }}></i>
    ),
    stat: '7j/7',
    statLabel: 'Disponible',
  },
  {
    titleKey: 'benefits.2.title',
    descKey: 'benefits.2.desc',
    color: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    icon: (
      <i className="fa-solid fa-message" style={{ fontSize: '28px' }}></i>
    ),
    stat: '<1min',
    statLabel: 'Confirmation',
  },
  {
    titleKey: 'benefits.3.title',
    descKey: 'benefits.3.desc',
    color: 'from-sky-50 to-blue-50',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    icon: (
      <i className="fa-solid fa-user-doctor" style={{ fontSize: '28px' }}></i>
    ),
    stat: '1 200+',
    statLabel: 'Médecins',
  },
  {
    titleKey: 'benefits.4.title',
    descKey: 'benefits.4.desc',
    color: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    icon: (
      <i className="fa-solid fa-filter" style={{ fontSize: '28px' }}></i>
    ),
    stat: '12',
    statLabel: 'Villes',
  },
  {
    titleKey: 'benefits.5.title',
    descKey: 'benefits.5.desc',
    color: 'from-amber-50 to-orange-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    icon: (
      <i className="fa-solid fa-shield-halved" style={{ fontSize: '28px' }}></i>
    ),
    stat: '100%',
    statLabel: 'Vérifiés',
  },
  {
    titleKey: 'benefits.6.title',
    descKey: 'benefits.6.desc',
    color: 'from-rose-50 to-pink-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    icon: (
      <i className="fa-solid fa-mobile-screen" style={{ fontSize: '28px' }}></i>
    ),
    stat: '4.8★',
    statLabel: 'Note app',
  },
];

export default function BenefitsSection() {
  const { t } = useLang();

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/20 to-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-bolt" style={{ fontSize: '14px' }}></i>
            MediRendez
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        {/* Benefits Grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — AutoSchedule */}
          <div className={`reveal stagger-1 group bg-gradient-to-br ${benefits?.[0]?.color} rounded-3xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl ${benefits?.[0]?.iconBg} ${benefits?.[0]?.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {benefits?.[0]?.icon}
            </div>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-xl font-extrabold text-foreground">{t(benefits?.[0]?.titleKey)}</h3>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-primary">{benefits?.[0]?.stat}</div>
                <div className="text-xs text-muted-foreground">{benefits?.[0]?.statLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(benefits?.[0]?.descKey)}</p>
          </div>

          {/* Card 2 — WhatsApp */}
          <div className={`reveal stagger-2 group bg-gradient-to-br ${benefits?.[1]?.color} rounded-3xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl ${benefits?.[1]?.iconBg} ${benefits?.[1]?.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {benefits?.[1]?.icon}
            </div>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-xl font-extrabold text-foreground">{t(benefits?.[1]?.titleKey)}</h3>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-emerald-600">{benefits?.[1]?.stat}</div>
                <div className="text-xs text-muted-foreground">{benefits?.[1]?.statLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(benefits?.[1]?.descKey)}</p>
          </div>

          {/* Card 3 — DoctorSelect */}
          <div className={`reveal stagger-3 group bg-gradient-to-br ${benefits?.[2]?.color} rounded-3xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl ${benefits?.[2]?.iconBg} ${benefits?.[2]?.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {benefits?.[2]?.icon}
            </div>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-xl font-extrabold text-foreground">{t(benefits?.[2]?.titleKey)}</h3>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-sky-600">{benefits?.[2]?.stat}</div>
                <div className="text-xs text-muted-foreground">{benefits?.[2]?.statLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(benefits?.[2]?.descKey)}</p>
          </div>

          {/* Card 4 — SmartFilter */}
          <div className={`reveal stagger-4 group bg-gradient-to-br ${benefits?.[3]?.color} rounded-3xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl ${benefits?.[3]?.iconBg} ${benefits?.[3]?.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {benefits?.[3]?.icon}
            </div>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-xl font-extrabold text-foreground">{t(benefits?.[3]?.titleKey)}</h3>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-violet-600">{benefits?.[3]?.stat}</div>
                <div className="text-xs text-muted-foreground">{benefits?.[3]?.statLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(benefits?.[3]?.descKey)}</p>
          </div>

          {/* Card 5 — MedProfile */}
          <div className={`reveal stagger-5 group bg-gradient-to-br ${benefits?.[4]?.color} rounded-3xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl ${benefits?.[4]?.iconBg} ${benefits?.[4]?.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {benefits?.[4]?.icon}
            </div>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-xl font-extrabold text-foreground">{t(benefits?.[4]?.titleKey)}</h3>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-amber-600">{benefits?.[4]?.stat}</div>
                <div className="text-xs text-muted-foreground">{benefits?.[4]?.statLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(benefits?.[4]?.descKey)}</p>
          </div>

          {/* Card 6 — MobileFirst */}
          <div className={`reveal stagger-6 group bg-gradient-to-br ${benefits?.[5]?.color} rounded-3xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl ${benefits?.[5]?.iconBg} ${benefits?.[5]?.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {benefits?.[5]?.icon}
            </div>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-xl font-extrabold text-foreground">{t(benefits?.[5]?.titleKey)}</h3>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-rose-600">{benefits?.[5]?.stat}</div>
                <div className="text-xs text-muted-foreground">{benefits?.[5]?.statLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(benefits?.[5]?.descKey)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}