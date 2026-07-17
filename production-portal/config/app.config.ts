/**
 * -------------------------------------------------------
 * Application Configuration
 * -------------------------------------------------------
 *
 * Central location for application-wide constants.
 *
 * This file must NEVER contain secrets.
 * Secrets belong inside env.ts.
 */

export const APP_CONFIG = {
  name: "Oberoi Creatives", //Production-Portal

  shortName: "Portal",

  version: "1.0.0",

  timezone: "Asia/Kolkata",

  locale: "en-IN",

  pagination: {
    defaultPage: 1,

    defaultLimit: 20,

    maxLimit: 100,
  },

  uploads: {
    maxFileSizeMB: 250,

    allowedImageTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ],

    allowedVideoTypes: [
      "video/mp4",
      "video/quicktime",
      "video/x-msvideo",
    ],

    allowedDocumentTypes: [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },

  attendance: {
    officeStartHour: 10,

    officeEndHour: 19,

    gracePeriodMinutes: 15,
  },

  cache: {
    defaultTTL: 300,
  },

  dashboard: {
    recentProjectsLimit: 8,

    recentNotificationsLimit: 10,
  },
} as const;

export type AppConfig = typeof APP_CONFIG;