import { Module } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { LoggerService } from '../loggers/logger.service';

@Module({
  imports: [LoggerService],
  providers: [VocabularyService],
  exports: [VocabularyService],
  controllers: [VocabularyController],
})
export class VocabularyModule {}
