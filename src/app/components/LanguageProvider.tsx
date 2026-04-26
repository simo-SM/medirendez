'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'fr' | 'ar';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.how': 'Comment ça marche',
    'nav.benefits': 'Avantages',
    'nav.contact': 'Contact',
    'nav.cta': 'Prendre RDV',
    'hero.badge': 'Plateforme médicale #1 au Maroc',
    'hero.title': 'Réservez votre consultation médicale en quelques clics',
    'hero.subtitle': 'Trouvez des médecins, pharmacies et professionnels de santé près de chez vous et choisissez le meilleur créneau disponible automatiquement.',
    'hero.cta': 'Prendre un rendez-vous',
    'hero.secondary': 'Voir comment ça marche',
    'hero.stat1': 'Médecins partenaires',
    'hero.stat2': 'Patients satisfaits',
    'hero.stat3': 'Villes couvertes',
    'booking.title': 'Trouvez votre professionnel de santé',
    'booking.service': 'Type de service',
    'booking.specialty': 'Spécialité',
    'booking.city': 'Ville',
    'booking.day': 'Jour préféré',
    'booking.search': 'Rechercher',
    'booking.doctor': 'Médecin',
    'booking.pharmacy': 'Pharmacie',
    'booking.dentist': 'Dentiste',
    'booking.clinic': 'Clinique',
    'calendar.title': 'Disponibilités de la semaine',
    'calendar.subtitle': 'Sélectionnez le créneau qui vous convient',
    'calendar.morning': 'Matin',
    'calendar.afternoon': 'Après-midi',
    'calendar.evening': 'Soir',
    'calendar.closed': 'Fermé',
    'calendar.booked': 'Réservé',
    'calendar.available': 'Disponible',
    'modal.title': 'Confirmer votre rendez-vous',
    'modal.name': 'Nom complet',
    'modal.phone': 'Numéro de téléphone',
    'modal.reason': 'Motif de consultation',
    'modal.confirm': 'Confirmer le rendez-vous',
    'modal.success': 'Votre rendez-vous a été réservé avec succès !',
    'modal.close': 'Fermer',
    'modal.namePlaceholder': 'Ex: Ahmed Benali',
    'modal.phonePlaceholder': '+212 6XX XXX XXX',
    'modal.reasonPlaceholder': 'Ex: Consultation générale, douleurs...',
    'doctors.title': 'Nos professionnels de santé',
    'doctors.subtitle': 'Médecins et pharmaciens vérifiés et disponibles',
    'doctors.available': 'Disponible aujourd\'hui',
    'doctors.view': 'Voir les disponibilités',
    'doctors.rating': 'Avis patients',
    'how.title': 'Comment ça marche ?',
    'how.subtitle': 'Réservez votre rendez-vous en 4 étapes simples',
    'how.step1.title': 'Choisissez votre service',
    'how.step1.desc': 'Médecin, pharmacie, dentiste ou clinique — sélectionnez le type de professionnel dont vous avez besoin.',
    'how.step2.title': 'Sélectionnez un créneau',
    'how.step2.desc': 'Consultez les disponibilités hebdomadaires et choisissez le jour et l\'heure qui vous conviennent.',
    'how.step3.title': 'Confirmez votre RDV',
    'how.step3.desc': 'Renseignez vos informations et le motif de consultation pour finaliser la réservation.',
    'how.step4.title': 'Recevez la confirmation',
    'how.step4.desc': 'Recevez une confirmation instantanée par WhatsApp avec tous les détails de votre rendez-vous.',
    'benefits.title': 'Pourquoi choisir MediRendez ?',
    'benefits.subtitle': 'Une expérience médicale simplifiée, de bout en bout',
    'benefits.1.title': 'Planning automatique',
    'benefits.1.desc': 'Créneaux mis à jour chaque semaine, sans intervention manuelle.',
    'benefits.2.title': 'Confirmation WhatsApp',
    'benefits.2.desc': 'Recevez instantanément votre confirmation sur WhatsApp.',
    'benefits.3.title': 'Choix du médecin',
    'benefits.3.desc': 'Consultez les profils, spécialités et avis avant de choisir.',
    'benefits.4.title': 'Filtre intelligent',
    'benefits.4.desc': 'Trouvez des disponibilités selon votre ville, spécialité et budget.',
    'benefits.5.title': 'Profil médical vérifié',
    'benefits.5.desc': 'Tous les professionnels sont vérifiés et certifiés.',
    'benefits.6.title': 'Mobile first',
    'benefits.6.desc': 'Interface optimisée pour mobile, réservez où que vous soyez.',
    'contact.title': 'Besoin d\'aide pour réserver ?',
    'contact.subtitle': 'Notre équipe est disponible 7j/7 pour vous accompagner dans votre démarche médicale.',
    'contact.whatsapp': 'Contacter sur WhatsApp',
    'contact.or': 'ou',
    'contact.email': 'Nous écrire par email',
    'footer.rights': '© 2026 MediRendez. Tous droits réservés.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.help': 'Aide',
    'footer.about': 'À propos',
    'days.monday': 'Lundi',
    'days.tuesday': 'Mardi',
    'days.wednesday': 'Mercredi',
    'days.thursday': 'Jeudi',
    'days.friday': 'Vendredi',
    'days.saturday': 'Samedi',
    'days.sunday': 'Dimanche',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.how': 'كيف يعمل',
    'nav.benefits': 'المزايا',
    'nav.contact': 'اتصل بنا',
    'nav.cta': 'حجز موعد',
    'hero.badge': 'منصة طبية #1 في المغرب',
    'hero.title': 'احجز موعدك الطبي في بضع نقرات',
    'hero.subtitle': 'ابحث عن الأطباء والصيدليات والمختصين الصحيين بالقرب منك واختر أفضل موعد متاح تلقائياً.',
    'hero.cta': 'احجز موعداً',
    'hero.secondary': 'كيف يعمل',
    'hero.stat1': 'طبيب شريك',
    'hero.stat2': 'مريض راضٍ',
    'hero.stat3': 'مدينة مغطاة',
    'booking.title': 'ابحث عن مختصك الصحي',
    'booking.service': 'نوع الخدمة',
    'booking.specialty': 'التخصص',
    'booking.city': 'المدينة',
    'booking.day': 'اليوم المفضل',
    'booking.search': 'بحث',
    'booking.doctor': 'طبيب',
    'booking.pharmacy': 'صيدلية',
    'booking.dentist': 'طبيب أسنان',
    'booking.clinic': 'عيادة',
    'calendar.title': 'المواعيد المتاحة هذا الأسبوع',
    'calendar.subtitle': 'اختر الموعد المناسب لك',
    'calendar.morning': 'صباحاً',
    'calendar.afternoon': 'ظهراً',
    'calendar.evening': 'مساءً',
    'calendar.closed': 'مغلق',
    'calendar.booked': 'محجوز',
    'calendar.available': 'متاح',
    'modal.title': 'تأكيد موعدك',
    'modal.name': 'الاسم الكامل',
    'modal.phone': 'رقم الهاتف',
    'modal.reason': 'سبب الزيارة',
    'modal.confirm': 'تأكيد الموعد',
    'modal.success': 'تم حجز موعدك بنجاح!',
    'modal.close': 'إغلاق',
    'modal.namePlaceholder': 'مثال: أحمد بنعلي',
    'modal.phonePlaceholder': '06XX XXX XXX',
    'modal.reasonPlaceholder': 'مثال: استشارة عامة، آلام...',
    'doctors.title': 'مختصونا الصحيون',
    'doctors.subtitle': 'أطباء وصيادلة موثقون ومتاحون',
    'doctors.available': 'متاح اليوم',
    'doctors.view': 'عرض المواعيد',
    'doctors.rating': 'آراء المرضى',
    'how.title': 'كيف يعمل؟',
    'how.subtitle': 'احجز موعدك في 4 خطوات بسيطة',
    'how.step1.title': 'اختر خدمتك',
    'how.step1.desc': 'طبيب، صيدلية، طبيب أسنان أو عيادة — اختر نوع المختص الذي تحتاجه.',
    'how.step2.title': 'اختر موعداً',
    'how.step2.desc': 'تصفح المواعيد الأسبوعية المتاحة واختر اليوم والوقت المناسبين لك.',
    'how.step3.title': 'أكد موعدك',
    'how.step3.desc': 'أدخل معلوماتك وسبب الزيارة لإتمام الحجز.',
    'how.step4.title': 'استقبل التأكيد',
    'how.step4.desc': 'استقبل تأكيداً فورياً عبر واتساب بجميع تفاصيل موعدك.',
    'benefits.title': 'لماذا تختار MediRendez؟',
    'benefits.subtitle': 'تجربة طبية مبسطة من البداية إلى النهاية',
    'benefits.1.title': 'جدولة تلقائية',
    'benefits.1.desc': 'مواعيد محدثة كل أسبوع دون تدخل يدوي.',
    'benefits.2.title': 'تأكيد واتساب',
    'benefits.2.desc': 'استقبل تأكيدك فوراً عبر واتساب.',
    'benefits.3.title': 'اختيار الطبيب',
    'benefits.3.desc': 'اطلع على الملفات والتخصصات والآراء قبل الاختيار.',
    'benefits.4.title': 'فلتر ذكي',
    'benefits.4.desc': 'ابحث عن المواعيد حسب مدينتك وتخصصك.',
    'benefits.5.title': 'ملف طبي موثق',
    'benefits.5.desc': 'جميع المختصين موثقون ومعتمدون.',
    'benefits.6.title': 'تجربة موبايل',
    'benefits.6.desc': 'واجهة محسّنة للموبايل، احجز أينما كنت.',
    'contact.title': 'تحتاج مساعدة للحجز؟',
    'contact.subtitle': 'فريقنا متاح 7 أيام في الأسبوع لمساعدتك.',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.or': 'أو',
    'contact.email': 'راسلنا بالبريد الإلكتروني',
    'footer.rights': '© 2026 MediRendez. جميع الحقوق محفوظة.',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
    'footer.help': 'المساعدة',
    'footer.about': 'من نحن',
    'days.monday': 'الإثنين',
    'days.tuesday': 'الثلاثاء',
    'days.wednesday': 'الأربعاء',
    'days.thursday': 'الخميس',
    'days.friday': 'الجمعة',
    'days.saturday': 'السبت',
    'days.sunday': 'الأحد',
  },
};

const LangContext = createContext<LangContextType>({
  lang: 'fr',
  toggleLang: () => {},
  t: (k) => k,
  dir: 'ltr',
});

export const useLang = () => useContext(LangContext);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'fr' ? 'ar' : 'fr';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', next);
        document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
      }
      return next;
    });
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang][key] || key;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, dir: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={lang === 'ar' ? 'rtl-text' : ''}>
        {children}
      </div>
    </LangContext.Provider>
  );
}