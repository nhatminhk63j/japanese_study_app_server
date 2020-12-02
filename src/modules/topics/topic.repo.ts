import { EntityRepository, Repository } from 'typeorm';
import { Topic } from '../../db/entities/topic.entity';
import { EntityId } from 'typeorm/repository/EntityId';

@EntityRepository(Topic)
export class TopicRepo extends Repository<Topic> {
  getTopicByCategoryAndLevel(categoryId: EntityId, level: string) {
    return this.find({
      where: {
        categoryId: categoryId,
        level: level
      }
    })
  }
}