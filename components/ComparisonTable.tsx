'use client';

import { useState } from 'react';

function TooltipIcon({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex items-center ml-1.5 group">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          const timer = setTimeout(() => setOpen(false), 200);
          return () => clearTimeout(timer);
        }} // make the question mark be put on the left of the text, so it doesn't get cut off on mobile, by wrapping it in a span
        
        aria-label="Meer informatie"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
      <span
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 w-56 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 shadow-xl pointer-events-none transition-opacity duration-150 opacity-0 group-hover:opacity-100${open ? ' !opacity-100' : ''}`}
      >
        {text}
      </span>
    </span>
  );
}

type Feature = {
  name: string;
  tooltip?: string;
  starter: boolean | string;
  compleet: boolean | string;
  premium: boolean | string;
};

export default function ComparisonTable() {
  const features: Feature[] = [
    { name: 'Monitoring', starter: true, compleet: true, premium: true },
    { name: 'AI Antivirus (EDR)', starter: true, compleet: true, premium: true },
    { name: 'Patchbeheer', starter: true, compleet: true, premium: true },
    { name: 'Patches worden door ons geïnstalleerd', starter: false, compleet: true, premium: true },
    { name: '24/7 monitoring', tooltip: 'We bewaken je systemen op verdachte activiteiten en potentiële bedreigingen.', starter: false, compleet: true, premium: true },
    { name: 'Proactieve probleemoplossing', tooltip: 'We lossen problemen op voordat jij ze merkt, zodat jij ongestoord kunt werken.', starter: false, compleet: false, premium: true },
    { name: 'Vaste accountmanager', tooltip: 'Een toegewijde contactpersoon die je helpt met al je vragen en behoeften.', starter: false, compleet: false, premium: true },
    {
      name: 'IT-support',
      tooltip: 'De maximale tijd waarbinnen je een reactie ontvangt op je IT-vraag of melding.',
      starter: '< 48 uur',
      compleet: '< 24 uur',
      premium: 'Altijd bereikbaar',
    },
    {
      name: 'Back-up opslag',
      tooltip: 'Hoeveelheid opslagruimte voor automatische back-ups van je bestanden en systemen.',
      starter: '100GB', //hoeveel moet hier komen? 
      compleet: '2TB',
      premium: '2TB',
    },
    {
      name: 'Ondersteuning op locatie',
      tooltip: 'Een van onze technici komt bij jou op kantoor langs als het probleem dat vereist.',
      starter: false,
      compleet: false,
      premium: true,
    },
    {
      name: 'Maandelijks rapport',
      tooltip: 'Een overzicht van de beveiligingsstatus, uitgevoerde updates en eventuele incidenten van de afgelopen maand.',
      starter: false,
      compleet: true,
      premium: true,
    },
    {name: 'Compliance checks', 
     tooltip: 'We controleren of je IT-omgeving voldoet aan relevante wet- en regelgeving, zoals AVG.', 
     starter: false, 
     compleet: false, 
     premium: true},
    {
      name: 'Cybersecurity verzekering',
      tooltip: 'Een verzekering die je beschermt tegen financiële verliezen als gevolg van cyberaanvallen en datalekken.',
      starter: false,
      compleet: false,
      premium: true,
    },
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <svg className="w-6 h-6 text-cyan-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    }
    if (value === false) {
      return (
        <svg className="w-6 h-6 text-slate-700 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      );
    }
    return <span className="text-cyan-400 text-sm font-medium">{value}</span>;
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Vergelijk alle{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              functies
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Bekijk in detail wat elk pakket te bieden heeft
          </p>
        </div>

        {/* Table Container: overflow-x-auto alleen op mobiel */}
        <div className="overflow-x-auto md:overflow-x-visible scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-slate-800/50">
          <div className="min-w-[640px]">
            {/* Table — overflow-visible so tooltips can escape the container */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-slate-800/50 border-b border-slate-700 rounded-t-2xl">
                <div className="text-slate-400 font-semibold text-sm">Functie</div>
                <div className="text-center">
                  <div className="text-white font-bold">Starter</div>
                  <div className="text-cyan-400 text-sm mt-1">€12,45/mnd</div>
                </div>
                <div className="text-center relative">
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-semibold text-white whitespace-nowrap">
                    Meestgekozen
                  </div>
                  <div className="text-white font-bold">Compleet</div>
                  <div className="text-cyan-400 text-sm mt-1">€37,45/mnd</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold">Premium</div>
                  <div className="text-cyan-400 text-sm mt-1">€94,95/mnd</div>
                </div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-4 gap-4 p-6 items-center transition-colors hover:bg-slate-800/30 ${
                    index === features.length - 1 ? 'rounded-b-2xl' : 'border-b border-slate-800/50'
                  }`}
                >
                  <div className="text-slate-300 text-sm font-medium flex items-center">
                    {feature.name}
                    {feature.tooltip && <TooltipIcon text={feature.tooltip} />}
                  </div>
                  <div className="flex justify-center">{renderCell(feature.starter)}</div>
                  <div className="flex justify-center bg-cyan-500/5 -my-6 py-6">
                    {renderCell(feature.compleet)}
                  </div>
                  <div className="flex justify-center">{renderCell(feature.premium)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-6 text-slate-500 text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Scroll horizontaal om alle pakketten te zien</span>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Nog vragen over welk pakket bij jou past?</p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
          >
            Plan een gratis adviesgesprek
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
