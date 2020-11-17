import { EntityRepository, Repository } from 'typeorm';
import { GrammarEntity } from '../../db/entities/grammar.entity';

@EntityRepository(GrammarEntity)
export class GrammarRepo extends Repository<GrammarEntity> {}
