import * as path from 'path';

const baseDir = path.join(__dirname, '../');

const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;

const migrationPath = `${baseDir}${process.env.TYPEORM_MIGRATIONS}`;

export default {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  charset: 'utf8',
  port: Number.parseInt(process.env.MYSQL_PORT, 10),
  entities: [entitiesPath],
  migrations: [migrationPath],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  seeds: [`src/db/seeds/*.seed.ts`],
  cli: {
    migrationsDir: 'src/db/migrations',
    entitiesDir: 'src/db/entities',
  },
};