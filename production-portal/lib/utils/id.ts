import { randomUUID } from "crypto";

/**
 * -------------------------------------------------------
 * ID Utilities
 * -------------------------------------------------------
 */

export function generateUUID(): string {
  return randomUUID();
}

export function generatePrefixedId(
  prefix: string,
): string {
  const timestamp = Date.now().toString(36);

  const random = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `${prefix}-${timestamp}-${random}`;
}