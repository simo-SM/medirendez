'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/app/components/LanguageProvider';
import { doctors } from '@/app/components/doctorsData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DoctorProfilePage({ params }: PageProps) {
  // Unwrap the promise inside 'use client' for Next.js 15 compatibility
  const { id } = use(params);
  const { t, lang } = useLang();
  
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Find the doctor
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  const isArabic = lang === 'ar';

  const handleBooking = () => {
    if (selectedDay && selectedSlot) {
      alert(isArabic ? 'تم تأكيد الموعد بنجاح!' : 'Booking confirmed successfully!');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-28 pb-32 animate-in fade-in duration-500">
      
      {/* Header Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6 flex items-center justify-between">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors font-semibold text-sm shadow-sm"
        >
          <i className="fa-solid fa-arrow-left"></i>
          {isArabic ? 'العودة للصفحة الرئيسية' : 'Back to home'}
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* 1. HERO SECTION */}
        <section className="bg-white px-6 pt-8 pb-10 mb-6 border border-slate-100 rounded-3xl shadow-sm relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <AppImage src={doctor.image} alt={doctor.imageAlt} width={160} height={160} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:-right-3 md:translate-x-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border border-white ${doctor.available ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                {doctor.available && <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>}
                <span className="whitespace-nowrap">{isArabic ? doctor.statusAr : doctor.status}</span>
              </div>
            </div>

            <div className="flex-1 w-full">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                {isArabic ? doctor.nameAr : doctor.name}
              </h1>
              <p className="text-primary font-bold text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-stethoscope opacity-70"></i>
                {isArabic ? doctor.specialtyAr : doctor.specialty}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-xl border border-amber-100/50">
                  <i className="fa-solid fa-star text-amber-500 text-sm"></i>
                  <span className="font-bold text-amber-700">{doctor.rating}</span>
                  <span className="text-amber-500 text-sm">({doctor.reviews} {isArabic ? 'تقييم' : 'reviews'})</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-xl border border-slate-100 text-slate-600">
                  <i className="fa-solid fa-location-dot text-sm opacity-70"></i>
                  <span className="font-medium">{isArabic ? doctor.cityAr : doctor.city}</span>
                </div>
              </div>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
                {isArabic ? doctor.bioAr : doctor.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => { document.getElementById('availability-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex-1 py-3.5 px-6 rounded-2xl font-bold text-white teal-gradient shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <i className="fa-regular fa-calendar-check"></i>
                  {isArabic ? 'احجز موعداً' : 'Book appointment'}
                </button>
                <button className="flex-1 py-3.5 px-6 rounded-2xl font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2">
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  {isArabic ? 'تواصل عبر واتساب' : 'Message on WhatsApp'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK INFO CARDS */}
        <section className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-briefcase-medical text-lg"></i>
            </div>
            <div className="font-extrabold text-slate-800 text-lg">{doctor.experience}+ {isArabic ? 'سنوات' : 'years'}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{isArabic ? 'الخبرة' : 'Experience'}</div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-users text-lg"></i>
            </div>
            <div className="font-extrabold text-slate-800 text-lg">1000+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{isArabic ? 'المرضى' : 'Patients'}</div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-money-bill-wave text-lg"></i>
            </div>
            <div className="font-extrabold text-slate-800 text-lg">{doctor.price} DH</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{isArabic ? 'الاستشارة' : 'Consultation'}</div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-language text-lg"></i>
            </div>
            <div className="font-extrabold text-slate-800 text-sm whitespace-nowrap overflow-hidden text-ellipsis w-full px-2">
              {isArabic ? doctor.languagesAr.join(', ') : doctor.languages.join(', ')}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{isArabic ? 'اللغات' : 'Languages'}</div>
          </div>
        </section>

        {/* 3. ABOUT SECTION */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-circle-info text-primary opacity-80"></i>
            {isArabic ? 'حول الطبيب' : 'About Doctor'}
          </h3>
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-slate-600 text-lg">
            {isArabic ? doctor.aboutAr : doctor.about}
          </div>
        </section>

        {/* 4. AVAILABILITY SECTION */}
        <section id="availability-section" className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-calendar-check text-primary opacity-80"></i>
            {isArabic ? 'أوقات العمل المتاحة' : 'Available working hours'}
          </h3>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
            {/* Days Scroll */}
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
              {doctor.workingHours.map((wh) => (
                <button
                  key={wh.day}
                  onClick={() => { setSelectedDay(wh.day); setSelectedSlot(null); }}
                  className={`snap-start shrink-0 flex flex-col items-center justify-center px-6 py-4 rounded-2xl border-2 transition-all min-w-[120px] ${selectedDay === wh.day ? 'border-primary bg-primary text-white shadow-md' : 'border-slate-100 bg-slate-50 hover:border-primary/40 text-slate-600'}`}
                >
                  <span className={`text-sm font-medium mb-1 ${selectedDay === wh.day ? 'text-white/80' : 'text-slate-500'}`}>{isArabic ? wh.dayAr : wh.day}</span>
                  <span className={`text-lg font-bold ${selectedDay === wh.day ? 'text-white' : 'text-slate-800'}`}>{isArabic ? wh.dateAr : wh.date}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-8">
              {selectedDay ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationFillMode: 'forwards' }}>
                  <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    {isArabic ? 'اختر وقت الموعد' : 'Select a time slot'}
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {doctor.workingHours.find(w => w.day === selectedDay)?.slots.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 rounded-xl text-base font-bold transition-all border-2 ${selectedSlot === slot ? 'border-primary bg-primary/10 text-primary shadow-sm' : 'border-slate-100 bg-white text-slate-700 hover:border-primary/50'}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-[250px] flex items-center justify-center text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                  <div className="text-slate-400">
                    <i className="fa-regular fa-hand-pointer text-4xl mb-4 block opacity-50"></i>
                    <p className="font-medium text-lg text-slate-500">{isArabic ? 'يرجى تحديد يوم لرؤية الأوقات' : 'Please select a day to view slots'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 5. REVIEWS SECTION */}
          <section className="mb-6 h-full">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-comments text-primary opacity-80"></i>
                {isArabic ? 'آراء المرضى' : 'Patient Reviews'}
              </span>
              <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 flex items-center gap-1.5">
                <i className="fa-solid fa-star"></i> {doctor.rating}
              </span>
            </h3>

            <div className="space-y-4">
              {doctor.patientReviews && doctor.patientReviews.map(review => (
                <div key={review.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                        {(isArabic ? review.authorAr : review.author).charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{isArabic ? review.authorAr : review.author}</div>
                        <div className="text-xs text-slate-400 font-medium">{isArabic ? review.dateAr : review.date}</div>
                      </div>
                    </div>
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={i < review.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed ml-1">"{isArabic ? review.commentAr : review.comment}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LOCATION SECTION */}
          <section className="mb-6 h-full">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-map-location-dot text-primary opacity-80"></i>
              {isArabic ? 'الموقع' : 'Location'}
            </h3>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group h-full flex flex-col">
              <div className="flex-1 bg-slate-200 relative overflow-hidden min-h-[250px]">
                {/* Map placeholder */}
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Casablanca,Morocco&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7CCasablanca,Morocco&key=NO_KEY')" }}></div>
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-primary text-2xl animate-bounce">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between shrink-0">
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{isArabic ? 'العيادة الطبية' : 'Medical Clinic'}</h4>
                  <p className="text-slate-500 mt-1">{isArabic ? `شارع الحسن الثاني، ${doctor.cityAr}` : `Hassan II Avenue, ${doctor.city}`}</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
          </section>
        </div>

      </div>

      {/* 7. STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 p-4 md:px-8 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transform transition-transform">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            {selectedDay && selectedSlot ? (
              <div className="animate-in fade-in duration-300">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{isArabic ? 'الموعد المحدد' : 'Selected Slot'}</div>
                <div className="font-extrabold text-slate-800 flex items-center gap-2">
                  {doctor.workingHours.find(w => w.day === selectedDay)?.date} - {selectedSlot}
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in duration-300">
                <div className="font-extrabold text-slate-800 text-xl">{doctor.price} DH</div>
                <div className="text-xs font-semibold text-slate-500">{isArabic ? 'تكلفة الاستشارة' : 'Consultation fee'}</div>
              </div>
            )}
          </div>
          <button 
            onClick={handleBooking}
            disabled={!selectedDay || !selectedSlot}
            className={`flex-1 sm:flex-none py-4 px-10 rounded-2xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${selectedDay && selectedSlot ? 'teal-gradient text-white' : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none hover:shadow-none hover:translate-y-0'}`}
          >
            <i className={selectedDay && selectedSlot ? "fa-solid fa-calendar-check" : "fa-solid fa-calendar-xmark"}></i>
            {selectedDay && selectedSlot 
              ? (isArabic ? 'تأكيد الحجز' : 'Confirm booking') 
              : (isArabic ? 'اختر وقتاً للحجز' : 'Select slot to book')}
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .pb-safe { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}
