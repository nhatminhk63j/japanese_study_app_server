import { Module } from '@nestjs/common';
import { ConventionModule } from './convention.module';
import { LoggerService } from '../loggers/logger.service';
import { ConventionService } from './convention.service';

@Module({
  imports: [ConventionModule, LoggerService],
  providers: [ConventionService],
  exports: [ConventionService],
})
export class HttpConventionModule {}
