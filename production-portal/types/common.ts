import { UserRole } from "@/config/roles.config";

/**
 * Base entity fields shared across relational tables.
 * Mirrors audit columns that will exist in PostgreSQL.
 */
export interface BaseEntity<TId = string> {
  id: TId;

  createdAt: Date;

  updatedAt: Date;

  createdBy?: string;

  updatedBy?: string;
}

export enum EntityStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ARCHIVED = "ARCHIVED",
  DELETED = "DELETED",
}

export interface AuditMetadata {
  ipAddress?: string;

  userAgent?: string;

  deviceId?: string;
}

export interface AuthenticatedUser {
  id: string;

  name: string;

  email: string;

  role: UserRole;
}

export interface PaginationOptions {
  page: number;

  limit: number;
}

export interface PaginationResult<T> {
  data: T[];

  page: number;

  limit: number;

  total: number;

  totalPages: number;
}