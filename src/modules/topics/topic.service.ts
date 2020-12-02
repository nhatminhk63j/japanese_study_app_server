import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { Topic } from '../../db/entities/topic.entity';
import { TopicRepo } from './topic.repo';
import { LoggerService } from '../loggers/logger.service';
import { EntityId } from 'typeorm/repository/EntityId';
import { TopicDto } from '../../dto/topic.dto';

interface Service {
  getTopicByCategoryAndLevel(categoryId: EntityId, level: string): Promise<Topic[]>
}

@Injectable()
export class TopicService extends BaseService<Topic, TopicRepo> implements Service {
  constructor(repository: TopicRepo, logger: LoggerService) {
    super(repository, logger);
  }

  async getTopicByCategoryAndLevel(categoryId: EntityId, level: string): Promise<Topic[]> {
    return this.repository.getTopicByCategoryAndLevel(categoryId, level);
  }

  bulkCreate(topic: TopicDto[]) {
    return this.repository.bulkCreate(topic);
  }
}