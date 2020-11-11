import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { QuestionEntity } from '../../db/entities/question.entity';
import { QuestionRepo } from './question.repo';
import { LoggerService } from '../loggers/logger.service';

@Injectable()
export class QuestionService extends BaseService<QuestionEntity, QuestionRepo> {
  constructor(repository: QuestionRepo, logger: LoggerService) {
    super(repository, logger);
  }
}
