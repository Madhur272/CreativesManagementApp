/**
 * -------------------------------------------------------
 * Work Management Engine
 * -------------------------------------------------------
 *
 * A Work Item represents a single unit of work.
 *
 * Workflows are intentionally template-driven.
 *
 * The DEFAULT workflow defined here is only the initial
 * application template. Future workflow templates will
 * be stored in the database and assigned per work type
 * or project.
 */

/* ---------------------------------- */
/* Work Item Types                    */
/* ---------------------------------- */

export enum WorkItemType {
  VIDEO_SHOOT = "VIDEO_SHOOT",

  VIDEO_EDIT = "VIDEO_EDIT",

  GRAPHIC_DESIGN = "GRAPHIC_DESIGN",

  MOTION_GRAPHICS = "MOTION_GRAPHICS",

  PHOTO_EDIT = "PHOTO_EDIT",

  SCRIPT_WRITING = "SCRIPT_WRITING",

  COPYWRITING = "COPYWRITING",

  VOICE_OVER = "VOICE_OVER",

  CLIENT_REVIEW = "CLIENT_REVIEW",

  SOCIAL_MEDIA_POST = "SOCIAL_MEDIA_POST",

  ADS_CAMPAIGN = "ADS_CAMPAIGN",

  THUMBNAIL = "THUMBNAIL",

  FILE_UPLOAD = "FILE_UPLOAD",

  DELIVERY = "DELIVERY",
}

/* ---------------------------------- */
/* Priority                           */
/* ---------------------------------- */

export enum WorkPriority {
  LOW = "LOW",

  NORMAL = "NORMAL",

  HIGH = "HIGH",

  URGENT = "URGENT",

  CRITICAL = "CRITICAL",
}

/* ---------------------------------- */
/* Status                             */
/* ---------------------------------- */

export enum WorkStatus {
  DRAFT = "DRAFT",

  PENDING = "PENDING",

  READY = "READY",

  IN_PROGRESS = "IN_PROGRESS",

  BLOCKED = "BLOCKED",

  WAITING_CLIENT = "WAITING_CLIENT",

  REVIEW = "REVIEW",

  APPROVED = "APPROVED",

  COMPLETED = "COMPLETED",

  CANCELLED = "CANCELLED",
}

/* ---------------------------------- */
/* Workflow Templates                 */
/* ---------------------------------- */

/**
 * Represents a reusable workflow definition.
 *
 * In the current version templates are code-based.
 * In future versions they will be persisted in the
 * database and assigned dynamically.
 */

export interface WorkflowTemplate {
  /**
   * Unique identifier.
   */
  key: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Ordered workflow stages.
   */
  stages: readonly WorkStatus[];
}

/**
 * Default production workflow.
 */

export const DEFAULT_WORKFLOW_TEMPLATE: WorkflowTemplate = {
  key: "default",

  name: "Default Workflow",

  stages: [
    WorkStatus.PENDING,

    WorkStatus.READY,

    WorkStatus.IN_PROGRESS,

    WorkStatus.REVIEW,

    WorkStatus.APPROVED,

    WorkStatus.COMPLETED,
  ] as const,
};

/**
 * Registry of built-in workflow templates.
 *
 * This is a temporary in-code registry.
 * Eventually templates will come from the database.
 */

export const WORKFLOW_TEMPLATES = {
  DEFAULT: DEFAULT_WORKFLOW_TEMPLATE,
} as const;

/* ---------------------------------- */
/* Active Statuses                    */
/* ---------------------------------- */

/**
 * Statuses considered active when calculating
 * workloads, dashboards and utilization.
 */

export const ACTIVE_WORK_STATUSES = [
  WorkStatus.READY,

  WorkStatus.IN_PROGRESS,

  WorkStatus.REVIEW,

  WorkStatus.WAITING_CLIENT,

  WorkStatus.BLOCKED,
] as const;