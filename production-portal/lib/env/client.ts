import { z } from "zod";

/**
 * -------------------------------------------------------
 * Client Environment
 * -------------------------------------------------------
 *
 * Only variables prefixed with NEXT_PUBLIC_
 * are accessible in browser bundles.
 */

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),

  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL,

  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

export type ClientEnv = typeof clientEnv;