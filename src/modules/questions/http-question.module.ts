import { Module } from '@nestjs/common';
import { QuestionModule } from './question.module';
import { LoggerService } from '../loggers/logger.service';
import { QuestionService } from './question.service';

@Module({
  imports: [QuestionModule, LoggerService],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class HttpQuestionModule {}
