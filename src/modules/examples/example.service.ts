import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { ExampleEntity } from '../../db/entities/example.entity';
import { ExampleRepo } from './example.repo';
import { LoggerService } from '../loggers/logger.service';

@Injectable()
export class ExampleService extends BaseService<ExampleEntity, ExampleRepo> {
  constructor(repository: ExampleRepo, logger: LoggerService) {
    super(repository, logger);
  }

  deleteAllByRelationIdAndCategoryId(relationId: number, categoryId: number) {
    return this.repository.deleteAllByRelationIdAndCategoryId(
      relationId,
      categoryId,
    );
  }
}
