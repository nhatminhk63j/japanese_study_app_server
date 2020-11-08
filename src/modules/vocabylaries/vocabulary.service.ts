import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { Vocabulary } from '../../db/entities/vocabulary.entity';
import { VocabularyRepo } from './vocabulary.repo';
import { LoggerService } from '../loggers/logger.service';
import { EntityId } from 'typeorm/repository/EntityId';

@Injectable()
export class VocabularyService extends BaseService<Vocabulary, VocabularyRepo> {
  constructor(repository: VocabularyRepo, logger: LoggerService) {
    super(repository, logger);
  }

  async getByLessonId(lessonId: EntityId): Promise<Vocabulary[]> {
    return this.repository.getByLessonId(lessonId);
  }
}
