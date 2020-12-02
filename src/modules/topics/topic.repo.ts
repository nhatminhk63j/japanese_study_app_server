import { EntityRepository, Repository } from 'typeorm';
import { Topic } from '../../db/entities/topic.entity';
import { EntityId } from 'typeorm/repository/EntityId';
import { TopicDto } from '../../dto/topic.dto';

@EntityRepository(Topic)
export class TopicRepo extends Repository<Topic> {
  getTopicByCategoryAndLevel(categoryId: EntityId, level: string) {
    return this.find({
      select: ['description', 'title'],
      where: {
        categoryId: categoryId,
        level: level
      }
    })
  }

  bulkCreate(topic: TopicDto[]) {
    return this.createQueryBuilder().insert().values(topic).execute()
  }
}