import { EntityRepository, Repository } from 'typeorm';
import { ConventionEntity } from '../../db/entities/convention.entity';

@EntityRepository(ConventionEntity)
export class ConventionRepo extends Repository<ConventionEntity> {
  getConventionsByListeningId(listeningId: number) {
    return this.find({ listeningId: listeningId });
  }
}
