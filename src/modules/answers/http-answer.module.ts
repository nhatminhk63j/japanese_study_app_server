import { Module } from '@nestjs/common';
import { AnswerModule } from './answer.module';
import { LoggerService } from '../loggers/logger.service';
import { AnswerService } from './answer.service';

@Module({
  imports: [AnswerModule, LoggerService],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class HttpAnswerModule {}
