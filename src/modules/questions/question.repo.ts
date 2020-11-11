import { EntityRepository, Repository } from 'typeorm';
import { QuestionEntity } from '../../db/entities/question.entity';

@EntityRepository(QuestionEntity)
export class QuestionRepo extends Repository<QuestionEntity> {}
