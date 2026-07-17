/**
 * -------------------------------------------------------
 * Date & Time Constants
 * -------------------------------------------------------
 */

export const DATE_FORMATS = {
  DATE: "dd/MM/yyyy",

  DATE_TIME: "dd/MM/yyyy HH:mm",

  ISO: "yyyy-MM-dd",

  MONTH_YEAR: "MMM yyyy",
} as const;

export const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const BUSINESS_DAYS = [
  1,
  2,
  3,
  4,
  5,
  6,
] as const;