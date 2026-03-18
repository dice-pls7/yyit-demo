/**
 * Simple in-memory rate limiter using a sliding-window token bucket.
 * Each IP gets `limit` tokens per `interval` ms. When tokens are exhausted
 * the request is rejected with 429.
 *
 * NOTE: This is per-serverless-instance. For global rate limiting across
 * multiple Vercel instances, consider Upstash Redis (@upstash/ratelimit).
 */

type TokenEntry = {
  tokens: number;
  lastRefill: number;
};

type RateLimitOptions = {
  /** Maximum requests allowed per interval */
  limit: number;
  /** Time window in milliseconds */
  interval: number;
  /** Maximum unique IPs to track (prevents memory leak). Oldest entries are pruned when exceeded. */
  maxEntries?: number;
};

export function rateLimit({ limit, interval, maxEntries = 500 }: RateLimitOptions) {
  const store = new Map<string, TokenEntry>();

  function prune() {
    if (store.size <= maxEntries) return;
    const now = Date.now();
    for (const [key, entry] of store) {
      if (now - entry.lastRefill > interval) {
        store.delete(key);
      }
      if (store.size <= maxEntries * 0.75) break;
    }
  }

  function check(key: string): { success: boolean } {
    const now = Date.now();
    const entry = store.get(key);

    if (!entry) {
      prune();
      store.set(key, { tokens: limit - 1, lastRefill: now });
      return { success: true };
    }

    const elapsed = now - entry.lastRefill;
    const refill = Math.floor((elapsed / interval) * limit);

    if (refill > 0) {
      entry.tokens = Math.min(limit, entry.tokens + refill) - 1;
      entry.lastRefill = now;
      return { success: true };
    }

    if (entry.tokens > 0) {
      entry.tokens -= 1;
      return { success: true };
    }

    return { success: false };
  }

  return { check };
}
