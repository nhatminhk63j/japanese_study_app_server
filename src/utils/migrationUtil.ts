import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

class MigrationUtil {
  public static getIDColumn(): TableColumnOptions {
    return {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isNullable: false,
      isGenerated: true,
      generationStrategy: 'increment',
    };
  }

  public static getVarcharColumn({
    name,
    length = '255',
    isPrimary = false,
    isNullable = false,
    isUnique = false,
    defaultValue = null,
  }): TableColumnOptions {
    return {
      name,
      length,
      isPrimary,
      isNullable,
      isUnique,
      default: `'${defaultValue}'`,
      type: 'varchar',
    };
  }

  public static getBooleanColumn({
    name,
    defaultValue = true,
  }): TableColumnOptions {
    return {
      name,
      type: 'boolean',
      default: defaultValue,
    };
  }

  public static getEnumColumn({
    name,
    enumList,
    enumName,
    defaultValue,
    isNullable = false,
  }): TableColumnOptions {
    return {
      name,
      type: 'enum',
      enum: enumList,
      enumName: enumName,
      default: `'${defaultValue}'`,
      isNullable: isNullable,
    };
  }

  public static getCreatedAndUpdatedColumn(): TableColumnOptions[] {
    return [
      {
        name: 'created_at',
        type: 'datetime',
        default: `now()`,
        isNullable: true,
      },
      {
        name: 'updated_at',
        type: 'datetime',
        default: `now()`,
        isNullable: true,
      },
    ];
  }
}

export default MigrationUtil;
