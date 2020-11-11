import { Module } from '@nestjs/common';
import { ListeningModule } from './listening.module';
import { LoggerService } from '../loggers/logger.service';
import { ListeningService } from './listening.service';
import { ListeningController } from './listening.controller';
import { HttpLessonModule } from '../lessons/http-lesson.module';
import { HttpConventionModule } from '../conventions/http-convention.module';
import { HttpQuestionModule } from '../questions/http-question.module';
import { HttpAnswerModule } from '../answers/http-answer.module';

@Module({
  imports: [
    ListeningModule,
    HttpLessonModule,
    HttpConventionModule,
    HttpQuestionModule,
    HttpAnswerModule,
    LoggerService,
  ],
  providers: [ListeningService],
  exports: [ListeningService],
  controllers: [ListeningController],
})
export class HttpListeningModule {}
