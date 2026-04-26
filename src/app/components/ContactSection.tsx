'use client';

import React from 'react';
import { useLang } from './LanguageProvider';

export default function ContactSection() {
  const { t } = useLang();

  const whatsappUrl = 'https://wa.me/212600000000?text=Bonjour%20MediRendez%2C%20j%27ai%20besoin%20d%27aide%20pour%20r%C3%A9server%20un%20rendez-vous.';

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Dark atmospheric background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/15 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-5 mix-blend-soft-light pointer-events-none" style={{
        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
      }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text Content */}
          <div className="reveal-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Support 7j/7
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                {t('contact.title')}
              </h2>

              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <i className="fa-solid fa-bolt"></i>, title: 'Réponse immédiate', desc: 'Via WhatsApp ou email' },
                { icon: <i className="fa-solid fa-lock"></i>, title: 'Données protégées', desc: 'Conforme RGPD & loi 09-08' },
                { icon: <i className="fa-solid fa-earth-americas"></i>, title: 'Maroc entier', desc: '12 villes couvertes' },
                { icon: <i className="fa-solid fa-pills"></i>, title: 'Tous services', desc: 'Médecin, pharmacie, dentiste' },
              ]?.map((item) => (
                <div key={item?.title} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                  <span className="text-2xl">{item?.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{item?.title}</div>
                    <div className="text-white/60 text-xs">{item?.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof avatars */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100',
                ]?.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Patient satisfait ${i + 1}`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-secondary"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-secondary flex items-center justify-center text-white text-xs font-bold">
                  +45k
                </div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Patients satisfaits</div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5]?.map((s) => (
                    <i key={s} className="fa-solid fa-star" style={{ color: '#F59E0B', fontSize: '12px' }}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form + WhatsApp CTA */}
          <div className="reveal-right">
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* WhatsApp CTA Banner */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="fa-brands fa-whatsapp text-white" style={{ fontSize: '24px' }}></i>
                  </div>
                  <div>
                    <div className="font-extrabold text-lg">{t('contact.whatsapp')}</div>
                    <div className="text-white/80 text-sm">+212 600 000 000</div>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-emerald-600 font-bold py-3 rounded-2xl text-sm hover:bg-emerald-50 transition-colors shadow-sm"
                >
                  {t('contact.whatsapp')} →
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{t('contact.or')}</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Email Form */}
              <div className="px-6 pb-6">
                <h3 className="text-lg font-extrabold text-foreground mb-4">
                  {t('contact.email')}
                </h3>
                <form className="space-y-4" onSubmit={(e) => e?.preventDefault()}>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        {t('modal.name')}
                      </label>
                      <input
                        type="text"
                        placeholder="Ahmed Benali"
                        className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        {t('modal.phone')}
                      </label>
                      <input
                        type="tel"
                        placeholder="+212 6XX XXX XXX"
                        className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Votre message..."
                      className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full teal-gradient text-white font-bold rounded-2xl py-3.5 text-sm shadow-teal-md hover:shadow-teal-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-paper-plane" style={{ fontSize: '16px' }}></i>
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}