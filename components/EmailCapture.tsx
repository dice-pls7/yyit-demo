'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: koppel aan Mailchimp / ActiveCampaign / Brevo API
    setSubmitted(true);
  }

  return (
    <section className="relative py-16 bg-slate-950">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Benieuwd wat IT-beheer kost voor jouw bedrijf?
        </h2>
        <p className="text-slate-400 mb-8">
          We sturen je een persoonlijk voorstel — binnen 24 uur in je inbox.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-300 font-medium">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verstuurd! Je hoort van ons binnen 24 uur.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jouw@bedrijf.nl"
              className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/20 whitespace-nowrap"
            >
              Stuur mij een voorstel
            </button>
          </form>
        )}

        <p className="text-slate-600 text-xs mt-4">
          Geen spam. Alleen een helder kostenplaatje op maat.
        </p>
      </div>
    </section>
  );
}
