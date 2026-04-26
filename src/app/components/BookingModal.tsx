'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLang } from './LanguageProvider';

interface BookingModalProps {
  day: string;
  time: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function BookingModal({ day, time, onConfirm, onClose }: BookingModalProps) {
  const { t } = useLang();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Champ requis';
    if (!phone.trim()) errs.phone = 'Champ requis';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    
    const text = `السلام عليكم، بغيت نحجز موعد:\nالاسم: ${name}\nالهاتف: ${phone}\nاليوم: ${day}\nالوقت: ${time}\nملاحظة: ${note ? note : '-'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/212608173585?text=${encodedText}`, '_blank');

    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm modal-backdrop"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-slide">

        {/* Header */}
        <div className="teal-gradient p-6 text-white">
          <div className="flex items-center justify-between mb-1">
            <h2 id="modal-title" className="text-xl font-extrabold">{t('modal.title')}</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Fermer"
            >
              <i className="fa-solid fa-xmark" style={{ fontSize: '16px' }}></i>
            </button>
          </div>

          {/* Appointment info */}
          <div className="flex items-center gap-3 mt-3">
            <div className="bg-white/20 rounded-xl px-4 py-2 text-sm font-bold">{day}</div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-sm font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-clock" style={{ fontSize: '14px' }}></i>
              {time}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {success ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center animate-bounce">
                <i className="fa-regular fa-circle-check" style={{ color: '#10b981', fontSize: '32px' }}></i>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-foreground mb-1">{t('modal.success')}</h3>
                <p className="text-sm text-muted-foreground">
                  {day} à {time} — Confirmation WhatsApp en cours...
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
                <i className="fa-solid fa-phone" style={{ fontSize: '16px' }}></i>
                Envoi WhatsApp en cours...
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('modal.name')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <i className="fa-regular fa-user" style={{ fontSize: '16px' }}></i>
                  </div>
                  <input
                    ref={nameRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('modal.namePlaceholder')}
                    className={`w-full bg-muted border rounded-2xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.name ? 'border-red-400' : 'border-border'}`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('modal.phone')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <i className="fa-solid fa-phone" style={{ fontSize: '16px' }}></i>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('modal.phonePlaceholder')}
                    className={`w-full bg-muted border rounded-2xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.phone ? 'border-red-400' : 'border-border'}`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Note */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('modal.note') || 'MOTE'} <span className="text-muted-foreground/50 text-[10px] ml-1">(Optionnel)</span>
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={t('modal.notePlaceholder') || 'Votre note ici...'}
                  rows={3}
                  className={`w-full bg-muted border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none ${errors.note ? 'border-red-400' : 'border-border'}`}
                />
                {errors.note && <p className="text-xs text-red-500">{errors.note}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full teal-gradient text-white font-bold rounded-2xl py-4 text-sm shadow-teal-md hover:shadow-teal-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-calendar-days" style={{ fontSize: '18px' }}></i>
                {t('modal.confirm')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}