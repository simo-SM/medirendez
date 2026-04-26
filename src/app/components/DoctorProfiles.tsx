'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from './LanguageProvider';
import { doctors, Doctor } from './doctorsData';
import Link from 'next/link';


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) =>
        <i
          key={star}
          className={star <= Math.round(rating) ? "fa-solid fa-star" : "fa-regular fa-star text-amber-500"}
          style={{ fontSize: '12px', color: star <= Math.round(rating) ? '#F59E0B' : undefined }}
        ></i>
      )}
    </div>);

}

export default function DoctorProfiles() {
  const { t, lang } = useLang();

  return (
    <section id="doctors" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-award" style={{ fontSize: '14px' }}></i>
            {t('doctors.rating')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {t('doctors.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('doctors.subtitle')}
          </p>
        </div>

        {/* BENTO GRID AUDIT:
           Array has 3 cards: [DrKarim, DrAmina, DrYoussef]
           Row 1: [col-1: DrKarim cs-1] [col-2: DrAmina cs-1] [col-3: DrYoussef cs-1]
           Placed 3/3 cards ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, index) =>
          <div
            key={doctor.id}
            className={`reveal stagger-${index + 1} group bg-white rounded-3xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 overflow-hidden relative z-10 pointer-events-auto`}>

              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                src={doctor.image}
                alt={doctor.imageAlt}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

                {/* Available Badge */}
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
              doctor.available ?
              'bg-emerald-500 text-white' : 'bg-slate-600/80 text-white backdrop-blur-sm'}`
              }>
                  {doctor.available &&
                <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                    </span>
                }
                  {doctor.available ? t('doctors.available') : lang === 'fr' ? 'Prochain créneau demain' : 'الموعد التالي غداً'}
                </div>

                {/* Specialty Tag */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold teal-gradient text-white">
                  {lang === 'ar' ? doctor.tagAr : doctor.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground">
                      {lang === 'ar' ? doctor.nameAr : doctor.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold mt-0.5">
                      {lang === 'ar' ? doctor.specialtyAr : doctor.specialty}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-amber-50 border border-amber-100">
                    <i className="fa-solid fa-star" style={{ color: '#F59E0B', fontSize: '12px' }}></i>
                    <span className="text-xs font-bold text-amber-700">{doctor.rating}</span>
                  </div>
                </div>

                {/* City & Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <i className="fa-solid fa-location-dot" style={{ fontSize: '14px' }}></i>
                    <span className="font-medium">{lang === 'ar' ? doctor.cityAr : doctor.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <StarRating rating={doctor.rating} />
                    <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                href={`/doctor/${doctor.id}`}
                className="relative z-20 pointer-events-auto block w-full text-center py-3 rounded-2xl border-2 border-primary text-primary font-bold text-sm hover:teal-gradient hover:text-white hover:border-primary transition-all duration-300 group-hover:teal-gradient group-hover:text-white group-hover:border-transparent">

                  {t('doctors.view')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}