import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from '../../db/entities/lesson.entity';
import { EntityId } from 'typeorm/repository/EntityId';
import { Topic } from '../../db/entities/topic.entity';

interface ILessonRepo {
  getByTopicId(topicId: EntityId): Promise<Lesson[]>;
}

@EntityRepository(Lesson)
export class LessonRepo extends Repository<Lesson> implements ILessonRepo {
  getByTopicId(topicId: EntityId): Promise<Lesson[]> {
    return this.createQueryBuilder()
      .where('topicId = :topicId', { topicId: topicId })
      .getMany();
  }

  getLessonWithTopic(id: EntityId): Promise<Lesson> {
    return this.createQueryBuilder('Lesson')
      .innerJoinAndMapOne('Lesson.topic', Topic, 'Topic', 'Topic.id = :id', {
        id: id,
      })
      .getOne();
  }
}
