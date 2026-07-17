import { HttpStatus } from "../constants/http-status";

/**
 * -------------------------------------------------------
 * Standard API Response Contract
 * -------------------------------------------------------
 */

/* ---------------------------------- */
/* Error Codes                        */
/* ---------------------------------- */

/**
 * Stable, machine-readable error codes.
 *
 * Clients should rely on these codes for
 * error handling, localization and analytics
 * instead of parsing free-form messages.
 */

export enum ErrorCode {
  VALIDATION_ERROR = "VALIDATION_ERROR",

  AUTH_REQUIRED = "AUTH_REQUIRED",

  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",

  FORBIDDEN = "FORBIDDEN",

  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",

  RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS",

  WORKFLOW_CONFLICT = "WORKFLOW_CONFLICT",

  CONFLICT = "CONFLICT",

  RATE_LIMITED = "RATE_LIMITED",

  EXTERNAL_SERVICE_ERROR = "EXTERNAL_SERVICE_ERROR",

  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",

  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

/* ---------------------------------- */
/* Success Response                   */
/* ---------------------------------- */

export interface ApiSuccess<T> {
  success: true;

  statusCode: HttpStatus;

  message: string;

  data: T;

  timestamp: string;
}

/* ---------------------------------- */
/* Failure Response                   */
/* ---------------------------------- */

export interface ApiFailure {
  success: false;

  statusCode: HttpStatus;

  /**
   * Stable machine-readable identifier.
   */
  code: ErrorCode;

  /**
   * Human-readable description.
   */
  message: string;

  /**
   * Optional diagnostic details.
   * Avoid exposing sensitive information
   * in production responses.
   */
  error?: unknown;

  timestamp: string;
}

/* ---------------------------------- */
/* API Response                       */
/* ---------------------------------- */

export type ApiResponse<T> =
  | ApiSuccess<T>
  | ApiFailure;

/* ---------------------------------- */
/* Factory                            */
/* ---------------------------------- */

export class ApiResult {
  static success<T>(
    data: T,
    message = "Success",
    statusCode = HttpStatus.OK
  ): ApiSuccess<T> {
    return {
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  static failure(
    code: ErrorCode,
    message: string,
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
    error?: unknown
  ): ApiFailure {
    return {
      success: false,
      statusCode,
      code,
      message,
      error,
      timestamp: new Date().toISOString(),
    };
  }
}