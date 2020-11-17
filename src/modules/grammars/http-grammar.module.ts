import { Module } from '@nestjs/common';
import { LoggerService } from '../loggers/logger.service';
import { GrammarService } from './grammar.service';
import { GrammarController } from './grammar.controller';
import { GrammarModule } from './grammar.module';

@Module({
  imports: [LoggerService, GrammarService, GrammarModule],
  exports: [GrammarService],
  controllers: [GrammarController],
})
export class HttpGrammarModule {}
