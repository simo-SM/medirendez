import { doctors } from '@/app/components/doctorsData';
import DoctorProfileClient from './DoctorProfileClient';

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: String(doctor.id),
  }));
}

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <DoctorProfileClient id={params.id} />;
}
