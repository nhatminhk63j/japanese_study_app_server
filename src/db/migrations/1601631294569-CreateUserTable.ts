import MigrationUtil from '../../utils/migrationUtil';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1601631294569 implements MigrationInterface {
  private static readonly table = new Table({
    name: 'users',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarcharColumn({ name: 'first_name' }),
      MigrationUtil.getVarcharColumn({ name: 'last_name' }),
      MigrationUtil.getVarcharColumn({ name: 'email', isUnique: true }),
      MigrationUtil.getVarcharColumn({ name: 'password' }),
      MigrationUtil.getVarcharColumn({ name: 'avatar_url' }),
      MigrationUtil.getBooleanColumn({ name: 'is_active' }),
      ...MigrationUtil.getCreatedAndUpdatedColumn(),
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(CreateUserTable1601631294569.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(CreateUserTable1601631294569.table);
  }
}
