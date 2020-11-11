import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { ConventionEntity } from '../../db/entities/convention.entity';
import { ConventionRepo } from './convention.repo';
import { LoggerService } from '../loggers/logger.service';

@Injectable()
export class ConventionService extends BaseService<
  ConventionEntity,
  ConventionRepo
> {
  constructor(repository: ConventionRepo, logger: LoggerService) {
    super(repository, logger);
  }

  getConventionsByListeningId(listeningId: number) {
    return this.repository.getConventionsByListeningId(listeningId);
  }
}
