'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLang } from './LanguageProvider';
import BookingModal from './BookingModal';

interface Slot {
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
}

interface DaySchedule {
  key: string;
  dateStr: string;
  rawDate: string;
  slots: Slot[];
  closed: boolean;
}

const STORAGE_KEY = 'medirendez_booked_slots';

const periodColors = {
  morning: 'bg-amber-50 text-amber-700 border-amber-200',
  afternoon: 'bg-sky-50 text-sky-700 border-sky-200',
  evening: 'bg-violet-50 text-violet-700 border-violet-200',
};

const periodIcons: Record<string, React.ReactNode> = {
  morning: <i className="fa-solid fa-sun"></i>,
  afternoon: <i className="fa-solid fa-cloud-sun"></i>,
  evening: <i className="fa-solid fa-moon"></i>,
};

export default function WeeklyCalendar() {
  const { t, lang } = useLang();
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const weekSchedule = useMemo(() => {
    const schedule: DaySchedule[] = [];
    const today = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayOfWeek = d.getDay();
      const isSunday = dayOfWeek === 0;
      
      let slots: Slot[] = [];
      if (!isSunday) {
        if (dayOfWeek === 6) {
          slots = [
            { time: '10:30', period: 'morning' },
            { time: '12:30', period: 'morning' },
          ];
        } else {
          slots = [
            { time: '09:00', period: 'morning' },
            { time: '11:00', period: 'morning' },
            { time: '14:30', period: 'afternoon' },
            { time: '16:00', period: 'afternoon' },
            { time: '18:00', period: 'evening' },
          ];
        }
      }
      
      schedule.push({
        key: `days.${dayNames[dayOfWeek]}`,
        dateStr: d.toLocaleDateString(lang === 'ar' ? 'ar-MA' : 'fr-FR', { month: 'short', day: 'numeric' }),
        rawDate: d.toISOString().split('T')[0],
        closed: isSunday,
        slots,
      });
    }
    return schedule;
  }, [lang]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setBookedSlots(new Set(JSON.parse(stored)));
      }
    } catch {
      // ignore
    }
  }, []);

  const slotKey = (rawDate: string, time: string) => `${rawDate}-${time}`;

  const handleSlotClick = useCallback((day: DaySchedule, time: string) => {
    const key = slotKey(day.rawDate, time);
    if (bookedSlots.has(key)) return;
    setSelectedSlot({ day: `${t(day.key)} ${day.dateStr}`, time });
    setModalOpen(true);
  }, [bookedSlots, t]);

  const handleConfirm = useCallback(() => {
    if (!selectedSlot) return;
    const daySchedule = weekSchedule.find(d => `${t(d.key)} ${d.dateStr}` === selectedSlot.day);
    if (!daySchedule) return;
    
    const key = slotKey(daySchedule.rawDate, selectedSlot.time);
    setBookedSlots((prev) => {
      const next = new Set(prev);
      next.add(key);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
    setModalOpen(false);
    setSelectedSlot(null);
  }, [selectedSlot, weekSchedule, t]);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setSelectedSlot(null);
  }, []);

  return (
    <section id="calendar" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-calendar-days text-primary" style={{ fontSize: '14px' }}></i>
            {t('calendar.available')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {t('calendar.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('calendar.subtitle')}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 reveal stagger-1">
          {(['morning', 'afternoon', 'evening'] as const).map((period) => (
            <div key={period} className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${periodColors[period]}`}>
              <span>{periodIcons[period]}</span>
              {t(`calendar.${period}`)}
            </div>
          ))}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-slate-50 text-slate-400 border-slate-200 line-through">
            {t('calendar.booked')}
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 reveal stagger-2">
          {weekSchedule.map((day) => (
            <div
              key={day.rawDate}
              className={`bg-white rounded-3xl border shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 ${
                day.closed ? 'opacity-60' : 'hover:-translate-y-1'
              }`}
            >
              {/* Day Header */}
              <div className={`px-4 py-3 text-center ${day.closed ? 'bg-slate-50' : 'bg-gradient-to-r from-primary/8 to-accent/8'}`}>
                <div className={`text-sm font-extrabold uppercase tracking-wider ${day.closed ? 'text-muted-foreground' : 'text-primary'}`}>
                  {t(day.key)}
                </div>
                <div className={`text-xs mt-0.5 ${day.closed ? 'text-muted-foreground' : 'text-primary/70'}`}>
                  {day.dateStr}
                </div>
                {day.closed && (
                  <div className="text-xs text-muted-foreground font-medium mt-1">{t('calendar.closed')}</div>
                )}
                {!day.closed && (
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {day.slots.length} {lang_slots(day.slots.length)}
                  </div>
                )}
              </div>

              {/* Slots */}
              <div className="p-3 space-y-2">
                {day.closed ? (
                  <div className="flex items-center justify-center py-8">
                    <i className="fa-solid fa-lock text-slate-300" style={{ fontSize: '24px' }}></i>
                  </div>
                ) : (
                  day.slots.map((slot) => {
                    const key = slotKey(day.rawDate, slot.time);
                    const isBooked = bookedSlots.has(key);
                    return (
                      <button
                        key={slot.time}
                        onClick={() => handleSlotClick(day, slot.time)}
                        disabled={isBooked}
                        className={`slot-btn w-full px-3 py-2.5 rounded-2xl border text-xs font-bold transition-all duration-200 flex items-center justify-between ${
                          isBooked
                            ? 'booked bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed line-through'
                            : `${periodColors[slot.period]} hover:opacity-90 hover:shadow-sm cursor-pointer`
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{isBooked ? <i className="fa-solid fa-lock"></i> : periodIcons[slot.period]}</span>
                          {slot.time}
                        </span>
                        {!isBooked && (
                          <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {modalOpen && selectedSlot && (
        <BookingModal
          day={selectedSlot.day}
          time={selectedSlot.time}
          onConfirm={handleConfirm}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

function lang_slots(count: number) {
  return count === 1 ? 'créneau' : 'créneaux';
}