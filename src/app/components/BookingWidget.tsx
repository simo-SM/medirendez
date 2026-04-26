'use client';

import React, { useState } from 'react';
import { useLang } from './LanguageProvider';

const serviceOptions = {
  fr: ['Médecin', 'Pharmacie', 'Dentiste', 'Clinique'],
  ar: ['طبيب', 'صيدلية', 'طبيب أسنان', 'عيادة'],
};

const specialtyOptions = {
  fr: ['Généraliste', 'Cardiologue', 'Dermatologue', 'Pédiatre', 'Gynécologue', 'Orthopédiste'],
  ar: ['عام', 'قلبية', 'جلدية', 'أطفال', 'نساء وتوليد', 'عظام'],
};

const cityOptions = {
  fr: ['Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir'],
  ar: ['الدار البيضاء', 'الرباط', 'مراكش', 'فاس', 'طنجة', 'أكادير'],
};

const dayOptions = {
  fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  ar: ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
};

export default function BookingWidget() {
  const { t, lang, dir } = useLang();
  const [service, setService] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('');
  const [day, setDay] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) calendarEl.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceIcons = [
    <i key="doc" className="fa-solid fa-user-doctor" style={{ fontSize: '20px' }}></i>,
    <i key="ph" className="fa-solid fa-pills" style={{ fontSize: '20px' }}></i>,
    <i key="dt" className="fa-solid fa-tooth" style={{ fontSize: '20px' }}></i>,
    <i key="cl" className="fa-solid fa-hospital" style={{ fontSize: '20px' }}></i>,
  ];

  return (
    <section id="services" className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Service Type Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-6 reveal">
          {serviceOptions[lang].map((svc, i) => (
            <button
              key={svc}
              onClick={() => setService(svc)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-200 ${
                service === svc
                  ? 'border-primary bg-primary text-white shadow-teal-md'
                  : 'border-border bg-white text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              <span className={service === svc ? 'text-white' : 'text-primary'}>
                {serviceIcons[i]}
              </span>
              {svc}
            </button>
          ))}
        </div>

        {/* Search Form Card */}
        <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(6,129,142,0.12)] border border-border p-6 md:p-8 reveal stagger-1">
          <h2 className="text-lg font-bold text-foreground mb-6 text-center">{t('booking.title')}</h2>
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Specialty */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('booking.specialty')}
                </label>
                <div className="relative">
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full appearance-none bg-muted border border-border rounded-2xl px-4 py-3 pr-10 text-sm font-medium text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">{lang === 'fr' ? 'Toutes spécialités' : 'كل التخصصات'}</option>
                    {specialtyOptions[lang].map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('booking.city')}
                </label>
                <div className="relative">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full appearance-none bg-muted border border-border rounded-2xl px-4 py-3 pr-10 text-sm font-medium text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">{lang === 'fr' ? 'Toutes les villes' : 'كل المدن'}</option>
                    {cityOptions[lang].map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              {/* Day */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('booking.day')}
                </label>
                <div className="relative">
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full appearance-none bg-muted border border-border rounded-2xl px-4 py-3 pr-10 text-sm font-medium text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">{lang === 'fr' ? 'Tous les jours' : 'كل الأيام'}</option>
                    {dayOptions[lang].map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground opacity-0 select-none">
                  {t('booking.search')}
                </label>
                <button
                  type="submit"
                  className="w-full teal-gradient text-white font-bold rounded-2xl py-3 px-6 text-sm shadow-teal-md hover:shadow-teal-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '18px' }}></i>
                  {t('booking.search')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}