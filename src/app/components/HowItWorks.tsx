'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from './LanguageProvider';

const steps = [
{
  number: '01',
  titleKey: 'how.step1.title',
  descKey: 'how.step1.desc',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bda85623-1764672103383.png",
  imageAlt: 'Patient browsing medical services on smartphone, bright clean desk, soft daylight through window',
  icon:
  <i className="fa-solid fa-user-doctor text-[24px]"></i>

},
{
  number: '02',
  titleKey: 'how.step2.title',
  descKey: 'how.step2.desc',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b86f343-1772217101061.png",
  imageAlt: 'Calendar on tablet showing weekly schedule, clean minimal workspace, warm ambient light',
  icon:
  <i className="fa-solid fa-calendar-days text-[24px]"></i>

},
{
  number: '03',
  titleKey: 'how.step3.title',
  descKey: 'how.step3.desc',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14938a905-1768431928280.png",
  imageAlt: 'Person filling out digital form on phone, hands close up, white desk background',
  icon:
  <i className="fa-regular fa-circle-check text-[24px]"></i>

},
{
  number: '04',
  titleKey: 'how.step4.title',
  descKey: 'how.step4.desc',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e185737-1768293799541.png",
  imageAlt: 'WhatsApp confirmation message on phone screen, green notification, bright minimal background',
  icon:
  <i className="fa-solid fa-phone text-[24px]"></i>

}];


export default function HowItWorks() {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-bolt" style={{ fontSize: '14px' }}></i>
            {t('how.subtitle')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {t('how.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Sticky Image */}
          <div className="lg:sticky lg:top-32 order-2 lg:order-1 reveal-left">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(6,129,142,0.15)] border border-white">
              {/* Image with Ken Burns */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <AppImage
                  src={steps?.[activeStep]?.image}
                  alt={steps?.[activeStep]?.imageAlt}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover animate-ken-burns" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </div>

              {/* Step overlay card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl teal-gradient flex items-center justify-center text-white">
                    {steps?.[activeStep]?.icon}
                  </div>
                  <div>
                    <div className="text-xs text-primary font-bold uppercase tracking-wider">
                      Étape {steps?.[activeStep]?.number}
                    </div>
                    <div className="text-sm font-bold text-foreground">{t(steps?.[activeStep]?.titleKey)}</div>
                  </div>
                </div>
              </div>

              {/* Step indicator dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                {steps?.map((_, i) =>
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`rounded-full transition-all duration-300 ${
                  i === activeStep ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`
                  }
                  aria-label={`Step ${i + 1}`} />

                )}
              </div>
            </div>

            {/* Decorative border frame */}
            <div className="-z-10 -left-4 w-full h-full border-primary/10 border rounded-3xl absolute top-4" />
          </div>

          {/* Right: Steps Timeline */}
          <div className="order-1 lg:order-2 relative reveal-right">
            {/* Connector line */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {steps?.map((step, index) =>
              <div
                key={step?.number}
                className={`flex gap-6 cursor-pointer group transition-all duration-300 ${
                activeStep === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`
                }
                onClick={() => setActiveStep(index)}>

                  {/* Step Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    activeStep === index ?
                    'teal-gradient text-white shadow-teal-md scale-110' :
                    'bg-white border-2 border-border text-muted-foreground group-hover:border-primary group-hover:text-primary'}`
                    }>

                      {step?.icon}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary font-mono tracking-widest opacity-70">{step?.number}</span>
                      <h3 className={`text-lg font-bold transition-colors ${activeStep === index ? 'text-foreground' : 'text-foreground/70'}`}>
                        {t(step?.titleKey)}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(step?.descKey)}
                    </p>

                    {activeStep === index &&
                  <div className="mt-3 flex items-center gap-1.5 text-primary text-xs font-bold">
                        <i className="fa-regular fa-circle-check" style={{ fontSize: '14px' }}></i>
                        Étape active
                      </div>
                  }
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}