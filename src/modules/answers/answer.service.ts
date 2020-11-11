import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { AnswerEntity } from '../../db/entities/answer.entity';
import { AnswerRepo } from './answer.repo';
import { LoggerService } from '../loggers/logger.service';

@Injectable()
export class AnswerService extends BaseService<AnswerEntity, AnswerRepo> {
  constructor(repository: AnswerRepo, logger: LoggerService) {
    super(repository, logger);
  }
}
