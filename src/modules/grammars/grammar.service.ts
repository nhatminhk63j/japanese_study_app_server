import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { GrammarEntity } from '../../db/entities/grammar.entity';
import { GrammarRepo } from './grammar.repo';
import { LoggerService } from '../loggers/logger.service';

@Injectable()
export class GrammarService extends BaseService<GrammarEntity, GrammarRepo> {
  constructor(repository: GrammarRepo, logger: LoggerService) {
    super(repository, logger);
  }
}
