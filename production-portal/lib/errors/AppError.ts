/**
 * -------------------------------------------------------
 * Base Application Error
 * -------------------------------------------------------
 */

export class AppError extends Error {
  public readonly statusCode: number;

  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode = 500,
    isOperational = true
  ) {
    super(message);

    this.name = this.constructor.name;

    this.statusCode = statusCode;

    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * 400
 */
export class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(message, 400);
  }
}

/**
 * 401
 */
export class AuthenticationError extends AppError {
  constructor(message = "Authentication required") {
    super(message, 401);
  }
}

/**
 * 403
 */
export class AuthorizationError extends AppError {
  constructor(message = "Access denied") {
    super(message, 403);
  }
}

/**
 * 404
 */
export class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, 404);
  }
}

/**
 * 409
 */
export class ConflictError extends AppError {
  constructor(message = "Conflict detected") {
    super(message, 409);
  }
}

/**
 * 500
 */
export class DatabaseError extends AppError {
  constructor(message = "Database operation failed") {
    super(message, 500);
  }
}

/**
 * 502
 */
export class ExternalServiceError extends AppError {
  constructor(service: string) {
    super(`${service} service unavailable`, 502);
  }
}