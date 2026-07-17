import "server-only";

import { z } from "zod";

/**
 * -------------------------------------------------------
 * Server Environment
 * -------------------------------------------------------
 *
 * This module may only be imported
 * from server-side code.
 */

const serverEnvSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "production",
    "test",
  ]),

  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),

  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),

  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),

  MONGODB_URI: z.string().url(),

  GOOGLE_CLIENT_ID: z.string().min(1),

  GOOGLE_CLIENT_SECRET: z.string().min(1),

  TELEGRAM_BOT_TOKEN: z.string().min(1),
});

export const serverEnv = serverEnvSchema.parse({
  NODE_ENV: process.env.NODE_ENV,

  NEXT_PUBLIC_SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL,

  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

  SUPABASE_SERVICE_ROLE_KEY:
    process.env.SUPABASE_SERVICE_ROLE_KEY,

  MONGODB_URI:
    process.env.MONGODB_URI,

  GOOGLE_CLIENT_ID:
    process.env.GOOGLE_CLIENT_ID,

  GOOGLE_CLIENT_SECRET:
    process.env.GOOGLE_CLIENT_SECRET,

  TELEGRAM_BOT_TOKEN:
    process.env.TELEGRAM_BOT_TOKEN,
});

export type ServerEnv = typeof serverEnv;