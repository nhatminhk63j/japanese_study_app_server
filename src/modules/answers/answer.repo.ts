import { EntityRepository, Repository } from 'typeorm';
import { AnswerEntity } from '../../db/entities/answer.entity';

@EntityRepository(AnswerEntity)
export class AnswerRepo extends Repository<AnswerEntity> {}
