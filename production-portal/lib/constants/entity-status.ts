/**
 * -------------------------------------------------------
 * Generic Entity Status
 * -------------------------------------------------------
 *
 * Shared lifecycle for all persistent entities.
 */

export enum EntityStatus {
  ACTIVE = "ACTIVE",

  INACTIVE = "INACTIVE",

  ARCHIVED = "ARCHIVED",

  DELETED = "DELETED",
}

export const ACTIVE_ENTITY_STATUSES = [
  EntityStatus.ACTIVE,
] as const;

export const VISIBLE_ENTITY_STATUSES = [
  EntityStatus.ACTIVE,
  EntityStatus.INACTIVE,
  EntityStatus.ARCHIVED,
] as const;