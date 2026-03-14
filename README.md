This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Analytics (PostHog — free up to 1M events/month)

This project uses [PostHog](https://posthog.com) for product analytics — a proper dashboard with funnels, session recordings, A/B testing, and feature flags. **Free up to 1,000,000 events per month** — no credit card required.

### Setup (5 minutes)

1. Sign up at [app.posthog.com](https://app.posthog.com) (or [eu.posthog.com](https://eu.posthog.com) for EU data residency)
2. Create a new project → copy your **Project API Key** (starts with `phc_`)
3. Add the key to your Vercel project environment variables:
   - `NEXT_PUBLIC_POSTHOG_KEY` = `phc_your_key_here`
   - `NEXT_PUBLIC_POSTHOG_HOST` = `https://eu.i.posthog.com` (EU) or `https://us.i.posthog.com` (US)
4. Redeploy — events start flowing immediately

See `.env.example` for all required variables.

### Events tracked

| Event | When it fires | Properties |
|---|---|---|
| `checkout_form_opened` | Visitor clicks a pricing tier button | `plan`, `price` |
| `checkout_form_submitted` | Visitor submits name + email in the checkout modal | `plan`, `price` |
| `payment_link_opened` | Payment link received — visitor redirected to checkout | `plan`, `price` |

### What you get in PostHog

- **Events** — every event with properties, timestamps, user IDs, and geo data
- **Funnels** — see exactly where users drop off (e.g. opened form → submitted → paid)
- **A/B testing** — test different pricing layouts, copy, or offers; PostHog handles the statistics
- **Session recordings** — watch real user sessions to understand behaviour
- **Retention & cohorts** — track which plan users churn, which stick
- All of this scales to 1000s of users without any code changes
