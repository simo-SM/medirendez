import React from 'react';
import { doctors } from '@/app/components/doctorsData';

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: String(doctor.id),
  }));
}

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
