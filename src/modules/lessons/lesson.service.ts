import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { Lesson } from '../../db/entities/lesson.entity';
import { LessonRepo } from './lesson.repo';
import { LoggerService } from '../loggers/logger.service';
import { EntityId } from 'typeorm/repository/EntityId';

interface ILessonService {
  getByTopicId(topicId: EntityId): Promise<Lesson[]>;
}

@Injectable()
export class LessonService extends BaseService<Lesson, LessonRepo>
  implements ILessonService {
  constructor(repository: LessonRepo, logger: LoggerService) {
    super(repository, logger);
  }

  getByTopicId(topicId: EntityId): Promise<Lesson[]> {
    return this.repository.getByTopicId(topicId);
  }

  async getCategoryId(id: EntityId): Promise<number> {
    const lesson = await this.repository.getLessonWithTopic(id);
    return (lesson as any).topic.categoryId;
  }
}
