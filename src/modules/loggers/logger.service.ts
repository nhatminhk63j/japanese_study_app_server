import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  error(message: any, trace?: string, context?: string) {
    // TODO
    super.error(message, trace, context);
  }

  warn(message: any, context?: string) {
    // TODO
    super.warn(message, context);
  }

  log(message: any, context?: string) {
    // TODO
    super.log(message, context);
  }

  debug(message: any, context?: string) {
    // TODO
    super.debug(message, context);
  }

  verbose(message: any, context?: string) {
    // TODO
    super.verbose(message, context);
  }
}
