import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import BookingWidget from '@/app/components/BookingWidget';
import WeeklyCalendar from '@/app/components/WeeklyCalendar';
import DoctorProfiles from '@/app/components/DoctorProfiles';
import HowItWorks from '@/app/components/HowItWorks';
import BenefitsSection from '@/app/components/BenefitsSection';
import ContactSection from '@/app/components/ContactSection';
import ScrollReveal from '@/app/components/ScrollReveal';
import LanguageProvider from '@/app/components/LanguageProvider';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <BookingWidget />
          <WeeklyCalendar />
          <DoctorProfiles />
          <HowItWorks />
          <BenefitsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollReveal />
      </div>
    </LanguageProvider>
  );
}