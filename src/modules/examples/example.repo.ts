import { EntityRepository, Repository } from 'typeorm';
import { ExampleEntity } from '../../db/entities/example.entity';

@EntityRepository(ExampleEntity)
export class ExampleRepo extends Repository<ExampleEntity> {
  deleteAllByRelationIdAndCategoryId(relationId: number, categoryId: number) {
    return this.createQueryBuilder()
      .delete()
      .where('relation_id = :relationId', { relationId: relationId })
      .andWhere('category_id = :categoryId', { categoryId: categoryId })
      .execute();
  }
}
