'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  useEffect(() => {
    if (!key) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[PostHog] NEXT_PUBLIC_POSTHOG_KEY is not set — analytics disabled.');
      }
      return;
    }

    if (!posthog.__loaded) {
      console.log('[PostHog] Initializing with key:', key?.slice(0, 10) + '...');
      posthog.init(key, {
        api_host: '/ingest',
        ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
        persistence: 'localStorage',
      });
      console.log('[PostHog] Initialized successfully');
    } else {
      console.log('[PostHog] Already loaded');
    }
  }, [key]);

  if (!key) return <>{children}</>;

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
