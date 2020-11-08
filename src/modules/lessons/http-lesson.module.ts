import { Module } from '@nestjs/common';
import { LoggerService } from '../loggers/logger.service';
import { LessonModule } from './lesson.module';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';

@Module({
  imports: [LessonModule, LoggerService],
  providers: [LessonService],
  exports: [LessonService],
  controllers: [LessonController],
})
export class HttpLessonModule {}
