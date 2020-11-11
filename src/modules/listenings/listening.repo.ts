import { EntityRepository, Repository } from 'typeorm';
import { ListeningEntity } from '../../db/entities/listening.entity';

@EntityRepository(ListeningEntity)
export class ListeningRepo extends Repository<ListeningEntity> {}
