'use client';

import { useEffect } from 'react';
import { run, acceptedCategory } from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Push a Consent Mode v2 update to GTM's dataLayer. */
function updateGTMConsent(analyticsGranted: boolean, marketingGranted: boolean) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_storage: marketingGranted ? 'granted' : 'denied',
    ad_user_data: marketingGranted ? 'granted' : 'denied',
    ad_personalization: marketingGranted ? 'granted' : 'denied',
    // Functionality storage is always granted once the user has interacted
    // (required to store the consent cookie itself).
    functionality_storage: 'granted',
  });
}

export default function CookieConsent() {
  useEffect(() => {
    run({
      // Persist for 6 months; renews on every accepted/changed interaction.
      cookie: {
        name: 'cc_cookie',
        expiresAfterDays: 182,
        sameSite: 'Lax',
        secure: true,
      },

      // Fires whenever the user saves their preferences (first visit or change).
      onConsent() {
        updateGTMConsent(
          acceptedCategory('analytics'),
          acceptedCategory('marketing'),
        );
      },

      // Fires when the user updates an existing consent.
      onChange() {
        updateGTMConsent(
          acceptedCategory('analytics'),
          acceptedCategory('marketing'),
        );
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          // Automatically clear analytics cookies on opt-out.
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: '_gid' },
              { name: '_gat' },
              { name: /^ph_/ },
            ],
          },
        },
        marketing: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^_gcl/ },
              { name: /^_fbp/ },
              { name: /^_fbc/ },
            ],
          },
        },
      },

      language: {
        default: 'nl',
        translations: {
          nl: {
            consentModal: {
              title: 'Wij gebruiken cookies',
              description:
                'We gebruiken cookies om jouw ervaring te verbeteren, het gebruik van onze website te analyseren en gerichte advertenties te kunnen tonen. Kies hieronder welke cookies je wilt toestaan.',
              acceptAllBtn: 'Alles accepteren',
              acceptNecessaryBtn: 'Alleen noodzakelijk',
              showPreferencesBtn: 'Voorkeuren instellen',
              footer:
                '<a href="/privacy" target="_blank">Privacybeleid</a> · <a href="/cookies" target="_blank">Cookiebeleid</a>',
            },
            preferencesModal: {
              title: 'Cookievoorkeuren',
              acceptAllBtn: 'Alles accepteren',
              acceptNecessaryBtn: 'Alleen noodzakelijk',
              savePreferencesBtn: 'Voorkeuren opslaan',
              closeIconLabel: 'Sluiten',
              serviceCounterLabel: 'Dienst|Diensten',
              sections: [
                {
                  title: 'Jouw privacy',
                  description:
                    'Wij respecteren jouw privacy. Via onderstaande instellingen kies je zelf welke cookies je wilt toestaan. Noodzakelijke cookies zijn altijd actief omdat ze de website goed laten werken.',
                },
                {
                  title: 'Noodzakelijke cookies',
                  description:
                    'Deze cookies zijn vereist voor de basisfunctionaliteit van de website, zoals het onthouden van jouw cookie-instellingen. Ze kunnen niet worden uitgeschakeld.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytische cookies',
                  description:
                    'Met analytische cookies meten we hoe bezoekers onze website gebruiken. Dit helpt ons de website te verbeteren. De gegevens zijn geanonimiseerd waar mogelijk.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domein',
                      desc: 'Omschrijving',
                    },
                    body: [
                      {
                        name: '_ga, _ga_*',
                        domain: 'google.com',
                        desc: 'Google Analytics — meet paginabezoeken en sessieduur.',
                      },
                      {
                        name: 'ph_*',
                        domain: location.hostname,
                        desc: 'PostHog — product analytics voor gebruikersgedrag.',
                      },
                    ],
                  },
                },
                {
                  title: 'Marketing cookies',
                  description:
                    'Marketingcookies worden gebruikt om advertenties relevanter te maken voor jou. Ze volgen jouw bezoeken aan onze en andere websites.',
                  linkedCategory: 'marketing',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domein',
                      desc: 'Omschrijving',
                    },
                    body: [
                      {
                        name: '_gcl_*',
                        domain: 'google.com',
                        desc: 'Google Ads — conversietracking en remarketing.',
                      },
                      {
                        name: '_fbp, _fbc',
                        domain: 'facebook.com',
                        desc: 'Meta Pixel — advertentiedoelgroepen en conversietracking.',
                      },
                    ],
                  },
                },
                {
                  title: 'Meer informatie',
                  description:
                    'Heb je vragen over ons cookiebeleid? Neem gerust <a href="mailto:info@yyit.nl">contact</a> met ons op.',
                },
              ],
            },
          },
        },
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
