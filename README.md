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

## Analytics / Viewing Events (no Pro plan required)

Every time a visitor interacts with the pricing section, an event is logged via the `/api/track` route. These logs are visible for free on any Vercel plan.

**Where to look:**

1. Open your project on [vercel.com](https://vercel.com)
2. Click the **"Logs"** tab at the top of the project page
3. In the search bar type **`[ANALYTICS]`** to filter only analytics events

**What you'll see** (one line per event in the Messages column):

```
[ANALYTICS] checkout_form_opened | plan=Compleet price=49
[ANALYTICS] checkout_form_submitted | plan=Compleet price=49
[ANALYTICS] payment_link_opened | plan=Starter price=12.50
```

**Events tracked:**

| Event | When it fires |
|---|---|
| `checkout_form_opened` | Visitor clicks a pricing tier button |
| `checkout_form_submitted` | Visitor fills in name/email and clicks "Doorgaan naar betaling" |
| `payment_link_opened` | Payment link received — visitor is redirected to checkout |

> **Note:** These events also call `track()` from `@vercel/analytics`. Those calls are silently ignored on the free Hobby plan but will automatically appear in the Vercel Analytics → Events tab if you ever upgrade to Pro.
