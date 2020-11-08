import { EntityRepository, Repository } from 'typeorm';
import { Vocabulary } from '../../db/entities/vocabulary.entity';
import { EntityId } from 'typeorm/repository/EntityId';
import { ExampleEntity } from '../../db/entities/example.entity';
import { Lesson } from '../../db/entities/lesson.entity';
import { Topic } from '../../db/entities/topic.entity';

@EntityRepository(Vocabulary)
export class VocabularyRepo extends Repository<Vocabulary> {
  getByLessonId(lessonId: EntityId): Promise<Vocabulary[]> {
    return this.createQueryBuilder('V')
      .leftJoinAndMapMany(
        'V.examples',
        ExampleEntity,
        'Ex',
        'V.id = Ex.relation_id',
      )
      .leftJoin(Lesson, 'Ls', 'Ls.id = V.lesson_id')
      .leftJoin(Topic, 'Tp', 'Tp.id = Ls.topic_id')
      .where('V.lesson_id = :lessonId', { lessonId: lessonId })
      .andWhere('Ex.category_id = Tp.category_id')
      .printSql()
      .getMany();
  }
}
