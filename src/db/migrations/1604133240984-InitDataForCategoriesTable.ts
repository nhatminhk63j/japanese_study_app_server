import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDataForCategoriesTable1604133240984
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO categories (name) VALUES ("vocabulary"), ("listening"), ("reading"), ("grammar")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // do something ...
  }
}
