import { Module } from '@nestjs/common';
import { LoggerService } from '../loggers/logger.service';
import { VocabularyModule } from './vocabulary.module';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { HttpExampleModule } from '../examples/http-example.module';
import { HttpLessonModule } from '../lessons/http-lesson.module';

@Module({
  imports: [
    VocabularyModule,
    HttpExampleModule,
    HttpLessonModule,
    LoggerService,
  ],
  providers: [VocabularyService],
  exports: [VocabularyService],
  controllers: [VocabularyController],
})
export class HttpVocabularyModule {}
