/**
 * -------------------------------------------------------
 * Domain Events
 * -------------------------------------------------------
 *
 * Every major business action publishes one event.
 *
 * Analytics
 * Notifications
 * Logging
 * Calendar
 * Telegram
 * Gmail
 *
 * all subscribe to these events.
 */

export enum DomainEvent {
  USER_CREATED = "USER_CREATED",

  USER_UPDATED = "USER_UPDATED",

  CLIENT_CREATED = "CLIENT_CREATED",

  PROJECT_CREATED = "PROJECT_CREATED",

  PROJECT_UPDATED = "PROJECT_UPDATED",

  WORK_CREATED = "WORK_CREATED",

  WORK_ASSIGNED = "WORK_ASSIGNED",

  WORK_STARTED = "WORK_STARTED",

  WORK_COMPLETED = "WORK_COMPLETED",

  WORK_APPROVED = "WORK_APPROVED",

  WORK_CANCELLED = "WORK_CANCELLED",

  ATTENDANCE_MARKED = "ATTENDANCE_MARKED",

  LEAVE_REQUESTED = "LEAVE_REQUESTED",

  LEAVE_APPROVED = "LEAVE_APPROVED",

  PAYMENT_RECEIVED = "PAYMENT_RECEIVED",

  SALARY_GENERATED = "SALARY_GENERATED",

  DRIVE_FOLDER_CREATED = "DRIVE_FOLDER_CREATED",

  FILE_UPLOADED = "FILE_UPLOADED",

  NOTIFICATION_SENT = "NOTIFICATION_SENT",
}