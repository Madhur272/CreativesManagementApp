import { UserRole } from "./roles.config";

/**
 * -------------------------------------------------------
 * Permission Definitions
 * -------------------------------------------------------
 *
 * Every permission represents a business capability.
 * Roles are mapped to permissions through RBAC.
 */

export enum Permission {
  // Dashboard
  VIEW_DASHBOARD = "VIEW_DASHBOARD",

  // Users
  VIEW_USERS = "VIEW_USERS",
  CREATE_USER = "CREATE_USER",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",

  // Clients
  VIEW_CLIENTS = "VIEW_CLIENTS",
  CREATE_CLIENT = "CREATE_CLIENT",
  UPDATE_CLIENT = "UPDATE_CLIENT",

  // Projects
  VIEW_PROJECTS = "VIEW_PROJECTS",
  CREATE_PROJECT = "CREATE_PROJECT",
  UPDATE_PROJECT = "UPDATE_PROJECT",
  DELETE_PROJECT = "DELETE_PROJECT",

  // Work Engine
  VIEW_WORK = "VIEW_WORK",
  CREATE_WORK = "CREATE_WORK",
  ASSIGN_WORK = "ASSIGN_WORK",
  UPDATE_WORK = "UPDATE_WORK",
  COMPLETE_WORK = "COMPLETE_WORK",

  // Finance
  VIEW_FINANCE = "VIEW_FINANCE",
  MANAGE_FINANCE = "MANAGE_FINANCE",

  // Settings
  MANAGE_SETTINGS = "MANAGE_SETTINGS",
}

export const ROLE_PERMISSIONS: Record<UserRole, readonly Permission[]> = {
  [UserRole.ADMIN]: Object.values(Permission),

  [UserRole.BUSINESS_ANALYST]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_CLIENTS,
    Permission.CREATE_CLIENT,
    Permission.UPDATE_CLIENT,
    Permission.VIEW_PROJECTS,
    Permission.CREATE_PROJECT,
    Permission.UPDATE_PROJECT,
    Permission.VIEW_WORK,
    Permission.CREATE_WORK,
    Permission.ASSIGN_WORK,
    Permission.UPDATE_WORK,
  ],

  [UserRole.SOCIAL_MEDIA_ANALYST]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PROJECTS,
    Permission.VIEW_WORK,
    Permission.UPDATE_WORK,
  ],

  [UserRole.CAMERAMAN]: [
    Permission.VIEW_PROJECTS,
    Permission.VIEW_WORK,
    Permission.UPDATE_WORK,
  ],

  [UserRole.VIDEO_EDITOR]: [
    Permission.VIEW_PROJECTS,
    Permission.VIEW_WORK,
    Permission.UPDATE_WORK,
    Permission.COMPLETE_WORK,
  ],

  [UserRole.GRAPHIC_DESIGNER]: [
    Permission.VIEW_PROJECTS,
    Permission.VIEW_WORK,
    Permission.UPDATE_WORK,
    Permission.COMPLETE_WORK,
  ],

  [UserRole.ADS_ANALYST]: [
    Permission.VIEW_PROJECTS,
    Permission.VIEW_WORK,
    Permission.UPDATE_WORK,
  ],

  [UserRole.LIGHTMAN]: [
    Permission.VIEW_PROJECTS,
    Permission.VIEW_WORK,
  ],
} as const;