import { EntityRepository, Repository } from 'typeorm';
import { ListeningEntity } from '../../db/entities/listening.entity';
import { ConventionEntity } from '../../db/entities/convention.entity';
import { Lesson } from '../../db/entities/lesson.entity';
import { QuestionEntity } from '../../db/entities/question.entity';
import { Topic } from '../../db/entities/topic.entity';
import { AnswerEntity } from '../../db/entities/answer.entity';

@EntityRepository(ListeningEntity)
export class ListeningRepo extends Repository<ListeningEntity> {
  async getListeningsByLessonId(lessonId: number): Promise<ListeningEntity[]> {
    return this.createQueryBuilder('Listen')
      .innerJoinAndMapMany(
        'Listen.conventions',
        ConventionEntity,
        'Convention',
        'Convention.listening_id = Listen.id',
      )
      .leftJoin(Lesson, 'Lesson', 'Lesson.id = Listen.lesson_id')
      .leftJoin(Topic, 'Topic', 'Topic.id = Lesson.topic_id')
      .leftJoinAndMapMany(
        'Listen.questions',
        QuestionEntity,
        'Question',
        'Question.relation_id = Listen.id AND Question.category_id = Topic.category_id',
      )
      .leftJoinAndMapMany(
        'Question.answers',
        AnswerEntity,
        'Answer',
        'Answer.question_id = Question.id',
      )
      .where('Listen.lesson_id = :lessonId', { lessonId: lessonId })
      .getMany();
  }
}
