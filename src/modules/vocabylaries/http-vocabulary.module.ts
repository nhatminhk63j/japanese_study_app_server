import { Module } from '@nestjs/common';
import { LoggerService } from '../loggers/logger.service';
import { VocabularyModule } from './vocabulary.module';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { VocabularyRepo } from './vocabulary.repo';

@Module({
  imports: [VocabularyModule, LoggerService],
  providers: [VocabularyService],
  exports: [VocabularyService],
  controllers: [VocabularyController],
})
export class HttpVocabularyModule {}
