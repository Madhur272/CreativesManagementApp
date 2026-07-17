/**
 * -------------------------------------------------------
 * Organization Structure
 * -------------------------------------------------------
 *
 * Departments represent where work belongs.
 *
 * Roles represent who performs the work.
 *
 * Every authenticated user belongs to exactly one role,
 * while projects, work items, reports and workflows can
 * belong to a department.
 */

/* ---------------------------------- */
/* Departments                        */
/* ---------------------------------- */

export enum Department {
  OPERATIONS = "OPERATIONS",

  PRODUCTION = "PRODUCTION",

  DESIGN = "DESIGN",

  MARKETING = "MARKETING",

  ADS = "ADS",

  FINANCE = "FINANCE",
}

/**
 * Human-readable department names.
 */

export const DEPARTMENT_LABELS: Record<Department, string> = {
  [Department.OPERATIONS]: "Operations",

  [Department.PRODUCTION]: "Production",

  [Department.DESIGN]: "Design",

  [Department.MARKETING]: "Marketing",

  [Department.ADS]: "Ads",

  [Department.FINANCE]: "Finance",
};

/* ---------------------------------- */
/* User Roles                         */
/* ---------------------------------- */

export enum UserRole {
  ADMIN = "ADMIN",

  BUSINESS_ANALYST = "BUSINESS_ANALYST",

  SOCIAL_MEDIA_ANALYST = "SOCIAL_MEDIA_ANALYST",

  CAMERAMAN = "CAMERAMAN",

  VIDEO_EDITOR = "VIDEO_EDITOR",

  GRAPHIC_DESIGNER = "GRAPHIC_DESIGNER",

  ADS_ANALYST = "ADS_ANALYST",

  LIGHTMAN = "LIGHTMAN",
}

/**
 * Used by dropdowns and UI labels.
 */

export const ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.ADMIN]: "Administrator",

  [UserRole.BUSINESS_ANALYST]: "Business Analyst",

  [UserRole.SOCIAL_MEDIA_ANALYST]: "Social Media Analyst",

  [UserRole.CAMERAMAN]: "Cameraman",

  [UserRole.VIDEO_EDITOR]: "Video Editor",

  [UserRole.GRAPHIC_DESIGNER]: "Graphic Designer",

  [UserRole.ADS_ANALYST]: "Ads Analyst",

  [UserRole.LIGHTMAN]: "Lightman",
};

/* ---------------------------------- */
/* Role → Department Mapping          */
/* ---------------------------------- */

/**
 * Defines the primary department for each role.
 * This allows reporting, routing and workload
 * calculations without hardcoding logic elsewhere.
 */

export const ROLE_DEPARTMENT: Record<UserRole, Department> = {
  [UserRole.ADMIN]: Department.OPERATIONS,

  [UserRole.BUSINESS_ANALYST]: Department.OPERATIONS,

  [UserRole.SOCIAL_MEDIA_ANALYST]: Department.MARKETING,

  [UserRole.CAMERAMAN]: Department.PRODUCTION,

  [UserRole.VIDEO_EDITOR]: Department.PRODUCTION,

  [UserRole.GRAPHIC_DESIGNER]: Department.DESIGN,

  [UserRole.ADS_ANALYST]: Department.ADS,

  [UserRole.LIGHTMAN]: Department.PRODUCTION,
};

/* ---------------------------------- */
/* System Access                      */
/* ---------------------------------- */

export const SYSTEM_ADMIN_ROLES: readonly UserRole[] = [
  UserRole.ADMIN,
] as const;

/* ---------------------------------- */
/* Project Permissions                */
/* ---------------------------------- */

export const PROJECT_CREATOR_ROLES: readonly UserRole[] = [
  UserRole.ADMIN,

  UserRole.BUSINESS_ANALYST,
] as const;