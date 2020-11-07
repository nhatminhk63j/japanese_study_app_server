import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LoggerService } from '../loggers/logger.service';
import { LessonService } from './lesson.service';
import { LessonRepo } from './lesson.repo';

@Module({
  imports: [LoggerService],
  providers: [LessonService, LessonRepo],
  exports: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
