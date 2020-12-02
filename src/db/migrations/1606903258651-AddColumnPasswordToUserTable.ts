import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import MigrationUtil from '../../utils/migrationUtil';

export class AddColumnPasswordToUserTable1606903258651 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('users')
        const column = new TableColumn({
            name: 'password',
            type: 'varchar',
            length: '255'
        })
        await queryRunner.addColumn(table, column)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'password');
    }

}
