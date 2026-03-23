'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { acceptedCategory } from 'vanilla-cookieconsent';

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  useEffect(() => {
    if (!key) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[PostHog] NEXT_PUBLIC_POSTHOG_KEY is not set — analytics disabled.');
      }
      return;
    }

    function initPostHog() {
      if (posthog.__loaded) return;
      posthog.init(key!, {
        api_host: '/ingest',
        ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
        persistence: 'localStorage',
      });
    }

    // Returning visitor who already granted analytics consent → init immediately.
    if (acceptedCategory('analytics')) {
      initPostHog();
    }

    // Listen for first-time consent and any subsequent changes.
    function handleConsent() {
      if (acceptedCategory('analytics')) {
        initPostHog();
      } else {
        // User explicitly denied analytics — stop capturing.
        if (posthog.__loaded) {
          posthog.opt_out_capturing();
        }
      }
    }

    document.addEventListener('cc:onConsent', handleConsent);
    document.addEventListener('cc:onChange', handleConsent);

    return () => {
      document.removeEventListener('cc:onConsent', handleConsent);
      document.removeEventListener('cc:onChange', handleConsent);
    };
  }, [key]);

  if (!key) return <>{children}</>;

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
