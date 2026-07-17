/**
 * -------------------------------------------------------
 * Application Logger
 * -------------------------------------------------------
 *
 * The logger delegates log delivery to one or more
 * transports. This keeps application code independent
 * of the underlying logging destination.
 *
 * Current Transport:
 * - Console
 *
 * Future Transports:
 * - MongoDB
 * - Sentry
 * - OpenTelemetry
 * - Cloud Logging
 */

/* ---------------------------------- */
/* Log Level                          */
/* ---------------------------------- */

export enum LogLevel {
  INFO = "INFO",

  WARN = "WARN",

  ERROR = "ERROR",

  DEBUG = "DEBUG",
}

/* ---------------------------------- */
/* Log Context                        */
/* ---------------------------------- */

export interface LogContext {
  module?: string;

  userId?: string;

  requestId?: string;

  metadata?: Record<string, unknown>;
}

/* ---------------------------------- */
/* Log Entry                          */
/* ---------------------------------- */

export interface LogEntry {
  timestamp: string;

  level: LogLevel;

  message: string;

  context?: LogContext;
}

/* ---------------------------------- */
/* Logger Transport                   */
/* ---------------------------------- */

/**
 * Responsible for delivering log entries
 * to a specific destination.
 */

export interface LoggerTransport {
  log(entry: LogEntry): void | Promise<void>;
}

/* ---------------------------------- */
/* Console Transport                  */
/* ---------------------------------- */

export class ConsoleLoggerTransport
  implements LoggerTransport
{
  log(entry: LogEntry) {
    console.log(JSON.stringify(entry));
  }
}

/* ---------------------------------- */
/* Logger                             */
/* ---------------------------------- */

class Logger {
  constructor(
    private readonly transports: readonly LoggerTransport[]
  ) {}

  private dispatch(
    level: LogLevel,
    message: string,
    context?: LogContext
  ) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),

      level,

      message,

      context,
    };

    for (const transport of this.transports) {
      transport.log(entry);
    }
  }

  info(
    message: string,
    context?: LogContext
  ) {
    this.dispatch(
      LogLevel.INFO,
      message,
      context
    );
  }

  warn(
    message: string,
    context?: LogContext
  ) {
    this.dispatch(
      LogLevel.WARN,
      message,
      context
    );
  }

  error(
    message: string,
    context?: LogContext
  ) {
    this.dispatch(
      LogLevel.ERROR,
      message,
      context
    );
  }

  debug(
    message: string,
    context?: LogContext
  ) {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    this.dispatch(
      LogLevel.DEBUG,
      message,
      context
    );
  }
}

/* ---------------------------------- */
/* Default Logger                     */
/* ---------------------------------- */

export const logger = new Logger([
  new ConsoleLoggerTransport(),
]);